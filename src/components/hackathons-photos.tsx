import { useState, type CSSProperties } from "react";
import { BlurFade } from "@/components/blur-fade";
import { DATA } from "@/data/site";

export function Hackathons() {
  const [open, setOpen] = useState(false);
  return (
    <section id="hackathons" className="relative z-10">
      <div className="relative w-full space-y-2 py-2 pb-8">
        <BlurFade delay={0.2}>
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <h2 className="font-grotesk text-3xl font-bold tracking-tighter sm:text-5xl">
              Hackathons
            </h2>
            <div className="relative flex items-center justify-center gap-1 text-sm text-muted">
              I've been a part of 3 hackathons -
              <div
                className="group relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <button
                  type="button"
                  className="flex w-[45px] cursor-pointer rounded-md border border-dashed border-border bg-fg/5 py-0.5 hover:bg-fg/10"
                  aria-label="Hackathon details"
                  onClick={() => setOpen((v) => !v)}
                >
                  {DATA.hackathons.map((h, i) => (
                    <img
                      key={h.title}
                      src={h.image}
                      alt=""
                      className="mx-1 h-4 rounded-full"
                      style={{ transform: i === 0 ? undefined : `translateX(-${i * 15}px)` }}
                    />
                  ))}
                </button>
                {open ? (
                  <div className="absolute top-full right-[-16px] z-50 mt-2 w-[min(92vw,350px)] rounded-xl border border-dashed border-border bg-bg/95 p-4 text-left shadow-[0_0_10px_rgb(0_0_0_/_0.1)] backdrop-blur-sm">
                    <ul className="space-y-3">
                      {DATA.hackathons.map((h) => (
                        <li key={h.title} className="flex gap-3">
                          <img src={h.image} alt="" className="size-8 rounded-md object-cover" />
                          <div>
                            <p className="text-sm font-semibold text-fg">
                              {h.title}
                              {h.isFinalist ? (
                                <span className="ml-2 text-[10px] font-semibold tracking-wide text-muted uppercase">
                                  Finalist
                                </span>
                              ) : null}
                            </p>
                            <p className="text-xs text-muted">{h.dates}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

export function PhotoMarquee() {
  const size = Math.ceil(DATA.photos.length / 3);
  const cols = [
    DATA.photos.slice(0, size),
    DATA.photos.slice(size, 2 * size),
    DATA.photos.slice(2 * size),
  ];
  const durations = ["30s", "25s", "35s"];

  return (
    <section
      className="group relative z-10 flex h-[360px] w-full flex-row items-center justify-center gap-4 overflow-hidden sm:h-[500px]"
      aria-hidden
      style={{
        maskImage: "linear-gradient(to top, transparent 0%, white 20%, white 80%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to top, transparent 0%, white 20%, white 80%, transparent 100%)",
      }}
    >
      {cols.map((col, ci) => {
        const loop = [...col, ...col, ...col];
        return (
          <div key={ci} className="h-full overflow-hidden">
            <div
              className={
                ci === 1
                  ? "pause-on-group flex flex-col animate-marquee-y"
                  : "pause-on-group flex flex-col animate-marquee-y-rev"
              }
              style={{ "--marquee-duration": durations[ci] } as CSSProperties}
            >
              {loop.map((src, i) => (
                <figure
                  key={`${src}-${i}`}
                  className="relative mb-4 h-40 w-28 overflow-hidden rounded-xl border border-fg/10 p-1 saturate-[0.6] transition-all duration-300 hover:saturate-100 sm:h-48 sm:w-36"
                >
                  <img src={src} alt="" className="h-full w-full rounded-xl object-cover" />
                </figure>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
