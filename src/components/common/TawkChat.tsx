import { useEffect } from "react";

const TAWK_SCRIPT_ID = "tawk-chat-script";
const TAWK_SRC = "https://embed.tawk.to/6aad886da98f283440b1f0d1/1k2qtpr1g";

/** Widget oficial de soporte; se carga una sola vez y únicamente en el navegador. */
export function TawkChat() {
  useEffect(() => {
    if (document.getElementById(TAWK_SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = TAWK_SCRIPT_ID;
    script.async = true;
    script.src = TAWK_SRC;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);
  }, []);

  return null;
}
