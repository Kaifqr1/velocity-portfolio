import { useEffect, useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const items = [
  { src: g1, alt: "Artisan at work in warm low light", label: "The Craft", w: 900, h: 1200 },
  { src: g2, alt: "Signature product on dark marble", label: "Signature Piece", w: 1200, h: 900 },
  { src: g3, alt: "Marble and brass interior detail", label: "The Space", w: 1000, h: 1000 },
  { src: g4, alt: "Portrait of a team member", label: "The Team", w: 900, h: 1200 },
  { src: g5, alt: "Styled table setting from above", label: "The Details", w: 1200, h: 900 },
  { src: g6, alt: "Brushed brass and black stone texture", label: "The Materials", w: 1000, h: 1000 },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        {items.map((item, i) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setActive(i)}
            className="group relative block w-full overflow-hidden break-inside-avoid border border-border"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              width={item.w}
              height={item.h}
              className="w-full transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-end bg-background/60 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="eyebrow">{item.label}</span>
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[active].label}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-6 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActive(null)}
            className="absolute right-6 top-6 flex size-12 items-center justify-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
          >
            <X className="size-5" />
          </button>
          <img
            src={items[active].src}
            alt={items[active].alt}
            className="max-h-[85vh] w-auto max-w-full border border-border"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
