import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-serif text-base text-foreground">
          {site.name}
          <span className="text-accent">.</span>
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-accent"
          >
            {site.email}
          </a>
          <a
            href={site.links.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            Fiverr
          </a>
          <a
            href={site.links.fiverrPro}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            Fiverr Pro
          </a>
        </div>
        <p className="text-xs">© {new Date().getFullYear()} {site.shortName}</p>
      </div>
    </footer>
  );
}
