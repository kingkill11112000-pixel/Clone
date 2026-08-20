import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { BlurFade } from "@/components/blur-fade";
import { DATA } from "@/data/site";

const GLOWS = ["#f97316", "#10b981", "#8b5cf6"];

function RoleGraph() {
  const wrap = useRef<HTMLDivElement>(null);
  const src = useRef<HTMLButtonElement>(null);
  const dest = useRef<(HTMLButtonElement | null)[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    const measure = () => {
      if (!wrap.current || !src.current) return;
      const box = wrap.current.getBoundingClientRect();
      setSize({ w: box.width, h: box.height });
      const s = src.current.getBoundingClientRect();
      const sx = s.left - box.left + s.width / 2;
      const sy = s.top - box.top + s.height / 2;
      const next: string[] = [];
      dest.current.forEach((el, i) => {
        if (!el) return;
        const d = el.getBoundingClientRect();
        const dx = d.left - box.left;
        const dy = d.top - box.top + d.height / 2;
        if (i === 0) {
          next.push(`M${sx},${s.top - box.top} L${sx},${dy} L${dx},${dy}`);
        } else if (i === 1) {
          next.push(`M${s.right - box.left},${sy} L${dx},${dy}`);
        } else {
          next.push(`M${sx},${s.bottom - box.top} L${sx},${dy} L${dx},${dy}`);
        }
      });
      setPaths(next);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (wrap.current) ro.observe(wrap.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div ref={wrap} className="relative flex w-full items-center justify-between gap-6">
      {size.w > 0 && paths.length > 0 ? (
        <svg
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w} ${size.h}`}
          className="pointer-events-none absolute inset-0"
          fill="none"
          aria-hidden
        >
          {paths.map((d, i) => (
            <g key={d}>
              <path d={d} stroke="#a0a0a0" strokeOpacity="0.35" strokeWidth="1.5" fill="none" />
              <path
                d={d}
                stroke={GLOWS[i]}
                strokeWidth="1.5"
                strokeDasharray="10 8"
                className="animate-dash-flow"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          ))}
        </svg>
      ) : null}

      <div
        className="relative z-10 w-fit overflow-hidden rounded-lg bg-[#dcdcdc] p-1 dark:bg-white"
        style={{ boxShadow: "inset 0 0 2px rgb(0 0 0 / 1)" }}
      >
        <div
          className="rounded-md border border-fg/40 bg-bg"
          style={{ boxShadow: "0 0 10px rgb(0 0 0 / 0.2)" }}
        >
          <button ref={src} type="button" className="font-grotesk px-3 py-1.5 text-fg/70">
            <span className="truncate text-sm font-semibold sm:text-base md:text-lg">
              I build my best work as
            </span>
          </button>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-end justify-center gap-3">
        {DATA.roles.map((role, i) => (
          <div
            key={role}
            className="relative w-fit overflow-hidden rounded-lg bg-[#dcdcdc] p-1"
            style={{ boxShadow: "inset 0 0 2px rgb(0 0 0 / 1)" }}
          >
            <span
              className="pointer-events-none absolute top-1/2 left-0 h-6 w-8 -translate-x-[10%] -translate-y-1/2 rounded-full opacity-70 blur-[6px]"
              style={{ backgroundColor: GLOWS[i] }}
            />
            <div
              className="relative z-10 rounded-md border border-fg/40 bg-bg"
              style={{ boxShadow: "0 0 10px rgb(0 0 0 / 0.2)" }}
            >
              <button
                type="button"
                ref={(el) => {
                  dest.current[i] = el;
                }}
                className="font-grotesk px-3 py-1.5"
              >
                <span className="truncate text-xs font-medium sm:text-sm md:text-base">{role}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HireMe() {
  return (
    <section id="hire" className="relative z-10">
      <BlurFade delay={0.16}>
        <h2 className="font-grotesk text-lg font-bold sm:text-xl md:text-2xl">Hire Me</h2>
        <p className="font-geist mt-2 max-w-3xl text-xs leading-relaxed text-muted sm:text-sm md:text-base">
          I could be an ideal fit if you're looking for someone who doesn't just code
          but truly cares about what's being built. Someone who treats{" "}
          <span className="font-bold text-fg">your product like their own</span>, sees weekends
          as opportunities to learn and grow, and loves refining every detail. If you need a
          developer <span className="font-bold text-fg">who builds with heart and purpose</span>,
          let's talk.
        </p>
      </BlurFade>
      <BlurFade delay={0.22} className="mt-6">
        <RoleGraph />
      </BlurFade>
    </section>
  );
}

async function copyText(value: string, label: string) {
  try {
    await navigator.clipboard.writeText(value);
    toast.success(`${label} copied`);
  } catch {
    toast.error("Could not copy");
  }
}

function PayChip({
  label,
  value,
  icon,
  showLabel = true,
}: {
  label: string;
  value: string;
  icon: string;
  showLabel?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => copyText(value, label)}
      className="group relative inline-flex items-center justify-center rounded-md border border-dashed border-border bg-fg/5 px-3 py-1.5 text-sm shadow-[0_0_5px_rgb(0_0_0_/_0.1)] transition-colors hover:bg-fg/10"
    >
      <img src={icon} alt="" className="mr-2 h-4 w-4" />
      {showLabel ? <span className="font-grotesk font-semibold">{label}</span> : null}
      <span className="pointer-events-none absolute -top-8 right-0 hidden whitespace-nowrap rounded bg-fg px-2 py-1 text-xs text-bg group-hover:block">
        Click to copy
      </span>
    </button>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative z-10 pb-4">
      <BlurFade delay={0.2}>
        <h2 className="font-grotesk text-center text-xl font-bold sm:text-3xl">Get in Touch</h2>
        <p className="font-geist mt-3 text-center text-sm leading-relaxed text-muted sm:text-base">
          Want to chat? Just shoot me a dm via{" "}
          <a
            href={DATA.contact.social.email.url}
            className="mx-1 inline-flex items-center rounded-md border border-dashed border-border bg-fg/5 px-2 py-1 text-sm text-fg shadow-[0_0_5px_rgb(0_0_0_/_0.1)]"
          >
            <img src="/svg/gmail.svg" alt="" className="mr-1.5 h-3.5 w-3.5" />
            Gmail
          </a>{" "}
          or reach out on{" "}
          <a
            href={DATA.contact.social.X.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 inline-flex items-center rounded-md border border-dashed border-border bg-fg/5 px-2 py-1 text-sm text-fg shadow-[0_0_5px_rgb(0_0_0_/_0.1)]"
          >
            <img src="/svg/X.svg" alt="" className="mr-1.5 h-3.5 w-3.5" />
            Twitter
          </a>
        </p>
      </BlurFade>

      <BlurFade delay={0.24} className="mt-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-sm font-semibold text-muted">Support my work</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <PayChip label="Solana" value={DATA.support.solana} icon="/svg/solana.svg" />
            <span className="text-muted">•</span>
            <PayChip label="Paytm" value={DATA.support.paytm} icon="/svg/paytm.svg" showLabel={false} />
            <span className="text-muted">•</span>
            <PayChip label="PayPal" value={DATA.support.paypal} icon="/svg/paypal.svg" showLabel={false} />
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.28} className="mt-10">
        <p className="font-grotesk text-center text-muted">Stay hungry, stay foolish</p>
      </BlurFade>
    </section>
  );
}
