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
          <div className="space-y-4 text-lg leading-relaxed tracking-wide max-w-4xl mx-auto text-justify">
            <p>O mercado de jogos independentes no Brasil tem mostrado um crescimento notável nos últimos anos, destacando-se pela diversidade e criatividade dos títulos produzidos.</p>
            <p>Desenvolvedores de diferentes regiões do país têm contribuído com jogos que refletem aspectos culturais únicos, explorando desde narrativas históricas até mecânicas inovadoras.</p>
          </div>
        </div>

        {/* Bloco fixo 2 */}
        <div className={`pesquisa p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ${isLightMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
          <h2 className="text-3xl font-bold uppercase mb-4 text-pink-500">Desafios para se Destacar no Mercado Global</h2>
          <div className="space-y-4 text-lg leading-relaxed tracking-wide max-w-4xl mx-auto text-justify">
            <p>Apesar do crescimento, os desenvolvedores brasileiros enfrentam desafios significativos para se destacar em um mercado global altamente competitivo.</p>
            <p>A escassez de recursos financeiros limita a capacidade de investir em marketing e distribuição, dificultando a conquista de uma audiência ampla.</p>
            <p>Além disso, a necessidade de equilibrar a qualidade do jogo com a sustentabilidade financeira exige habilidades empresariais que nem sempre estão presentes nas equipes de desenvolvimento.</p>
          </div>
        </div>

        {/* Lista dinâmica com dados do JSON */}
        <div className={`pesquisa p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ${isLightMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
          <h2 className="text-3xl font-bold uppercase mb-6 text-pink-500">Jogos Brasileiros que se Destacam</h2>

          {loading && <p className="text-lg leading-relaxed tracking-wide">Carregando jogos...</p>}
          {error && <p className="text-red-500 text-lg leading-relaxed tracking-wide">Erro: {error}</p>}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {games.map((game) => (
                <div key={game.id} className={`rounded-md shadow-md overflow-hidden transform transition-transform hover:scale-105 ${isLightMode ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'}`}>
                  <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-pink-400 mb-2">{game.title}</h3>
                    <p className="text-lg leading-relaxed tracking-wide mb-2">{game.description}</p>
                    <p className="text-lg font-semibold">Vendas: <span className="text-pink-500">{game.vendas.toLocaleString()}</span></p>
                    <p className="text-lg font-semibold">Pessoas em Live: <span className="text-pink-500">{game.views.toLocaleString()}</span></p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bloco fixo 3 */}
        <div className={`pesquisa p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ${isLightMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
          <h2 className="text-3xl font-bold uppercase mb-4 text-pink-500">O Trabalho dos Desenvolvedores Brasileiros</h2>
          <div className="space-y-4 text-lg leading-relaxed tracking-wide max-w-4xl mx-auto text-justify">
            <p>O trabalho dos desenvolvedores brasileiros é caracterizado por paixão e resiliência.</p>
            <p>Muitas vezes, as equipes de desenvolvimento são pequenas e trabalham com orçamentos limitados, o que implica em conciliar o desenvolvimento de jogos com outras atividades profissionais.</p>
            <p>A busca por financiamento por meio de crowdfunding ou parcerias com publishers é uma constante, assim como a colaboração entre desenvolvedores para superar limitações e compartilhar recursos.</p>
          </div>
        </div>

        {/* Bloco fixo 4 */}
        <div className={`pesquisa p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ${isLightMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
          <h2 className="text-3xl font-bold uppercase mb-4 text-pink-500">A Influência dos Streamers</h2>
          <div className="space-y-4 text-lg leading-relaxed tracking-wide max-w-4xl mx-auto text-justify">
            <p>Os streamers desempenham um papel fundamental na promoção e divulgação dos jogos independentes.</p>
            <p>Ao transmitir gameplay e interagir com suas audiências, eles ajudam a aumentar a visibilidade de títulos menos conhecidos e contribuem para a construção de uma base de fãs.</p>
            <p>Parcerias com streamers podem resultar em feedback valioso para os desenvolvedores e ampliar o alcance dos jogos, além de fortalecer a presença da indústria de jogos independentes.</p>
          </div>
        </div>

        {/* Bloco fixo 5 */}
        <div className={`pesquisa p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ${isLightMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
          <h2 className="text-3xl font-bold uppercase mb-4 text-pink-500">Como o Projeto PlayConnect Ajudaria no Crescimento do Mercado</h2>
          <div className="space-y-5 text-lg leading-relaxed tracking-wide max-w-4xl mx-auto text-justify">
            <p>O projeto <strong>PlayConnect</strong> pode ser um fator crucial para impulsionar o crescimento do mercado de jogos independentes no Brasil, oferecendo uma plataforma que conecta desenvolvedores, streamers e a comunidade gamer de forma eficiente e estratégica.</p>
            <p>Uma das principais formas de contribuição do PlayConnect seria a criação de um espaço dedicado à promoção e visibilidade dos jogos indie brasileiros, reunindo títulos de diversos estúdios e desenvolvedores locais.</p>
            <p>Além disso, o PlayConnect facilitaria a interação entre desenvolvedores e streamers, criando oportunidades de parcerias que potencializam a divulgação dos jogos e aumentam o engajamento do público.</p>
            <p>O projeto também poderia agir como uma ponte entre desenvolvedores e investidores, oferecendo um ambiente seguro para crowdfunding e descobertas de novos talentos e ideias inovadoras.</p>
            <p>Por fim, o PlayConnect ajudaria a consolidar uma cultura gamer sólida no Brasil, criando uma rede de apoio e promoção que fortalece a presença dos jogos independentes no mercado global.</p>
          </div>
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
