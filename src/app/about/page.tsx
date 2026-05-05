import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About — Psychology Graduate, Academic Writer & Urdu Translator",
  description:
    "Learn about Kainat Naz İrfan — psychology graduate specializing in thesis writing, literature reviews, APA / Chicago / Harvard editing, and English ↔ Urdu translation.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Psychology Graduate, Academic Writer & Urdu Translator",
    description:
      "Psychology graduate specializing in academic writing, research methodology, and English ↔ Urdu translation.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ])}
      />

      <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted">About</p>

      <div className="mt-2 grid items-center gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <h1 className="font-serif text-5xl font-medium leading-tight text-foreground md:text-6xl">
            A psychology graduate who writes for{" "}
            <span className="italic text-accent">researchers</span>.
          </h1>
        </div>
        <figure className="md:col-span-4">
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
          <figcaption className="mt-3 text-center font-serif text-sm italic text-muted">
            {site.name}
          </figcaption>
        </figure>
      </div>

      <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted">
        <p>
          I&apos;m {site.name} — a psychology graduate working at the
          intersection of academic writing and translation. My work supports
          students and researchers who need their ideas expressed with the
          precision their fieldwork deserves.
        </p>
        <p>
          Across thesis chapters, literature reviews, and journal-ready papers,
          my focus is the same: a clear argument, transparent methodology, and
          citations that hold up to scrutiny. I write in plain academic English
          — never inflated, never thin.
        </p>
        <p>
          As a native Urdu speaker, I translate between English and Urdu for
          academic and professional contexts where nuance matters. I treat
          translation as a research task: every choice is deliberate, every
          register considered.
        </p>
      </div>

      <div className="mt-16 grid gap-8 border-t border-border pt-12 md:grid-cols-2">
        <Detail
          label="Background"
          items={[
            "BS Psychology",
            "Research methods",
            "Qualitative & quantitative analysis",
          ]}
        />
        <Detail
          label="Style guides"
          items={["APA 7th edition", "Chicago", "Harvard", "MLA"]}
        />
        <Detail
          label="Languages"
          items={["English (academic & literary)", "Urdu (native)"]}
        />
        <Detail
          label="Tools"
          items={["Turnitin", "Grammarly", "Zotero", "Mendeley"]}
        />
      </div>

      <section
        className="mt-16 border-t border-border pt-12"
        aria-labelledby="process-heading"
      >
        <h2
          id="process-heading"
          className="font-serif text-3xl text-foreground"
        >
          How I work
        </h2>
        <ol className="mt-8 space-y-6">
          {site.process.map((item) => (
            <li key={item.step} className="grid grid-cols-12 gap-4">
              <span className="col-span-2 font-serif text-2xl text-accent md:col-span-1">
                {item.step}
              </span>
              <div className="col-span-10 md:col-span-11">
                <h3 className="font-serif text-xl text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-muted">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-16 flex flex-wrap gap-3">
        <Link
          href="/services"
          className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          See services
        </Link>
        <a
          href={site.links.fiverrPro}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center rounded-full border border-border px-7 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Hire on Fiverr Pro →
        </a>
      </div>
    </div>
  );
}

function Detail({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-muted">{label}</p>
      <ul className="mt-3 space-y-1 font-serif text-lg text-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
