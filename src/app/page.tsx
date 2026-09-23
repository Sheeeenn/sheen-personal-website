import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import { navItems, siteConfig, socialLinks } from "@/config/site";
import { stats } from "@/data/stats";

export default function Home() {
  return (
    <div className="home-shell flex max-w-2xl flex-col gap-12">
      <div className="home-hero flex flex-col gap-6">
        <Avatar />
        <div>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {siteConfig.name}
          </h1>
          <p className="mt-3 max-w-xl text-base text-foreground/70">
            {siteConfig.description}
          </p>
        </div>

        <div className="flex gap-4 text-sm font-medium">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel="noreferrer"
              className="social-link text-foreground/60 underline underline-offset-4 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <dl className="home-stats flex flex-wrap gap-x-10 gap-y-4 border-t border-foreground/10 pt-6">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-center">
              <dt className="text-2xl font-semibold tracking-tight">
                {stat.value}
              </dt>
              <dd className="text-sm text-foreground/60">{stat.label}</dd>
            </div>
          ))}
        </dl>

      </div>

      <div className="home-nav-grid grid gap-4 sm:grid-cols-2">
        {navItems.map((item) => (
          <div
            key={item.href}
            className="nav-card flex flex-col justify-between rounded-2xl border border-foreground/10 p-5"
          >
            <div>
              <h2 className="text-base font-semibold">{item.label}</h2>
              {item.description && (
                <p className="mt-1.5 text-sm text-foreground/60">
                  {item.description}
                </p>
              )}
            </div>
            <Link
              href={item.href}
              className="nav-card-link mt-4 text-sm font-medium underline underline-offset-4"
            >
              View {item.label} <span aria-hidden="true">→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
