interface NavbarProps {
  isLightMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isLightMode, toggleTheme }: NavbarProps) {
  return (
    <header className="flex items-center justify-between mb-10 px-4 sm:px-8">
      <h1 className="text-2xl font-bold">
        <a href="/" className="hover:text-pink-500 transition-colors cursor-pointer text-current">
          PlayConnect
        </a>
      </h1>
      <nav className="flex space-x-4 text-sm sm:text-base">
        <a href="/" className="hover:text-pink-500 transition-colors text-current">Home</a>
        <a href="/aboutus" className="hover:text-pink-500 transition-colors text-current">Sobre nós</a>
        <a href="/mercado" className="hover:text-pink-500 transition-colors text-current">Mercado</a>
        <a href="/projeto" className="hover:text-pink-500 transition-colors text-current">Projeto</a>
        <a href="/form" className="hover:text-pink-500 transition-colors text-current">Contato</a>
      </nav>
      <button
        onClick={toggleTheme}
        className={`ml-4 px-3 py-1 rounded border font-semibold transition-colors duration-300
          ${isLightMode
            ? 'border-black text-black hover:bg-black hover:text-white'
            : 'border-white text-white hover:bg-white hover:text-black'}`}
        aria-label="Alternar tema"
      >
        {isLightMode ? 'Modo Noturno' : 'Modo Claro'}
      </button>
    </header>
  );
}
