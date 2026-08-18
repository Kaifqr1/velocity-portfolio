import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Gauge,
  Wind,
  CircuitBoard,
  Wrench,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import brakesImg from "@/assets/spec-brakes.jpg";
import engineImg from "@/assets/spec-engine.jpg";
import heritage1 from "@/assets/heritage-1.jpg";
import heritage2 from "@/assets/heritage-2.jpg";
import heritage3 from "@/assets/heritage-3.jpg";

import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kess Motorsport — Performance Engineering & Race Programmes" },
      {
        name: "description",
        content:
          "Kess Motorsport engineers championship-winning race programmes: performance engineering, aerodynamics and race operations for premium marques.",
      },
      { property: "og:title", content: "Kess Motorsport — Built to Perform" },
      {
        property: "og:description",
        content:
          "Six decades of race engineering. Programmes, aerodynamics and operations for premium marques.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Gauge,
    title: "Performance Engineering",
    desc: "Powertrain calibration, thermal management and lap-time simulation built around your homologation window.",
    detail: "Dyno-validated gains of 4–9% across GT3, LMP2 and hypercar platforms.",
  },
  {
    icon: Wind,
    title: "Aerodynamics",
    desc: "CFD-first development with wind-tunnel correlation and track-verified balance mapping.",
    detail: "Full-scale correlation within 1.8% of tunnel prediction.",
  },
  {
    icon: CircuitBoard,
    title: "Vehicle Electronics",
    desc: "Control units, telemetry architecture and driver interfaces engineered for endurance reliability.",
    detail: "Zero control-system retirements across 42 race weekends.",
  },
  {
    icon: Wrench,
    title: "Race Operations",
    desc: "Trackside crews, logistics and strategy desks that run a full championship season end to end.",
    detail: "Average pit stop 2.31s across the 2025 endurance calendar.",
  },
];

const specs = [
  {
    img: brakesImg,
    eyebrow: "Braking",
    title: "Carbon-ceramic deceleration",
    desc: "Six-piston monobloc calipers with directional venting hold pedal feel consistent from lap one to the final stint. Temperature is mapped corner by corner and fed to the strategy desk in real time.",
    stat: "1.9 g",
    statLabel: "Sustained braking",
  },
  {
    img: engineImg,
    eyebrow: "Powertrain",
    title: "Engineered for the long run",
    desc: "Every powerplant is stripped, measured and rebuilt to our own tolerance sheet. Combustion mapping is tuned for fuel-flow regulations without surrendering peak drivability.",
    stat: "641 hp",
    statLabel: "Homologated output",
  },
];

const timeline = [
  {
    year: "1968",
    title: "The first works entry",
    img: heritage1,
    desc: "A single-car programme run from a rented workshop takes a class win on debut and sets the standard for everything after it.",
    achievement: "Class win, first season",
  },
  {
    year: "2009",
    title: "Endurance dominance",
    img: heritage2,
    desc: "Full endurance operations built in-house — strategy, telemetry, pit crew — deliver three consecutive manufacturer titles.",
    achievement: "3 consecutive titles",
  },
  {
    year: "2026",
    title: "The electrified era",
    img: heritage3,
    desc: "Hybrid and full-electric prototypes developed alongside our combustion programmes, sharing one aerodynamic philosophy.",
    achievement: "2 hypercar programmes live",
  },
];

