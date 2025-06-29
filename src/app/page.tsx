import React from 'react';
import WalletConnect from '../components/WalletConnect';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Polkadot Wallet App
          </h1>
          <p className="text-lg text-gray-600">
            Conecte sua wallet e explore o ecossistema Polkadot
          </p>
        </div>
        
        <WalletConnect />
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Desenvolvido com Next.js, Tailwind CSS e Polkadot API</p>
        </div>
      </div>
    </main>
  );
} 