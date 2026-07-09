import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    role: "Backend Developer | Team Lead",
    company: "Impulse101 IT Solutions",
    employmentType: "Full-time",
    period: "November 2025 — June 2026",
    bullets: [
      "Led backend development for a mobile product with 50,000+ downloads on Google Play, designing scalable RESTful APIs that reduced average response time and improved the user experience.",
      "Designed and managed relational and NoSQL database schemas to streamline data access patterns, reducing query latency while supporting Kubernetes deployments and CI/CD pipeline automation that significantly cut deployment time.",
      "Strengthened application reliability through DNS management, virtual machine operations, and log-based alerting, achieving 99%+ uptime and faster incident detection in production.",
      "Collaborated with cross-functional teams to gather requirements and ensure seamless integration of web and mobile services, driving project completion ahead of schedule.",
    ],
    skills: ["Cloud", "CI/CD Automation", "API", "Flutter", "MongoDB"],
  },
  {
    role: "Backend Developer",
    company: "1TEQ Providers",
    employmentType: "Internship",
    period: "June 2025 — July 2026",
    bullets: [
      "Shipped a C# and Avalonia UI desktop application integrating the client's external API for real-time POS transaction processing, storing transaction records in MySQL to eliminate manual reconciliation and improve cashier throughput.",
      "Built a full Point of Sale system and, upon early completion, extended it into a Purchase Order management system using PHP, HTML, CSS, and JavaScript — delivering two functional systems within the same OJT period.",
      "Replaced the company's reliance on third-party developers by independently building all required internal tools from scratch, reducing external costs and giving the team full ownership of their software.",
    ],
    skills: ["C#", "API", "C# Avalonia", "SQL"],
  },
  {
    role: "QA Tester",
    company: "Fulcrum",
    employmentType: "Part-time",
    period: "November 2024 — May 2025",
    bullets: [
      "Executed end-to-end test suites using Cypress and Cucumber, identifying and documenting critical defects across multiple sprint cycles and preventing regressions from reaching production.",
    ],
    skills: ["JavaScript", "Cypress", "Cucumber"],
  },
  {
    role: "Full-Stack, IoT & AI Engineer",
    company: "Independent Freelancer",
    employmentType: "Freelance",
    period: "2024 — 2026",
    bullets: [
      "Integrated LLM APIs (OpenAI GPT, Google Gemini) into client applications, designing custom prompt-engineering pipelines and context-aware AI workflows that automated content generation and intelligent query handling.",
      "Delivered end-to-end IoT solutions, including an RFID-enabled vending system and an AI-powered aquarium monitoring system that reads and interprets pH and water-quality sensor data via LLM integration, eliminating manual tracking for both clients.",
      "Built full-stack web applications with Python, Django, Flask, and React — covering UI, backend APIs, and database architecture — with on-time delivery and zero post-launch critical bugs across all engagements.",
      "Collaborated closely with clients to understand requirements and deliver tailored solutions, resulting in high satisfaction and repeat business.",
    ],
    skills: ["Claude", "Gemini", "OpenAI", "Python", "Django", "Flask", "React"],
  },
];
