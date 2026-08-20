import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { ProjectList } from "@/components/project-list";
import { webProjects } from "@/data/site";

export const Route = createFileRoute("/web-apps")({ component: WebApps });

function WebApps() {
  return (
    <PageShell>
      <Link
        to="/"
        className="mb-4 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>
      <h1 className="font-grotesk w-full text-3xl font-bold tracking-tighter sm:text-5xl">
        Web Apps
      </h1>
      <ProjectList projects={webProjects} />
    </PageShell>
  );
}
