'use client';

import { useState } from 'react';
import { ChevronDown, Wifi, Shield, Zap } from 'lucide-react';

interface Network {
  id: string;
  name: string;
  symbol: string;
  color: string;
  icon: React.ReactNode;
  description: string;
  isActive: boolean;
}

const networks: Network[] = [
  {
    id: 'polkadot',
    name: 'Polkadot',
    symbol: 'DOT',
    color: '#E6007A',
    icon: <Wifi className="w-4 h-4" />,
    description: 'Rede principal de interoperabilidade',
    isActive: true
  },
  {
    id: 'kusama',
    name: 'Kusama',
    symbol: 'KSM',
    color: '#000000',
    icon: <Shield className="w-4 h-4" />,
    description: 'Rede de testes e experimentação',
    isActive: true
  },
  {
    id: 'westend',
    name: 'Westend',
    symbol: 'WND',
    color: '#6C5CE7',
    icon: <Zap className="w-4 h-4" />,
    description: 'Rede de teste para desenvolvedores',
    isActive: false
  }
];

export default function NetworkSelector() {
  const [selectedNetwork, setSelectedNetwork] = useState<Network>(networks[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="box-horizontal box-dark">
        <div className="liquid-col">
          <div className="box-title-md center">Rede Atual</div>
        </div>
        
        <div className="liquid-col">
          <div className="flex items-center justify-center gap-3">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: selectedNetwork.color }}
            />
            <span className="font-semibold">{selectedNetwork.name}</span>
            <span className="text-sm text-gray-400">({selectedNetwork.symbol})</span>
          </div>
          <div className="text-sm text-gray-400 text-center mt-1">
            {selectedNetwork.description}
          </div>
        </div>
        
        <div className="liquid-col">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn-network-selector"
            >
              <span>Trocar Rede</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                {networks.map((network) => (
                  <button
                    key={network.id}
                    onClick={() => {
                      setSelectedNetwork(network);
                      setIsOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 ${
                      selectedNetwork.id === network.id ? 'bg-gray-50 dark:bg-gray-700' : ''
                    } ${!network.isActive ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!network.isActive}
                  >
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: network.color }}
                    />
                    <div className="flex-1">
                      <div className="font-semibold">{network.name}</div>
                      <div className="text-sm text-gray-500">{network.description}</div>
                    </div>
                    {!network.isActive && (
                      <span className="text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">
                        Em breve
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Overlay para fechar o dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
} 