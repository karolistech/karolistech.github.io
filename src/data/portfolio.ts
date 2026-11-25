import type { Profile, Technology } from "@/types/portfolio";

const images = import.meta.glob<string>("@/assets/images/*.webp", {
  import: "default",
  eager: true
});

const getImage = (name: string) => images[`/src/assets/images/${name}.webp`];

export const profile: Profile = {
  photo: getImage("photo"),
  name: "Karolis Jakubėnas",
  title: "Software Engineer",
  socials: [
    { name: "GitHub", href: "https://github.com/karolistech", icon: "github" }
  ]
};

export const technologies: Technology[] = [
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Git", icon: "git" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express.js", icon: "expressjs" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Playwright", icon: "playwright" },
  { name: "Claude", icon: "claude" }
];
