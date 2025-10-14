'use client';

import { useState } from 'react';
import Navbar from '../components/navbar'; // Navbar reutilizável

export default function EducacaoSocioambiental() {
  const [isLightMode, setIsLightMode] = useState(false);
  const toggleTheme = () => setIsLightMode((prev) => !prev);

  return (
    <main
      className={`${
        isLightMode ? 'bg-white text-black' : 'bg-black text-white'
      } min-h-screen px-5 py-12 transition-colors duration-500`}
    >
      <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} />

      <section className="pesquisa-container flex flex-col gap-12 justify-center px-4 sm:px-8 max-w-5xl mx-auto">
        {/* Bloco fixo 1 */}
        <div
          className={`pesquisa p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ${
            isLightMode ? 'bg-green-100 text-black' : 'bg-green-900 text-white'
          }`}
        >
          <h2 className="text-3xl font-bold uppercase mb-4 text-green-500">
            Educação Socioambiental no Brasil
          </h2>
          <p className="text-base leading-relaxed max-w-4xl mx-auto">
            A educação socioambiental é essencial para formar cidadãos conscientes sobre a preservação do meio ambiente e a promoção da justiça social. Iniciativas em escolas, universidades e organizações sociais têm mostrado impacto positivo na formação de valores sustentáveis e no engajamento comunitário.
          </p>
        </div>

        {/* Bloco fixo 2 */}
        <div
          className={`pesquisa p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ${
            isLightMode ? 'bg-green-100 text-black' : 'bg-green-900 text-white'
          }`}
        >
          <h2 className="text-3xl font-bold uppercase mb-4 text-green-500">
            Desafios e Oportunidades
          </h2>
          <p className="text-base leading-relaxed max-w-4xl mx-auto">
            Apesar dos avanços, muitos desafios permanecem. A falta de recursos, infraestrutura adequada e formação de professores especializados dificultam a implementação de programas socioambientais. Por outro lado, há oportunidades de inovação pedagógica e engajamento comunitário que podem gerar impactos duradouros.
          </p>
        </div>

        {/* Iniciativas Inspiradoras */}
        <div
          className={`pesquisa p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ${
            isLightMode ? 'bg-green-100 text-black' : 'bg-green-900 text-white'
          }`}
        >
          <h2 className="text-3xl font-bold uppercase mb-6 text-green-500">
            Iniciativas Inspiradoras
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Card 1 */}
            <div className="bg-card p-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Escola Municipal realiza projeto para Conscientização Ambiental
                </h3>
                <p className="text-muted-foreground mb-2">
                  Iniciativa visa incentivar a reciclagem e a coleta seletiva dentro e no entorno da unidade escolar.
                </p>
                <p>
                  A Escola Municipal de Ensino Fundamental (EMEF) Padre José de Anchieta, localizada na região leste da capital,
                  realizou em 2020 o projeto “Lixo Extraordinário – das bolas de papel a Educação Ambiental”, que reafirma a proposta
                  da unidade e incentiva um novo olhar para as questões ambientais.
                </p>
              </div>
              <img
                src="/images/escolamuni.jpg"
                alt="Projeto de Conscientização Ambiental"
                className="w-full h-48 object-cover rounded-xl mt-4"
              />
            </div>

            {/* Card 2 */}
            <div className="bg-card p-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Programas da Codau e o impacto positivo da Educação Ambiental
                </h3>
                <p>
                  O balanço dos programas de educação ambiental da Codau revela que o programa ‘Óleo com Bons Olhos’ voltado para alunos da rede de ensino,
                  recolheu 4.200 litros de óleo usado de cozinha — um poluente que deixou de ser descartado na rede de esgoto.
                </p>
                <p className="mt-2">
                  Outras atividades como os eventos da Semana da Água e visitas monitoradas de estudantes nas unidades da Companhia reuniram cerca de
                  43 mil participantes entre 2021 e 2024. Oportunidades geradas para mostrar que cada cidadão pode ser um protagonista nas ações de
                  preservação dos recursos naturais, tão fundamentais para o equilíbrio da vida no planeta.
                </p>
              </div>
              <img
                src="/images/projetociancas.jpg"
                alt="Projeto Óleo com Bons Olhos"
                className="w-full h-48 object-cover rounded-xl mt-4"
              />
            </div>

            {/* Card 3 */}
            <div className="bg-card p-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Horta Social: parceria entre Instituto de Arte e Cidadania do Ceará e o SCFV
                </h3>
                <p>
                  Em parceria com o Instituto de Arte e Cidadania do Ceará (IAC), o Horta Social engloba parte das atividades do Serviço
                  de Convivência e Fortalecimento de Vínculos, voltadas a idosos.
                </p>
                <p className="mt-2">
                  Entre as ações, estão práticas educativas sobre envelhecimento e bem-estar, participação social, autonomia e protagonismo da pessoa idosa.
                  Também são realizadas trocas de conhecimento sobre horta social e transformação socioambiental, sabedoria popular e ervas medicinais,
                  valorizando memórias, habilidades e potencialidades.
                </p>
              </div>
              <img
                src="/images/instituto.jpg"
                alt="Projeto Horta Social"
                className="w-full h-48 object-cover rounded-xl mt-4"
              />
            </div>
          </div>
        </div>

        {/* Bloco fixo adicional */}
        <div
          className={`pesquisa p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ${
            isLightMode ? 'bg-green-100 text-black' : 'bg-green-900 text-white'
          }`}
        >
          <h2 className="text-3xl font-bold uppercase mb-4 text-green-500">
            O Papel das Comunidades
          </h2>
          <p className="text-base leading-relaxed max-w-4xl mx-auto">
            Comunidades locais desempenham papel fundamental na educação socioambiental. Ao envolver famílias, escolas e organizações locais, é possível criar projetos mais duradouros e alinhados às necessidades da população, fortalecendo a conscientização ambiental e social.
          </p>
        </div>

        <div
          className={`pesquisa p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ${
            isLightMode ? 'bg-green-100 text-black' : 'bg-green-900 text-white'
          }`}
        >
          <h2 className="text-3xl font-bold uppercase mb-4 text-green-500">
            Como Engajar Jovens e Educadores
          </h2>
          <p className="text-base leading-relaxed max-w-4xl mx-auto">
            A tecnologia, jogos educativos e workshops interativos são ferramentas poderosas para engajar jovens e educadores. Ao transformar aprendizagem em experiência prática, é possível estimular pensamento crítico, criatividade e responsabilidade socioambiental.
          </p>
        </div>
      </section>

      {/* Rodapé */}
      <footer
        className={`mt-16 text-center text-sm ${
          isLightMode ? 'text-gray-700' : 'text-gray-400'
        }`}
      >
        <p>© 2025 PlayConnect | Conectando criadores e jogadores e promovendo educação e sustentabilidade</p>
      </footer>
    </main>
  );
}
