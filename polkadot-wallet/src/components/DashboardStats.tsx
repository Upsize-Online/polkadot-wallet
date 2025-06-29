'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, Users, Coins, Activity } from 'lucide-react';

interface NetworkStats {
  totalStaked: string;
  activeValidators: number;
  totalAccounts: string;
  blockHeight: string;
  price: string;
  marketCap: string;
}

export default function DashboardStats() {
  const [stats, setStats] = useState<NetworkStats>({
    totalStaked: '0',
    activeValidators: 0,
    totalAccounts: '0',
    blockHeight: '0',
    price: '0',
    marketCap: '0'
  });
  const [isLoading, setIsLoading] = useState(true);

  // Simulação de dados em tempo real
  useEffect(() => {
    const fetchStats = async () => {
      // Simular carregamento
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Dados simulados da rede Polkadot
      setStats({
        totalStaked: '1,234,567,890',
        activeValidators: 297,
        totalAccounts: '2,345,678',
        blockHeight: '18,234,567',
        price: '$7.23',
        marketCap: '$8.5B'
      });
      setIsLoading(false);
    };

    fetchStats();
    
    // Atualizar a cada 30 segundos
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  const statCards = [
    {
      title: 'Total Staked',
      value: `${stats.totalStaked} DOT`,
      icon: <Coins className="w-6 h-6" />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'Validadores Ativos',
      value: stats.activeValidators.toString(),
      icon: <Users className="w-6 h-6" />,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      title: 'Contas Totais',
      value: stats.totalAccounts,
      icon: <Activity className="w-6 h-6" />,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'Preço DOT',
      value: stats.price,
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Título da seção */}
      <div className="text-center">
        <h2 className="box-title-lg">Estatísticas da Rede</h2>
        <p className="box-subtitle">Dados em tempo real da rede Polkadot</p>
      </div>

      {/* Cards de estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div key={index} className="box-vertical box-dark">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <div className={stat.color}>{stat.icon}</div>
              </div>
              {isLoading && (
                <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-4 w-16 rounded"></div>
              )}
            </div>
            
            <div className="space-y-2">
              <h3 className="box-title-sm">{stat.title}</h3>
              {isLoading ? (
                <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-8 w-24 rounded"></div>
              ) : (
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Informações adicionais */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="box-vertical box-dark">
          <div className="box-title-md center">Informações da Rede</div>
          <div className="space-y-3 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Block Height:</span>
              <span className="font-mono">{isLoading ? '...' : stats.blockHeight}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Market Cap:</span>
              <span className="font-mono">{isLoading ? '...' : stats.marketCap}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Status:</span>
              <span className="text-green-400 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Online
              </span>
            </div>
          </div>
        </div>

        <div className="box-vertical box-dark">
          <div className="box-title-md center">Últimas Atualizações</div>
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Rede operacional</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>297 validadores ativos</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>2.3M+ contas criadas</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>Preço DOT: $7.23</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 