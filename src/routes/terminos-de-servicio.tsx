import { createFileRoute, Link } from "@tanstack/react-router";

import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/config/site";

const title = `Términos de servicio | ${siteConfig.companyName}`;
const description = `Condiciones generales para el uso del sitio web de ${siteConfig.companyName}.`;

export const Route = createFileRoute("/terminos-de-servicio")({
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
  component: TermsOfService,
});

function TermsOfService() {
  return (
    <LegalPageLayout
      eyebrow="Condiciones de uso"
      title="Términos de servicio"
      description="Reglas generales para consultar el sitio y solicitar información comercial."
    >
      <p className="legal-updated">Última actualización del borrador: 1 de septiembre de 2026.</p>

      <h2>1. Titular del sitio</h2>
      <p>
        Este sitio corresponde a <strong>{siteConfig.companyName}</strong>. El domicilio, correo y
        demás datos jurídicos del titular están pendientes de confirmación y deberán incorporarse
        antes de su publicación definitiva.
      </p>

      <h2>2. Objeto informativo</h2>
      <p>
        El contenido presenta de forma general soluciones de seguridad electrónica. La información
        del sitio no constituye por sí sola una oferta vinculante, contrato, diagnóstico técnico ni
        garantía de disponibilidad. Cada alcance deberá documentarse en una propuesta y contrato
        específicos.
      </p>

      <h2>3. Solicitudes y cotizaciones</h2>
      <p>
        Enviar una solicitud de información no crea una relación contractual. Precios, cobertura,
        equipos, tiempos, monitoreo, mantenimiento y responsabilidades se definirán por escrito
        después de evaluar el proyecto.
      </p>

      <h2>4. Uso permitido</h2>
      <p>Queda prohibido:</p>
      <ul>
        <li>Intentar vulnerar, saturar o interferir con el sitio.</li>
        <li>Usar formularios o canales de contacto para fraude, spam o actividades ilícitas.</li>
        <li>Copiar marcas, textos, fotografías o diseños sin autorización.</li>
        <li>Presentar contenido de muestra como si acreditara un proyecto o cliente real.</li>
      </ul>

      <h2>5. Contenido de muestra y terceros</h2>
      <p>
        Las fotografías y proyectos identificados como muestra deberán reemplazarse o licenciarse
        antes del lanzamiento. Las marcas mencionadas describen tecnologías disponibles y no
        implican una relación de distribución, certificación o representación oficial.
      </p>

      <h2>6. Disponibilidad y responsabilidad</h2>
      <p>
        Se procurará mantener información correcta y un acceso razonable al sitio, pero las
        condiciones específicas de responsabilidad, garantías, límites e indemnización deberán
        revisarse con la asesoría jurídica del negocio y armonizarse con los contratos de servicio.
      </p>

      <h2>7. Privacidad</h2>
      <p>
        El tratamiento de datos personales se describe en el
        <Link to="/aviso-de-privacidad"> aviso de privacidad</Link>. Las tecnologías del navegador
        se explican en la <Link to="/politica-de-cookies">política de cookies</Link>.
      </p>

      <h2>8. Legislación y jurisdicción</h2>
      <p>
        La legislación aplicable, mecanismos de solución de controversias y jurisdicción están
        pendientes de validación jurídica de acuerdo con el domicilio real del negocio y el alcance
        de sus operaciones.
      </p>
    </LegalPageLayout>
  );
}
