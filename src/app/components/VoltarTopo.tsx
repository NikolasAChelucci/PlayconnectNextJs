'use client';

import { useEffect, useState } from 'react';

export default function VoltarTopo() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > 300);
    window.addEventListener('scroll', aoRolar);
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  return (
    visivel && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-5 right-5 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition"
        aria-label="Voltar ao topo"
      >
        ↑
      </button>
    )
  );
}
