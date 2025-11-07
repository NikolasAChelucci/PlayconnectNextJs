"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import GameCard from "../components/gamecard";
import VoltarTopo from '../components/VoltarTopo';


export default function EmAlta() {
  const [games, setGames] = useState([]);
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => setIsLightMode(prev => !prev);

  useEffect(() => {
    fetch("/data/games.json")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Erro ao carregar jogos:", err));
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isLightMode ? 'bg-white text-black' : 'bg-background text-foreground'}`}>
      <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} />
      <VoltarTopo />

      <main className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Jogos em Alta
        </h1>

        {/* Parágrafos informativos adicionados */}
        <p className="text-center text-lg text-muted-foreground mb-4">
          Nesta seção, você confere os títulos mais populares da comunidade PlayConnect.
        </p>
        <p className="text-center text-lg text-muted-foreground mb-4">
          Esses jogos estão em destaque por seu engajamento, inovação e pelo apoio da comunidade de criadores.
        </p>
        <p className="text-center text-lg text-muted-foreground mb-10">
          Explore, descubra novas experiências e apoie os desenvolvedores independentes!
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
