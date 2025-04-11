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
        <PageHeaderHeading className="mt-2 text-muted-foreground text-2xl">
         Engineer with a Purpose—Building Scalable, Intelligent Solutions
        </PageHeaderHeading>
        <PageHeaderDescription>
          I’m Nitesh Kumar, a results-driven Software Engineer with a strong focus on full-stack web development. My expertise lies in building modern, performant applications using technologies like Next.js, React, Tailwind CSS, and TypeScript. I approach development with a clean architecture mindset, emphasizing scalability, reusability, and maintainability across all layers of the stack.

        </PageHeaderDescription>

        <PageHeaderDescription>
        My journey began with solving algorithmic problems and quickly evolved into architecting end-to-end web solutions. I’ve engineered everything from AI-integrated tools and SaaS platforms to dynamic, data-driven applications—ensuring each project is optimized for performance, accessibility, and real-world impact.
        </PageHeaderDescription>

        <PageHeaderDescription>
        Currently, I’m expanding into mobile development using React Native and Expo, targeting robust cross-platform experiences while maintaining code consistency and performance standards. I also have a growing interest in Machine Learning and Deep Learning, working on integrating intelligent features into the products I build.
        </PageHeaderDescription>
        <PageHeaderDescription>
        Driven by a strong sense of ownership and technical curiosity, I thrive in high-impact environments where deep problem-solving, clean code, and cross-functional collaboration are core values.
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
