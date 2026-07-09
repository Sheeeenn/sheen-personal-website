import { PageHeader } from "@/components/ui/PageHeader";
import { stack } from "@/data/stack";

export default function StackPage() {
  return (
    <div>
      <PageHeader title="Stack" description="Tools and technologies I work with." />
      <div className="grid gap-8 sm:grid-cols-2">
        {stack.map((group) => (
          <div key={group.category}>
            <h2 className="mb-3 text-sm font-medium tracking-wide text-foreground/60 uppercase">
              {group.category}
            </h2>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
