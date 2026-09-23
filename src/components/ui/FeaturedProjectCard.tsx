import Image from "next/image";
import type { SVGProps } from "react";
import type { Project } from "@/types";

function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 3.5v17a1 1 0 0 0 1.5.87l14-8.5a1 1 0 0 0 0-1.74l-14-8.5A1 1 0 0 0 4 3.5Z" />
    </svg>
  );
}

function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.7 12.7c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.1 2.5-1.8 3.1-.5 7.6 1.3 10.1.9 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.3-.8 1.5 0 2 .8 3.3.8 1.4 0 2.3-1.2 3.1-2.5.6-1 1-1.9 1.3-2.9-2.4-.9-2.7-3.6-2.7-3.8Zm-2.4-7.2c.7-.8 1.1-2 1-3.1-1 .1-2.1.7-2.8 1.5-.6.7-1.1 1.8-1 2.9 1.1.1 2.1-.6 2.8-1.3Z" />
    </svg>
  );
}

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-foreground/10 p-6 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        {project.iconUrl && (
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-foreground/5">
            <Image
              src={project.iconUrl}
              alt={`${project.title} icon`}
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="flex-1">
          <h2 className="text-xl font-semibold tracking-tight">
            {project.title}
          </h2>
          {project.badges && project.badges.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-foreground/15 bg-background px-2.5 py-1 text-xs font-medium text-foreground/70"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
          <p className="mt-2 max-w-xl text-sm text-foreground/70">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-foreground/70"
              >
                {tag}
              </span>
            ))}
          </div>

          {(project.appStoreUrl || project.googlePlayUrl || project.repo) && (
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {project.appStoreUrl && (
                <a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-foreground px-3.5 py-2 text-background transition-opacity hover:opacity-90"
                >
                  <AppleIcon className="h-6 w-6" />
                  <span className="flex flex-col leading-tight">
                    <span className="text-[10px]">Download on the</span>
                    <span className="text-sm font-semibold">App Store</span>
                  </span>
                </a>
              )}
              {project.googlePlayUrl && (
                <a
                  href={project.googlePlayUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-foreground px-3.5 py-2 text-background transition-opacity hover:opacity-90"
                >
                  <PlayIcon className="h-5 w-5" />
                  <span className="flex flex-col leading-tight">
                    <span className="text-[10px]">GET IT ON</span>
                    <span className="text-sm font-semibold">Google Play</span>
                  </span>
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium underline underline-offset-4"
                >
                  Source
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
