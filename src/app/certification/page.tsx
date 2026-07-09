import { PageHeader } from "@/components/ui/PageHeader";
import { certifications } from "@/data/certifications";

export default function CertificationPage() {
  return (
    <div>
      <PageHeader
        title="Certification"
        description="Certifications I've earned."
      />
      {certifications.length === 0 && (
        <p className="text-sm text-foreground/50">
          No certifications yet — check back soon.
        </p>
      )}
      <div className="flex flex-col divide-y divide-foreground/10">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="flex flex-wrap items-baseline justify-between gap-2 py-4 first:pt-0"
          >
            <div>
              <h2 className="text-base font-semibold">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    {cert.title}
                  </a>
                ) : (
                  cert.title
                )}
              </h2>
              <p className="text-sm text-foreground/60">{cert.issuer}</p>
            </div>
            {cert.inProgress ? (
              <span className="rounded-full border border-foreground/15 px-2 py-0.5 text-xs text-foreground/60">
                In Progress
              </span>
            ) : (
              <span className="text-sm text-foreground/50">{cert.date}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
