import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  Gem,
  HeartHandshake,
  CalendarCheck,
  ShieldCheck,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  Star,
  ArrowRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "917039081439";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Aurum, I'd like to book an appointment.",
)}`;
const CONTACT_PHONE = "+91 7039081439";
const CONTACT_EMAIL = "kaif.qr1@gmail.com";
import heroImage from "@/assets/hero.jpg";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Counter } from "@/components/site/Counter";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurum — Premium Service Experience Since 2009" },
      {
        name: "description",
        content:
          "Aurum delivers a premium, appointment-only service experience. Explore our signature offerings, gallery and client stories, then book in minutes.",
      },
      { property: "og:title", content: "Aurum — Premium Service Experience Since 2009" },
      {
        property: "og:description",
        content:
          "A luxury service studio built on craft, discretion and detail. Browse the gallery and book your appointment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Sparkles,
    name: "Signature Experience",
    desc: "Our flagship offering — tailored end to end around your brief, delivered by senior specialists.",
    detail: "Typically 90 minutes · From $180",
  },
  {
    icon: Gem,
    name: "Premium Care",
    desc: "Ongoing refinement and maintenance so the result you loved on day one still holds months later.",
    detail: "Monthly or quarterly · From $95",
  },
  {
    icon: HeartHandshake,
    name: "Consultation",
    desc: "A focused session to map out options, timelines and budget before you commit to anything.",
    detail: "45 minutes · Complimentary",
  },
  {
    icon: CalendarCheck,
    name: "Membership",
    desc: "Priority scheduling, member pricing and first access to seasonal releases and private events.",
    detail: "Annual · From $1,200",
  },
];

const differentiators = [
  {
    icon: Award,
    title: "Uncompromising Quality",
    desc: "Every detail is reviewed twice before it ever reaches you.",
  },
  {
    icon: ShieldCheck,
    title: "Fifteen Years of Craft",
    desc: "A senior-only team, trained in-house, with nothing outsourced.",
  },
  {
    icon: Clock,
    title: "Your Time, Respected",
    desc: "On schedule, every appointment, or your next visit is on us.",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: " Yrs", label: "Experience" },
  { value: 98, suffix: "%", label: "Satisfaction" },
  { value: 24, suffix: "h", label: "Response Time" },
];

const hours = [
  ["Monday – Friday", "9:00 – 19:00"],
  ["Saturday", "10:00 – 17:00"],
  ["Sunday", "By appointment"],
];

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative flex min-h-[100svh] items-center overflow-hidden">
          <img
            src={heroImage}
            alt="Warmly lit interior of the Aurum studio"
            width={1920}
            height={1080}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70" />
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "var(--gradient-veil)" }}
            aria-hidden
          />
          <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-10">
            <Reveal>
              <p className="eyebrow">Since 2009 &middot; New York City</p>
              <h1 className="mt-6 font-display text-6xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
                Aurum
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
                A premium service experience, designed around you — crafted with patience,
                delivered with precision.
              </p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="flex min-h-12 items-center justify-center bg-gold px-10 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:shadow-[var(--shadow-gold)]"
                >
                  Book Now
                </a>
                <a
                  href="#gallery"
                  className="flex min-h-12 items-center justify-center gap-2 px-2 text-xs font-semibold uppercase tracking-[0.25em] text-foreground transition-colors hover:text-gold"
                >
                  View Gallery <ArrowRight className="size-4" />
                </a>
              </div>
              <div className="mt-14 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex gap-1 text-gold" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </span>
                Rated 4.9/5 across 500+ client reviews
              </div>
            </Reveal>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">What We Offer</p>
            <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
              Services built around a single standard
            </h2>
            <p className="mt-5 text-muted-foreground">
              Four ways to work with us — each one delivered by the same senior team, to the same
              exacting brief.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.name} delay={i * 90} as="article">
                <div className="group flex h-full flex-col border border-border bg-surface p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-lift)]">
                  <service.icon className="size-7 text-gold" />
                  <h3 className="mt-8 font-display text-xl font-bold">{service.name}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.desc}
                  </p>
                  <p className="mt-6 max-h-0 overflow-hidden text-xs uppercase tracking-[0.2em] text-gold opacity-0 transition-all duration-500 group-hover:max-h-12 group-hover:opacity-100">
                    {service.detail}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:text-gold"
                  >
                    Learn More <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="border-y border-border bg-surface/40">
          <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Featured Work</p>
              <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
                A selection from the archive
              </h2>
              <p className="mt-5 text-muted-foreground">
                Recent work, spaces and details. Select any image to view it full size.
              </p>
            </Reveal>
            <Reveal className="mt-16">
              <Gallery />
            </Reveal>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <Reveal className="text-center">
            <p className="eyebrow">Client Stories</p>
          </Reveal>
          <Reveal className="mt-14">
            <Testimonials />
          </Reveal>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-y border-border bg-surface/40">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-2 lg:px-10 lg:py-36">
            <Reveal>
              <p className="eyebrow">Est. 2009</p>
              <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
                Why clients stay with us
              </h2>
              <p className="mt-6 text-muted-foreground">
                We started in a two-room studio with a simple rule: never hand over work we
                wouldn&apos;t be proud to sign. Fifteen years later the team is larger, the rule is
                identical, and most of our clients still arrive by referral.
              </p>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:text-foreground"
              >
                Meet the Team <ArrowRight className="size-3.5" />
              </a>
            </Reveal>

            <div className="space-y-8">
              {differentiators.map((item, i) => (
                <Reveal key={item.title} delay={i * 100}>
                  <div className="flex gap-6 border-b border-border pb-8">
                    <item.icon className="mt-1 size-6 shrink-0 text-gold" />
                    <div>
                      <h3 className="font-display text-lg font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80} className="text-center">
                <p className="font-display text-5xl font-extrabold text-gold-gradient sm:text-6xl">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-y border-border bg-surface">
          <Reveal className="mx-auto max-w-3xl px-6 py-28 text-center lg:py-32">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Ready to experience Aurum?
            </h2>
            <p className="mt-5 text-muted-foreground">
              Free consultation. No deposit required to hold your first appointment.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex min-h-12 items-center justify-center bg-gold px-12 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:shadow-[var(--shadow-gold)]"
            >
              Book Appointment
            </a>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <p className="eyebrow">Get In Touch</p>
              <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
                Book your appointment
              </h2>
              <p className="mt-5 max-w-lg text-muted-foreground">
                Tell us what you need and a member of the team will reply within one working day.
              </p>
              <div className="mt-12">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="border border-border bg-surface p-8">
                <h3 className="font-display text-lg font-bold">Studio</h3>
                <ul className="mt-6 space-y-5 text-sm text-muted-foreground">
                  <li className="flex gap-4">
                    <Phone className="size-4 shrink-0 text-gold" />
                    <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-gold">
                      {CONTACT_PHONE}
                    </a>
                  </li>
                  <li className="flex gap-4">
                    <Mail className="size-4 shrink-0 text-gold" />
                    <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold">
                      {CONTACT_EMAIL}
                    </a>
                  </li>
                  <li className="flex gap-4">
                    <MessageCircle className="size-4 shrink-0 text-gold" />
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold"
                    >
                      WhatsApp · {CONTACT_PHONE}
                    </a>
                  </li>
                  <li className="flex gap-4">
                    <MapPin className="size-4 shrink-0 text-gold" />
                    <span>
                      Govandi
                      <br />
                      Mumbai-400043
                    </span>
                  </li>
                </ul>

                <div className="my-8 hairline" />

                <h3 className="font-display text-lg font-bold">Hours</h3>
                <ul className="mt-6 space-y-3 text-sm">
                  {hours.map(([day, time]) => (
                    <li key={day} className="flex justify-between gap-4">
                      <span className="text-muted-foreground">{day}</span>
                      <span className="text-foreground">{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-4">
            <div>
              <p className="font-display text-lg font-bold uppercase tracking-[0.28em]">
                Aurum<span className="text-gold">.</span>
              </p>
              <p className="mt-5 max-w-xs text-sm text-muted-foreground">
                A premium service studio in SoHo, New York. Est. 2009.
              </p>
              <div className="mt-6 flex gap-3">
                {[Instagram, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#top"
                    aria-label={i === 0 ? "Instagram" : "Facebook"}
                    className="flex size-12 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="eyebrow">Explore</p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {["Services", "Gallery", "About", "Contact"].map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase()}`} className="hover:text-gold">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow">Hours</p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {hours.map(([day, time]) => (
                  <li key={day}>
                    {day} · {time}
                  </li>
                ))}
                <li>+1 (212) 555-0142</li>
              </ul>
            </div>

            <div>
              <p className="eyebrow">Newsletter</p>
              <p className="mt-6 text-sm text-muted-foreground">
                Seasonal releases and private events. No noise.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const input = e.currentTarget.elements.namedItem(
                    "newsletter",
                  ) as HTMLInputElement | null;
                  const value = input?.value.trim() ?? "";
                  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
                    toast.error("Enter a valid email address.");
                    return;
                  }
                  toast.success("You're on the list.");
                  e.currentTarget.reset();
                }}
                className="mt-5 flex flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="newsletter" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter"
                  name="newsletter"
                  type="email"
                  placeholder="you@company.com"
                  className="min-h-12 flex-1 border border-border bg-transparent px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold"
                />
                <button
                  type="submit"
                  className="min-h-12 border border-gold px-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} Aurum Studio. All rights reserved.</p>
            <p>Template by Aurum — customizable for any service business.</p>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <a
        href="#contact"
        className="fixed inset-x-4 bottom-4 z-40 flex min-h-12 items-center justify-center bg-gold text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground shadow-[var(--shadow-gold)] lg:hidden"
      >
        Book Now
      </a>
    </div>
  );
}
