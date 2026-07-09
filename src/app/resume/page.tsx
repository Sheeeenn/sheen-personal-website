import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/config/site";

export default function ResumePage() {
  return (
    <div>
      <PageHeader
        title="Resume"
        description="View my resume below, or download a copy."
      />

      <a
        href={siteConfig.resumeUrl}
        download
        className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
      >
        Download Resume
      </a>

      <div className="mt-6 overflow-hidden rounded-2xl border border-foreground/10">
        <iframe
          src={siteConfig.resumeUrl}
          title={`${siteConfig.name} — Resume`}
          className="h-[80vh] w-full"
        />
      </div>
    </div>
  );
}
