'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function AboutUs() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <header>
        <h1>
          <a href="/index" title="clique aqui para ser direcionado à página principal">
            PlayConnect
          </a>
        </h1>
        <nav>
          <ul>
            <li><a href="/index">Home</a></li>
            <li><a href="/aboutus">Sobre nós</a></li>
            <li><a href="/mercado">Mercado</a></li>
            <li><a href="/projeto">Projeto</a></li>
            <li><a href="/form">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h1>Um pouco sobre nós</h1>

          <div>
            <p>A PlayConnect nasceu da paixão por jogos e da percepção de uma lacuna no mercado: a dificuldade que desenvolvedores independentes enfrentam para ganhar visibilidade, enquanto streamers buscam constantemente por novos conteúdos para suas audiências.</p>

            <p>Nossa plataforma foi concebida como uma ponte inteligente entre esses dois universos, criando um ecossistema onde:</p>

            <ul>
              <li>Desenvolvedores encontram exposição para seus jogos</li>
              <li>Streamers descobrem títulos exclusivos</li>
              <li>Jogadores acessam experiências únicas</li>
            </ul>

            <div>
              <div>
                <h2>Nossa Missão</h2>
                <p>Democratizar o acesso ao mercado de games, proporcionando ferramentas que impulsionem desenvolvedores independentes e criadores de conteúdo, enriquecendo toda a comunidade gamer.</p>
              </div>

              <div>
                <h2>Nossa Visão</h2>
                <p>Ser a principal plataforma de conexão entre desenvolvedores e influenciadores na América Latina até 2027, reconhecida por fomentar a inovação e diversidade no cenário de jogos independentes.</p>
              </div>
            </div>
          </div>

          <h2>Conheça Nossa Equipe</h2>
          <p>Somos um time multidisciplinar unido pela paixão por games e tecnologia:</p>

          <div>
            <button data-tab="atual">Membros Atuais</button>
            <button data-tab="antigo">Membros Antigos</button>
          </div>

          <div id="atual">
            <div>
              <Image src="/images/Gabriel.png" alt="Gabriel" width={300} height={300} />
              <h3>Gabriel Silva</h3>
              <h4>RM: 564133</h4>
              <p>Estudante de Sistemas de Informação na FIAP</p>
            </div>

            <div>
              <Image src="/images/luiz.jpg" alt="Luiz Otavio" width={300} height={300} />
              <h3>Luiz Otávio Fontes</h3>
              <h4>RM: 561537</h4>
              <p>Assistente Pleno de Segurança da Informação & Estudante de Sistemas de Informação FIAP</p>
            </div>

            <div>
              <Image src="/images/nikolas.png" alt="Nikolas" width={300} height={300} />
              <h3>Nikolas Chelucci</h3>
              <h4>RM: 565645</h4>
              <p>Desenvolvedor Fullstack</p>
            </div>

            <div>
              <Image src="/images/Samuel.png" alt="Samuel" width={300} height={300} />
              <h3>Samuel Cardoso</h3>
              <h4>RM: 566170</h4>
              <p>Engenheiro de QA</p>
            </div>

            <div>
              <Image src="/images/neto.jpg" alt="Neto" width={300} height={300} />
              <h3>Carlos Neto</h3>
              <h4>RM: 561502</h4>
              <p>Especialista em Direito Digital</p>
            </div>
          </div>

          <div id="antigo" style={{ display: 'none' }}>
            <div>
              <Image src="/images/Eduardo.png" alt="Eduardo" width={300} height={300} />
              <h3>Eduardo Mota</h3>
              <h4>RM: 563418</h4>
              <p>Scrum Master</p>
              <p>Liderou a concepção inicial da plataforma</p>
            </div>

            <div>
              <Image src="/images/Pablo.png" alt="Pablo" width={300} height={300} />
              <h3>Pablo Calil</h3>
              <h4>RM: 562914</h4>
              <p>Ex-Desenvolvedor Front-end (2023-2024)</p>
              <p>Responsável pela arquitetura inicial da interface do usuário.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 PlayConnect | Conectando criadores e jogadores</p>
      </footer>

      {/* Estrutura do VLibras */}
      <div vw className="enabled">
        <div vw-access-button className="active"></div>
        <div vw-plugin-wrapper>
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
    </>
  );
}
