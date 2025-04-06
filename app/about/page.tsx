import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { code } from "@/config/codeContent";

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About Nitesh</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          More than just a title—let’s dive deeper!
        </PageHeaderHeading>
        <PageHeaderDescription>
            I’m Nitesh Kumar, a passionate Software Engineer driven by a 
            deep interest in building full-stack web applications using modern 
            technologies like Next.js and Tailwind CSS. My journey in tech began 
            with a curiosity to solve real-world problems, which gradually transformed
            into a strong passion for creating clean, efficient, and user-centric digital 
            experiences. From developing AI-powered tools to building SaaS platforms and 
            interactive web apps, I enjoy turning ideas into impactful solutions that blend
            innovation with usability.
        </PageHeaderDescription>

        <PageHeaderDescription>
          With a strong foundation in JavaScript frameworks, I focus on creating
          scalable, efficient, and visually appealing applications. Currently, I
          am diving deeper into mobile development with React Native and Expo to
          expand my skill set and deliver versatile, cross-platform solutions.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Beyond coding, I thrive in collaborative environments and enjoy
          tackling challenging problems with creative solutions. I aim to
          contribute to impactful projects that make a difference in users'
          lives.
        </PageHeaderDescription>
      </PageHeader>

      <CodeSnippet title="aboutMe.ts" code={code.aboutMe} />

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;
