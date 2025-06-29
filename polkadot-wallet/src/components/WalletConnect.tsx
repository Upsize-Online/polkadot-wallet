'use client';

import { useState, useEffect } from 'react';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Wallet, Check, Wallet2 } from 'lucide-react';
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

  // Simulação de dados da conta conectada
  const accountName = 'Minha Conta Polkadot';
  const accountAddress = '1x2y3z4a5b6c7d8e9f0g1h2i3j4k5l6m7n8o9p0q';
  const balanceInDOT = '12.3456';

  // Conectar à rede Polkadot com fallback
  useEffect(() => {
    let isMounted = true;
    const tryConnectEndpoints = async (endpoints: string[], idx = 0): Promise<void> => {
      if (idx >= endpoints.length) {
        if (isMounted) setApiError('Não foi possível conectar a nenhum nó Polkadot. Tente novamente mais tarde.');
        return;
      }
      try {
        const wsProvider = new WsProvider(endpoints[idx]);
        const apiInstance = await ApiPromise.create({ provider: wsProvider });
        await apiInstance.isReady;
        if (isMounted) {
          setApi(apiInstance);
          setApiError(null);
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
        }
      }
    };
    fetchBalance();
  }, [api, selectedAccount]);

  // Função de conexão real com extensão Polkadot.js
  const connectWallet = async () => {
    setIsLoading(true);
    try {
      const { web3Enable, web3Accounts } = await import('@polkadot/extension-dapp');
      const extensions = await web3Enable('Polkadot Wallet App');
      if (extensions.length === 0) {
        alert('Nenhuma extensão de wallet encontrada.');
        setIsLoading(false);
        return;
      }
      const allAccounts = await web3Accounts();
      if (allAccounts.length > 0) {
        setAccounts(allAccounts);
        setSelectedAccount(allAccounts[0]);
        setIsConnected(true);
      } else {
        alert('Nenhuma conta encontrada. Certifique-se de ter uma extensão de wallet instalada.');
      }
    } catch (error) {
      console.error('Erro ao conectar wallet:', error);
      alert('Erro ao conectar wallet. Verifique se você tem uma extensão de wallet instalada.');
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
  };

  const handleDisconnectConfirm = () => {
    setShowDisconnectInfo(false);
  };

  const handleAccountSelect = (account: InjectedAccountWithMeta) => {
    setSelectedAccount(account);
  };

  // Remover duplicatas de contas pelo endereço
  const uniqueAccounts = accounts.filter(
    (acc, idx, self) => self.findIndex(a => a.address === acc.address) === idx
  );

  if (apiError) {
    return (
      <div className="box-vertical box-dark items-center justify-center text-center box-error">
        <div className="box-title-lg center pink">Erro de Conexão</div>
        <div className="wallet-status">{apiError}</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Box de Conexão - Mantém o mesmo layout em ambos os estados */}
      <div className="box-horizontal box-dark">
        {/* Coluna 1: Logo e texto */}
        <div className="flex flex-col items-center justify-center flex-1">
          <img src="/images/Polkadot_Logo_Pink-White.svg" alt="Polkadot" className="logo-polkadot box-img-lg" />
          <div className="box-subtitle center">
            {isConnected 
              ? 'Sua wallet está conectada à rede Polkadot.'
              : 'Conecte sua wallet para interagir com a rede Polkadot.'
            }
          </div>
        </div>
        <div className="separator-vertical" />
        
        {/* Coluna 2: Instruções, Informações da Conta ou Mensagem de Desconexão */}
        <div className="flex flex-col justify-center flex-1">
          {showDisconnectInfo ? (
            <div className="box-vertical disconnect-box">
              <div className="wallet-status disconnect-message">
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
              <div className="box-title-md">Como Conectar sua Wallet?</div>
              <ul className="box-list-sm">
                <li>Instale uma extensão de Wallet (Nova, Talisman, SubWallet ou, se você for um desenvolvedor, Polkadot.js)</li>
                <li>Crie ou importe uma conta na extensão</li>
                <li>Clique em "Conectar Wallet" ao lado</li>
                <li>Autorize a conexão quando solicitado</li>
              </ul>
            </>
          ) : (
            <>
              <div className="box-title-md">Informações da Conta</div>
              <div className="wallet-info">
                <div className="wallet-account-name">
                  {selectedAccount?.meta.name || 'Conta Polkadot'}
                </div>
                <div className="wallet-address">
                  {selectedAccount?.address}
                </div>
                <div className="wallet-balance">
                  {balance} DOT
                </div>
                <div className="wallet-status">
                  Status: Conectado
                </div>
              </div>
            </>
          )}
        </div>
        <div className="separator-vertical" />
        
        {/* Coluna 3: Botão - Mantém o mesmo tamanho e estilo */}
        <div className="flex flex-col items-center justify-center flex-1">
          <button
            className="btn-connect-wallet"
            onClick={isConnected ? disconnectWallet : connectWallet}
            disabled={isLoading}
          >
            <Wallet2 className="wallet-icon wallet-icon-xl" />
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
      <div className="box-horizontal box-pink">
        {/* Coluna 1: Título */}
        <div className="flex flex-col justify-center flex-1">
          <div className="box-title-lg center">Segurança</div>
        </div>
        <div className="separator-vertical" />
        {/* Coluna 2: Instruções */}
        <div className="flex flex-col justify-center flex-1">
          <ul className="box-list">
            <li>Nunca compartilhe suas chaves privadas</li>
            <li>Use apenas extensões oficiais e verificadas</li>
          </ul>
        </div>
        <div className="separator-vertical" />
        {/* Coluna 3: Instruções duplicadas */}
        <div className="flex flex-col justify-center flex-1">
          <ul className="box-list">
            <li>Nunca compartilhe suas chaves privadas</li>
            <li>Use apenas extensões oficiais e verificadas</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 