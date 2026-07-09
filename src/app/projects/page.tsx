import { PageHeader } from "@/components/ui/PageHeader";
import { FeaturedProjectCard } from "@/components/ui/FeaturedProjectCard";
import { projects } from "@/data/projects";
import type { ProjectType } from "@/types";

const typeLabels: Record<ProjectType, string> = {
  personal: "Personal",
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
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-base font-semibold">{project.title}</h2>
              <span className="rounded-full border border-foreground/15 px-2 py-0.5 text-xs text-foreground/60">
                {typeLabels[project.type]}
              </span>
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
