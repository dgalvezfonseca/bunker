import { createFileRoute, Link } from "@tanstack/react-router";

import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/config/site";

const title = `Política de cookies | ${siteConfig.companyName}`;
const description =
  "Categorías de cookies y tecnologías similares, finalidad y opciones de consentimiento del sitio.";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
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
      description="Tú decides si permites tecnologías opcionales de analítica o marketing."
    >
      <p className="legal-updated">Última actualización del borrador: 1 de septiembre de 2026.</p>

      <h2>1. Estado actual</h2>
      <p>
        Este sitio no tiene configuradas herramientas de analítica, publicidad ni seguimiento de
        terceros. La interfaz de consentimiento se incluye desde ahora para impedir que futuras
        integraciones opcionales se activen sin una decisión previa.
      </p>

      <h2>2. Tecnología estrictamente necesaria</h2>
      <p>
        Se utiliza el almacenamiento local del navegador con la clave
        <code>bsit_cookie_preferences_v1</code> para recordar la elección de privacidad. Contiene
        las categorías aceptadas, la versión del aviso y la fecha de la selección. No contiene
        nombre, correo, teléfono ni identificadores publicitarios.
      </p>
      <p>
        La preferencia se solicita nuevamente después de 180 días, cuando cambia la versión del
        aviso o cuando la persona elimina los datos del navegador.
      </p>

      <h2>3. Categorías opcionales</h2>
      <dl>
        <div>
          <dt>Analítica</dt>
          <dd>
            Podrá utilizarse para conocer visitas y uso agregado del sitio. Está desactivada y no
            tiene proveedor configurado.
          </dd>
        </div>
        <div>
          <dt>Marketing</dt>
          <dd>
            Podrá utilizarse para medición de campañas o publicidad. Está desactivada y no tiene
            proveedor configurado.
          </dd>
        </div>
      </dl>

      <h2>4. Recursos externos que no son cookies</h2>
      <p>
        La versión de desarrollo solicita tipografías, iconos e imágenes de muestra alojados por
        Google. Estas conexiones no se controlan desde el panel de categorías y pueden comunicar
        datos técnicos básicos al proveedor. Deben sustituirse por recursos locales o documentarse
        antes del lanzamiento.
      </p>

      <h2>5. Cómo cambiar tu elección</h2>
      <p>
        Puedes aceptar, rechazar o configurar las categorías desde el aviso inicial y volver a abrir
        el panel en cualquier momento con el siguiente botón o desde el pie de página.
      </p>
      <button type="button" onClick={openPreferences} className="legal-action">
        Abrir preferencias de cookies
      </button>

      <h2>6. Actualizaciones y contacto</h2>
      <p>
        Esta política debe actualizarse antes de incorporar cualquier proveedor, indicando su
        nombre, finalidad, datos tratados, duración y mecanismo de exclusión. Para información sobre
        datos personales consulta el <Link to="/aviso-de-privacidad">aviso de privacidad</Link>.
      </p>
    </LegalPageLayout>
  );
}
