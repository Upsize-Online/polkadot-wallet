"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  const logoSrc = theme === 'dark' ? '/images/logo-light.png' : '/images/logo-dark.png';
  return (
    <footer className="py-8 w-full footer-global">
      <div className="flex flex-col items-center max-w-full">
        {mounted && (
          <Image src={logoSrc} alt="Logo" width={200} height={200} className="logo-global mb-2 footer-logo-size" />
        )}
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-2 w-full max-w-4xl">
          <Link href="/" className="footer-link">Wallet</Link>
          <Link href="/quem-somos" className="footer-link">Quem Somos</Link>
          <Link href="/o-que-fazemos" className="footer-link">O que Fazemos</Link>
          <Link href="/faq" className="footer-link">Perguntas Frequentes</Link>
          <Link href="/contato" className="footer-link">Contato</Link>
        </nav>
        <span className="footer-copy">&copy; {new Date().getFullYear()} Polkadot Wallet. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
} 