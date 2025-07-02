"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [iconHoveredDesktop, setIconHoveredDesktop] = useState(false);
  const [iconHoveredMobile, setIconHoveredMobile] = useState(false);

  // Ler o tema salvo no localStorage apenas no cliente
  useEffect(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (savedTheme === 'light') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const logoSrc = theme === 'dark' ? '/images/logo-light.png' : '/images/logo-dark.png';

  return (
    <header className="sticky top-0 z-50 shadow px-8 py-3 header-global">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo à esquerda */}
        <div className="flex-shrink-0 header-logo-negative-margin">
          <Link href="/">
            <Image src={logoSrc} alt="Logo" width={200} height={200} className="logo-global header-logo-size" />
          </Link>
        </div>
        {/* Menu desktop */}
        <nav className="hidden md:flex flex-1 justify-center gap-6 mx-8">
          <Link href="/" className="header-link text-[#747070] hover:text-[#e50079]">Wallet</Link>
          <Link href="/quem-somos" className="header-link text-[#747070] hover:text-[#e50079]">Quem Somos</Link>
          <Link href="/o-que-fazemos" className="header-link text-[#747070] hover:text-[#e50079]">O que Fazemos</Link>
          <Link href="/faq" className="header-link text-[#747070] hover:text-[#e50079]">Perguntas Frequentes</Link>
          <Link href="/contato" className="header-link text-[#747070] hover:text-[#e50079]">Contato</Link>
        </nav>
        {/* Botão Tema e Área Administrativa desktop */}
        <div className="hidden md:flex flex-shrink-0 items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="header-theme-btn"
            onMouseEnter={() => setIconHoveredDesktop(true)}
            onMouseLeave={() => setIconHoveredDesktop(false)}
          >
            {theme === 'dark' ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconHoveredDesktop ? '#e50079' : '#ededed'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconHoveredDesktop ? '#e50079' : '#171717'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            )}
          </button>
          <button className="header-admin-btn bg-[#e50079] hover:bg-[#e50079]/80 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 uppercase">ADMIN</button>
        </div>
        {/* Menu mobile */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="header-theme-btn"
            onMouseEnter={() => setIconHoveredMobile(true)}
            onMouseLeave={() => setIconHoveredMobile(false)}
          >
            {theme === 'dark' ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconHoveredMobile ? '#e50079' : '#ededed'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconHoveredMobile ? '#e50079' : '#171717'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            )}
          </button>
          <button className="header-admin-btn bg-[#e50079] hover:bg-[#e50079]/80 text-white font-semibold px-3 py-2 rounded-lg transition-colors duration-200 uppercase">ADMIN</button>
          <button
            className="header-hamburger-btn h-10 w-10 flex items-center justify-center rounded-lg bg-transparent"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Menu colapsável mobile */}
      {menuOpen && (
        <nav className="flex md:hidden flex-col items-center gap-4 mt-3 pb-4 bg-white shadow rounded-b-lg animate-fade-in-down">
          <Link href="/" className="text-gray-700 hover:text-[#e50079] w-full text-center" onClick={() => setMenuOpen(false)}>Wallet</Link>
          <Link href="/quem-somos" className="text-gray-700 hover:text-[#e50079] w-full text-center" onClick={() => setMenuOpen(false)}>Quem Somos</Link>
          <Link href="/o-que-fazemos" className="text-gray-700 hover:text-[#e50079] w-full text-center" onClick={() => setMenuOpen(false)}>O que Fazemos</Link>
          <Link href="/faq" className="text-gray-700 hover:text-[#e50079] w-full text-center" onClick={() => setMenuOpen(false)}>Perguntas Frequentes</Link>
          <Link href="/contato" className="text-gray-700 hover:text-[#e50079] w-full text-center" onClick={() => setMenuOpen(false)}>Contato</Link>
        </nav>
      )}
    </header>
  );
} 