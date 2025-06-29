import * as React from "react";
import WalletConnect from '../../components/WalletConnect';

export default function ConectarWalletPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Conectar à Wallet Polkadot</h1>
      <WalletConnect />
    </main>
  );
} 