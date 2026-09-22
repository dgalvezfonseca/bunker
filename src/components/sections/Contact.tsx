import { useState, type FormEvent, type InputHTMLAttributes } from "react";
import { Link } from "@tanstack/react-router";

import { Container } from "@/components/common/Container";
import { Icon } from "@/components/common/Icon";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { WhatsAppLink } from "@/components/common/WhatsAppButton";
import { hasAddress, hasEmail, hasPhone, hasWhatsapp, mailtoUrl, siteConfig } from "@/config/site";
import { serviceOptions } from "@/data/services";
import { cn } from "@/lib/utils";
import { pageContent } from "@/data/page-content";

type FieldName = "name" | "company" | "phone" | "email" | "service" | "message";
type FormErrors = Partial<Record<FieldName, string>>;
type SubmissionStatus = "idle" | "sending" | "success" | "error";

const web3FormsEndpoint = "https://api.web3forms.com/submit";
const web3FormsAccessKey =
  import.meta.env["VITE_WEB3FORMS_ACCESS_KEY"] ?? "f4fc72cf-f80c-4895-8532-808377d9fb17";

const inputClass =
  "min-h-10 w-full rounded-[4px] border border-line bg-surface-elevated px-4 py-2 text-base text-ink outline-none transition-[border-color,background-color,box-shadow] duration-[200ms] ease-out placeholder:text-ink-muted/60 focus:border-primary focus:bg-warm-white focus:shadow-[0_0_0_3px_rgba(0,110,255,0.14)]";

function validate(form: HTMLFormElement): FormErrors {
  const data = new FormData(form);
  const value = (field: FieldName) => String(data.get(field) ?? "").trim();
  const errors: FormErrors = {};
  const name = value("name");
  const phone = value("phone");
  const email = value("email");
  const phoneDigits = phone.replace(/\D/g, "");

  if (name.length < 2) errors.name = "Escribe tu nombre (mínimo 2 caracteres).";
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    errors.phone = "Escribe un teléfono válido de 10 a 15 dígitos.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Escribe un correo electrónico válido.";
  }

  return errors;
}

