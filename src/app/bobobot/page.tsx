import { PageHeader } from "@/components/ui/PageHeader";

export default function BoboBotPage() {
  return (
    <div>
      <PageHeader
        title="BoboBot"
        description="My self-trained (dumb) AI bot."
      />
      <div className="flex flex-col items-start gap-2 rounded-2xl border border-foreground/10 p-8">
        <span className="rounded-full border border-foreground/15 px-2.5 py-1 text-xs font-medium text-foreground/60">
          Coming Soon
        </span>
        <p className="mt-2 max-w-md text-sm text-foreground/70">
          I&apos;m training BoboBot on my own work and words. Once it&apos;s
          less dumb, you&apos;ll be able to chat with it here.
        </p>
      </div>
    </div>
  );
}
