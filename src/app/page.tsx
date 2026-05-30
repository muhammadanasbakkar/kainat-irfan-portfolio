import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { professionalServiceSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Academic Writing & English ↔ Urdu Translation Services",
  description:
    "Hire Kainat Naz İrfan for thesis writing, literature reviews, paraphrasing, APA / Chicago / Harvard editing, and English ↔ Urdu translation. Psychology graduate. Fast turnaround on Fiverr.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const featured = site.services.slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-6">
      <JsonLd
        data={[
          professionalServiceSchema,
          breadcrumbSchema([{ name: "Home", url: "/" }]),
        ]}
      />

      <section className="grid gap-12 py-20 md:grid-cols-12 md:py-32">
        <div className="md:col-span-8">
          <p className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {site.role}
          </p>
          <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Academic writing
            <br />
            <span className="italic text-accent">& Urdu translation</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            Psychology graduate offering thesis writing, literature reviews,
            paraphrasing, and proofreading and research in any reference style, plus
            English ↔ Urdu translation. {site.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={site.links.fiverrPro}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Hire on Fiverr Pro →
            </a>
            <a
              href={site.links.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border px-7 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              View Fiverr gigs
            </a>
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              All services
            </Link>
          </div>
        </div>

        <aside className="hidden md:col-span-4 md:block" aria-label="At a glance">
          <div className="sticky top-32 space-y-6">
            <figure>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-accent-soft">
                <Image
                  src={site.profileImage.src}
                  alt={site.profileImage.alt}
                  width={site.profileImage.width}
                  height={site.profileImage.height}
                  className="h-full w-full object-cover"
                  unoptimized
                  priority
                />
              </div>
              <figcaption className="mt-3 font-serif text-sm italic text-muted">
                {site.name}
              </figcaption>
            </figure>
            <div className="space-y-5 border-l border-border pl-6">
              <Stat label="Discipline" value="Psychology" />
              <Stat label="Languages" value="English · Urdu" />
              <Stat label="Specialty" value="Thesis & translation" />
            </div>
          </div>
        </aside>
      </section>

      <section
        className="border-t border-border py-20"
        aria-labelledby="services-heading"
      >
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-muted">
              Selected services
            </p>
            <h2
              id="services-heading"
              className="font-serif text-3xl text-foreground md:text-4xl"
            >
              What I do
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            All services →
          </Link>
        </div>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {featured.map((service) => (
            <article
              key={service.title}
              className="bg-background p-8 transition-colors hover:bg-accent-soft"
            >
              <h3 className="mb-3 font-serif text-xl text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="border-t border-border py-20"
        aria-labelledby="work-heading"
      >
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-muted">
              Selected work
            </p>
            <h2
              id="work-heading"
              className="font-serif text-3xl text-foreground md:text-4xl"
            >
              Recent samples
            </h2>
          </div>
          <Link
            href="/work"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            View all work →
          </Link>
        </div>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {site.work.map((item) => (
            <li key={item.title}>
              <Link href="/work" className="group block">
                <div className="overflow-hidden rounded-xl border border-border bg-surface">
                  <Image
                    src={item.image}
                    alt={`${item.title} — ${item.type}`}
                    width={600}
                    height={450}
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                    unoptimized
                  />
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted">
                  {item.type}
                </p>
                <p className="mt-1 font-serif text-base text-foreground">
                  {item.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="border-t border-border py-20"
        aria-labelledby="approach-heading"
      >
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-muted">
              Approach
            </p>
            <h2
              id="approach-heading"
              className="font-serif text-3xl text-foreground md:text-4xl"
            >
              Clarity over cleverness
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted md:col-span-7">
            <p>
              Every project begins with the question your reader will ask first.
              From there, the work is structure, evidence, and revision —
              repeated until each sentence earns its place.
            </p>
            <p>
              I work with students, researchers, and professionals across
              psychology, the social sciences, and the humanities. Translation
              between English and Urdu is treated with the same care: meaning
              first, register second, never the other way around.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-accent transition-opacity hover:opacity-70"
            >
              More about me →
            </Link>
          </div>
        </div>
      </section>

      <section
        className="border-t border-border py-20"
        aria-labelledby="cta-heading"
      >
        <div className="rounded-2xl bg-accent-soft px-8 py-14 text-center md:px-16">
          <h2
            id="cta-heading"
            className="font-serif text-3xl text-foreground md:text-4xl"
          >
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Send a brief with your topic, deadline, and required style — I&apos;ll
            reply with scope and timeline within a day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={site.links.fiverrPro}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Hire on Fiverr Pro
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 px-7 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Send a brief
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-muted">{label}</p>
      <p className="mt-1 font-serif text-lg text-foreground">{value}</p>
    </div>
  );
}
