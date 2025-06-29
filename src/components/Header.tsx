import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow px-6 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo à esquerda */}
        <div className="flex-shrink-0">
          <Image src="/globe.svg" alt="Logo" width={40} height={40} />
        </div>
        {/* Links centralizados */}
        <nav className="flex-1 flex justify-center gap-6">
          <Link href="/quem-somos" className="text-gray-700 hover:text-purple-600 font-medium">Quem Somos</Link>
          <Link href="/o-que-fazemos" className="text-gray-700 hover:text-purple-600 font-medium">O que Fazemos</Link>
          <Link href="/faq" className="text-gray-700 hover:text-purple-600 font-medium">Perguntas Frequentes</Link>
          <Link href="/contato" className="text-gray-700 hover:text-purple-600 font-medium">Contato</Link>
        </nav>
        {/* Botão à direita */}
        <div className="flex-shrink-0">
          <button className="ml-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200">Área Administrativa</button>
        </div>
      </div>
    </header>
  );
} 