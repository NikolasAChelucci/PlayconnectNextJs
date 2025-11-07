interface NavbarProps {
  isLightMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isLightMode, toggleTheme }: NavbarProps) {
  return (
    <header className="flex items-center justify-between mb-10 px-4 sm:px-8">
      <h1 className="text-3xl font-bold tracking-wide">
        <a
          href="/"
          className="hover:text-pink-500 transition-colors cursor-pointer text-current"
        >
          PlayConnect
        </a>
      </h1>

      <nav className="flex space-x-6 text-base sm:text-lg font-medium">
        <a href="/" className="hover:text-pink-500 transition-colors text-current">
          Home
        </a>
        <a href="/aboutus" className="hover:text-pink-500 transition-colors text-current">
          Sobre nós
        </a>
        <a href="/mercado" className="hover:text-pink-500 transition-colors text-current">
          Mercado
        </a>
        <a href="/emalta" className="hover:text-pink-500 transition-colors text-current">
          Em Alta
        </a>
        <a href="/projeto" className="hover:text-pink-500 transition-colors text-current">
          Projeto
        </a>
        <a href="/educa" className="hover:text-pink-500 transition-colors text-current">
          Educação
        </a>
        <a href="/perfil" className="hover:text-pink-500 transition-colors text-current">
          Perfil
        </a>
        <a href="/form" className="hover:text-pink-500 transition-colors text-current">
          Contato
        </a>
      </nav>

      <button
        onClick={toggleTheme}
        className={`ml-4 px-4 py-2 rounded border font-semibold text-base sm:text-lg transition-colors duration-300
          ${
            isLightMode
              ? 'border-black text-black hover:bg-black hover:text-white'
              : 'border-white text-white hover:bg-white hover:text-black'
          }`}
        aria-label="Alternar tema"
      >
        {isLightMode ? 'Modo Noturno' : 'Modo Claro'}
      </button>
    </header>
  );
}
