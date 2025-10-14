// src/utils/dadosDeUso.ts

interface Uso {
  gameId: number;
  gameTitle: string;
  image: string;
  horasAssistidas: { mes: number; horas: number }[];
}

// Função para gerar horas assistidas simuladas
export function gerarHorasAssistidas(baseHoras: number, taxaCrescimento: number, meses: number = 6) {
  const dados: { mes: number; horas: number }[] = [];
  for (let mes = 1; mes <= meses; mes++) {
    const horas = Math.round(baseHoras * Math.pow(1 + taxaCrescimento, mes));
    dados.push({ mes, horas });
  }
  return dados;
}

// Dados fictícios por usuário
export const dadosDeUso: Uso[] = [
  {
    gameId: 1,
    gameTitle: "Dandara",
    image: "/images/dandara.jpg",
    horasAssistidas: gerarHorasAssistidas(5, 0.3), // começa com 5h e cresce 30% ao mês
  },
  {
    gameId: 2,
    gameTitle: "Horizon Chase",
    image: "/images/horizonchase.jpg",
    horasAssistidas: gerarHorasAssistidas(3, 0.25),
  },
  {
    gameId: 3,
    gameTitle: "Pocket Bravery",
    image: "/images/pocket.jpg",
    horasAssistidas: gerarHorasAssistidas(2, 0.2),
  },
  // adicione outros jogos conforme quiser
];
