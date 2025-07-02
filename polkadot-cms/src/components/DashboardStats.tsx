'use client';

import { useState, useEffect } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { TrendingUp, Users, Coins } from 'lucide-react';

interface NetworkStats {
  totalStaked: string;
  activeValidators: number;
  blockHeight: string;
  price: string;
  marketCap: string;
}

export default function DashboardStats() {
  const [stats, setStats] = useState<NetworkStats>({
    totalStaked: '0',
    activeValidators: 0,
    blockHeight: '0',
    price: '0',
    marketCap: '0'
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let api: ApiPromise | null = null;
    let isMounted = true;

    const fetchStats = async () => {
      setIsLoading(true);
      try {
        api = await ApiPromise.create({ provider: new WsProvider('wss://rpc.polkadot.io') });
        await api.isReady;

        // Block height
        const header = await api.rpc.chain.getHeader();
        const blockHeight = header.number.toString();

        // Validadores ativos
        const validators = await api.query.session.validators();
        const validatorsArr = (validators && typeof validators.toJSON === 'function') ? validators.toJSON() : [];
        const activeValidators = Array.isArray(validatorsArr) ? validatorsArr.length : 0;

        // Era index seguro
        const activeEra = await api.query.staking.activeEra();
        const eraJson = activeEra && typeof activeEra.toJSON === 'function' ? activeEra.toJSON() : 0;
        const eraIndex = typeof eraJson === 'object' && eraJson !== null && 'index' in eraJson
          ? (eraJson as any).index
          : typeof eraJson === 'number'
            ? eraJson
            : 0;
        const staking = await api.query.staking.erasTotalStake(eraIndex);
        const totalStaked = (Number(staking.toString()) / Math.pow(10, 10)).toLocaleString('en-US', { maximumFractionDigits: 0 });

        // Preço do DOT via CoinGecko
        const priceRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=polkadot&vs_currencies=usd&include_market_cap=true');
        const priceData = await priceRes.json();
        const price = priceData.polkadot.usd ? `$${priceData.polkadot.usd}` : 'N/A';
        const marketCap = priceData.polkadot.usd_market_cap ? `$${Number(priceData.polkadot.usd_market_cap).toLocaleString('en-US', { maximumFractionDigits: 0 })}` : 'N/A';

        if (isMounted) {
          setStats({
            totalStaked,
            activeValidators,
            blockHeight,
            price,
            marketCap
          });
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) setIsLoading(false);
      } finally {
        if (api) await api.disconnect();
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000);
    return () => {
      isMounted = false;
      if (api) api.disconnect();
      clearInterval(interval);
    };
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
      title: 'Block Height',
      value: stats.blockHeight,
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    },
    {
      title: 'Preço DOT',
      value: stats.price,
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="box-title-lg">Estatísticas da Rede</h2>
        <p className="box-subtitle">Dados em tempo real da rede Polkadot</p>
      </div>
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
              <span>{stats.activeValidators} validadores ativos</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>Block Height: {stats.blockHeight}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <span>Preço DOT: {stats.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 