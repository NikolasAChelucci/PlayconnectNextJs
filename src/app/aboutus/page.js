'use client';

import Image from 'next/image';
import { useState } from 'react';
import Navbar from '../components/navbar'; // Importa a Navbar

export default function AboutUs() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => setIsLightMode(prev => !prev);

  return (
    <main className={`${isLightMode ? 'bg-white text-black' : 'bg-black text-white'} min-h-screen px-5 py-12 transition-colors duration-500`}>
      {/* Usa o componente Navbar importado */}
      <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} />

      {/* Conteúdo Principal */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-10 space-y-10">

        {/* Um pouco sobre nós */}
        <section className="max-w-4xl mx-auto space-y-10 px-4 sm:px-0">
          <div className={`p-8 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 ${isLightMode ? 'bg-gray-100 text-black hover:shadow-pink-500/50' : 'bg-gray-900 text-white hover:shadow-pink-500/50'}`}>
            <h1 className="text-4xl font-semibold mb-6 text-center text-pink-500">Um pouco sobre nós</h1>

            <p className="mb-4 leading-relaxed">
              A PlayConnect nasceu da paixão por jogos e da percepção de uma lacuna no mercado: a dificuldade que desenvolvedores independentes enfrentam para ganhar visibilidade, enquanto streamers buscam constantemente por novos conteúdos para suas audiências.
            </p>

            <p className="mb-4 leading-relaxed">
              Nossa plataforma foi concebida como uma ponte inteligente entre esses dois universos, criando um ecossistema onde:
            </p>

            <ul className="list-disc list-inside mb-8 space-y-2">
              <li>Desenvolvedores encontram exposição para seus jogos</li>
              <li>Streamers descobrem títulos exclusivos</li>
              <li>Jogadores acessam experiências únicas</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className={`p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 ${isLightMode ? 'bg-gray-100 text-black hover:shadow-pink-500/50' : 'bg-gray-900 text-white hover:shadow-pink-500/50'}`}>
              <h2 className="text-2xl font-semibold mb-3 text-pink-500">Nossa Missão</h2>
              <p>
                Democratizar o acesso ao mercado de games, proporcionando ferramentas que impulsionem desenvolvedores independentes e criadores de conteúdo, enriquecendo toda a comunidade gamer.
              </p>
            </div>

            <div className={`p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 ${isLightMode ? 'bg-gray-100 text-black hover:shadow-pink-500/50' : 'bg-gray-900 text-white hover:shadow-pink-500/50'}`}>
              <h2 className="text-2xl font-semibold mb-3 text-pink-500">Nossa Visão</h2>
              <p>
                Ser a principal plataforma de conexão entre desenvolvedores e influenciadores na América Latina até 2027, reconhecida por fomentar a inovação e diversidade no cenário de jogos independentes.
              </p>
            </div>
          </div>
        </section>

        {/* Conheça Nossa Equipe */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Conheça Nossa Equipe</h2>
          <p className="mb-6">Somos um time multidisciplinar unido pela paixão por games e tecnologia:</p>

          <div className="flex gap-4 mb-6">
            <button
              data-tab="atual"
              className="px-4 py-2 rounded bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
              onClick={() => {
                const atual = document.getElementById('atual');
                const antigo = document.getElementById('antigo');
                if (atual && antigo) {
                  atual.style.display = 'flex';
                  antigo.style.display = 'none';
                }
              }}
            >
              Membros Atuais
            </button>
            <button
              data-tab="antigo"
              className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-400 dark:hover:bg-gray-600 transition"
              onClick={() => {
                const atual = document.getElementById('atual');
                const antigo = document.getElementById('antigo');
                if (atual && antigo) {
                  atual.style.display = 'none';
                  antigo.style.display = 'flex';
                }
              }}
            >
              Membros Antigos
            </button>
          </div>

          <div id="atual" className="flex flex-wrap gap-8">
            {/* membros atuais */}
            <div className="w-60 flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
              <Image src="/images/Gabriel.png" alt="Gabriel" width={300} height={300} className="rounded" />
              <h3 className="mt-4 text-xl font-semibold">Gabriel Silva</h3>
              <h4 className="text-sm text-gray-600 dark:text-gray-400">RM: 564133</h4>
              <p className="mt-2 text-center">Estudante de Sistemas de Informação na FIAP</p>
            </div>

            <div className="w-60 flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
              <Image src="/images/luiz.jpg" alt="Luiz Otavio" width={300} height={300} className="rounded" />
              <h3 className="mt-4 text-xl font-semibold">Luiz Otávio Fontes</h3>
              <h4 className="text-sm text-gray-600 dark:text-gray-400">RM: 561537</h4>
              <p className="mt-2 text-center">Assistente Pleno de Segurança da Informação & Estudante de Sistemas de Informação FIAP</p>
            </div>

            <div className="w-60 flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
              <Image src="/images/nikolas.png" alt="Nikolas" width={300} height={300} className="rounded" />
              <h3 className="mt-4 text-xl font-semibold">Nikolas Chelucci</h3>
              <h4 className="text-sm text-gray-600 dark:text-gray-400">RM: 565645</h4>
              <p className="mt-2 text-center">Desenvolvedor Fullstack</p>
            </div>

            <div className="w-60 flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
              <Image src="/images/Samuel.png" alt="Samuel" width={300} height={300} className="rounded" />
              <h3 className="mt-4 text-xl font-semibold">Samuel Cardoso</h3>
              <h4 className="text-sm text-gray-600 dark:text-gray-400">RM: 566170</h4>
              <p className="mt-2 text-center">Engenheiro de QA</p>
            </div>
          </div>

          <div
            id="antigo"
            className="flex flex-wrap gap-8"
            style={{ display: 'none' }}
          >
            {/* membros antigos */}
            <div className="w-60 flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
              <Image src="/images/Eduardo.png" alt="Eduardo" width={300} height={300} className="rounded" />
              <h3 className="mt-4 text-xl font-semibold">Eduardo Mota</h3>
              <h4 className="text-sm text-gray-600 dark:text-gray-400">RM: 563418</h4>
              <p>Scrum Master</p>
              <p>Liderou a concepção inicial da plataforma</p>
            </div>

            <div className="w-60 flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
              <Image src="/images/Pablo.png" alt="Pablo" width={300} height={300} className="rounded" />
              <h3 className="mt-4 text-xl font-semibold">Pablo Calil</h3>
              <h4 className="text-sm text-gray-600 dark:text-gray-400">RM: 562914</h4>
              <p>Ex-Desenvolvedor Front-end (2023-2024)</p>
              <p>Responsável pela arquitetura inicial da interface do usuário.</p>
            </div>

            <div className="w-60 flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
              <Image src="/images/neto.jpg" alt="Neto" width={300} height={300} className="rounded" />
              <h3 className="mt-4 text-xl font-semibold">Carlos Neto</h3>
              <h4 className="text-sm text-gray-600 dark:text-gray-400">RM: 561502</h4>
              <p className="mt-2 text-center">Especialista em Direito Digital</p>
            </div>
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer className={`mt-16 text-center text-sm ${isLightMode ? 'text-gray-700' : 'text-gray-400'}`}>
        <p>© 2025 PlayConnect | Conectando criadores e jogadores</p>
      </footer>
    </main>
  );
}
