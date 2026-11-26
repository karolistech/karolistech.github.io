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

export type Technology = {
  name: string;
  icon: string;
};

export type Project = {
  name: string;
  description: string;
  image: string;
  github: string;
  demo: string;
};

export type Experiment = {
  name: string;
  description: string;
  demo: string;
};
