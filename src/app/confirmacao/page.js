"use client";

import React, { useEffect } from "react";

export default function Confirmacao() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <header className="success-header">
        <h1>PlayConnect</h1>

        {/* Switcher Dark/Light */}
        <div className="form-check form-switch d-flex align-items-center gap-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="themeToggle"
            title="Alternar tema claro/escuro"
          />
          <label className="form-check-label" htmlFor="themeToggle">
            <span id="themeIcon">🌞</span>
          </label>
        </div>
      </header>

      <main>
        <section className="playconnect-section">
          <h2>Mensagem Enviada com Sucesso!</h2>
          <p>
            Obrigado por entrar em contato com a equipe PlayConnect. Em breve
            retornaremos seu contato.
          </p>
          <a href="/" className="button">
            Voltar para a Home
          </a>
        </section>
      </main>

      <footer>
        <p>© 2025 PlayConnect | Conectando criadores e jogadores</p>
      </footer>

      {/* VLibras */}
      <div vw="true" className="enabled">
        <div vw-access-button="true" className="active"></div>
        <div vw-plugin-wrapper="true">
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
    </>
  );
}
