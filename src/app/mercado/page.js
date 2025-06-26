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
            O mercado de jogos independentes no Brasil tem mostrado um crescimento notável nos últimos anos, destacando-se pela diversidade e criatividade dos títulos produzidos. Desenvolvedores de diferentes regiões do país têm contribuído com jogos que refletem aspectos culturais únicos, explorando desde narrativas históricas até mecânicas inovadoras.
          </p>
        </div>

        {/* Bloco fixo 2 */}
        <div className={`pesquisa p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ${isLightMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
          <h2 className="text-3xl font-bold uppercase mb-4 text-pink-500">Desafios para se Destacar no Mercado Global</h2>
          <p className="text-base leading-relaxed max-w-4xl mx-auto">
           Apesar do crescimento, os desenvolvedores brasileiros enfrentam desafios significativos para se destacar em um mercado global altamente competitivo. A escassez de recursos financeiros limita a capacidade de investir em marketing e distribuição, dificultando a conquista de uma audiência ampla. Além disso, a necessidade de equilibrar a qualidade do jogo com a sustentabilidade financeira exige habilidades empresariais que nem sempre estão presentes nas equipes de desenvolvimento.
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
          <p className="text-base leading-relaxed max-w-4xl mx-auto">O trabalho dos desenvolvedores brasileiros é caracterizado por paixão e resiliência. Muitas vezes, as equipes de desenvolvimento são pequenas e trabalham com orçamentos limitados, o que implica em conciliar o desenvolvimento de jogos com outras atividades profissionais. A busca por financiamento por meio de crowdfunding ou parcerias com publishers é uma constante, assim como a colaboração entre desenvolvedores para superar limitações e compartilhar recursos.</p>
        </div>

        <div className={`pesquisa p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ${isLightMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
          <h2 className="text-3xl font-bold uppercase mb-4 text-pink-500">A Influência dos Streamers</h2>
          <p className="text-base leading-relaxed max-w-4xl mx-auto">Os streamers desempenham um papel fundamental na promoção e divulgação dos jogos independentes. Ao transmitir gameplay e interagir com suas audiências, eles ajudam a aumentar a visibilidade de títulos menos conhecidos e contribuem para a construção de uma base de fãs. Parcerias com streamers podem resultar em feedback valioso para os desenvolvedores e ampliar o alcance dos jogos, além de fortalecer a presença da indústria de jogos independentes.</p>
        </div>

        <div className={`pesquisa p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ${isLightMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
          <h2 className="text-3xl font-bold uppercase mb-4 text-pink-500">Como o Projeto PlayConnect Ajudaria no Crescimento do Mercado</h2>
          <p className="text-base leading-relaxed max-w-4xl mx-auto">O projeto PlayConnect pode ser um fator crucial para impulsionar o crescimento do mercado de jogos independentes no Brasil, oferecendo uma plataforma que conecta desenvolvedores, streamers e a comunidade gamer de forma eficiente e estratégica. Uma das principais formas de contribuição do PlayConnect seria a criação de um espaço dedicado à promoção e visibilidade dos jogos indie brasileiros. Ao reunir jogos de diversos estúdios e desenvolvedores locais, o PlayConnect poderia funcionar como um ponto central para descoberta de novos títulos, facilitando o acesso a esses jogos por parte do público nacional e internacional. Além disso, ao destacar os jogos em um portal bem estruturado, o projeto ajudaria a minimizar as dificuldades de marketing que muitos desenvolvedores enfrentam, proporcionando uma vitrine digital de fácil acesso e com um alcance mais amplo.

Outro ponto importante seria a facilitação da interação entre desenvolvedores e streamers, criando oportunidades de parcerias que potencializam a divulgação dos jogos. O PlayConnect poderia oferecer uma plataforma que permite que os desenvolvedores se conectem diretamente com streamers que se alinham ao estilo e à proposta de seus jogos, o que ajudaria a aumentar o alcance e o engajamento do público. Streamers com grande influência poderiam transmitir o gameplay de novos títulos, gerando buzz e criando uma base de fãs desde o lançamento. Para os desenvolvedores, essa colaboração seria uma forma de promover seus jogos sem precisar de grandes orçamentos de marketing, algo que é um desafio constante no mercado de jogos indie.

Além disso, o PlayConnect poderia agir como uma ponte entre os desenvolvedores e possíveis investidores, oferecendo um ambiente seguro e estruturado para a busca de financiamento. Por meio de campanhas de crowdfunding, por exemplo, os desenvolvedores poderiam apresentar seus projetos para uma audiência engajada, enquanto investidores poderiam descobrir novos talentos e ideias inovadoras, contribuindo para a continuidade e crescimento do mercado. O apoio financeiro e a visibilidade que esse tipo de plataforma proporciona são fundamentais para ajudar a superar as barreiras de orçamento que muitos estúdios enfrentam.

O PlayConnect também seria uma excelente ferramenta para a formação de uma rede de colaboração entre os próprios desenvolvedores. Ao conectar estúdios independentes com diferentes especialidades e habilidades, a plataforma facilitaria a troca de conhecimento, recursos e experiências, algo fundamental para quem está começando no mercado de jogos. Essa colaboração poderia se traduzir em um aumento na qualidade dos jogos produzidos, além de promover a união da comunidade indie brasileira, criando um ambiente de suporte mútuo.

Por fim, a integração de streamers e influencers no processo de alavancar o mercado de jogos brasileiros seria uma das maiores contribuições do PlayConnect. Além de atuar como uma plataforma de divulgação, ela ajudaria a consolidar uma cultura gamer sólida no Brasil, criando uma rede de apoio e promoção para os jogos independentes. A visibilidade proporcionada pelos streamers geraria um ciclo virtuoso, onde a demanda por novos jogos cresceria conforme mais pessoas fossem impactadas pelo conteúdo produzido na plataforma, ajudando assim a solidificar a presença dos jogos brasileiros no mercado global.</p>
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
