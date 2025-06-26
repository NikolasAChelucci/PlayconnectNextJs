'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Navbar from '../components/navbar';

export default function Confirmacao() {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsLightMode(false);
      document.documentElement.classList.add('dark');
    } else {
      setIsLightMode(true);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isLightMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsLightMode(false);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsLightMode(true);
    }
  };

  return (
    <>
      <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} />

      <main className={`min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20 ${isLightMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
        <section className="max-w-xl text-center">
          <h2 className="text-4xl font-semibold mb-6 text-pink-500">Mensagem Enviada com Sucesso!</h2>
          <p className="mb-8 text-lg">
            Obrigado por entrar em contato com a equipe PlayConnect. Em breve retornaremos seu contato.
          </p>
          <a
            href="/"
            className="inline-block bg-pink-500 text-white px-6 py-3 rounded font-semibold hover:bg-pink-600 transition"
          >
            Voltar para a Home
          </a>
        </section>
      </main>

      <footer className={`py-6 text-center text-sm ${isLightMode ? 'text-gray-700' : 'text-gray-400'}`}>
        <p>© 2025 PlayConnect | Conectando criadores e jogadores</p>
      </footer>

      {/* VLibras plugin */}
      <div vw="" className="enabled">
        <div vw-access-button="" className="active"></div>
        <div vw-plugin-wrapper="">
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>

      <Script src="https://vlibras.gov.br/app/vlibras-plugin.js" strategy="afterInteractive" />
    </>
  );
}
