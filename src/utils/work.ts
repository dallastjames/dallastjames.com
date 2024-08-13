export type WorkItem = {
  company: string;
  companyImgSrc: string;
  companyHref: string;
  role: string;
  years: string;
};

export const allWork: WorkItem[] = [
  {
    company: "Ionic",
    companyImgSrc: "/ionic.svg",
    companyHref: "https://ionic.io/",
    role: "Product Manager",
    years: "2021 - Present",
  },
  {
    company: "Ionic",
    companyImgSrc: "/ionic.svg",
    companyHref: "https://ionic.io/",
    role: "Solutions Architect",
    years: "2019 - 2021",
  },
  {
    company: "RPG Sessions",
    companyImgSrc: "/rpgsessions.png",
    companyHref: "https://rpgsessions.com/",
    role: "Founder",
    years: "2017 - Present",
  },
  {
    company: "Riafox",
    companyImgSrc: "/riafox.png",
    companyHref: "https://www.linkedin.com/company/ria-fox-inc-/",
    role: "Lead Software Engineer",
    years: "2014-2019",
  },
];
