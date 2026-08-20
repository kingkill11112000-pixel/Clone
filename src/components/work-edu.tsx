import { BlurFade } from "@/components/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/site";

export function WorkExperience() {
  return (
    <section id="work" className="relative z-10">
      <BlurFade delay={0.18}>
        <h2 className="font-grotesk text-xl font-bold">Work Experience</h2>
      </BlurFade>
      <div className="mt-3 space-y-2">
        {DATA.work.map((job, i) => (
          <BlurFade key={job.company} delay={0.2 + i * 0.04}>
            <ResumeCard
              href={job.href || undefined}
              logoUrl={job.logoUrl}
              alt={job.company}
              title={job.company}
              subtitle={job.description}
              period={`${job.start} - ${job.end}`}
              badge={job.badges[0]}
              grotesk
            />
          </BlurFade>
        ))}
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
