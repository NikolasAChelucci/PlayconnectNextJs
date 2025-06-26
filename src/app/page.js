'use client';

import { useState } from 'react';
import Script from 'next/script';
import Navbar from './components/navbar';


export default function Home() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => setIsLightMode(prev => !prev);

  return (
    <main className={`${isLightMode ? 'bg-white text-black' : 'bg-black text-white'} min-h-screen px-5 py-12 transition-colors duration-500`}>
      <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} />

      {/* Conteúdo principal estilizado */}
      <section className="space-y-10 max-w-5xl mx-auto">
        {/* Bloco 1 */}
        <div className={`p-8 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 ${isLightMode ? 'bg-gray-100 text-black hover:shadow-pink-500/50' : 'bg-gray-900 text-white hover:shadow-pink-500/50'}`}>
          <h2 className="text-3xl font-bold uppercase mb-4 text-pink-500">Bem-vindo ao PlayConnect</h2>
          <p className="text-base leading-relaxed max-w-4xl mx-auto">
            O <strong>PlayConnect</strong> é a ponte entre desenvolvedores independentes e streamers, conectando criadores de jogos com influenciadores digitais. Nossa plataforma permite que streamers descubram e testem novos jogos antes do lançamento, enquanto desenvolvedores ampliam sua visibilidade e recebem feedback valioso da comunidade.
          </p>
        </div>

        {/* Bloco 2 */}
        <div className={`p-8 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 ${isLightMode ? 'bg-gray-100 text-black hover:shadow-pink-500/50' : 'bg-gray-900 text-white hover:shadow-pink-500/50'}`}>
          <h2 className="text-3xl font-bold uppercase mb-4 text-pink-500">Como Funciona?</h2>
          <p className="text-base leading-relaxed max-w-4xl mx-auto mb-4">
            Participar do <strong>PlayConnect</strong> é simples e intuitivo:
          </p>
          <ol className="list-decimal list-inside text-left sm:text-center max-w-3xl mx-auto space-y-2">
            <li><strong>Desenvolvedores:</strong> Criam um perfil e cadastram seus jogos na plataforma.</li>
            <li><strong>Streamers:</strong> Navegam pelo catálogo e solicitam acesso a jogos compatíveis com seu público.</li>
            <li><strong>Parceria:</strong> Streamers jogam, divulgam e criam conteúdo, ajudando a impulsionar os jogos em troca de visibilidade e benefícios exclusivos.</li>
          </ol>
        </div>

        {/* Bloco 3 */}
        <div className={`p-8 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 ${isLightMode ? 'bg-gray-100 text-black hover:shadow-pink-500/50' : 'bg-gray-900 text-white hover:shadow-pink-500/50'}`}>
          <h2 className="text-3xl font-bold uppercase mb-4 text-pink-500">Por que usar o PlayConnect?</h2>
          <ul className="list-disc list-inside text-left sm:text-center max-w-3xl mx-auto space-y-2 text-base leading-relaxed">
            <li><strong>Aumento de alcance:</strong> Desenvolvedores ganham maior visibilidade com a divulgação de influenciadores.</li>
            <li><strong>Marketing orgânico e autêntico:</strong> Streamers promovem os jogos para audiências altamente engajadas.</li>
            <li><strong>Feedback direto e aprimoramento contínuo:</strong> Desenvolvedores recebem insights valiosos para aprimorar seus jogos.</li>
          </ul>
        </div>

        {/* Bloco 4 - vídeo */}
        <div className={`p-8 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 ${isLightMode ? 'bg-gray-100 text-black hover:shadow-pink-500/50' : 'bg-gray-900 text-white hover:shadow-pink-500/50'}`}>
          <h2 className="text-3xl font-bold uppercase mb-4 text-pink-500">Assista ao nosso vídeo</h2>
          <div className="flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JiDGF3ktBiU?si=5ShZ6RxUy18f5K8Z"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`mt-16 text-center text-sm ${isLightMode ? 'text-gray-700' : 'text-gray-400'}`}>
        <p>© 2025 PlayConnect | Conectando criadores e jogadores</p>
      </footer>

      {/* Scripts externos */}
      <Script src="https://vlibras.gov.br/app/vlibras-plugin.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/JS/index.js" strategy="afterInteractive" />
    </main>
  );
}
