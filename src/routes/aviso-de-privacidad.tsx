import { createFileRoute, Link } from "@tanstack/react-router";

import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/config/site";

const title = `Aviso de privacidad | ${siteConfig.companyName}`;
const description = `Información sobre el tratamiento de datos personales recabados mediante el sitio de ${siteConfig.companyName}.`;

export const Route = createFileRoute("/aviso-de-privacidad")({
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
  component: PrivacyNotice,
});

function PrivacyNotice() {
  const address = [siteConfig.address.line1, siteConfig.address.line2].filter(Boolean).join(", ");

  return (
    <LegalPageLayout
      eyebrow="Privacidad"
      title="Aviso de privacidad"
      description="Conoce qué datos puede recabar este sitio, para qué se utilizarán y cómo ejercer tus derechos."
    >
      <p className="legal-updated">Última actualización del borrador: 1 de septiembre de 2026.</p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        <strong>{siteConfig.companyName}</strong> será responsable del tratamiento de los datos
        personales recabados mediante este sitio.
      </p>
      <dl>
        <div>
          <dt>Domicilio del responsable</dt>
          <dd>{address || "PENDIENTE DE CONFIRMACIÓN POR EL CLIENTE"}</dd>
        </div>
        <div>
          <dt>Correo de privacidad y derechos ARCO</dt>
          <dd>{siteConfig.email || "PENDIENTE DE CONFIRMACIÓN POR EL CLIENTE"}</dd>
        </div>
      </dl>

      <h2>2. Datos personales contemplados</h2>
      <p>
        El formulario solicita nombre, empresa, teléfono, correo electrónico, servicio requerido y
        el contenido del mensaje. No se solicitan datos personales sensibles.
      </p>
      <p>
        <strong>
          En la versión actual el formulario solo valida la información en el navegador y no la
          transmite, porque todavía no existe un proveedor o endpoint conectado. Este aviso deberá
          actualizarse antes de habilitar el envío real.
        </strong>
      </p>

      <h2>3. Finalidades</h2>
      <p>Cuando el canal de recepción sea habilitado, los datos se utilizarán para:</p>
      <ul>
        <li>Responder solicitudes de información o contacto.</li>
        <li>Evaluar necesidades y preparar una propuesta o cotización.</li>
        <li>Dar seguimiento a una conversación comercial iniciada por la persona titular.</li>
        <li>Conservar evidencia de solicitudes y comunicaciones relacionadas con el servicio.</li>
      </ul>
      <p>
        Cualquier uso promocional o de mercadotecnia deberá informarse como finalidad secundaria y
        contar con un mecanismo para negarse o retirar el consentimiento.
      </p>

      <h2>4. Transferencias y encargados</h2>
      <p>
        Actualmente no se realizan transferencias desde el formulario. Antes de conectar un servicio
        de formularios, correo, CRM, analítica o infraestructura de terceros, deberá documentarse el
        proveedor, su ubicación, las finalidades y las medidas contractuales correspondientes.
      </p>

      <h2>5. Recursos externos actuales</h2>
      <p>
        Durante el desarrollo se cargan tipografías, iconos e imágenes de muestra desde servicios de
        Google. Aunque no son herramientas de analítica del sitio, el navegador realiza solicitudes
        a servidores de terceros que pueden recibir datos técnicos como dirección IP y encabezados
        de la conexión. Antes de producción se recomienda sustituir las imágenes de muestra y alojar
        localmente los recursos necesarios, o documentar formalmente a los proveedores.
      </p>

      <h2>6. Conservación y seguridad</h2>
      <p>
        El periodo de conservación y el procedimiento de eliminación están pendientes de aprobación.
        El responsable deberá aplicar medidas administrativas, técnicas y físicas acordes con el
        riesgo y conservar los datos únicamente durante el tiempo necesario para las finalidades
        informadas.
      </p>

      <h2>7. Derechos ARCO</h2>
      <p>
        La persona titular podrá solicitar acceso, rectificación, cancelación u oposición al
        tratamiento de sus datos, así como limitar su uso o revocar su consentimiento. El correo y
        procedimiento definitivo para ejercer estos derechos están pendientes de confirmación y
        deberán agregarse antes de la publicación.
      </p>

      <h2>8. Cookies y tecnologías similares</h2>
      <p>
        Consulta la <Link to="/politica-de-cookies">política de cookies</Link> para conocer las
        categorías disponibles y cambiar tus preferencias.
      </p>

      <h2>9. Cambios al aviso</h2>
      <p>
        Las modificaciones se publicarán en esta misma página indicando la fecha de actualización.
        Si el cambio afecta finalidades que requieren consentimiento, se solicitará nuevamente
        cuando corresponda.
      </p>
    </LegalPageLayout>
  );
}
