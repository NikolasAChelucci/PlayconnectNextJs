export function gerarDadosExponenciais(M0, r, meses = 12) {
  return Array.from({ length: meses }, (_, t) => ({
    mes: t + 1,
    valor: Math.round(M0 * Math.exp(r * t)),
  }));
}
