import CodeSnippet from "@/components/code-snippet";
import { PageActions } from "@/components/page-header";
import {
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { PageHeader } from "@/components/page-header";
import Pager from "@/components/pager";
import { Button } from "@/components/ui/button";
import { code } from "@/config/codeContent";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Nitesh Kumar</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Engineer | Coder | Creator
        </PageHeaderHeading>
        <PageHeaderDescription>
        I’m a passionate Full-Stack Developer who thrives on building clean, scalable, and high-performance web applications. From crafting intuitive UIs with React and Tailwind CSS to architecting robust solutions with Next.js, I enjoy turning ideas into reality. I'm currently diving deeper into Machine Learning and Deep Learning, blending software engineering with AI to create smarter applications.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md cursor-pointer">
            <Link href={siteConfig.links.resume} target="_blank">
              Get Resume
              <ExternalLink className="size-3" strokeWidth={2} />
            </Link>
          </Button>
          <a href={siteConfig.links.email} target="_blank">
          <Button size="sm" variant="ghost" className="rounded-md cursor-pointer">
            <Mail className="size-4" />
            Send Mail
          </Button>
        </a>
        </PageActions>
      </PageHeader>

      <CodeSnippet title="welcome.ts" code={code.welcome} />

      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Previous"
        nextTitle="About Me"
      />
    </>
  );
};
export default IntroductionPage;
