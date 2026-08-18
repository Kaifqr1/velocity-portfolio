import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "From the first consultation to the final detail, everything felt considered. The result exceeded what we imagined — and our clients noticed immediately.",
    name: "Alexandra Reuter",
    role: "Signature Experience",
    initials: "AR",
  },
  {
    quote:
      "Rare to find a team this precise and this warm at the same time. They handled every request without a single dropped thread.",
    name: "Marcus Vale",
    role: "Membership Client",
    initials: "MV",
  },
  {
    quote:
      "The attention to craft is obvious. We've been coming back for three years and the standard has never slipped once.",
    name: "Priya Nandakumar",
    role: "Premium Care",
    initials: "PN",
  },
  {
    quote:
      "Professional, discreet and genuinely enjoyable to work with. Easily the best experience we've had in this category.",
    name: "Julien Roche",
    role: "Consultation",
    initials: "JR",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <div
      className="relative mx-auto max-w-3xl text-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[19rem] sm:min-h-[16rem]">
        {testimonials.map((t, i) => (
          <figure
            key={t.name}
            aria-hidden={i !== index}
            className={cn(
              "absolute inset-0 flex flex-col items-center justify-center transition-all duration-700",
              i === index ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0",
            )}
          >
            <div className="mb-6 flex gap-1 text-gold" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="size-4 fill-current" />
              ))}
            </div>
            <blockquote className="font-display text-xl leading-snug text-foreground sm:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex items-center justify-center gap-4">
              <span className="flex size-11 items-center justify-center rounded-full border border-gold/40 text-xs font-semibold tracking-widest text-gold">
                {t.initials}
              </span>
              <span className="text-left">
                <span className="block text-sm font-semibold text-foreground">{t.name}</span>
                <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t.role}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          className="flex size-12 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1 w-8 transition-colors",
                i === index ? "bg-gold" : "bg-border hover:bg-muted-foreground",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => go(1)}
          className="flex size-12 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
