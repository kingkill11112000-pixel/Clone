import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function ResumeCard({
  href,
  logoUrl,
  alt,
  title,
  company,
  subtitle,
  period,
  badge,
  grotesk,
}: {
  href?: string;
  logoUrl: string;
  alt: string;
  title: string;
  company?: string;
  subtitle?: string;
  period: string;
  badge?: string;
  grotesk?: boolean;
}) {
  const inner = (
    <article className="flex gap-3 rounded-lg py-2">
      <img
        src={logoUrl}
        alt=""
        className="size-12 shrink-0 rounded-xl border border-border bg-white object-contain p-0.5 dark:bg-zinc-900"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3
              className={cn(
                "flex items-center gap-2 text-base font-semibold",
                grotesk && "font-grotesk",
              )}
            >
              <span className="truncate">{title}</span>
              {badge ? (
                <>
                  <span className="text-muted">|</span>
                  <span className="shrink-0 text-sm font-medium capitalize text-muted">
                    {badge}
                  </span>
                </>
              ) : null}
              {href ? (
                <ExternalLink className="size-3.5 shrink-0 text-muted" />
              ) : null}
            </h3>
            {company ? (
              <p className="mt-0.5 text-sm font-medium text-fg/80">{company}</p>
            ) : null}
            {subtitle ? (
              <p className="mt-1 text-sm leading-relaxed text-muted">{subtitle}</p>
            ) : null}
          </div>
          <span className="shrink-0 pt-0.5 text-right text-xs font-medium whitespace-nowrap text-muted">
            {period}
          </span>
        </div>
      </div>
    </article>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={alt}>
        {inner}
      </a>
    );
  }
  return inner;
}
