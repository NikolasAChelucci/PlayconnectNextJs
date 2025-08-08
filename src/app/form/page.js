'use client';

import { useState } from 'react';
import Script from 'next/script';
import Navbar from '../components/navbar';  // Importa Navbar

export default function Form() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [senha, setSenha] = useState('');

const [validacoes, setValidacoes] = useState([false, false, false, false, false]);
const [forca, setForca] = useState(0);


const regras = [
  { regex: /^.{12,256}$/, mensagem: "De 12 a 256 caracteres" },
  { regex: /[a-z]/, mensagem: "Letra minúscula" },
  { regex: /[A-Z]/, mensagem: "Letra maiúscula" },
  { regex: /[0-9]/, mensagem: "Número" },
  { regex: /[!@#\$%\^\&*\)\(+=._-]/, mensagem: "Caractere especial" },
];

const handleSenhaChange = (e) => {
  const valor = e.target.value;
  setSenha(valor);
  const resultados = regras.map(r => r.regex.test(valor));
  setValidacoes(resultados);

  // Calcula força com base em quantos critérios foram atendidos
  const score = resultados.filter(Boolean).length;
  setForca(score); // de 0 a 5
};


const senhaValida = validacoes.every(v => v);


  const toggleTheme = () => setIsLightMode(prev => !prev);

  return (
    <>
      <main className={`${isLightMode ? 'bg-white text-black' : 'bg-black text-white'} min-h-screen px-5 py-12 transition-colors duration-500`}>
        
        {/* Navbar com controle de tema */}
        <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} />

        {/* Conteúdo Principal */}
        <main className="max-w-4xl mx-auto px-4 sm:px-0">
          <section className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-md transition-colors duration-300">
            <h2 className="text-3xl font-semibold mb-6 text-pink-500 text-center">Entre em Contato</h2>
            <p className="mb-6 text-center">Preencha o formulário abaixo para falar com nossa equipe.</p>
            <form
  id="formularioContato"
  action="/confirmacao"
  method="GET"
  className="space-y-6 text-black dark:text-white"
  onSubmit={(e) => {
    if (!senhaValida) e.preventDefault(); // Evita envio se a senha for inválida
  }}
>
  <div>
    <label htmlFor="nome" className="block mb-2 font-semibold">Nome:</label>
    <input
      type="text"
      id="nome"
      name="nome"
      placeholder="Digite seu nome"
      required
      className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
    />
  </div>

  <div>
    <label htmlFor="email" className="block mb-2 font-semibold">E-mail:</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Digite seu e-mail"
      required
      className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
    />
  </div>

  <div>
    <label htmlFor="assunto" className="block mb-2 font-semibold">Assunto:</label>
    <input
      type="text"
      id="assunto"
      name="assunto"
      placeholder="Digite o assunto"
      required
      className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
    />
  </div>

  <div>
    <label htmlFor="mensagem" className="block mb-2 font-semibold">Mensagem:</label>
    <textarea
      id="mensagem"
      name="mensagem"
      rows="5"
      placeholder="Escreva sua mensagem..."
      required
      className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
    ></textarea>
  </div>

  {/* Campo de Senha */}
  <div>
    <label htmlFor="senha" className="block mb-2 font-semibold">Senha:</label>
    <input
      type="password"
      id="senha"
      name="senha"
      placeholder="Digite uma senha segura"
      value={senha}
      onChange={handleSenhaChange}
      required
      className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
    />
    <div className="mt-2 space-y-1 text-sm">
      {regras.map((regra, index) => (
        <p key={index} className={validacoes[index] ? 'text-green-600' : 'text-red-600'}>
          {validacoes[index] ? '✓' : '✗'} {regra.mensagem}
        </p>
      ))}
    </div>
  </div>

  {/* Barra de força da senha */}
<div className="mt-4">
  <div className="h-3 w-full rounded-full bg-gray-300 overflow-hidden">
    <div
      className={`h-full transition-all duration-300 ${
        forca <= 2
          ? 'bg-red-500 w-1/3'
          : forca === 3 || forca === 4
          ? 'bg-yellow-400 w-2/3'
          : 'bg-green-500 w-full'
      }`}
    ></div>
  </div>
  <p className={`mt-1 text-sm font-semibold ${
    forca <= 2
      ? 'text-red-500'
      : forca === 3 || forca === 4
      ? 'text-yellow-500'
      : 'text-green-600'
  }`}>
    {forca <= 2
      ? 'Senha fraca'
      : forca === 3 || forca === 4
      ? 'Senha média'
      : 'Senha forte'}
  </p>
</div>


  <button
    type="submit"
    disabled={!senhaValida}
    className={`w-full ${senhaValida ? 'bg-pink-500 hover:bg-pink-600' : 'bg-gray-400 cursor-not-allowed'} text-white font-semibold rounded py-3 transition-colors duration-300`}
  >
    Enviar
  </button>
</form>

          </section>
        </main>

        {/* Footer */}
        <footer className={`mt-16 text-center text-sm ${isLightMode ? 'text-gray-700' : 'text-gray-400'}`}>
          <p>© 2025 PlayConnect | Conectando criadores e jogadores</p>
        </footer>

        {/* VLibras */}
        <div {...{ vw: '' }} className="enabled">
          <div {...{ 'vw-access-button': '' }} className="active"></div>
          <div {...{ 'vw-plugin-wrapper': '' }}>
            <div className="vw-plugin-top-wrapper"></div>
          </div>
        </div>
      </main>

      {/* Scripts externos */}
      <Script src="https://vlibras.gov.br/app/vlibras-plugin.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/JS/form.js" strategy="afterInteractive" />
    </>
  );
}
