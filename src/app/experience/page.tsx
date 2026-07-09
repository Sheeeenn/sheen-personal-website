import { PageHeader } from "@/components/ui/PageHeader";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div>
      <PageHeader title="Experience" description="Where I've worked." />
      <ol className="space-y-10 border-l border-foreground/10 pl-8">
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="relative">
            <span className="absolute top-1.5 -left-[calc(2rem+4.5px)] h-2 w-2 rounded-full bg-foreground/40" />
            <p className="text-xs font-medium text-foreground/50">
              {item.period}
            </p>
            <h2 className="mt-1 text-base font-semibold">
              {item.role} ·{" "}
              {item.companyHref ? (
                <a
                  href={item.companyHref}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                >
                  {item.company}
                </a>
              ) : (
                item.company
              )}
            </h2>
            <p className="text-sm text-foreground/50">
              {[item.employmentType, item.location].filter(Boolean).join(" · ")}
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-foreground/70">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            {item.skills && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-foreground/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
