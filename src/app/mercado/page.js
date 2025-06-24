'use client';

import Script from 'next/script';

export default function Mercado() {
  return (
    <main>
      <header>
        <h1>
          <a href="/">PlayConnect</a>
        </h1>

        {/* Switcher Dark/Light */}
        <div className="form-check form-switch d-flex align-items-center gap-2">
          <input className="form-check-input" type="checkbox" id="themeToggle" title="Alternar tema claro/escuro" />
          <label className="form-check-label" htmlFor="themeToggle">
            <span id="themeIcon">🌞</span>
          </label>
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

      <section className="pesquisa-container">
        <div className="pesquisa">
          <h2>O Mercado de Jogos Independentes no Brasil</h2>
          <p>O mercado de jogos independentes no Brasil tem mostrado um crescimento notável nos últimos anos...</p>
        </div>

        <div className="pesquisa">
          <h2>Desafios para se Destacar no Mercado Global</h2>
          <p>Apesar do crescimento, os desenvolvedores brasileiros enfrentam desafios significativos...</p>
        </div>

        <div className="pesquisa">
          <h2>Jogos Brasileiros que se Destacam</h2>
          <div className="pesquisa-img">
            <img src="/images/dandara.jpg" alt="Dandara" />
            <img src="/images/pocket.jpg" alt="Pocket Bravery" />
          </div>
          <p>Alguns jogos brasileiros conseguiram se destacar no mercado internacional...</p>
        </div>

        <div className="pesquisa">
          <h2>O Trabalho dos Desenvolvedores Brasileiros</h2>
          <div className="pesquisa-img">
            <img src="/images/devs.jpg" alt="Desenvolvedores brasileiros" />
          </div>
          <p>O trabalho dos desenvolvedores brasileiros é caracterizado por paixão e resiliência...</p>
        </div>

        <div className="pesquisa">
          <h2>A Influência dos Streamers no Crescimento do Mercado</h2>
          <div className="pesquisa-img">
            <img src="/images/streamer.jpg" alt="Streamers" />
          </div>
          <p>Os streamers desempenham um papel fundamental na promoção e divulgação dos jogos independentes...</p>
        </div>

        <div className="pesquisa">
          <h2>Como o Projeto PlayConnect Ajudaria no Crescimento do Mercado</h2>
          <p>O projeto PlayConnect pode ser um fator crucial para impulsionar o crescimento do mercado de jogos independentes no Brasil...</p>
        </div>
      </section>

      <footer>
        <p>© 2025 PlayConnect | Conectando criadores e jogadores</p>
      </footer>

      {/* Scripts Externos */}
      <Script src="https://vlibras.gov.br/app/vlibras-plugin.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/JS/Mercado.js" strategy="afterInteractive" />
    </main>
  );
}
