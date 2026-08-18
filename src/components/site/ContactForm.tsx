import { useState } from "react";
import { toast } from "sonner";

type Field = "name" | "email" | "phone" | "service" | "message";
type Errors = Partial<Record<Field, string>>;

const services = [
  "Signature Experience",
  "Consultation",
  "Premium Care",
  "Membership",
  "Something else",
];

const initial = { name: "", email: "", phone: "", service: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Errors>({});

  const check = (key: Field, value: string): string | undefined => {
    if (key === "name" && value.trim().length < 2) return "Please enter your full name.";
    if (key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value))
      return "Enter a valid email address.";
    if (key === "phone" && value.trim() && value.replace(/\D/g, "").length < 7)
      return "That phone number looks too short.";
    if (key === "message" && value.trim().length < 10)
      return "Tell us a little more (10+ characters).";
    return undefined;
  };

  const validate = () => {
    const next: Errors = {};
    (["name", "email", "phone", "message"] as Field[]).forEach((k) => {
      const err = check(k, values[k]);
      if (err) next[k] = err;
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const base =
    "w-full border-b bg-transparent px-0 py-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold";

  const field = (key: Field) => ({
    value: values[key],
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      const v = e.target.value;
      setValues((s) => ({ ...s, [key]: v }));
      setErrors((prev) => ({ ...prev, [key]: errors[key] ? check(key, v) : undefined }));
    },
    onBlur: () => setErrors((prev) => ({ ...prev, [key]: check(key, values[key]) })),
    className: `${base} ${errors[key] ? "border-destructive" : "border-border"}`,
  });

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (!validate()) {
          toast.error("Please fix the highlighted fields.");
          return;
        }
        toast.success("Request received", {
          description: "Our team will reply within one working day.",
        });
        setValues(initial);
        setErrors({});
      }}
      className="space-y-8"
    >
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow">
            Name
          </label>
          <input id="name" placeholder="Alexandra Reuter" {...field("name")} />
          {errors.name && <p className="mt-2 text-sm text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="eyebrow">
            Email
          </label>
          <input id="email" type="email" placeholder="you@company.com" {...field("email")} />
          {errors.email && <p className="mt-2 text-sm text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="eyebrow">
            Phone
          </label>
          <input id="phone" type="tel" placeholder="+1 (555) 000-0000" {...field("phone")} />
          {errors.phone && <p className="mt-2 text-sm text-destructive">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="service" className="eyebrow">
            Service
          </label>
          <select id="service" {...field("service")}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow">
          Message
        </label>
        <textarea id="message" rows={3} placeholder="How can we help?" {...field("message")} />
        {errors.message && <p className="mt-2 text-sm text-destructive">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="min-h-12 w-full bg-gold px-8 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:shadow-[var(--shadow-gold)] sm:w-auto"
      >
        Book Appointment
      </button>
    </form>
  );
}