const cases = [
  {
    client: "Vantor Racing",
    desc: "Full-season GT3 programme rebuilt from chassis up in 11 months.",
    result: "+1.4s per lap",
  },
  {
    client: "Aurel Hypercar",
    desc: "Aerodynamic package and control electronics for a debut hypercar entry.",
    result: "P2 on debut",
  },
  {
    client: "Northline Endurance",
    desc: "Trackside operations, strategy desk and logistics across three continents.",
    result: "98.6% finish rate",
  },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Silver GT racing car lit in a dark studio"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-veil)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-32 lg:px-10 lg:pb-32">
          <Reveal>
            <p className="eyebrow">Since 1968 · Stuttgart</p>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.75rem,7vw,4.5rem)] font-bold">
              Built to Perform.
              <br />
              <span className="text-gold-gradient">Engineered to Impress.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base text-muted-foreground sm:text-lg">
              We design, build and run race programmes for marques that measure success in
              thousandths of a second.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <a
                href="#services"
                className="inline-flex min-h-12 items-center gap-3 bg-gold px-10 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:shadow-[var(--shadow-gold)]"
              >
                Explore details <ArrowUpRight className="size-4" />
              </a>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                58 years · 214 podiums
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Capabilities</p>
          <h2 className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold">
            Four disciplines. One programme.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group h-full bg-surface p-10 transition-all duration-500 hover:-translate-y-1 hover:bg-surface-elevated hover:shadow-[var(--shadow-lift)] lg:p-14">
                <s.icon className="size-7 text-gold" strokeWidth={1.25} />
                <h3 className="mt-8 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-4 text-muted-foreground">{s.desc}</p>
                <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="pt-6 text-sm text-gold">{s.detail}</p>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-gold"
                >
                  Learn more <ArrowUpRight className="size-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Component breakdown</p>
            <h2 className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold">
              Every part accounted for.
            </h2>
          </Reveal>
          <div className="mt-20 space-y-24 lg:space-y-32">
            {specs.map((spec, i) => (
              <Reveal
                key={spec.title}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="overflow-hidden">
                  <img
                    src={spec.img}
                    alt={spec.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="aspect-4/3 w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                  />
                </figure>
                <div>
                  <p className="eyebrow">{spec.eyebrow}</p>
                  <h3 className="mt-5 text-[clamp(1.5rem,3vw,2rem)] font-semibold">{spec.title}</h3>
                  <p className="mt-6 text-muted-foreground">{spec.desc}</p>
                  <div className="mt-10 border-l border-gold pl-6">
                    <p className="font-display text-4xl font-bold text-gold-gradient">
                      {spec.stat}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      {spec.statLabel}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage timeline */}
      <section id="heritage" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Heritage</p>
          <h2 className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold">Six decades of milestones.</h2>
        </Reveal>

        <div className="relative mt-20">
          <div
            className="absolute left-0 top-0 hidden h-full w-px bg-border lg:left-1/2 lg:block"
            aria-hidden="true"
          />
          <ol className="space-y-20 lg:space-y-32">
            {timeline.map((item, i) => (
              <Reveal as="li" key={item.year} className="relative">
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                    i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                  }`}
                >
                  <figure className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      width={1000}
                      height={700}
                      className="aspect-3/2 w-full object-cover"
                    />
                  </figure>
                  <div className={i % 2 === 1 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}>
                    <p className="font-display text-5xl font-bold text-gold-gradient">
                      {item.year}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-4 text-muted-foreground">{item.desc}</p>
                    <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gold">
                      {item.achievement}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Case studies */}
      <section id="portfolio" className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold">Results, not renderings.</h2>
          </Reveal>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {cases.map((c, i) => (
              <Reveal key={c.client} delay={i * 90}>
                <article className="flex h-full flex-col justify-between border border-border bg-background p-10 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[var(--shadow-lift)]">
                  <div>
                    <h3 className="text-xl font-semibold">{c.client}</h3>
                    <p className="mt-4 text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                  <div className="mt-10">
                    <p className="font-display text-3xl font-bold text-gold-gradient">{c.result}</p>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-gold"
                    >
                      Read case study <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-20 flex flex-wrap items-center justify-center gap-x-16 gap-y-8 opacity-60">
            {["VANTOR", "AUREL", "NORTHLINE", "MERIDIAN", "KAHLBERG"].map((logo) => (
              <span
                key={logo}
                className="font-display text-sm font-semibold tracking-[0.35em] text-silver"
              >
                {logo}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="eyebrow">Start a programme</p>
            <h2 className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold">
              Tell us what you want to win.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Every engagement begins with a technical review. Share the brief and we'll come back
              with a feasibility outline within one working day.
            </p>
            <div className="hairline mt-12" />
            <p className="mt-8 text-sm text-muted-foreground">
              Kess Motorsport GmbH · Weissach, Germany
              <br />
              programmes@kessmotorsport.com
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-display text-lg font-bold uppercase tracking-[0.28em]">
                Kess<span className="text-gold">.</span>
              </p>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                Race engineering, aerodynamics and operations since 1968.
              </p>
            </div>
            <div>
              <p className="eyebrow">Company</p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {["Services", "Portfolio", "Heritage", "Contact"].map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-gold">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Legal</p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {["Privacy", "Terms", "Imprint"].map((l) => (
                  <li key={l}>
                    <a href="#top" className="transition-colors hover:text-gold">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Follow</p>
              <div className="mt-5 flex gap-4">
                {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#top"
                    aria-label="Social profile"
                    className="flex size-12 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Kess Motorsport GmbH</p>
            <p>Weissach · Le Mans · Suzuka</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
