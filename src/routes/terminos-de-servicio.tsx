import { createFileRoute, Link } from "@tanstack/react-router";

import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/config/site";

const title = `Términos de servicio | ${siteConfig.shortName}`;

export const Route = createFileRoute("/terminos-de-servicio")({
  head: () => ({
    meta: [
      { title },
      {
        name: "description",
        content: `Condiciones generales para el uso del sitio web de ${siteConfig.shortName}.`,
      },
    ],
  }),
  component: TermsOfService,
});

function TermsOfService() {
  const address = [siteConfig.address.line1, siteConfig.address.line2].join(", ");
  return (
    <LegalPageLayout
      eyebrow="Condiciones de uso"
      title="Términos de servicio"
      description="Reglas generales para consultar el sitio y solicitar información comercial."
    >
      <p className="legal-updated">Última actualización: 21 de septiembre de 2026.</p>

      <h2>1. Titular del sitio</h2>
      <p>
        Este sitio corresponde a <strong>{siteConfig.companyName}</strong>, con domicilio en{" "}
        {address}. Contacto: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>

      <h2>2. Contenido informativo y solicitudes</h2>
      <p>
        La información del sitio es de carácter general e informativo. Enviar una solicitud o usar
        el chat no crea una contratación automática, promesa de disponibilidad ni garantía. Los
        servicios, alcances, precios, tiempos y responsabilidades se definirán, cuando corresponda,
        en una cotización, propuesta y contrato específicos.
      </p>

      <h2>3. Formularios y chat</h2>
      <p>
        El formulario y el chat se ofrecen como canales de contacto. No envíes información sensible,
        financiera, contraseñas ni detalles operativos de seguridad. El tratamiento de datos
        personales se explica en el <Link to="/aviso-de-privacidad">Aviso de Privacidad</Link> y las
        funciones opcionales en la <Link to="/politica-de-cookies">Política de cookies</Link>.
      </p>

      <h2>4. Propiedad intelectual y enlaces externos</h2>
      <p>
        Las marcas, textos, fotografías, diseños y demás contenidos del sitio están protegidos por
        las disposiciones aplicables y no pueden utilizarse sin autorización. Los enlaces a sitios
        de terceros se rigen por sus propias condiciones y políticas.
      </p>

      <h2>5. Disponibilidad</h2>
      <p>
        Procuramos mantener la información y el acceso al sitio actualizados, pero pueden ocurrir
        interrupciones, modificaciones o errores. Esto no limita los derechos que la legislación
        aplicable reconozca de forma irrenunciable.
      </p>

      <h2>6. Casos históricos</h2>
      <p>
        Los casos de éxito describen incidentes históricos particulares. No representan una garantía
        de recuperación, tiempo de respuesta ni resultado futuro; cada evento depende de sus
        circunstancias y factores externos.
      </p>

      <h2>7. Legislación y jurisdicción</h2>
      <p>
        En lo permitido por la legislación aplicable y sin perjuicio de derechos irrenunciables,
        cualquier controversia relacionada con el uso de este sitio se someterá a las autoridades
        competentes de Metepec, Estado de México.
      </p>
    </LegalPageLayout>
  );
}
