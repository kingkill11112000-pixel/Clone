import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Contact, HireMe } from "@/components/hire-contact";
import { Hackathons, PhotoMarquee } from "@/components/hackathons-photos";
import { Hero } from "@/components/hero";
import { OpenSource, Skills } from "@/components/os-skills";
import { PageShell, SectionRule } from "@/components/page-shell";
import { ProofOfWork } from "@/components/proof-of-work";
import { Education, WorkExperience } from "@/components/work-edu";

export const Route = createFileRoute("/")({ component: Home });

function Block({
  id,
  children,
  last,
}: {
  id?: string;
  children: ReactNode;
  last?: boolean;
}) {
  return (
    <div id={id} className="relative">
      {children}
      {last ? null : <SectionRule />}
    </div>
  );
}

function Home() {
  return (
    <PageShell>
      <Block>
        <Hero />
      </Block>
      <Block id="open-source">
        <OpenSource />
      </Block>
      <Block id="skills">
        <Skills />
      </Block>
      <Block id="work">
        <WorkExperience />
      </Block>
      <Block id="projects">
        <ProofOfWork />
      </Block>
      <Block id="hackathons">
        <Hackathons />
        <PhotoMarquee />
      </Block>
      <Block id="hire">
        <HireMe />
      </Block>
      <Block id="education">
        <Education />
      </Block>
      <Block id="contact" last>
        <Contact />
      </Block>
    </PageShell>
  );
}
