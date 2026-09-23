import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { FeaturedProjectCard } from "@/components/ui/FeaturedProjectCard";
import { projects } from "@/data/projects";
import type { ProjectType } from "@/types";

const typeLabels: Record<ProjectType, string> = {
  personal: "Personal",
  client: "Client Project",
  company: "Company",
  hackathon: "Hackathon",
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div>
      <PageHeader
        title="Projects"
        description="Personal, company, and hackathon projects I've worked on."
      />

      {featuredProjects.length > 0 && (
        <div className="mb-10 flex flex-col gap-6">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}

      <div className="flex flex-col divide-y divide-foreground/10">
        {otherProjects.map((project) => (
          <div key={project.slug} className="py-6 first:pt-0">
            <div className="flex items-start gap-4">
              {project.iconUrl && (
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-2">
                  <Image
                    src={project.iconUrl}
                    alt={`${project.title} logo`}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div
                  className={
                    project.type === "client"
                      ? "flex flex-col items-start gap-1"
                      : "flex flex-wrap items-center gap-2"
                  }
                >
                  <h2 className="text-base font-semibold">{project.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-foreground/15 px-2 py-0.5 text-xs text-foreground/60">
                      {typeLabels[project.type]}
                    </span>
                    {project.badges?.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-foreground/15 bg-background px-2 py-0.5 text-xs text-foreground/60"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-2 max-w-2xl text-sm text-foreground/70">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-3 flex gap-4 text-sm font-medium">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                >
                  Live site
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                >
                  Source
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
