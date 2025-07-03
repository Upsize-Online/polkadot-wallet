import Image from "next/image";
import WalletConnect from '@/components/WalletConnect';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <div className="text-center mb-8">
        <h1 className="hero-title">Polkadot CMS</h1>
        <p className="subtitle-global">Conecte sua wallet para acesssar sua área logada.</p>
      </div>
      <WalletConnect />
    </div>
  );
}
