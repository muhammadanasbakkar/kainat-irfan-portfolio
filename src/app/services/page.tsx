import Link from "next/link";
import type { Metadata } from "next";
import { site, siteUrl } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, professionalServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services — Thesis Writing, Editing, & English ↔ Urdu Translation",
  description:
    "Academic research and thesis writing, literature reviews, paraphrasing, APA / Chicago / Harvard / MLA proofreading, and English ↔ Urdu translation. Order on Fiverr or Fiverr Pro.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Thesis Writing, Editing, & English ↔ Urdu Translation",
    description:
      "Full menu of academic writing, editing, and translation services.",
    url: "/services",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Services",
  itemListElement: site.services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.description,
      url: `${siteUrl}/services`,
      provider: { "@type": "Person", name: site.name },
    },
  })),
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <JsonLd
        data={[
          itemListSchema,
          professionalServiceSchema,
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
          ]),
        ]}
      />

      <header className="max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted">
          Services
        </p>
        <h1 className="font-serif text-5xl font-medium leading-tight text-foreground md:text-6xl">
          Writing, editing, and{" "}
          <span className="italic text-accent">translation</span>.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Academic research and thesis writing, literature reviews, paraphrasing
          and plagiarism reduction, References and citations are provided in Chicago, APA, or other required academic styles. Combine as needed.
        </p>
      </header>

      <ol className="mt-16 divide-y divide-border border-y border-border">
        {site.services.map((service, i) => (
          <li
            key={service.title}
            className="grid grid-cols-12 gap-6 py-10 transition-colors hover:bg-accent-soft md:gap-10"
          >
            <span className="col-span-2 font-serif text-3xl text-accent md:col-span-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="col-span-10 md:col-span-7">
              <h2 className="font-serif text-2xl text-foreground md:text-3xl">
                {service.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <a
                href={site.links.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent transition-opacity hover:opacity-70"
              >
                Order on Fiverr →
              </a>
            </div>
          </li>
        ))}
      </ol>

      <section
        className="mt-20 grid gap-12 rounded-2xl bg-accent-soft p-10 md:grid-cols-2 md:p-16"
        aria-labelledby="hire-heading"
      >
        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-muted">
            Working together
          </p>
          <h2
            id="hire-heading"
            className="font-serif text-3xl text-foreground md:text-4xl"
          >
            Two ways to begin
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Whether you need a single chapter polished or a full thesis built
            from scratch, the path forward is short.
          </p>
        </div>
        <div className="space-y-6">
          <Channel
            title="Fiverr"
            description="Browse fixed-scope packages with clear pricing and turnaround."
            href={site.links.fiverr}
            label="Visit profile"
          />
          <Channel
            title="Fiverr Pro"
            description="For larger or longer engagements — vetted, with priority delivery."
            href={site.links.fiverrPro}
            label="Visit Pro profile"
          />
          <Channel
            title="Direct"
            description="Email me with your brief for custom scoping."
            href={`mailto:${site.email}`}
            label={site.email}
          />
        </div>
      </section>

      <div className="mt-16 text-center">
        <Link
          href="/contact"
          className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Send a brief
        </Link>
      </div>
    </div>
  );
}

function Channel({
  title,
  description,
  href,
  label,
}: {
  title: string;
  description: string;
  href: string;
  label: string;
}) {
  const external = href.startsWith("http");
  return (
    <div className="border-t border-foreground/10 pt-6 first:border-t-0 first:pt-0">
      <h3 className="font-serif text-xl text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted">{description}</p>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="mt-2 inline-flex items-center gap-1 text-sm text-accent transition-opacity hover:opacity-70"
      >
        {label} →
      </a>
    </div>
  );
}
