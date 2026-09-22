import { createFileRoute, Link } from "@tanstack/react-router";

import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/config/site";

const title = `Política de cookies | ${siteConfig.shortName}`;

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title },
      {
        name: "description",
        content: "Categorías de almacenamiento y opciones de privacidad del sitio.",
      },
    ],
  }),
  component: CookiePolicy,
});

function CookiePolicy() {
  const openPreferences = () => window.dispatchEvent(new Event("open-cookie-preferences"));
  return (
    <LegalPageLayout
      eyebrow="Privacidad"
      title="Política de cookies"
      description="Tú decides si permites funciones opcionales."
    >
      <p className="legal-updated">Última actualización: 21 de septiembre de 2026.</p>

      <h2>1. Almacenamiento necesario</h2>
      <p>
        Usamos el almacenamiento local <code>bsit_cookie_preferences_v2</code> para recordar tus
        elecciones de privacidad. Guarda las categorías elegidas, la versión y la fecha de la
        decisión; no contiene nombre, correo, teléfono ni identificadores publicitarios. Su duración
        es de hasta 12 meses, salvo que cambie materialmente esta política o elimines los datos del
        navegador.
      </p>

      <h2>2. Funcionales</h2>
      <p>
        El chat de tawk.to es una función opcional. No descarga recursos al cargar el sitio: solo se
        activa cuando eliges usarlo y autorizas la categoría funcional. Tawk.to puede utilizar
        cookies o almacenamiento propio para que el chat funcione. Puedes retirar esta autorización
        en cualquier momento desde las preferencias; el sitio se recargará de forma controlada para
        impedir que el widget vuelva a ejecutarse.
      </p>

      <h2>3. Analíticas</h2>
      <p>
        Actualmente no se carga analítica opcional. Matomo no está integrado ni se utiliza para
        medir visitas en este momento. Si se incorpora posteriormente, esta política se actualizará
        antes de activarlo.
      </p>

      <h2>4. Tecnologías que no clasificamos como cookies</h2>
      <p>
        Web3Forms procesa el envío del formulario únicamente cuando decides enviarlo; no se
        clasifica aquí como cookie. WhatsApp, cuando se configure, será un enlace y no carga por sí
        mismo un script de WhatsApp.
      </p>

      <h2>5. Cambiar tu elección</h2>
      <p>
        Puedes aceptar, rechazar o configurar las categorías opcionales desde el aviso inicial y
        volver a abrir este panel en cualquier momento.
      </p>
      <button type="button" onClick={openPreferences} className="legal-action">
        Abrir preferencias de cookies
      </button>

      <h2>6. Más información</h2>
      <p>
        Para conocer el tratamiento de datos personales, consulta el{" "}
        <Link to="/aviso-de-privacidad">Aviso de Privacidad</Link>.
      </p>
    </LegalPageLayout>
  );
}
