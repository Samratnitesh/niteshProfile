export const dynamic = "auto";

import { siteConfig } from "@/config/site";
import Link from "next/link";

// marking this as async for now
// maybe we can make this component dynamic with revalidate time in the future
export async function SiteFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-2 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex flex-col items-center justify-center py-4 space-y-2">
          <div className="max-w-3xl text-xs leading-relaxed text-center sm:text-sm text-balance text-muted-foreground">
            
          </div>
          <div className="text-xs text-center sm:text-sm text-muted-foreground">
          <span className="block sm:inline">© {currentYear}</span>{" "}
          · Developed by{" "}
            <Link
              href={siteConfig.links.githubProfile}
              target="_blank"
              rel="noreferrer"
              className="font-medium transition-colors text-primary hover:text-primary/80"
            >
              Nitesh Kumar
            </Link>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
}
