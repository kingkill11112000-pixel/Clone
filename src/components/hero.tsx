import { useEffect, useState } from "react";
import { BlurFade } from "@/components/blur-fade";
import { DATA } from "@/data/site";

const TAGLINES = ["developer", "high agency dev", "helping startups go from 0 to 1."];

function MorphText({ texts }: { texts: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % texts.length), 3000);
    return () => clearInterval(id);
  }, [texts.length]);
  return (
    <span className="relative inline-block min-h-[1.2em] font-semibold">
      <span key={i} className="inline-block whitespace-nowrap animate-tag-fade">
        {texts[i]}
      </span>
    </span>
  );
}

function StackScroller() {
  const items = [...DATA.skills, ...DATA.skills];
  return (
    <span className="relative mx-1 inline-flex h-[18px] w-12 align-middle overflow-hidden rounded-sm border border-fg/30 bg-fg/10 shadow-[inset_0_3px_6px_rgb(255_255_255_/_1)] dark:shadow-[inset_0_3px_6px_rgb(255_255_255_/_0.35)]">
      <span
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgb(0 0 0 / 0.25), transparent 18%, transparent 82%, rgb(0 0 0 / 0.25))",
        }}
      />
      <span className="flex w-max animate-scroll items-center gap-[0.7rem] px-1">
        {items.map((s, i) => (
          <img
            key={`${s.name}-${i}`}
            src={s.icon}
            alt=""
            className="size-3 shrink-0 object-contain"
          />
        ))}
      </span>
    </span>
  );
}

function Pill({
  children,
  texture,
}: {
  children: string;
  texture: string;
}) {
  return (
    <span className="relative mx-0.5 inline-flex items-center justify-center overflow-hidden rounded-full border border-fg/20 px-2 py-0.5 font-semibold">
      <span
        className="absolute inset-0 rounded-full opacity-80"
        style={{
          backgroundImage: `url(${texture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "inset 0 1px 3px rgb(255 255 255 / 0.8)",
        }}
      />
      <span
        className="relative text-white"
        style={{ textShadow: "1px 1px 0 rgb(0 0 0 / 0.5)" }}
      >
        {children}
      </span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative z-10">
      <div className="flex items-center justify-between gap-4">
        <BlurFade delay={0.04}>
          <img
            src={DATA.avatarUrl}
            alt={DATA.name}
            width={80}
            height={80}
            className="size-16 rounded-xl border border-dashed border-border object-cover p-1 transition-all duration-300 hover:-rotate-6 hover:p-1.5 sm:size-20"
          />
        </BlurFade>
        <div className="h-[60px] -translate-y-1 border-r border-dashed border-fg/10" />
        <div className="flex min-w-0 flex-1 flex-col">
          <h1 className="font-grotesk border-b border-dashed border-border pb-1 text-xl font-semibold tracking-tighter sm:text-3xl">
            {DATA.name}
          </h1>
          <BlurFade delay={0.05}>
            <p className="mt-1 w-fit text-sm font-medium text-muted">
              <MorphText texts={TAGLINES} />
            </p>
          </BlurFade>
        </div>
      </div>

      <BlurFade delay={0.08} className="mt-3">
        <div className="font-geist max-w-[500px] text-sm leading-relaxed text-muted sm:text-base">
          • I love building Clean <span className="font-bold text-fg">Consumer</span> facing{" "}
          <Pill texture="/textures/web-pill.jpg">Web</Pill> and{" "}
          <Pill texture="/textures/mobile-pill.jpg">Mobile</Pill> apps.
          <br />• Worked with{" "}
          <span
            className="mx-0.5 rounded-sm bg-fg/80 px-1 font-medium text-white"
            style={{
              boxShadow:
                "inset 0 2px 2px rgb(255 255 255 / 0.3), 0 0 3px rgb(0 0 0 / 0.4)",
            }}
          >
            5
          </span>{" "}
          <span className="font-bold text-fg">Fast-Paced</span> startups.
          <br />• Proficient with
          <StackScroller />
          tech stack.
        </div>
      </BlurFade>
    </section>
  );
}
