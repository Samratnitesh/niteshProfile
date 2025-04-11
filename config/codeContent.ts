export const code = {
  welcome: `// app/api/welcome/route.js
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Welcome to my portfolio!" });
}
`,

  aboutMe: `const superpower = () => "Writing clean, efficient, and user-friendly code!";
console.log(\`My superpower is: \${superpower()}\`);
`,

  skillsTools: `const mySkills = [
  "java", "Data Structure and Algorithms", "DBMS", "Operating System", "HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "NextJS", "Tailwind CSS",
  "shadcn/ui","SQL", "MongoDB", "NodeJs", "ExpressJs", "Git", "GitHub", "Vercel", 
  "Postman", "Windows", "npm"
];

const getSkills = () => {
  return mySkills.length > 0 
    ? \`I have skills in: \${mySkills.join(", ")}! 💻🚀\`
    : "Skills not found... Panic!";
};

console.log(getSkills());
`,

  contact: `const contactDetails = {
    name: "Nitesh Kumar",
    email: "niteshkumar899935@gmail.com",
    mobile: "8210306214",
    location: "Bihar, India",
    linkedIn: "linkedin.com/in/niteshkumar-23",
    github: "github.com/Samratnitesh",
  };
  
function reachOut() {
  console.log(\`Reach out to me via email at \${contactDetails.email} or connect on LinkedIn: \${contactDetails.linkedIn}\`);
}

reachOut();
`,

//   experience: `const experience = [
//   {
//     role: "Senior Coffee Consumer",
//     company: "Remote Office (My Desk)",
//     duration: "Forever",
//     skills: ["Caffeine Management", "Bug Staring", "Keyboard Jamming"],
//   },
//   {
//     role: "Full-Stack Developer",
//     company: "Stack Overflow Solutions Inc.",
//     duration: "When Google is Available",
//     skills: ["Copy-Pasting", "Fixing Bugs with Console.log", "Deploying & Praying"],
//   },
//   {
//     role: "Intern",
//     company: "My Own Side Projects",
//     duration: "Since Birth",
//     skills: ["Breaking Code", "Googling Errors", "Naming Variables Creatively"],
//   },
// ];

// experience.forEach((job) => {
//   console.log(\`👨‍💻 \${job.role} at \${job.company} (\${job.duration}) \n🚀 Skills: \${job.skills.join(", ")}\`);
// });
// `,

  projects: `const projectField = {
  idea: "Overnight hackathon brilliance",
  execution: "Debugging marathons",
  outcome: "Works on my machine... most days!",
};

console.log("Project Field:", projectField);
`,

  educationJourney: `const educationJourney = {
  degree: "Bachelor of Life Lessons (and Code)",
  courses: [
    "Advanced Caffeine Dependency",
    "Procrastination 101",
    "Debugging: The Final Frontier",
  ],
};

console.log(\`My Education: \${educationJourney.degree}\`);
educationJourney.courses.forEach(course => console.log(\`- \${course}\`));
`,
};
