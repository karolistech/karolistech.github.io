export type Profile = {
  photo: string;
  name: string;
  title: string;
  socials: {
    name: string;
    href: string;
    icon: string;
  }[];
};
