"use client";

import { useState, useCallback, type FormEvent, type ChangeEvent } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Send,
  MessageCircle,
} from "lucide-react";
import {
  SECTION_IDS,
  SERVICES,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  BUSINESS_ADDRESS,
  BUSINESS_HOURS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from "@/lib/constants";
import { cn, buildWhatsAppUrl } from "@/lib/utils";
import FadeContent from "@/components/FadeContent";

const VEHICLE_TYPES = ["Sedán", "SUV", "Pick Up", "Deportivo", "Otro"] as const;

interface FormData {
  nombre: string;
  telefono: string;
  vehiculo: string;
  servicio: string;
  mensaje: string;
}

const initialFormData: FormData = {
  nombre: "",
  telefono: "",
  vehiculo: "",
  servicio: "",
  mensaje: "",
};

const inputClasses = cn(
  "w-full rounded-lg border border-border-light bg-bg-tertiary px-4 py-3",
  "text-text-primary text-sm placeholder:text-text-muted",
  "outline-none transition-all duration-200",
  "focus:border-gold/50 focus:ring-1 focus:ring-gold/20"
);

const labelClasses = "block text-sm font-medium text-text-secondary mb-1.5";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Teléfono",
    value: WHATSAPP_DISPLAY,
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    external: true,
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: BUSINESS_ADDRESS,
    href: null,
    external: false,
  },
  {
    icon: Clock,
    label: "Horario",
    value: BUSINESS_HOURS,
    href: null,
    external: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: INSTAGRAM_HANDLE,
    href: INSTAGRAM_URL,
    external: true,
  },
] as const;

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialFormData);

  const handleChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const lines = [
        `Hola! Me gustaría agendar una cita.`,
        ``,
        `*Nombre:* ${form.nombre}`,
        `*Teléfono:* ${form.telefono}`,
        `*Vehículo:* ${form.vehiculo}`,
        `*Servicio:* ${form.servicio}`,
        form.mensaje ? `*Mensaje:* ${form.mensaje}` : "",
      ]
        .filter(Boolean)
        .join("\n");

      const url = buildWhatsAppUrl(lines);
      window.open(url, "_blank", "noopener,noreferrer");
    },
    [form]
  );

  return (
    <section
      id={SECTION_IDS.contact}
      className="relative bg-bg-secondary py-20 md:py-28 section-separator"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeContent blur duration={700} threshold={0.15}>
          <div className="mb-14 text-center">
            <h2 className="text-gold-gradient text-4xl font-heading font-bold mb-3">
              Contáctanos
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Agenda tu cita o envíanos un mensaje. Respondemos en minutos por
              WhatsApp.
            </p>
          </div>
        </FadeContent>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Contact form */}
          <FadeContent blur duration={700} delay={100} threshold={0.1}>
            <form
              onSubmit={handleSubmit}
              className={cn(
                "rounded-2xl border border-border p-6 sm:p-8",
                "bg-bg-primary/50"
              )}
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
                {/* Nombre */}
                <div>
                  <label htmlFor="contact-nombre" className={labelClasses}>
                    Nombre
                  </label>
                  <input
                    id="contact-nombre"
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className={inputClasses}
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="contact-telefono" className={labelClasses}>
                    Teléfono
                  </label>
                  <input
                    id="contact-telefono"
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="+507 6000-0000"
                    required
                    className={inputClasses}
                  />
                </div>

                {/* Tipo de Vehículo */}
                <div>
                  <label htmlFor="contact-vehiculo" className={labelClasses}>
                    Tipo de Vehículo
                  </label>
                  <select
                    id="contact-vehiculo"
                    name="vehiculo"
                    value={form.vehiculo}
                    onChange={handleChange}
                    required
                    className={cn(inputClasses, "appearance-none cursor-pointer")}
                  >
                    <option value="" disabled>
                      Seleccionar
                    </option>
                    {VEHICLE_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Servicio */}
                <div>
                  <label htmlFor="contact-servicio" className={labelClasses}>
                    Servicio
                  </label>
                  <select
                    id="contact-servicio"
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    required
                    className={cn(inputClasses, "appearance-none cursor-pointer")}
                  >
                    <option value="" disabled>
                      Seleccionar
                    </option>
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Mensaje */}
              <div className="mt-5">
                <label htmlFor="contact-mensaje" className={labelClasses}>
                  Mensaje
                </label>
                <textarea
                  id="contact-mensaje"
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu vehículo o cualquier detalle adicional..."
                  rows={4}
                  className={cn(inputClasses, "resize-none")}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-gold mt-6 w-full justify-center text-base"
              >
                <Send className="h-4 w-4" />
                Enviar por WhatsApp
              </button>
            </form>
          </FadeContent>

          {/* Right: Map + Contact info */}
          <FadeContent blur duration={700} delay={200} threshold={0.1}>
            <div className="flex flex-col gap-6">
              {/* Google Maps embed */}
              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Ubicación Auto Fanatics Panama - Costa del Este"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15773.153844509095!2d-79.4759!3d9.0105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8f1dbe80363%3A0xaba774e3ec69f779!2sCosta%20del%20Este%2C%20Panama%20City!5e0!3m2!1ses!2spa!4v1700000000000!5m2!1ses!2spa"
                  width="100%"
                  height="260"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>

              {/* Contact info cards */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {CONTACT_INFO.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div
                      className={cn(
                        "group flex items-center gap-3 rounded-xl border border-border p-4",
                        "bg-bg-primary/50 transition-all duration-200",
                        item.href && "hover:border-gold/30 cursor-pointer"
                      )}
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/5">
                        <Icon className="h-4 w-4 text-gold" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-text-muted">{item.label}</p>
                        <p
                          className={cn(
                            "text-sm font-medium text-text-primary truncate",
                            item.href &&
                              "group-hover:text-gold transition-colors duration-200"
                          )}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content}
                      </a>
                    );
                  }

                  return <div key={item.label}>{content}</div>;
                })}
              </div>
            </div>
          </FadeContent>
        </div>

        {/* Full-width CTA */}
        <FadeContent blur duration={600} delay={300} threshold={0.1}>
          <div className="mt-16 text-center">
            <a
              href={buildWhatsAppUrl("Hola! Me gustaría agendar una cita.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center justify-center text-lg px-10 py-4"
            >
              <MessageCircle className="h-5 w-5" />
              Agenda tu Cita por WhatsApp
            </a>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
