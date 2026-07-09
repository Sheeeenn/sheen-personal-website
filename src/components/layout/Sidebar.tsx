"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { navItems, siteConfig } from "@/config/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-1">
      {navItems.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={
                "block rounded-md px-3 py-2 text-sm transition-colors " +
                (active
                  ? "bg-foreground/10 font-medium text-foreground"
                  : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground")
              }
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden sm:fixed sm:inset-y-0 sm:left-0 sm:flex sm:w-60 sm:flex-col sm:border-r sm:border-foreground/10 sm:p-6">
        <Link
          href="/"
          aria-current={onHome ? "page" : undefined}
          className={
            "mb-8 text-sm tracking-tight " +
            (onHome ? "font-semibold text-foreground" : "font-medium text-foreground/80 hover:text-foreground")
          }
        >
          {siteConfig.name}
        </Link>
        <nav>
          <NavLinks />
        </nav>
        <div className="mt-auto flex flex-col gap-3 border-t border-foreground/10 pt-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="truncate text-xs text-foreground/60 hover:text-foreground"
          >
            {siteConfig.email}
          </a>
          <ThemeToggle />
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-foreground/10 bg-background px-4 py-3 sm:hidden">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15"
          >
            <span className="sr-only">Open menu</span>
            <div className="flex flex-col gap-1">
              <span className="h-px w-4 bg-foreground" />
              <span className="h-px w-4 bg-foreground" />
              <span className="h-px w-4 bg-foreground" />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 flex sm:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="relative flex h-full w-72 max-w-[80vw] flex-col bg-background p-6 shadow-xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm font-semibold tracking-tight">
                {siteConfig.name}
              </span>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15"
                >
                  <span className="sr-only">Close menu</span>
                  <span className="relative block h-4 w-4">
                    <span className="absolute top-1/2 left-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-foreground" />
                    <span className="absolute top-1/2 left-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-foreground" />
                  </span>
                </button>
              </div>
            </div>
            <nav>
              <NavLinks onNavigate={() => setOpen(false)} />
            </nav>
            <div className="mt-auto border-t border-foreground/10 pt-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="truncate text-xs text-foreground/60 hover:text-foreground"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
