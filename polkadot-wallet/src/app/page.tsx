import Image from "next/image";
import WalletConnect from '@/components/WalletConnect';
import DashboardStats from '@/components/DashboardStats';
import NetworkSelector from '@/components/NetworkSelector';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="hero-title">Polkadot Wallet App</h1>
        <p className="subtitle-global">Conecte sua wallet e explore o ecossistema Polkadot</p>
      </div>
      
      {/* Network Selector */}
      <div className="mb-6">
        <NetworkSelector />
      </div>
      
      {/* Main Wallet Connect Component */}
      <div className="mb-8">
        <WalletConnect />
      </div>
      
      {/* Dashboard Stats */}
      <div className="mb-8">
        <DashboardStats />
      </div>
      
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="box-vertical box-dark">
          <div className="box-title-md center">Transferir</div>
          <p className="box-text-sm center">Envie DOT para outros endereços</p>
          <button className="btn-secondary">Transferir</button>
        </div>
        
        <div className="box-vertical box-dark">
          <div className="box-title-md center">Staking</div>
          <p className="box-text-sm center">Participe do consenso da rede</p>
          <button className="btn-secondary">Staking</button>
        </div>
        
        <div className="box-vertical box-dark">
          <div className="box-title-md center">Governança</div>
          <p className="box-text-sm center">Vote em propostas da rede</p>
          <button className="btn-secondary">Governança</button>
        </div>
      </div>
    </div>
  );
}
