"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function Background() {
  const pathname = usePathname();
  const [isScriptReady, setIsScriptReady] = useState(false);

  useEffect(() => {
    if (isScriptReady && window.particlesJS) {
      const container = document.getElementById("particles-bg");

      if (container) {
        container.innerHTML = "";
      }

      window.particlesJS.load("particles-bg", "/json/particles.json");
    }
  }, [pathname, isScriptReady]);

  return (
    <div
      id="particles-bg"
      className="absolute flex top-0 bottom-0 right-0 left-0 bg-yellow bg-cover bg-center bg-no-repeat -z-10"
    >
      <Script
        defer
        src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
        onReady={() => setIsScriptReady(true)}
      />
    </div>
  );
}
