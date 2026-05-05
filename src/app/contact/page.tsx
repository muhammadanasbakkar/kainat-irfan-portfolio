import type { Metadata } from "next";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact — Hire for Academic Writing & Urdu Translation",
  description: `Get in touch with ${site.name} for thesis writing, editing, and English ↔ Urdu translation. Reply within one working day.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Hire for Academic Writing & Urdu Translation",
    description:
      "Send a brief for thesis writing, editing, or English ↔ Urdu translation.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />

      <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted">
        Contact
      </p>
      <h1 className="font-serif text-5xl font-medium leading-tight text-foreground md:text-6xl">
        Tell me about your{" "}
        <span className="italic text-accent">project</span>.
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
        Share your topic, deadline, citation style, and any source material you
        have. I&apos;ll respond within one working day with scope and timeline.
      </p>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
        <ContactCard
          label="Email"
          value={site.email}
          href={`mailto:${site.email}`}
          hint="Best for custom briefs and longer engagements."
        />
        <ContactCard
          label="Fiverr Pro"
          value="Hire via Fiverr Pro"
          href={site.links.fiverrPro}
          hint="Vetted, priority turnaround."
          external
        />
        <ContactCard
          label="Fiverr"
          value="Browse packages"
          href={site.links.fiverr}
          hint="Fixed-scope orders with set pricing."
          external
        />
        <ContactCard
          label="Response time"
          value="Within 24 hours"
          hint="Monday through Saturday."
        />
      </div>

      <section
        className="mt-20 border-t border-border pt-12"
        aria-labelledby="brief-heading"
      >
        <h2 id="brief-heading" className="font-serif text-2xl text-foreground">
          What to include
        </h2>
        <ul className="mt-6 space-y-3 text-muted">
          {[
            "Subject area and topic (if known)",
            "Word count or page range",
            "Deadline",
            "Citation style — APA, Chicago, Harvard, MLA",
            "Any source material, prompts, or rubrics",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-2 h-px w-4 flex-shrink-0 bg-accent"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function ContactCard({
  label,
  value,
  href,
  hint,
  external = false,
}: {
  label: string;
  value: string;
  href?: string;
  hint?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="bg-background p-8 transition-colors hover:bg-accent-soft">
      <p className="text-xs uppercase tracking-[0.18em] text-muted">{label}</p>
      <p className="mt-3 font-serif text-2xl text-foreground">{value}</p>
      {hint && <p className="mt-2 text-sm text-muted">{hint}</p>}
    </div>
  );

  if (!href) return inner;

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block"
      aria-label={`${label}: ${value}`}
    >
      {inner}
    </a>
  );
}
