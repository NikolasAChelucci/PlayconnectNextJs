"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import VoltarTopo from '../components/VoltarTopo';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { dadosDeUso } from "../utils/dadosdeuso";

// Componente customizado para Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-green-900 text-green-100 p-2 rounded shadow-lg border border-green-700">
        <p className="font-semibold">Mês: {label}</p>
        <p>
          {data.horas} horas {data.previsto ? "(previsto)" : ""}
        </p>
      </div>
    );
  }
  return null;
};

export default function Perfil() {
  const [isLightMode, setIsLightMode] = useState(false);
  const toggleTheme = () => setIsLightMode((prev) => !prev);

  function preverHorasFuturas(uso, mesesFuturos) {
    const ultimaMes = uso.horasAssistidas[uso.horasAssistidas.length - 1].mes;
    const taxa =
      uso.horasAssistidas[1].horas / uso.horasAssistidas[0].horas - 1;
    const previsao = [];

    for (let i = 1; i <= mesesFuturos; i++) {
      const mes = ultimaMes + i;
      const horas = Math.round(
        uso.horasAssistidas[uso.horasAssistidas.length - 1].horas *
          Math.pow(1 + taxa, i)
      );
      previsao.push({ mes, horas, previsto: true });
    }

    return previsao;
  }

  const jogosOrdenados = [...dadosDeUso].sort((a, b) => {
    const totalA = a.horasAssistidas.reduce((sum, item) => sum + item.horas, 0);
    const totalB = b.horasAssistidas.reduce((sum, item) => sum + item.horas, 0);
    return totalB - totalA;
  });

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isLightMode ? "bg-white text-black" : "bg-background text-foreground"
      }`}
    >
      <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} />
      <VoltarTopo />

      <main className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Seu Perfil de Engajamento
        </h1>
        <p className="text-center text-lg text-muted-foreground mb-10">
          Veja os jogos que você mais acompanhou na PlayConnect!
        </p>

        <div className="flex flex-col gap-10">
          {jogosOrdenados.map((game, index) => {
            const previsaoFutura = preverHorasFuturas(game, 3);
            const dadosComPrevisao = [
              ...game.horasAssistidas.map((d) => ({ ...d, previsto: false })),
              ...previsaoFutura,
            ];

            const totalPrevisto = previsaoFutura.reduce((sum, d) => sum + d.horas, 0);
            const taxaMedia = (
              ((game.horasAssistidas[game.horasAssistidas.length - 1].horas /
                game.horasAssistidas[0].horas -
                1) *
                100
              ).toFixed(1)
            );

            return (
              <div
                key={game.gameId}
                className="bg-card shadow-lg rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6"
              >
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
                    #{index + 1}
                  </span>
                  <img
                    src={game.image}
                    alt={game.gameTitle}
                    className="w-48 h-48 sm:w-56 sm:h-56 object-contain rounded-xl shadow-lg"
                  />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <h2 className="text-2xl font-semibold">{game.gameTitle}</h2>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Total de horas assistidas nos últimos meses
                  </p>

                  <p className="text-sm text-muted-foreground mt-1">
                    Previsão de crescimento nos próximos 3 meses:{" "}
                    <strong>{totalPrevisto} horas</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Crescimento médio mensal: <strong>{taxaMedia}%</strong>
                  </p>

                  <BarChart
                    width={400}
                    height={200}
                    data={dadosComPrevisao}
                    className="mt-4"
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="mes"
                      label={{
                        value: "Meses",
                        position: "insideBottomRight",
                        offset: -5,
                      }}
                    />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar
                      dataKey="horas"
                      barSize={30}
                      name="Horas Assistidas"
                      fill={(data) => (data.previsto ? "#22c55e" : "#4ade80")}
                    />
                  </BarChart>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
