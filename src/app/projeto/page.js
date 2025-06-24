'use client';

import Script from 'next/script';

export default function Projeto() {
  return (
    <main className="project-container">
      <header className="steam-header">
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

        {/* VLibras */}
        <div vw className="enabled">
          <div vw-access-button className="active"></div>
          <div vw-plugin-wrapper>
            <div className="vw-plugin-top-wrapper"></div>
          </div>
        </div>

        <nav className="steam-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">Sobre Nós</a></li>
            <li><a href="/mercado">Mercado</a></li>
            <li><a href="/projeto">Projeto</a></li>
            <li><a href="/form">Contato</a></li>
          </ul>
        </nav>
      </header>

      <section className="section-content">
        <div className="steam-header-section">
          <h2>VISÃO GERAL DO PROJETO</h2>
          <button className="steam-button">DOCUMENTAÇÃO COMPLETA</button>
        </div>
        <p className="steam-text">Conectando criadores e influenciadores na nova era dos jogos independentes</p>
      </section>

      <section className="section-content">
        <h2>RECURSOS PRINCIPAIS</h2>
        <ul className="interactive-list">
          <li>Catálogo dinâmico de jogos independentes</li>
          <li>Sistema de matchmaking entre desenvolvedores e streamers</li>
          <li>Dashboard analítico em tempo real</li>
          <li>Sistema de avaliação integrado</li>
          <li>API pública para integrações</li>
        </ul>
      </section>

      <section className="section-content">
        <h2>ROADMAP DE IMPLEMENTAÇÃO</h2>
        <div className="phase-timeline">
          <div className="phase-item">
            <h3>FASE 1: CONCEPÇÃO (Q3 2024)</h3>
            <div className="phase-details">
              <p>Definição da arquitetura principal e design do sistema</p>
              <div className="progress-bar" data-progress="100"></div>
            </div>
          </div>

          <div className="phase-item">
            <h3>FASE 2: DESENVOLVIMENTO (Q4 2024)</h3>
            <div className="phase-details">
              <p>Implementação do core da plataforma</p>
              <div className="progress-bar" data-progress="65"></div>
            </div>
          </div>

          <div className="phase-item">
            <h3>FASE 3: LANÇAMENTO (Q1 2025)</h3>
            <div className="phase-details">
              <p>Release inicial para parceiros selecionados</p>
              <div className="progress-bar" data-progress="15"></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="steam-footer">
        <p>© 2025 PlayConnect. Todos os direitos reservados.</p>
      </footer>

      {/* Scripts externos */}
      <Script src="https://vlibras.gov.br/app/vlibras-plugin.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/JS/Projeto.js" strategy="afterInteractive" />
    </main>
  );
}
