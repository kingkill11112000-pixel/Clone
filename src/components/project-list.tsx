import { useState } from "react";
import { Github, Globe, Play, X, Youtube } from "lucide-react";
import type { Project } from "@/data/site";
import { cn } from "@/lib/utils";

function LinkIcon({ type }: { type: string }) {
  if (type === "GitHub") return <Github className="size-3" />;
  if (type === "Demo") return <Play className="size-3" />;
  if (type === "Website") return <Globe className="size-3" />;
  return <Globe className="size-3" />;
}

const GLOW = [
  "bg-fuchsia-400",
  "bg-cyan-400",
  "bg-emerald-400",
  "bg-amber-400",
  "bg-rose-400",
  "bg-violet-400",
];

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const thumbs = project.mobileThumbnails ?? [];
  const extra = project.technologies.length - 6;
  const tags = project.technologies.slice(0, 6);
  const glow = GLOW[index % GLOW.length];

  return (
    <>
      <article
        className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border border-dashed border-border p-1 backdrop-blur-[1px] transition-all duration-300 hover:border-fg/40"
        onClick={() => setOpen(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {thumbs.length >= 3 ? (
          <div className="dot-grid relative flex h-40 items-center justify-center overflow-hidden rounded-md border border-border bg-surface p-1.5">
            <div
              className={cn(
                "pointer-events-none absolute inset-0 transition-opacity duration-300",
                glow,
                hover ? "opacity-70" : "opacity-0",
              )}
              style={{
                maskImage: "linear-gradient(to bottom, rgb(0 0 0 / 0.7) 0%, transparent 40%)",
              }}
            />
            <div
              className={cn(
                "relative z-20 flex size-full items-center justify-center gap-1 transition-transform duration-300",
                hover ? "translate-y-1 scale-100" : "translate-y-2 scale-95",
              )}
            >
              {thumbs.slice(0, 3).map((src, i) => (
                <div
                  key={src}
                  className={cn(
                    "relative overflow-hidden rounded-md border-2 border-white shadow-lg",
                    i === 0 && "z-10 w-[28%] -rotate-6",
                    i === 1 && "z-20 w-[32%]",
                    i === 2 && "z-10 w-[28%] rotate-6",
                  )}
                  style={{ aspectRatio: "9/16" }}
                >
                  <img src={src} alt="" className="h-full w-full object-cover object-top" />
                </div>
              ))}
            </div>
          </div>
        ) : project.image ? (
          <div className="dot-grid relative flex h-40 items-center justify-center overflow-hidden rounded-md border border-border bg-surface p-1.5">
            <div
              className={cn(
                "pointer-events-none absolute inset-0 transition-opacity duration-300",
                glow,
                hover ? "opacity-70" : "opacity-0",
              )}
              style={{
                maskImage: "linear-gradient(to bottom, rgb(0 0 0 / 0.7) 0%, transparent 40%)",
              }}
            />
            <img
              src={project.image}
              alt={project.title}
              className={cn(
                "relative z-20 h-full w-full rounded-md border-2 border-white object-cover object-top shadow-md transition-transform duration-300",
                hover ? "translate-y-0 scale-100" : "translate-y-2 scale-95",
              )}
            />
          </div>
        ) : null}

        <div className="space-y-0.5 px-2">
          <h3 className="mt-1 text-base font-semibold tracking-tight">{project.title}</h3>
          <p className="line-clamp-4 text-xs leading-relaxed text-muted">{project.description}</p>
        </div>

        <div className="mt-auto flex flex-col px-2">
          <div className="mt-2 h-px w-full border-b border-dashed border-border" />
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-md bg-fg/5 px-1 py-0 text-[10px] font-medium text-fg/70"
              >
                {t}
              </span>
            ))}
            {extra > 0 ? (
              <span className="rounded-md bg-fg/10 px-1 py-0 text-[10px] font-medium text-muted">
                +{extra} more
              </span>
            ) : null}
          </div>
          <div className="mt-1.5 h-px w-full border-b border-dashed border-border" />
        </div>

        <div className="flex flex-wrap items-center gap-1 px-2 pt-2 pb-2">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 rounded-md border border-dashed border-border bg-bg px-2 py-1 text-[10px] font-semibold shadow-sm hover:bg-surface"
            >
              <LinkIcon type={l.type} />
              {l.type}
            </a>
          ))}
          {project.demoLink ? (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 rounded-md border border-dashed border-border bg-bg px-2 py-1 text-[10px] font-semibold shadow-sm hover:bg-surface"
            >
              <Youtube className="size-3" />
              Demo
            </a>
          ) : null}
        </div>
      </article>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-bg/40 p-4 backdrop-blur-xl"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-lg border border-dashed border-border bg-bg p-4 shadow-[0_0_10px_rgb(0_0_0_/_0.1)]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 rounded-full p-1.5 hover:bg-surface"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>
            <h3 className="pr-8 text-lg font-semibold tracking-tight md:text-2xl">{project.title}</h3>
            <p className="mt-1 text-xs text-muted">{project.dates}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
            {thumbs.length > 0 ? (
              <div className="mt-4 flex justify-center gap-2">
                {thumbs.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-56 w-auto rounded-lg object-cover shadow-md"
                  />
                ))}
              </div>
            ) : project.image ? (
              <img src={project.image} alt="" className="mt-4 w-full rounded-lg object-cover" />
            ) : null}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border border-dashed border-border px-3 py-1.5 text-xs font-medium"
                >
                  <LinkIcon type={l.type} />
                  {l.type}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map((p, i) => (
        <ProjectCard key={p.title} project={p} index={i} />
      ))}
    </div>
  );
}
