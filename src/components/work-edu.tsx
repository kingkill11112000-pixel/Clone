import { ExternalLink } from "lucide-react";
import { BlurFade } from "@/components/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/site";

export function WorkExperience() {
  return (
    <section id="work" className="relative z-10">
      <BlurFade delay={0.18}>
        <h2 className="font-grotesk text-xl font-bold">Work Experience</h2>
      </BlurFade>
      <div className="mt-4 space-y-8">
        {DATA.work.map((job, i) => {
          const first = job.roles[0];
          const last = job.roles[job.roles.length - 1];
          const span =
            job.roles.length > 1
              ? `${last.start} – ${first.end}`
              : `${first.start} – ${first.end}`;

          return (
            <BlurFade key={job.company} delay={0.2 + i * 0.04}>
              <article>
                <a
                  href={job.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3"
                  aria-label={job.company}
                >
                  <img
                    src={job.logoUrl}
                    alt=""
                    className="size-12 shrink-0 rounded-xl border border-border bg-white object-contain p-0.5 dark:bg-zinc-900"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="flex items-center gap-1.5 font-grotesk text-base font-semibold">
                          {job.company}
                          <ExternalLink className="size-3.5 shrink-0 text-muted" />
                        </h3>
                        <p className="text-sm text-muted">{job.workplace}</p>
                      </div>
                      <span className="shrink-0 pt-0.5 text-right text-xs font-medium whitespace-nowrap text-muted">
                        {span}
                      </span>
                    </div>
                  </div>
                </a>

                <ol className="relative mt-3 ml-6 border-l border-border pl-5">
                  {job.roles.map((role) => (
                    <li key={`${job.company}-${role.title}`} className="relative pb-6 last:pb-0">
                      <span className="absolute top-1.5 -left-[23px] size-2 rounded-full bg-fg" />
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h4 className="font-grotesk text-[15px] font-semibold leading-snug">
                            {role.title}
                          </h4>
                          <p className="text-sm text-muted">{role.type}</p>
                          <p className="text-sm text-muted">
                            {role.start} – {role.end}
                          </p>
                          <p className="text-sm text-muted">{role.location}</p>
                        </div>
                      </div>
                      <ul className="mt-2 space-y-1.5">
                        {role.bullets.map((bullet) => (
                          <li
                            key={bullet.slice(0, 48)}
                            className="flex gap-2 text-sm leading-relaxed text-muted"
                          >
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-muted" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-2.5 flex flex-wrap gap-1">
                        {role.technologies.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-fg/5 px-1.5 py-0.5 text-[10px] font-medium text-fg/70"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="relative z-10">
      <BlurFade delay={0.18}>
        <h2 className="font-grotesk text-xl font-bold">Education</h2>
      </BlurFade>
      <div className="mt-3 space-y-2">
        {DATA.education.map((ed, i) => (
          <BlurFade key={ed.school} delay={0.2 + i * 0.04}>
            <ResumeCard
              href={ed.href.startsWith("http") ? ed.href : undefined}
              logoUrl={ed.logoUrl}
              alt={ed.school}
              title={ed.school}
              subtitle={ed.degree}
              period={`${ed.start} - ${ed.end}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
