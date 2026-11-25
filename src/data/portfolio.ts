import type { Profile } from "@/types/portfolio";

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
