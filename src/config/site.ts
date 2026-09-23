import type { NavItem, SocialLink } from "@/types";

// TODO: replace placeholder values with your own details.
export const siteConfig = {
  name: "Justin Sheen Guiriba",
  title: "Justin Sheen Guiriba — Software Engineer",
  description:
    "I'm a Software Engineer focused on Backend Development and AI Engineering. I build scalable systems and integrate AI into real, working products.",
  url: "https://example.com",
  email: "justinguiriba20@gmail.com",
  // Drop your resume PDF at public/resume.pdf — this path serves it directly.
  resumeUrl: "/resume.pdf",
  // Drop your photo at public/avatar.jpg (or update this path/extension).
  avatarUrl: "/avatar.jpg",
};

export const navItems: NavItem[] = [
  {
    label: "Projects",
    href: "/projects",
    description: "Personal, company, and hackathon projects I've built.",
  },
  {
    label: "Experience",
    href: "/experience",
    description: "Where I've worked and what I've done.",
  },
  {
    label: "Stack",
    href: "/stack",
    description: "Languages, frameworks, and tools I use day to day.",
  },
  {
    label: "Certification",
    href: "/certification",
    description: "Certifications I've earned.",
  },
  {
    label: "Competitions",
    href: "/competitions",
    description: "Hackathons and competitions I've entered — wins and losses.",
  },
  {
    label: "Resume",
    href: "/resume",
    description: "View or download my resume.",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Sheeeenn" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/justin-guiriba/" },
  { label: "Email", href: `mailto:${siteConfig.email}` },
];