export function Contact() {
  const content = pageContent.contact;
  const [errors, setErrors] = useState<FormErrors>({});
  const [readyMessage, setReadyMessage] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>("idle");
  const hasDirectContact = hasPhone || hasEmail || hasAddress || hasWhatsapp;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(event.currentTarget);
    setErrors(nextErrors);
    setReadyMessage("");
    setSubmissionStatus("idle");

    const firstError = Object.keys(nextErrors)[0] as FieldName | undefined;
    if (firstError) {
      const field = event.currentTarget.elements.namedItem(firstError);
      if (field instanceof HTMLElement) field.focus();
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", web3FormsAccessKey);
    setSubmissionStatus("sending");
    setReadyMessage("Enviando tu solicitud…");

    try {
      const response = await fetch(web3FormsEndpoint, { method: "POST", body: formData });
      const data: { success?: boolean; message?: string } = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message ?? "No fue posible enviar la solicitud.");
      }

      form.reset();
      setSubmissionStatus("success");
      setReadyMessage("Recibimos tu solicitud. Nos pondremos en contacto contigo.");
    } catch {
      setSubmissionStatus("error");
      setReadyMessage("No fue posible enviar tu solicitud. Inténtalo nuevamente.");
    }
  };

  return (
    <section id="contacto" className="section-y section-rule bg-surface-elevated">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:gap-14">
          <Reveal from="left">
            <SectionHeading
              index="09"
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
            />

            {hasDirectContact ? (
              <ul className="mt-8 flex flex-col gap-5">
                {hasPhone ? (
                  <li className="flex items-start gap-3">
                    <Icon name="call" className="mt-0.5 text-2xl text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-ink">Teléfono</p>
                      <a
                        href={siteConfig.phoneHref}
                        className="text-sm text-ink-muted hover:text-primary"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </li>
                ) : null}

                {hasEmail ? (
                  <li className="flex items-start gap-3">
                    <Icon name="mail" className="mt-0.5 text-2xl text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-ink">Correo</p>
                      <a
                        href={mailtoUrl() ?? undefined}
                        className="text-sm text-ink-muted hover:text-primary"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </li>
                ) : null}

                {hasAddress ? (
                  <li className="flex items-start gap-3">
                    <Icon name="location_on" className="mt-0.5 text-2xl text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-ink">Oficina</p>
                      <p className="text-sm text-ink-muted">
                        {[siteConfig.address.line1, siteConfig.address.line2]
                          .filter(Boolean)
                          .join(", ")}
                      </p>
                    </div>
                  </li>
                ) : null}

                {hasWhatsapp ? <WhatsAppLink /> : null}
              </ul>
            ) : (
              <div className="mt-8 border-t border-primary bg-surface px-5 py-5">
                <p className="text-sm font-semibold text-ink">Canales directos en preparación</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  El teléfono, WhatsApp, correo y ubicación se publicarán cuando sean confirmados.
                </p>
              </div>
            )}
          </Reveal>

          <Reveal delay={120} from="right">
            <form
              noValidate
              onSubmit={handleSubmit}
              className="border-x border-b border-line border-t-2 border-t-primary bg-surface p-5 sm:p-7 lg:p-8"
              aria-label="Solicitud de información"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  label="Nombre completo"
                  name="name"
                  required
                  error={errors.name}
                  maxLength={80}
                  autoComplete="name"
                />
                <FormField
                  label="Empresa"
                  name="company"
                  error={errors.company}
                  maxLength={100}
                  autoComplete="organization"
                />
                <FormField
                  label="Teléfono"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  error={errors.phone}
                  maxLength={24}
                />
                <FormField
                  label="Correo corporativo"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  error={errors.email}
                  maxLength={120}
                />

                <div className="sm:col-span-2">
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-[0.8125rem] font-semibold text-ink"
                  >
                    ¿En qué servicio estás interesado?
                  </label>
                  <select id="service" name="service" defaultValue="" className={inputClass}>
                    <option value="">Selecciona una opción</option>
                    {serviceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-[0.8125rem] font-semibold text-ink"
                  >
                    Breve descripción de tu proyecto{" "}
                    <span className="text-ink-muted">(Opcional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    maxLength={1000}
                    rows={4}
                    aria-invalid={Boolean(errors.message)}
                    className={cn(inputClass, "resize-y", errors.message && "border-red-600")}
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl text-xs leading-relaxed text-ink-muted">
                  <p>
                    Al enviar tus datos, BÚNKER Servicios Integrales de Tecnología S.A. de C.V. los
                    tratará para atender tu solicitud y, en su caso, preparar una cotización.
                    Utilizamos Web3Forms como proveedor tecnológico para procesar el envío. Consulta
                    nuestro{" "}
                    <Link
                      to="/aviso-de-privacidad"
                      className="font-semibold text-primary hover:text-primary-dark"
                    >
                      Aviso de Privacidad
                    </Link>
                    .
                  </p>
                  <p className="mt-2">
                    No compartas contraseñas, datos bancarios, datos de salud ni información
                    operativa sensible mediante este formulario.
                  </p>
                </div>
                <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
                  <button
                    type="submit"
                    disabled={submissionStatus === "sending"}
                    className="min-h-11 rounded-[6px] bg-primary px-6 py-3 text-sm font-semibold tracking-[0.06em] text-primary-foreground uppercase shadow-[0_8px_22px_rgba(0,110,255,0.16)] transition-[background-color,box-shadow,transform] duration-[200ms] ease-out hover:-translate-y-px hover:bg-primary hover:shadow-[0_11px_26px_rgba(0,78,179,0.24)] active:translate-y-0"
                  >
                    {submissionStatus === "sending" ? "Enviando…" : "Evaluar mi operación"}
                  </button>
                  <p className="text-xs leading-4 text-ink-muted">* Campos obligatorios</p>
                </div>
              </div>

              {readyMessage ? (
                <p
                  role="status"
                  aria-live="polite"
                  className={cn(
                    "field-message mt-5 border-l-2 bg-surface-elevated px-4 py-3 text-sm text-ink",
                    submissionStatus === "error" ? "border-red-600" : "border-primary",
                  )}
                >
                  {readyMessage}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function FormField({
  label,
  name,
  error,
  required = false,
  type = "text",
  ...inputProps
}: {
  label: string;
  name: FieldName;
  error?: string | undefined;
  required?: boolean;
  type?: "text" | "tel" | "email";
} & Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "name" | "type" | "required">) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-[0.8125rem] font-semibold text-ink">
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={cn(inputClass, error && "border-red-600")}
        {...inputProps}
      />
      {error ? (
        <p id={errorId} className="field-message mt-1.5 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
