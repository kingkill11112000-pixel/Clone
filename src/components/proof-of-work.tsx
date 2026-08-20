import { Link } from "@tanstack/react-router";
import { BlurFade } from "@/components/blur-fade";
import { DATA, marqueeProjects } from "@/data/site";
import { cn } from "@/lib/utils";

const FROM = [
  { text: "Scalable Webapps", width: 134 },
  { text: "Frontend Magic", width: 110 },
  { text: "User Interfaces", width: 110 },
  { text: "Simple Scripts", width: 100 },
];
const TO = [
  { text: "Enterprise Solutions", width: 130 },
  { text: "Cloud Architecture", width: 130 },
  { text: "Backend Systems", width: 125 },
  { text: "Complex Mobile Apps", width: 150 },
];

function MorphLine() {
  return (
    <div
      className="mx-auto flex w-full items-center justify-center gap-2"
      style={{
        maskImage:
          "linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%)",
      }}
    >
      <span className="text-xs font-medium italic text-muted">From</span>
      <span className="relative h-5 overflow-hidden">
        <span className="animate-morph-from absolute flex flex-col">
          {FROM.map((t) => (
            <span
              key={t.text}
              className="font-grotesk h-5 text-center text-[14px] font-semibold whitespace-nowrap italic text-fg/80"
              style={{ width: t.width }}
            >
              {t.text}
            </span>
          ))}
        </span>
      </span>
      <span className="text-xs font-medium italic text-muted">to</span>
      <span className="relative h-5 overflow-hidden">
        <span className="animate-morph-to absolute flex flex-col">
          {TO.map((t) => (
            <span
              key={t.text}
              className="font-grotesk h-5 text-center text-[14px] font-semibold whitespace-nowrap italic text-fg/80"
              style={{ width: t.width }}
            >
              {t.text}
            </span>
          ))}
        </span>
      </span>
    </div>
  );
}

function ExtLink({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function PhoneReel() {
  const items = [...DATA.videoComponents, ...DATA.videoComponents];
  return (
    <div
      className="relative z-10 h-full w-full overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
      }}
    >
      <ul className="animate-scroll-rev flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4">
        {items.map((v, i) => (
          <li
            key={`${v.title}-${i}`}
            className="relative h-[160px] w-[80px] shrink-0 rounded-xl border border-fg/10 bg-white p-0.5 shadow-md"
          >
            <div className="relative h-full w-full">
              <video
                className="h-full w-full rounded-lg object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                src={v.videoUrl}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WebReel() {
  const featured = marqueeProjects.filter((p) =>
    [
      "mergemint",
      "Riyal",
      "Not-A-Basic",
      "Qwik",
      "DigiStore",
      "FlirtFuel",
      "Print-It-Out",
      "Solana",
    ].some((n) => p.title.toLowerCase().includes(n.toLowerCase())),
  );
  const source = featured.length ? featured : marqueeProjects;
  const items = [...source, ...source];
  return (
    <div
      className="relative z-10 h-full w-full overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
      }}
    >
      <ul className="animate-scroll-fwd flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4">
        {items.map((p, i) => (
          <li
            key={`${p.title}-${i}`}
            className="relative h-[120px] w-[220px] shrink-0 rounded-xl border border-fg/10 bg-white p-1 shadow-md"
          >
            <div className="relative h-full w-full">
              <img
                className="h-full w-full rounded-lg object-cover object-top"
                alt={p.title}
                src={p.image}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute right-2 bottom-2 left-2">
                <h3 className="line-clamp-1 text-sm font-semibold text-white">{p.title}</h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProofOfWork() {
  return (
    <section id="projects" className="relative z-10 pb-2">
      <div className="w-full space-y-6 py-2">
        <BlurFade delay={0.2}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="font-grotesk text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Proof of Work
            </h2>
            <MorphLine />
          </div>
        </BlurFade>

        <BlurFade delay={0.24}>
          <div className="flex h-[420px] w-full flex-col space-y-4 sm:h-[440px]">
            <Link
              to="/mobile-apps"
              className="group relative grid flex-1 cursor-pointer grid-cols-2 gap-2 overflow-hidden rounded-md border border-dashed border-border p-2"
            >
              <div
                className={cn(
                  "pointer-events-none absolute bottom-0 left-0 z-0 h-full w-full translate-y-1/2 scale-75 bg-[radial-gradient(circle,_#1e3a8a,_#3b82f6,_#60a5fa,_#93c5fd,_transparent,transparent)] opacity-0 blur-[64px] transition-all duration-300 ease-out",
                  "group-hover:scale-110 group-hover:opacity-80",
                )}
              />
              <div
                className="pointer-events-none absolute z-10 h-full w-[150%] sm:w-full"
                style={{ transform: "translateX(12%) rotate(30deg)", top: 0, left: 0 }}
              >
                <PhoneReel />
              </div>
              <div className="absolute bottom-0 left-0 z-20 w-[min(100%,380px)] p-2">
                <div className="flex items-center gap-2">
                  <h3
                    className="font-grotesk text-2xl font-semibold tracking-tighter sm:text-5xl"
                    style={{ textShadow: "1px 1px 0 rgb(255 255 255 / 0.5)" }}
                  >
                    Mobile Apps
                  </h3>
                  <ExtLink className="h-7 w-7 shrink-0 translate-y-1 text-fg/50 transition-all duration-300 group-hover:scale-95 group-hover:text-fg/80 sm:h-8 sm:w-8" />
                </div>
                <p className="mt-1 text-xs text-fg/50">
                  React Native apps with custom components, smooth animations, and polished UX
                </p>
              </div>
            </Link>

            <Link
              to="/web-apps"
              className="group relative flex-1 cursor-pointer overflow-hidden rounded-md border border-dashed border-border"
            >
              <div
                className={cn(
                  "pointer-events-none absolute right-0 bottom-0 z-0 h-full w-full translate-y-1/2 scale-75 bg-[radial-gradient(circle,_#dc2626,_#ef4444,_#f87171,_#fca5a5,_transparent,transparent)] opacity-0 blur-[64px] transition-all duration-300 ease-out",
                  "group-hover:scale-110 group-hover:opacity-80",
                )}
              />
              <div
                className="pointer-events-none absolute z-10 h-full w-[150%] sm:w-full"
                style={{ transform: "translateX(-18%) rotate(-30deg)", top: 0, left: 0 }}
              >
                <WebReel />
              </div>
              <div className="absolute right-0 bottom-0 z-20 w-[min(92%,280px)] p-2">
                <div className="flex items-center gap-2">
                  <h3
                    className="font-grotesk text-2xl font-semibold tracking-tighter sm:text-5xl"
                    style={{ textShadow: "1px 1px 0 rgb(255 255 255 / 0.5)" }}
                  >
                    Web Apps
                  </h3>
                  <ExtLink className="h-7 w-7 shrink-0 translate-y-1 text-fg/50 transition-all duration-300 group-hover:scale-95 group-hover:text-fg/80 sm:h-8 sm:w-8" />
                </div>
                <p className="mt-1 text-xs text-fg/50">
                  10+ full-stack applications with scalable backends, modern UI/UX, and
                  production-ready architecture
                </p>
              </div>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
