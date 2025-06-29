"use client";
import React, { useState, useEffect } from "react";
import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { Wallet, Check } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function WalletConnect() {
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [balance, setBalance] = useState<string>('0');
  const [api, setApi] = useState<ApiPromise | null>(null);

  // Conectar à rede Polkadot
  useEffect(() => {
    const connectToPolkadot = async () => {
      try {
        const wsProvider = new WsProvider('wss://rpc.polkadot.io');
        const apiInstance = await ApiPromise.create({ provider: wsProvider });
        setApi(apiInstance);
        console.log('Conectado à rede Polkadot');
      } catch (error) {
        console.error('Erro ao conectar à rede Polkadot:', error);
      }
    };
    connectToPolkadot();
  }, []);

  // Buscar saldo da conta
  useEffect(() => {
    const fetchBalance = async () => {
      if (api && selectedAccount) {
        try {
          const accountInfo = await api.query.system.account(selectedAccount.address);
          const free = (accountInfo as unknown as { data: { free: { toNumber: () => number } } }).data.free;
          const balanceInDOT = free.toNumber() / Math.pow(10, 10); // Convertendo para DOT
          setBalance(balanceInDOT.toFixed(4));
        } catch (error) {
          console.error('Erro ao buscar saldo:', error);
        }
      }
    };
    fetchBalance();
  }, [api, selectedAccount]);

  const connectWallet = async () => {
    setIsLoading(true);
    try {
      // Importação dinâmica para evitar erro no SSR
      const { web3Enable, web3Accounts } = await import('@polkadot/extension-dapp');
      // Habilitar extensões
      const extensions = await web3Enable('Polkadot Wallet App');
      console.log('Extensões habilitadas:', extensions);
      // Buscar contas
      const allAccounts = await web3Accounts();
      console.log('Contas encontradas:', allAccounts);
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
  };

  const handleAccountSelect = (account: InjectedAccountWithMeta) => {
    setSelectedAccount(account);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <Wallet className="w-12 h-12 mx-auto mb-4 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Polkadot Wallet
        </h2>
        <p className="text-gray-600">
          Conecte sua wallet para interagir com a rede Polkadot
        </p>
      </div>
      {!isConnected ? (
        <button
          onClick={connectWallet}
          disabled={isLoading}
          className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Conectando...
            </>
          ) : (
            <>
              <Check className="w-5 h-5" />
              Conectar Wallet
            </>
          )}
        </button>
      ) : (
        <div className="space-y-4">
          {/* Seleção de conta */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-between">
                <span className="truncate">
                  {selectedAccount?.meta.name || 'Conta selecionada'}
                </span>
                <span className="text-xs text-gray-500">▼</span>
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className="min-w-[200px] bg-white rounded-md shadow-lg border border-gray-200 p-1">
                {accounts.map((account) => (
                  <DropdownMenu.Item
                    key={account.address}
                    onClick={() => handleAccountSelect(account)}
                    className="flex flex-col items-start p-2 hover:bg-gray-100 rounded cursor-pointer"
                  >
                    <span className="font-medium text-sm">{account.meta.name}</span>
                    <span className="text-xs text-gray-500 truncate w-full">
                      {account.address.slice(0, 8)}...{account.address.slice(-8)}
                    </span>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
          {/* Informações da conta */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Saldo:</span>
            <span className="text-lg font-bold text-purple-600">
              {balance} DOT
            </span>
          </div>
          <div className="text-xs text-gray-500 break-all">
            {selectedAccount?.address}
          </div>
          {/* Botão desconectar */}
          <button
            onClick={disconnectWallet}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Desconectar
          </button>
        </div>
      )}
      {/* Instruções */}
      {!isConnected && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Como conectar:</h3>
          <ol className="text-sm text-blue-800 space-y-1">
            <li>1. Instale uma extensão de wallet (Polkadot.js, Talisman, etc.)</li>
            <li>2. Crie ou importar uma conta</li>
            <li>3. Clique em &quot;Conectar Wallet&quot;</li>
            <li>4. Autorize a conexão na extensão</li>
          </ol>
        </div>
      )}
    </div>
  );
} 