"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import GameCard from "../components/gamecard";

export default function EmAlta() {
  const [games, setGames] = useState([]);
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => setIsLightMode(prev => !prev);

  // O fetch aqui busca os dados do JSON dentro da pasta public
  useEffect(() => {
    fetch("/data/games.json")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Erro ao carregar jogos:", err));
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isLightMode ? 'bg-white text-black' : 'bg-background text-foreground'}`}>
      <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} />

      <main className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Jogos em Alta
        </h1>
        <p className="text-center text-lg text-muted-foreground mb-10">
          A PlayConnect impulsiona o crescimento dos jogos independentes, conectando desenvolvedores e streamers, veja o resultado.
        </p>

        {games.length === 0 ? (
          <p className="text-center text-lg mt-10">Carregando jogos...</p>
        ) : (
          <div className="flex flex-col gap-10">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
