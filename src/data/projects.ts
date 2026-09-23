import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "limjo-columagui",
    title: "Limjo Columagui",
    description: "Live website built for client Limjo Columagui.",
    type: "client",
    tags: ["Website"],
    href: "https://limjocolumagui.com/",
  },
  {
    slug: "bebelive",
    title: "Bebelive",
    description:
      "Livestreaming platform with interactive games and rewards, reaching 50,000+ downloads on Google Play Store.",
    type: "company",
    tags: ["Flutter", "AWS", "MongoDB", "React", "Parse Server"],
    featured: true,
    badges: ["50,000+ Downloads", "Live on Google Play"],
    // TODO: add your app icon at public/bebelive-icon.png
    iconUrl: "/bebelive-icon.png",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.bebelive.app&hl=en-US&pli=1",
  },
  {
    slug: "synseai",
    title: "SynseAI",
    description:
      "AI-powered partnership matching platform built for BPI, using dual AI integration to scrape and analyze company data against BPI's profile, with automated file routing between departments.",
    type: "hackathon",
    tags: ["React", "Flask", "Python", "OpenAI"],
    repo: "https://github.com/Zyd8/synseai",
  },
  {
    slug: "gabai",
    title: "GabAI",
    description:
      "AI-powered mobile learning app for students, featuring built-in Pomodoro-based study sessions and AI-integrated learning tools.",
    type: "hackathon",
    tags: ["React Native", "NoSQL", "Firebase", "Gemini"],
    repo: "https://github.com/Werdddd/gabai",
  },
  {
    slug: "gabank",
    title: "GaBank",
    description:
      "AI-integrated mobile banking app for centralized, safer transaction tracking and financial management.",
    type: "hackathon",
    tags: ["React Native", "NoSQL", "Firebase", "Gemini"],
  },
];
