import type { Profile, Project, Technology } from "@/types/portfolio";

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

export const projects: Project[] = [
  {
    name: "Memory Game",
    description: "A Pokémon memory game with three difficulty levels, high scores, and collectible cards",
    image: getImage("memory-game"),
    github: "https://github.com/karolistech/memory-game",
    demo: "https://karolistech.github.io/memory-game/"
  },

  {
    name: "Resume Builder",
    description: "A resume builder with flexible customization and live preview",
    image: getImage("resume-builder"),
    github: "https://github.com/karolistech/resume-builder",
    demo: "https://karolistech.github.io/resume-builder/"
  },

  {
    name: "Weather Cast",
    description: "A compact weather application with current conditions, hourly updates, and 7-day forecast",
    image: getImage("weather-cast"),
    github: "https://github.com/karolistech/weather-cast",
    demo: "https://karolistech.github.io/weather-cast/"
  },

  {
    name: "Connect Four",
    description: "A classic Connect Four game with multiple board sizes and two-player gameplay",
    image: getImage("connect-four"),
    github: "https://github.com/karolistech/connect-four",
    demo: "https://karolistech.github.io/connect-four/"
  },

  {
    name: "Pixel Paint",
    description: "A pixel-art drawing application with adjustable grid size, color modes, and image saving",
    image: getImage("pixel-paint"),
    github: "https://github.com/karolistech/pixel-paint",
    demo: "https://karolistech.github.io/pixel-paint/"
  }
];
