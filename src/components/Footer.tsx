import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="flex flex-col items-center">
        <Image src="/globe.svg" alt="Logo" width={48} height={48} className="mb-2" />
        <nav className="flex gap-6 mb-2">
          <Link href="/quem-somos" className="text-gray-700 hover:text-purple-600 font-medium">Quem Somos</Link>
          <Link href="/o-que-fazemos" className="text-gray-700 hover:text-purple-600 font-medium">O que Fazemos</Link>
          <Link href="/faq" className="text-gray-700 hover:text-purple-600 font-medium">Perguntas Frequentes</Link>
          <Link href="/contato" className="text-gray-700 hover:text-purple-600 font-medium">Contato</Link>
        </nav>
        <span className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Polkadot Wallet. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
} 