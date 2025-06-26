'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import Navbar from '../components/navbar'; // Importando Navbar reutilizável

export default function Mercado() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleTheme = () => setIsLightMode(prev => !prev);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch('/data/games.json');
        if (!res.ok) throw new Error('Falha ao carregar dados');
        const data = await res.json();
        setGames(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return (
    <main className={`${isLightMode ? 'bg-white text-black' : 'bg-black text-white'} min-h-screen px-5 py-12 transition-colors duration-500`}>

      <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} />

      <section className="pesquisa-container flex flex-col gap-12 justify-center px-4 sm:px-8 max-w-5xl mx-auto">

        {/* Bloco fixo 1 */}
        <div className={`pesquisa p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ${isLightMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
          <h2 className="text-3xl font-bold uppercase mb-4 text-pink-500">O Mercado de Jogos Independentes no Brasil</h2>
          <p className="text-base leading-relaxed max-w-4xl mx-auto">
            O mercado de jogos independentes no Brasil tem mostrado um crescimento notável nos últimos anos, destacando-se pela diversidade e criatividade dos títulos produzidos.
          </p>
        </div>

        {/* Bloco fixo 2 */}
        <div className={`pesquisa p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ${isLightMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
          <h2 className="text-3xl font-bold uppercase mb-4 text-pink-500">Desafios para se Destacar no Mercado Global</h2>
          <p className="text-base leading-relaxed max-w-4xl mx-auto">
            Desenvolvedores brasileiros enfrentam desafios significativos para se destacar globalmente, como escassez de recursos e visibilidade.
          </p>
        </div>

        {/* Lista dinâmica com dados do JSON */}
        <div className={`pesquisa p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ${isLightMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
          <h2 className="text-3xl font-bold uppercase mb-6 text-pink-500">Jogos Brasileiros que se Destacam</h2>

          {loading && <p>Carregando jogos...</p>}
          {error && <p className="text-red-500">Erro: {error}</p>}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {games.map((game) => (
                <div key={game.id} className={`rounded-md shadow-md overflow-hidden transform transition-transform hover:scale-105 ${isLightMode ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'}`}>
                  <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-pink-400 mb-2">{game.title}</h3>
                    <p className="text-sm leading-relaxed mb-2">{game.description}</p>
                    <p className="text-sm font-semibold">Vendas: <span className="text-pink-500">{game.vendas.toLocaleString()}</span></p>
                    <p className="text-sm font-semibold">Pessoas em Live: <span className="text-pink-500">{game.views.toLocaleString()}</span></p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Conteúdo fixo adicional (resumido para brevidade) */}
        <div className={`pesquisa p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ${isLightMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
          <h2 className="text-3xl font-bold uppercase mb-4 text-pink-500">O Trabalho dos Desenvolvedores Brasileiros</h2>
          <p className="text-base leading-relaxed max-w-4xl mx-auto">Paixão, resiliência e criatividade marcam a jornada dos desenvolvedores no Brasil.</p>
        </div>

        <div className={`pesquisa p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ${isLightMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
          <h2 className="text-3xl font-bold uppercase mb-4 text-pink-500">A Influência dos Streamers</h2>
          <p className="text-base leading-relaxed max-w-4xl mx-auto">Streamers ajudam a ampliar o alcance e engajamento dos jogos independentes.</p>
        </div>
      </section>

      {/* Rodapé */}
      <footer className={`mt-16 text-center text-sm ${isLightMode ? 'text-gray-700' : 'text-gray-400'}`}>
        <p>© 2025 PlayConnect | Conectando criadores e jogadores</p>
      </footer>

      {/* Scripts externos */}
      <Script src="https://vlibras.gov.br/app/vlibras-plugin.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
    </main>
  );
}
