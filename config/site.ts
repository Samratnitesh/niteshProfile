import { title } from "process";

export const siteConfig = {
  name: "niteshsamrat",
  url: "",
  ogImage: "",
  description: "Portfolio of Nitesh Kumar",
  links: {
    shadcn: "https://ui.shadcn.com/",
    telegram: "",
    twitter: "",
    github: "https://github.com/Samratnitesh",
    githubProfile: "https://github.com/Samratnitesh",
    resume: "https://drive.google.com/file/d/1GgSDtRsZYfIHTBmRexIR6uqlQkW_aMTo/view?usp=sharing",
    email: "https://mail.google.com/mail/?view=cm&to=niteshkumar899935@gmail.com&su=SUBJECT&body=BODY",
    githubUsername: "Samratnitesh",
  },
  bitinfonepal: "",
  projects: {
    WriteWave: {
      title:
        "Write-Wave · Blog Web App",
      github: "https://github.com/Samratnitesh/Write-Wave",
      description:
        "Write Wave is a dynamic blog web application designed to provide users with a platform to read and publish articles. Built using React for the frontend, Tailwind CSS for styling, and Appwrite as the backend as a service, Write Wave offers a seamless and intuitive user experience for both readers and writers",
      tags: [
        "React",
        "Tailwind CSS",
        "AppWrite",
        "Javascript",
        "Web Application",
        "Appwrite-Authentication",
        "Appwrite-database"
      ],
      // live: "",
    },
  },
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};
