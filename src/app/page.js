'use client';

import Script from 'next/script';

export default function Home() {
  return (
    <main>
      <header>
        <h1>PlayConnect</h1>

        {/* Switcher Dark/Light */}
        <div className="form-check form-switch d-flex align-items-center gap-2">
          <input className="form-check-input" type="checkbox" id="themeToggle" title="Alternar tema claro/escuro" />
          <label className="form-check-label" htmlFor="themeToggle">
            <span id="themeIcon">🌞</span>
          </label>
        </div>

        {/* Estrutura do VLibras */}
        <div vw className="enabled">
          <div vw-access-button className="active"></div>
          <div vw-plugin-wrapper>
            <div className="vw-plugin-top-wrapper"></div>
          </div>
        </div>

        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">Sobre nós</a></li>
            <li><a href="/mercado">Mercado</a></li>
            <li><a href="/projeto">Projeto</a></li>
            <li><a href="/form">Contato</a></li>
          </ul>
        </nav>
      </header>

      <section className="welcome-container">
        <div className="welcome">
          <h2>Bem-vindo ao PlayConnect</h2>
          <p>
            O <strong>PlayConnect</strong> é a ponte entre desenvolvedores
            independentes e streamers, conectando criadores de jogos com
            influenciadores digitais. Nossa plataforma permite que streamers
            descubram e testem novos jogos antes do lançamento, enquanto
            desenvolvedores ampliam sua visibilidade e recebem feedback valioso
            da comunidade.
          </p>
        </div>

        <div className="welcome">
          <h2>Como Funciona?</h2>
          <p>Participar do <strong>PlayConnect</strong> é simples e intuitivo:</p>
          <ol>
            <li><strong>Desenvolvedores:</strong> Criam um perfil e cadastram seus jogos na plataforma.</li>
            <li><strong>Streamers:</strong> Navegam pelo catálogo e solicitam acesso a jogos compatíveis com seu público.</li>
            <li><strong>Parceria:</strong> Streamers jogam, divulgam e criam conteúdo, ajudando a impulsionar os jogos em troca de visibilidade e benefícios exclusivos.</li>
          </ol>
        </div>

        <div className="welcome">
          <h2>Por que usar o PlayConnect?</h2>
          <ul>
            <li>Aumento de alcance: Desenvolvedores ganham maior visibilidade com a divulgação de influenciadores.</li>
            <li>Marketing orgânico e autêntico: Streamers promovem os jogos para audiências altamente engajadas.</li>
            <li>Feedback direto e aprimoramento contínuo: Desenvolvedores recebem insights valiosos para aprimorar seus jogos.</li>
          </ul>
        </div>

        <div className="welcome">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JiDGF3ktBiU?si=5ShZ6RxUy18f5K8Z"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <footer>
        <p>© 2025 PlayConnect | Conectando criadores e jogadores</p>
      </footer>

      {/* Scripts externos */}
      <Script src="https://vlibras.gov.br/app/vlibras-plugin.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/JS/index.js" strategy="afterInteractive" />
    </main>
  );
}
