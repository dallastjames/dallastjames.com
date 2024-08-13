export type ProjectItem = {
  title: string;
  description: string;
  href: string;
  type: string;
};

export const allProjects: ProjectItem[] = [
  {
    title: "Capacitor",
    description:
      "I've always been a fan and consumer of Ionic, and having the opportunity to work on Capacitor feels almost like living in a dream. I initially worked as a solutions architect, supporting dozens of major enterprises building their flagship applications using Capacitor. Later, I transitioned into the product manager for Capacitor enterprise solutions and then later for all of Capacitor. Working directly with the community and balancing the needs of the users, enterprises, and our own internal needs and projects has been one of the most difficult and amazing experiences of my career.",
    href: "https://capacitorjs.com/",
    type: "Featured Project - Ionic",
  },
  {
    title: "RPG Sessions",
    description:
      "My favorite projects are ones that I want to use myself. RPG Sessions is the perfect blend of my own passions and building something complex that pushes me to learn and grow as a developer. Started launching in 2019, RPG Sessions has provided a realtime tabletop experience for over 40k users across both our website and Discord bot.",
    href: "https://rpgsessions.com/",
    type: "Featured Project - Personal",
  },
];
