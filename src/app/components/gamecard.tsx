"use client";

import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { gerarDadosExponenciais } from "../utils/exponencial";

interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  views: number;
  vendas: number;
}

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const [tipoGrafico, setTipoGrafico] = useState<"views" | "vendas" | null>(null);
  const taxaCrescimento = 0.2; // aqui estamos usando uma taxa fictícia

  const data = tipoGrafico
    ? gerarDadosExponenciais(game[tipoGrafico], taxaCrescimento)
    : [];

  return (
    <div className="bg-card shadow-xl rounded-3xl p-8 flex flex-col gap-4">
      <div className="flex items-center gap-6">
        <img
          src={game.image}
          alt={game.title}
          className="w-64 h-64 sm:w-72 sm:h-72 object-contain rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">{game.title}</h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-1">
            {game.description}
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <button
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => setTipoGrafico("views")}
        >
          Acompanhar Visualizações
        </button>
        <button
          className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
          onClick={() => setTipoGrafico("vendas")}
        >
          Acompanhar Vendas
        </button>
      </div>

      {tipoGrafico && (
        <LineChart width={500} height={300} data={data} className="mt-6">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" label={{ value: "Meses", position: "insideBottomRight", offset: -5 }} />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="valor"
            stroke={tipoGrafico === "views" ? "#8884d8" : "#82ca9d"}
            strokeWidth={2}
          />
        </LineChart>
      )}
    </div>
  );
}
