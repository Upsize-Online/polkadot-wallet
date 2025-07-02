'use client';

import { useState, useEffect } from 'react';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Wallet, Check, AlertCircle, CheckCircle } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const POLKADOT_ENDPOINTS = [
  'wss://rpc.polkadot.io',
  'wss://polkadot.api.onfinality.io/public-ws',
  'wss://1rpc.io/dot',
];

export default function WalletConnect() {
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [api, setApi] = useState<ApiPromise | null>(null);
  const [balance, setBalance] = useState<string>('0');
  const [apiError, setApiError] = useState<string | null>(null);
  const [showDisconnectInfo, setShowDisconnectInfo] = useState(false);
  const [notification, setNotification] = useState<{type: 'success' | 'error' | 'info', message: string} | null>(null);
  const [dotPrice, setDotPrice] = useState<number | null>(null);

  // Mostrar notificação
  const showNotification = (type: 'success' | 'error' | 'info', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  // Conectar à rede Polkadot com fallback
  // NOTA: Esta conexão é apenas para acessar dados da blockchain
  // NÃO significa que a wallet está conectada - isso só acontece quando o usuário clica em "Conectar Wallet"
  useEffect(() => {
    let isMounted = true;
    const tryConnectEndpoints = async (endpoints: string[], idx = 0): Promise<void> => {
      if (idx >= endpoints.length) {
        if (isMounted) {
          setApiError('Não foi possível conectar a nenhum nó Polkadot. Tente novamente mais tarde.');
          showNotification('error', 'Erro de conexão com a rede Polkadot');
        }
        return;
      }
      try {
        const wsProvider = new WsProvider(endpoints[idx]);
        const apiInstance = await ApiPromise.create({ provider: wsProvider });
        await apiInstance.isReady;
        if (isMounted) {
          setApi(apiInstance);
          setApiError(null);
          // Conexão silenciosa com a rede - sem notificação para o usuário
        }
      } catch (error) {
        if (isMounted) {
          console.error(`Erro ao conectar ao endpoint ${endpoints[idx]}:`, error);
          tryConnectEndpoints(endpoints, idx + 1);
        }
      }
    };
    tryConnectEndpoints(POLKADOT_ENDPOINTS);
    return () => { isMounted = false; };
  }, []);

  // Buscar saldo da conta
  useEffect(() => {
    const fetchBalance = async () => {
      if (api && selectedAccount) {
        try {
          const accountInfo = await api.query.system.account(selectedAccount.address);
          const free = (accountInfo as any).data.free;
          const balanceInDOT = free.toNumber() / Math.pow(10, 10); // Convertendo para DOT
          setBalance(balanceInDOT.toFixed(4));
        } catch (error) {
          console.error('Erro ao buscar saldo:', error);
          showNotification('error', 'Erro ao buscar saldo da conta');
        }
      }
    };
    fetchBalance();
  }, [api, selectedAccount]);

  // Buscar preço do DOT em tempo real
  useEffect(() => {
    const fetchDotPrice = async () => {
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=polkadot&vs_currencies=usd');
        const data = await res.json();
        if (data.polkadot && data.polkadot.usd) {
          setDotPrice(data.polkadot.usd);
        }
      } catch (e) {
        setDotPrice(null);
      }
    };
    fetchDotPrice();
    const interval = setInterval(fetchDotPrice, 30000);
    return () => clearInterval(interval);
  }, []);

  // Função de conexão real com extensão Polkadot.js
  const connectWallet = async () => {
    setIsLoading(true);
    try {
      const { web3Enable, web3Accounts } = await import('@polkadot/extension-dapp');
      const extensions = await web3Enable('Polkadot Wallet App');
      if (extensions.length === 0) {
        showNotification('error', 'Nenhuma extensão de wallet encontrada');
        setIsLoading(false);
        return;
      }
      const allAccounts = await web3Accounts();
      if (allAccounts.length > 0) {
        setAccounts(allAccounts);
        setSelectedAccount(allAccounts[0]);
        setIsConnected(true);
        showNotification('success', 'Wallet conectada com sucesso!');
      } else {
        showNotification('error', 'Nenhuma conta encontrada. Certifique-se de ter uma extensão de wallet instalada.');
      }
    } catch (error) {
      console.error('Erro ao conectar wallet:', error);
      showNotification('error', 'Erro ao conectar wallet. Verifique se você tem uma extensão de wallet instalada.');
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = () => {
    setAccounts([]);
    setSelectedAccount(null);
    setIsConnected(false);
    setBalance('0');
    setShowDisconnectInfo(true);
    showNotification('info', 'Wallet desconectada');
  };

  const handleDisconnectConfirm = () => {
    setShowDisconnectInfo(false);
  };

  const handleAccountSelect = (account: InjectedAccountWithMeta) => {
    setSelectedAccount(account);
    showNotification('success', `Conta ${account.meta.name} selecionada`);
  };

  // Remover duplicatas de contas pelo endereço
  const uniqueAccounts = accounts.filter(
    (acc, idx, self) => self.findIndex(a => a.address === acc.address) === idx
  );

  if (apiError) {
    return (
      <div className="space-y-8">
        <div className="box-vertical box-dark items-center justify-center text-center box-error">
          <div className="box-title-lg center pink">Erro de Conexão</div>
          <div className="wallet-status">{apiError}</div>
          <button 
            onClick={() => window.location.reload()} 
            className="btn-secondary mt-4"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Notificação */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center gap-3 transition-all duration-300 ${
          notification.type === 'success' ? 'bg-green-500 text-white' :
          notification.type === 'error' ? 'bg-red-500 text-white' :
          'bg-blue-500 text-white'
        }`}>
          {notification.type === 'success' && <CheckCircle className="w-5 h-5" />}
          {notification.type === 'error' && <AlertCircle className="w-5 h-5" />}
          {notification.type === 'info' && <AlertCircle className="w-5 h-5" />}
          <span>{notification.message}</span>
          <button 
            onClick={() => setNotification(null)}
            className="ml-2 hover:opacity-70"
          >
            ×
          </button>
        </div>
      )}

      {/* Box de Conexão - Mantém o mesmo layout em ambos os estados */}
      <div className="box-horizontal box-polkadot-black">
        {/* Coluna 1: Logo e texto */}
        <div className="liquid-col">
          <img src="/images/Polkadot_Logo_Pink-White.svg" alt="Polkadot" className="logo-polkadot-giant" />
          <div className="box-subtitle center-important">
            {isConnected 
              ? 'Sua wallet está conectada e autorizada para interagir com a rede Polkadot.'
              : 'A rede Polkadot está disponível. Conecte sua wallet para começar a usar.'
            }
          </div>
        </div>
        {/* Coluna 2: Instruções, Informações da Conta ou Mensagem de Desconexão */}
        <div className="liquid-col center-important">
          {showDisconnectInfo ? (
            <div className="box-vertical disconnect-box center-important">
              <div className="wallet-status disconnect-message center-important">
                <div>Sua carteira foi desconectada da interface.</div>
                <div className="disconnect-lime">A extensão Polkadot.js permanece autorizada no navegador.</div>
                <div>Para remover a autorização completamente, acesse a extensão e remova manualmente este site da lista de permissões.</div>
              </div>
              <button
                onClick={handleDisconnectConfirm}
                className="btn-disconnect-confirm"
              >
                OK
              </button>
            </div>
          ) : !isConnected ? (
            <>
              <div className="box-title-md center-important">Como Conectar sua Wallet?</div>
              <ul className="box-list-sm center-important">
                <li>Instale uma extensão de Wallet (Nova, Talisman, SubWallet ou, se você for um desenvolvedor, Polkadot.js)</li>
                <li>Crie ou importe uma conta na extensão</li>
                <li>Clique em "Conectar Wallet" ao lado</li>
                <li>Autorize a conexão quando solicitado</li>
              </ul>
            </>
          ) : (
            <>
              <div className="box-title-md center-important">Informações da Conta</div>
              <div className="wallet-info center-important">
                <div className="wallet-account-name">
                  {selectedAccount?.meta.name || 'Conta Polkadot'}
                </div>
                <div className="wallet-address">
                  {selectedAccount?.address}
                </div>
                <div className="wallet-balance">
                  {/* Preço do DOT acima do saldo */}
                  {dotPrice !== null && (
                    <div className="text-xs text-gray-400 mb-1">Preço DOT: ${dotPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                  )}
                  {/* Saldo e valor em dólares */}
                  {balance} DOT
                  {dotPrice !== null && (
                    <span className="ml-2 text-xs text-green-400 font-semibold">≈ ${(parseFloat(balance) * dotPrice).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  )}
                </div>
                <div className="wallet-status">
                  <span className="status-indicator status-online">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Conectado
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
        {/* Coluna 3: Botão - Mantém o mesmo tamanho e estilo */}
        <div className="liquid-col">
          <button
            className="btn-connect-wallet"
            onClick={isConnected ? disconnectWallet : connectWallet}
            disabled={isLoading}
          >
            <Wallet className="wallet-icon wallet-icon-xl" />
            <span className="wallet-action" data-text={isLoading ? 'Conectando...' : (isConnected ? 'DESCONECTAR' : 'CONECTAR')}>
              {isLoading 
                ? 'Conectando...' 
                : isConnected 
                  ? 'DESCONECTAR' 
                  : 'CONECTAR'
              }
            </span>
          </button>
        </div>
      </div>

      {/* Box de Segurança */}
      <div className="box-horizontal box-polkadot-pink">
        {/* Coluna 1: Título */}
        <div className="liquid-col">
          <div className="box-title-lg center-important">Segurança</div>
        </div>
        {/* Coluna 2: Instruções (primeiras duas frases) */}
        <div className="liquid-col center-important">
          <ul className="box-list center-important">
            <li>Nunca compartilhe suas chaves privadas</li>
            <li>Use apenas extensões oficiais e verificadas</li>
          </ul>
        </div>
        {/* Coluna 3: Instruções (últimas duas frases) */}
        <div className="liquid-col center-important">
          <ul className="box-list center-important">
            <li>Não compartilhe sua seed phrase com ninguém</li>
            <li>Desconfie de solicitações suspeitas de acesso à sua wallet</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 