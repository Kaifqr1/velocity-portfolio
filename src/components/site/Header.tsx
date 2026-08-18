import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", href: "#top" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Signature Experience", href: "#services" },
      { label: "Consultation", href: "#services" },
      { label: "Premium Care", href: "#services" },
      { label: "Membership", href: "#services" },
    ],
  },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/85 py-0 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-10",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <a href="#top" className="font-display text-lg font-bold uppercase tracking-[0.28em]">
          Aurum<span className="text-gold">.</span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {nav.map((item) => (
            <div key={item.label} className="group relative">
              <a
                href={item.href}
                className="flex items-center gap-1 text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
                {item.children && <ChevronDown className="size-3.5" />}
              </a>
              {item.children && (
                <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 translate-y-2 border border-border bg-surface p-2 opacity-0 shadow-[var(--shadow-lift)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface-elevated hover:text-gold"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#contact"
            className="border border-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Book Now
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex size-12 items-center justify-center lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-base tracking-wide text-muted-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 border border-gold px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
