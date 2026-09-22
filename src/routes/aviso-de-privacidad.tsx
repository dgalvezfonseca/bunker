import { createFileRoute, Link } from "@tanstack/react-router";

import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/config/site";

const title = `Aviso de privacidad | ${siteConfig.shortName}`;
const description = `Información sobre el tratamiento de datos personales recabados mediante el sitio de ${siteConfig.shortName}.`;

export const Route = createFileRoute("/aviso-de-privacidad")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PrivacyNotice,
});

function PrivacyNotice() {
  const address = [siteConfig.address.line1, siteConfig.address.line2].join(", ");
  return (
    <LegalPageLayout
      eyebrow="Privacidad"
      title="Aviso de privacidad"
      description="Conoce qué datos recabamos, para qué los utilizamos y cómo ejercer tus derechos."
    >
      <p className="legal-updated">Última actualización: 21 de septiembre de 2026.</p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        <strong>{siteConfig.companyName}</strong> es responsable del tratamiento de los datos
        personales recabados mediante este sitio.
      </p>
      <dl>
        <div>
          <dt>Domicilio</dt>
          <dd>{address}</dd>
        </div>
        <div>
          <dt>Contacto de privacidad, revocación y derechos ARCO</dt>
          <dd>
            <a href={`mailto:${siteConfig.email}?subject=Derechos%20ARCO`}>{siteConfig.email}</a>
          </dd>
        </div>
      </dl>

      <h2>2. Datos personales que tratamos</h2>
      <p>
        Cuando envías el formulario, podemos tratar tu nombre, empresa, teléfono, correo
        electrónico, servicio de interés y el contenido de tu mensaje. Te pedimos no incluir
        contraseñas, datos bancarios, datos de salud ni información operativa sensible.
      </p>
      <p>
        Según el funcionamiento del servicio de formularios, también pueden procesarse metadatos
        técnicos asociados a la solicitud, como fecha y hora, dirección IP y página de procedencia.
      </p>

      <h2>3. Finalidad primaria</h2>
      <p>
        Usamos los datos para atender solicitudes de información o contacto y, cuando corresponda,
        preparar o dar seguimiento a una cotización. No usamos los datos recabados en este sitio
        para finalidades secundarias de marketing al lanzamiento.
      </p>

      <h2>4. Proveedores tecnológicos</h2>
      <p>
        Utilizamos Web3Forms como proveedor tecnológico para recibir y procesar el envío del
        formulario por cuenta de BÚNKER. Este tratamiento se realiza para la finalidad descrita y no
        se presenta como una transferencia de datos a un tercero independiente.
      </p>
      <p>
        Neubox proporciona servicios de alojamiento para el sitio cuando corresponde. No afirmamos
        una ubicación de servidores mientras no se confirme contractualmente.
      </p>
      <p>
        El chat tawk.to es opcional: no se carga al visitar el sitio. Solo se activa cuando decides
        usarlo y autorizas la categoría funcional; al hacerlo, la conversación y los datos que
        proporciones se tratarán para atenderla.
      </p>

      <h2>5. Limitación, revocación y derechos ARCO</h2>
      <p>
        Para limitar el uso o divulgación de tus datos, revocar tu consentimiento o ejercer tus
        derechos de acceso, rectificación, cancelación u oposición, escribe a{" "}
        <a href={`mailto:${siteConfig.email}?subject=Derechos%20ARCO`}>{siteConfig.email}</a> con el
        asunto “Derechos ARCO”. El área responsable de privacidad de BÚNKER atenderá las solicitudes
        y podrá requerir información razonable para verificar la identidad de la persona
        solicitante.
      </p>
      <p>
        La solicitud debe permitir identificarte, describir el derecho que deseas ejercer y
        facilitar la localización de los datos. La respuesta se emitirá en los plazos previstos por
        la legislación aplicable.
      </p>

      <h2>6. Conservación y seguridad</h2>
      <p>
        Conservamos los datos durante el tiempo necesario para atender la finalidad informada y las
        obligaciones legales aplicables. Aplicamos medidas administrativas, técnicas y físicas
        razonables conforme al riesgo del tratamiento.
      </p>

      <h2>7. Cookies y tecnologías similares</h2>
      <p>
        Usamos almacenamiento necesario para recordar tus preferencias. Las funcionalidades
        opcionales se explican en la <Link to="/politica-de-cookies">Política de cookies</Link>,
        donde también puedes consultar cómo cambiar tu elección.
      </p>

      <h2>8. Cambios al aviso</h2>
      <p>
        Las modificaciones a este aviso se publicarán en esta misma página con su fecha de
        actualización. Si el cambio requiere una nueva decisión de privacidad, la solicitaremos
        antes de activar la tecnología correspondiente.
      </p>
    </LegalPageLayout>
  );
}
