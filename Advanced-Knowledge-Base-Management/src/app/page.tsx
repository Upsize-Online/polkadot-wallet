import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-white dark:bg-black">
      <img src="/images/Polkadot_Logo_Pink-White.svg" alt="Polkadot Logo" className="mb-8 w-32 h-32" />
      <h1 className="text-4xl font-extrabold text-pink-600 mb-4">Bem-vindo ao Advanced Knowledge Base Management</h1>
      <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 text-center max-w-xl">
        Plataforma SaaS para gestão avançada de base de conhecimento, integração RAG e Polkadot. Escolha uma opção para começar:
      </p>
      <div className="flex gap-6">
        <Link href="/conectar-wallet" className="btn-global">
          Conectar Wallet
        </Link>
        <Link href="/contato" className="btn-secondary">
          Contato
        </Link>
      </div>
    </main>
  );
} 