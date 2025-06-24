'use client';

import Script from 'next/script';

export default function Form() {
  return (
    <>
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

      <main>
        <section className="contato">
          <h2>Entre em Contato</h2>
          <p>Preencha o formulário abaixo para falar com nossa equipe.</p>
          <form id="formularioContato" action="/confirmacao" method="GET">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />
            <span id="erroNome" className="erro-mensagem"></span>

            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />
            <span id="erroEmail" className="erro-mensagem"></span>

            <label htmlFor="assunto">Assunto:</label>
            <input type="text" id="assunto" name="assunto" placeholder="Digite o assunto" required />
            <span id="erroAssunto" className="erro-mensagem"></span>

            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows="5" placeholder="Escreva sua mensagem..." required></textarea>
            <span id="erroMensagem" className="erro-mensagem"></span>

            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2025 PlayConnect | Conectando criadores e jogadores</p>
      </footer>

      {/* VLibras */}
      <div vw className="enabled">
        <div vw-access-button className="active"></div>
        <div vw-plugin-wrapper>
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>

      {/* Scripts externos */}
      <Script src="https://vlibras.gov.br/app/vlibras-plugin.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/JS/form.js" strategy="afterInteractive" />
    </>
  );
}
