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
    resume: "https://drive.google.com/file/d/1wYPGrcDsqjGyIbQhMpwZg2_vhJvc-Dcl/view?usp=sharing",
    email: "https://mail.google.com/mail/?view=cm&to=niteshkumar899935@gmail.com&su=SUBJECT&body=BODY",
    githubUsername: "Samratnitesh",
  },
  bitinfonepal: "",
  projects: {
    EventPanda: {
      title: 
        "EventPanda · Fullstack Event Monitoring SaaS",
      github: "https://github.com/Samratnitesh/EventPanda",
      description: 
        "EventPanda is a real-time event tracking and notification service built for SaaS developers, indie hackers, and startups who want to stay instantly informed about critical events in their product — from user signups and purchases to custom-defined triggers — all without the hassle of building a full notification system from scratch.",
      tags: [
        "React",
        "NextJs",
        "Tailwind CSS",
        "TypeScript",
        "Clerk",
        "Neon-database",
        "Discord Webhooks",
      ], 
    },
    CodexOne: {
      title: 
       "CodexOne · The Ultimate Online IDE with Snippet Sharing",
      github: "https://github.com/Samratnitesh/CodexOne",
      description:
        "CodexOne is a full-fledged online coding platform tailored for developers who want a clean, fast, and feature-rich environment—right in their browser. Inspired by the user experience of Visual Studio Code, CodexOne allows developers to write, execute, and share code effortlessly across multiple programming languages.",
      tags: [
       "ReactJs",
       "NextJs",
       "TypeScript",
       "lemon Squeezy",
       "Tailwind CSS",
       "Convex",
      ],
    },
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
      live: "https://react-blog-app-lilac.vercel.app/",
    },
    
  },
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};
