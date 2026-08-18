import { useState } from "react";
import { toast } from "sonner";

type Errors = { name?: string; email?: string; brief?: string };

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", brief: "" });
  const [errors, setErrors] = useState<Errors>({});

  const validate = () => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email))
      next.email = "Enter a valid email address.";
    if (values.brief.trim().length < 10) next.brief = "Tell us a little more (10+ characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const field = (key: keyof typeof values) => ({
    value: values[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    },
    className:
      "w-full border-b bg-transparent px-0 py-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold " +
      (errors[key] ? "border-destructive" : "border-border"),
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
          description: "A programme director will reply within one working day.",
        });
        setValues({ name: "", email: "", brief: "" });
      }}
      className="space-y-8"
    >
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
      <div>
        <label htmlFor="brief" className="eyebrow">
          Brief
        </label>
        <textarea id="brief" rows={3} placeholder="What are we building?" {...field("brief")} />
        {errors.brief && <p className="mt-2 text-sm text-destructive">{errors.brief}</p>}
      </div>
      <button
        type="submit"
        className="min-h-12 w-full bg-gold px-8 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:shadow-[var(--shadow-gold)] sm:w-auto"
      >
        Request a demo
      </button>
    </form>
  );
}
