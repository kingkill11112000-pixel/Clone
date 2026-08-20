import { useRef, useState, type PointerEvent } from "react";
import { BlurFade } from "@/components/blur-fade";
import { DATA } from "@/data/site";
import { cn } from "@/lib/utils";

const COLOR: Record<(typeof DATA.openSource)[number]["color"], string> = {
  cloudinary: "text-cloudinary",
  dodo: "text-dodo",
  hyperswitch: "text-hyperswitch",
};

export function OpenSource() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="open-source" className="relative z-10">
      <BlurFade delay={0.16}>
        <h2 className="font-grotesk -translate-y-0.5 text-xl font-bold">OS Contributions</h2>
      </BlurFade>
      <BlurFade delay={0.2} className="mt-3">
        <div className="flex items-center justify-between gap-3">
          {DATA.openSource.map((org, i) => (
            <div key={org.name} className="flex min-w-0 flex-1 items-center">
              {i > 0 ? (
                <div className="mx-1 h-12 w-px shrink-0 bg-gradient-to-b from-transparent via-border to-transparent" />
              ) : null}
              <a
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setOpen(org.name)}
                onMouseLeave={() => setOpen(null)}
                onFocus={() => setOpen(org.name)}
                onBlur={() => setOpen(null)}
                className="group relative flex min-w-0 flex-1 flex-col items-center gap-2 overflow-hidden rounded-lg py-2"
              >
                <div
                  className={cn(
                    "pixel-grid pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-70",
                    COLOR[org.color],
                  )}
                />
                <span className="relative z-10 flex size-12 items-center justify-center overflow-hidden rounded-full border border-fg/20 bg-surface shadow-sm">
                  <img
                    src={org.imageSrc}
                    alt={org.name}
                    className="size-8 object-contain opacity-80 grayscale contrast-125 transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:contrast-100"
                  />
                </span>
                <span className="relative z-10 font-geist text-xs font-semibold text-muted">
                  {org.name}
                </span>
                {open === org.name ? (
                  <div className="absolute top-full z-30 mt-1 w-64 rounded-md border border-border bg-bg p-2 text-left shadow-lg">
                    <p className="mb-1 text-xs font-semibold">Pull requests</p>
                    <ul className="space-y-1">
                      {org.prs.map((pr) => (
                        <li key={pr.number}>
                          <span className="block truncate text-xs text-muted">
                            #{pr.number} {pr.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </a>
            </div>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}

const MAX = 32;

function elastic(v: number) {
  const s = Math.sign(v);
  return s * Math.min(MAX, Math.abs(v) * 0.22);
}

export function Skills() {
  const [pos, setPos] = useState<Record<string, { x: number; y: number; dragging: boolean }>>(
    {},
  );
  const drag = useRef<{
    name: string;
    startX: number;
    startY: number;
  } | null>(null);

  function onPointerDown(e: PointerEvent, name: string) {
    drag.current = { name, startX: e.clientX, startY: e.clientY };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setPos((p) => ({ ...p, [name]: { x: 0, y: 0, dragging: true } }));
  }

  function onPointerMove(e: PointerEvent) {
    if (!drag.current) return;
    const d = drag.current;
    setPos((p) => ({
      ...p,
      [d.name]: {
        x: elastic(e.clientX - d.startX),
        y: elastic(e.clientY - d.startY),
        dragging: true,
      },
    }));
  }

  function onPointerUp() {
    if (!drag.current) return;
    const name = drag.current.name;
    drag.current = null;
    setPos((p) => ({ ...p, [name]: { x: 0, y: 0, dragging: false } }));
  }

  return (
    <section id="skills" className="relative z-10">
      <BlurFade delay={0.18}>
        <h2 className="font-grotesk text-xl font-bold">Skills</h2>
      </BlurFade>
      <div
        className="relative mt-3 flex flex-wrap gap-1"
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div className="pointer-events-none absolute -top-8 right-0 text-muted">
          <svg width="80" height="30" viewBox="0 0 80 30" fill="none" aria-hidden>
            <path
              d="M5 15C5 15 15 12 30 15C45 18 55 15 65 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="3 2"
            />
            <path
              d="M5 10L10 15L5 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="rotate(-200, 7.5, 15) translate(2, 0.5)"
            />
            <text x="25" y="10" fontSize="8" fontFamily="cursive" fill="currentColor">
              drag me!
            </text>
          </svg>
        </div>
        {DATA.skills.map((skill, i) => {
          const p = pos[skill.name];
          return (
            <BlurFade key={skill.name} delay={0.2 + i * 0.012}>
              <button
                type="button"
                onPointerDown={(e) => onPointerDown(e, skill.name)}
                className="inline-flex select-none items-center gap-1 rounded-md border border-dashed border-border bg-bg px-2.5 py-0.5 text-xs font-semibold shadow-sm touch-none hover:bg-surface"
                style={{
                  cursor: p?.dragging ? "grabbing" : "grab",
                  zIndex: p?.dragging ? 50 : 1,
                  transform: p
                    ? `translate(${p.x}px, ${p.y}px) scale(${p.dragging ? 1.2 : 1})`
                    : undefined,
                  transition: p?.dragging
                    ? "none"
                    : "transform 0.45s cubic-bezier(0.22, 1.6, 0.36, 1)",
                }}
              >
                <img src={skill.icon} alt="" className="size-3 object-contain" />
                {skill.name}
              </button>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
