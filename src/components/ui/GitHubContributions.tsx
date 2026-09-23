"use client";

import { useEffect, useState } from "react";

type Contribution = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type ContributionsResponse = {
  total: number;
  contributions: Contribution[];
  fetchedAt?: string;
};

const levelClasses = [
  "bg-foreground/5",
  "bg-emerald-200 dark:bg-emerald-900/70",
  "bg-emerald-300 dark:bg-emerald-700",
  "bg-emerald-500 dark:bg-emerald-500",
  "bg-emerald-700 dark:bg-emerald-300",
];

export function GitHubContributions() {
  const [data, setData] = useState<ContributionsResponse | null>(null);

  useEffect(() => {
    fetch("/api/github-contributions", {
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((response: ContributionsResponse) => setData(response))
      .catch(() => setData(null));
  }, []);

  const contributions = data?.contributions ?? [];
  const firstDay = contributions[0]
    ? new Date(`${contributions[0].date}T00:00:00`).getDay()
    : 0;
  const cells = [
    ...Array.from({ length: firstDay }, (_, index) => ({
      date: `padding-${index}`,
      count: 0,
      level: 0 as const,
      padding: true,
    })),
    ...contributions,
  ];

  return (
    <section className="border-t border-foreground/10 pt-6">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold">GitHub contributions</h2>
          <p className="mt-1 text-sm text-foreground/50">
            {data
              ? `${data.total} contributions in the last year`
              : "Loading activity…"}
          </p>
        </div>
        <a
          href="https://github.com/Sheeeenn"
          target="_blank"
          rel="noreferrer"
          className="shrink-0 text-sm font-medium underline underline-offset-4"
        >
          View profile →
        </a>
      </div>

      <div className="mt-5 rounded-xl border border-foreground/10 p-4">
        <div
          className="grid aspect-[53/7] w-full grid-flow-col grid-rows-7 gap-1"
          aria-label="GitHub contribution history for the last year"
        >
          {cells.map((contribution) => (
            <span
              key={contribution.date}
              title={
                "padding" in contribution
                  ? undefined
                  : `${contribution.count} contributions on ${contribution.date}`
              }
              className={`min-h-0 min-w-0 rounded-[2px] ${levelClasses[contribution.level]}`}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-end gap-2 text-xs text-foreground/50">
          <span>Less</span>
          {levelClasses.map((levelClass) => (
            <span
              key={levelClass}
              aria-hidden="true"
              className={`h-2.5 w-2.5 rounded-[2px] ${levelClass}`}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </section>
  );
}
