'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Navbar from '../components/navbar'; // Componente reutilizável

export default function Projeto() {
  const [isLightMode, setIsLightMode] = useState(null); // Inicialmente indefinido para evitar flash

  // Aplica o tema salvo no localStorage logo que o componente monta
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsLightMode(false);
    } else {
      document.documentElement.classList.remove('dark');
      setIsLightMode(true);
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

  if (isLightMode === null) return null; // Evita o flash de modo errado durante carregamento

  return (
    <main className={`${isLightMode ? 'bg-white text-black' : 'bg-black text-white'} min-h-screen px-5 py-12 transition-colors duration-500`}>
      
      {/* Navbar Reutilizável */}
      <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} />

      <section className="max-w-4xl mx-auto mb-10">
        <div className={`p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105
          ${isLightMode ? 'bg-gray-100 text-black hover:shadow-pink-500/50' : 'bg-gray-900 text-white hover:shadow-pink-500/50'}`}>
          <h2 className="text-2xl font-bold text-pink-500 mb-4">VISÃO GERAL DO PROJETO</h2>
          <p className="leading-relaxed">
            Conectando criadores e influenciadores na nova era dos jogos independentes.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-10">
        <div className={`p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105
          ${isLightMode ? 'bg-gray-100 text-black hover:shadow-pink-500/50' : 'bg-gray-900 text-white hover:shadow-pink-500/50'}`}>
          <h2 className="text-2xl font-bold text-pink-500 mb-4">RECURSOS PRINCIPAIS</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Catálogo dinâmico de jogos independentes</li>
            <li>Sistema de matchmaking entre desenvolvedores e streamers</li>
            <li>Dashboard analítico em tempo real</li>
            <li>Sistema de avaliação integrado</li>
            <li>API pública para integrações</li>
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-10">
        <div className={`p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105
          ${isLightMode ? 'bg-gray-100 text-black hover:shadow-pink-500/50' : 'bg-gray-900 text-white hover:shadow-pink-500/50'}`}>
          <h2 className="text-2xl font-bold text-pink-500 mb-4 text-center">ROADMAP DE IMPLEMENTAÇÃO</h2>
          <div className="space-y-6">
            {[
              {
                fase: 'FASE 1: CONCEPÇÃO (Q3 2024)',
                descricao: 'Definição da arquitetura principal e design do sistema',
                emoji: '✅'
              },
              {
                fase: 'FASE 2: DESENVOLVIMENTO (Q4 2024)',
                descricao: 'Implementação do core da plataforma',
                emoji: '🛠️'
              },
              {
                fase: 'FASE 3: LANÇAMENTO (Q1 2025)',
                descricao: 'Release inicial para parceiros selecionados',
                emoji: '🚀'
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-xl mt-1">{item.emoji}</span>
                <div>
                  <h3 className="text-lg font-semibold">{item.fase}</h3>
                  <p>{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center mt-12 text-sm opacity-70">
        <p>© 2025 PlayConnect. Todos os direitos reservados.</p>
      </footer>

      {/* Scripts externos */}
      <Script src="https://vlibras.gov.br/app/vlibras-plugin.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
    </main>
  );
}
