"use client";

import { useEffect } from "react";

export default function VLibrasWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    script.onload = () => {
      if (window && "VLibras" in window) {
        new (window as any).VLibras.Widget("https://vlibras.gov.br/app");
      }
    };
    document.body.appendChild(script);

    // Cleanup (caso a página recarregue no ambiente dev)
    return () => {
      const existing = document.querySelector("script[src='https://vlibras.gov.br/app/vlibras-plugin.js']");
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <div vw class="enabled">
            <div vw-access-button class="active"></div>
            <div vw-plugin-wrapper>
              <div class="vw-plugin-top-wrapper"></div>
            </div>
          </div>
        `,
      }}
    />
  );
}
