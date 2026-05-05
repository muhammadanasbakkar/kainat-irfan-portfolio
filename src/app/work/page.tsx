import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { site, siteUrl } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Work — Selected Academic Writing & Translation Samples",
  description:
    "Selected work from Kainat Naz İrfan: thesis chapters, literature reviews, English ↔ Urdu translations, and edited manuscripts.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work — Selected Academic Writing & Translation Samples",
    description:
      "Selected samples of thesis writing, literature reviews, translation, and editing.",
    url: "/work",
  },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Selected Work",
  description: "A portfolio of academic writing, editing, and translation samples.",
  url: `${siteUrl}/work`,
  hasPart: site.work.map((w) => ({
    "@type": "CreativeWork",
    name: w.title,
    description: w.description,
    image: `${siteUrl}${w.image}`,
    creator: { "@type": "Person", name: site.name },
  })),
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <JsonLd
        data={[
          portfolioSchema,
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Work", url: "/work" },
          ]),
        ]}
      />

      <header className="max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted">
          Selected work
        </p>
        <h1 className="font-serif text-5xl font-medium leading-tight text-foreground md:text-6xl">
          A few projects, briefly{" "}
          <span className="italic text-accent">shown</span>.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Anonymized excerpts from recent engagements — thesis chapters,
          literature reviews, English ↔ Urdu translation, and editing passes.
          Full samples available on request.
        </p>
      </header>

      <ul className="mt-16 grid gap-10 md:grid-cols-2">
        {site.work.map((item) => (
          <li key={item.title}>
            <article className="group">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
                <Image
                  src={item.image}
                  alt={`${item.title} — ${item.type}`}
                  width={600}
                  height={450}
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  unoptimized
                />
              </div>
              <div className="mt-5">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  {item.type}
                </p>
                <h2 className="mt-2 font-serif text-2xl text-foreground">
                  {item.title}
                </h2>
                <p className="mt-2 leading-relaxed text-muted">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <section className="mt-20 rounded-2xl bg-accent-soft px-8 py-14 text-center md:px-16">
        <h2 className="font-serif text-3xl text-foreground md:text-4xl">
          Want to see more?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Full sample chapters, translations, and editing passes are available
          on request — privacy preserved through anonymization.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={site.links.fiverrPro}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Hire on Fiverr Pro →
          </a>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 px-7 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Request samples
          </Link>
        </div>
      </section>
    </div>
  );
}
