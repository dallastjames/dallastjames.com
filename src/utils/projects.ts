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
      "I've always been a fan and consumer of Ionic, and having the opportunity to work on Capacitor feels almost like living in a dream. I initially worked as a solutions architect, supporting dozens of major enterprises building their flagship applications using Capacitor. I then transitioned into the product manager for Capacitor enterprise solutions and later for the entirety of Capacitor. Working directly with the community and balancing the needs of the users, enterprises, and our own internal projects has been one of the most amazing experiences of my career.",
    href: "https://capacitorjs.com/",
    type: "Featured Project - Ionic",
  },
  {
    title: "RPG Sessions",
    description:
      "RPG Sessions is the perfect blend of my own passions and building something complex that pushes me to learn and grow as a developer. My favorite projects are the ones that I want to use myself, and I've used this since day one. Launched in 2019, RPG Sessions has provided a realtime tabletop experience for over 100k users across both our website and Discord bot.",
    href: "https://rpgsessions.com/",
    type: "Featured Project - Personal",
  },
];
