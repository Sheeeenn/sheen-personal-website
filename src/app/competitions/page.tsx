import { PageHeader } from "@/components/ui/PageHeader";
import { competitions } from "@/data/competitions";
import type { CompetitionResult } from "@/types";

const resultLabels: Record<CompetitionResult, string> = {
  winner: "Winner",
  finalist: "Finalist",
  participant: "Participant",
};

export default function CompetitionsPage() {
  return (
    <div>
      <PageHeader
        title="Competitions"
        description="Hackathons and other competitions I've taken part in — wins and losses."
      />
      <div className="flex flex-col divide-y divide-foreground/10">
        {competitions.map((item) => (
          <div key={`${item.name}-${item.event ?? ""}`} className="py-6 first:pt-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-base font-semibold">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    {item.name}
                  </a>
                ) : (
                  item.name
                )}
              </h2>
              <span className="rounded-full border border-foreground/15 px-2 py-0.5 text-xs text-foreground/60">
                {item.placement ?? resultLabels[item.result]}
              </span>
            </div>
            {(item.event || item.date) && (
              <p className="mt-1 text-sm text-foreground/50">
                {[item.event, item.date].filter(Boolean).join(" · ")}
              </p>
            )}
            {item.description && (
              <p className="mt-2 max-w-2xl text-sm text-foreground/70">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
