import { useState, type FormEvent, type InputHTMLAttributes } from "react";

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

const inputClass =
  "min-h-12 w-full rounded-[4px] border border-line bg-surface-elevated px-4 py-3 text-base text-ink outline-none transition-[border-color,background-color,box-shadow] duration-[200ms] ease-out placeholder:text-ink-muted/60 focus:border-primary focus:bg-warm-white focus:shadow-[0_0_0_3px_rgba(0,110,255,0.14)]";

function validate(form: HTMLFormElement): FormErrors {
  const data = new FormData(form);
  const value = (field: FieldName) => String(data.get(field) ?? "").trim();
  const errors: FormErrors = {};
  const name = value("name");
  const phone = value("phone");
  const email = value("email");
  const message = value("message");
  const phoneDigits = phone.replace(/\D/g, "");

  if (name.length < 2) errors.name = "Escribe tu nombre (mínimo 2 caracteres).";
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    errors.phone = "Escribe un teléfono válido de 10 a 15 dígitos.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Escribe un correo electrónico válido.";
  }
  if (message.length < 10) errors.message = "Cuéntanos un poco más (mínimo 10 caracteres).";

  return errors;
}

export function Contact() {
  const content = pageContent.contact;
  const [errors, setErrors] = useState<FormErrors>({});
  const [readyMessage, setReadyMessage] = useState("");
  const hasDirectContact = hasPhone || hasEmail || hasAddress || hasWhatsapp;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(event.currentTarget);
    setErrors(nextErrors);
    setReadyMessage("");

    const firstError = Object.keys(nextErrors)[0] as FieldName | undefined;
    if (firstError) {
      const field = event.currentTarget.elements.namedItem(firstError);
      if (field instanceof HTMLElement) field.focus();
    } else {
      // TODO: conectar aquí el proveedor de formularios o endpoint aprobado por el cliente.
      setReadyMessage(
        "Tus datos son válidos. El envío estará disponible cuando se conecte el servicio de formularios.",
      );
    }
  };

  return (
    <section id="contacto" className="section-y section-rule bg-surface-elevated">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
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
              className="border-x border-b border-line border-t-2 border-t-primary bg-surface p-5 sm:p-8 lg:p-10"
              aria-label="Solicitud de información"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Nombre"
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
                  label="Correo electrónico"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  error={errors.email}
                  maxLength={120}
                />

                <div className="sm:col-span-2">
                  <label htmlFor="service" className="mb-2 block text-sm font-semibold text-ink">
                    Servicio requerido
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
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
                    Mensaje <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={1000}
                    rows={5}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={cn(inputClass, "resize-y", errors.message && "border-red-600")}
                  />
                  {errors.message ? (
                    <p id="message-error" className="field-message mt-1.5 text-sm text-red-700">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="min-h-13 rounded-[6px] bg-primary px-7 py-4 text-sm font-semibold tracking-[0.06em] text-primary-foreground uppercase shadow-[0_8px_22px_rgba(0,110,255,0.16)] transition-[background-color,box-shadow,transform] duration-[200ms] ease-out hover:-translate-y-px hover:bg-primary hover:shadow-[0_11px_26px_rgba(0,78,179,0.24)] active:translate-y-0"
                >
                  Solicitar información
                </button>
                <p className="text-xs leading-relaxed text-ink-muted">* Campos obligatorios</p>
              </div>

              {readyMessage ? (
                <p
                  role="status"
                  className="field-message mt-5 border-l-2 border-primary bg-surface-elevated px-4 py-3 text-sm text-ink"
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
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-ink">
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
