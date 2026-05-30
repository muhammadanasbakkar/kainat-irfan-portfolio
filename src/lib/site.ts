export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kainatnaz.com";

export const site = {
  name: "Kainat Naz İrfan",
  shortName: "Kainat Naz",
  role: "Academic Writer · Thesis Editor · English ↔ Urdu Translator",
  tagline:
    "Research writing, thesis development, and translation rooted in clarity, accuracy, and academic integrity.",
  bio: "Psychology graduate specializing in academic research writing, thesis development, literature reviews, proofreading in APA / Chicago / Harvard, and English ↔ Urdu translation — built on clarity, accuracy, and academic integrity.",
  email: "Kainatnaz7@gmail.com",
  location: "Pakistan",
  languages: ["English", "Urdu"],
  links: {
    fiverr: "https://www.fiverr.com/s/m5lxW2b",
    fiverrPro: "https://pro.fiverr.com/s/WEyGB4Q",
  },
  profileImage: {
    src: "/images/profile.svg",
    alt: "Portrait of Kainat Naz İrfan",
    width: 400,
    height: 400,
  },
  work: [
    {
      title: "Cognitive psychology thesis",
      type: "Thesis writing & development",
      tags: ["Psychology", "APA 7", "60+ pages"],
      description:
        "Six-chapter thesis developed from research question to defense-ready manuscript, including methodology, analysis, and discussion.",
      image: "/images/work/thesis.svg",
    },
    {
      title: "Annotated bibliography",
      type: "Literature review",
      tags: ["24 sources", "Critical commentary", "Thematic"],
      description:
        "Thematically organized survey of literature with critical commentary that situates each source within the broader scholarly conversation.",
      image: "/images/work/literature-review.svg",
    },
    {
      title: "Academic translation",
      type: "English ↔ Urdu",
      tags: ["Bidirectional", "Register-faithful", "Academic"],
      description:
        "Translation of an academic article between English and Urdu, preserving register, citations, and disciplinary terminology.",
      image: "/images/work/translation.svg",
    },
    {
      title: "Track-changes editing",
      type: "Proofreading & editing",
      tags: ["APA", "Sentence-level", "Two rounds"],
      description:
        "Detailed editing pass with track changes — grammar, register, citation formatting, and clarity at the sentence level.",
      image: "/images/work/editing.svg",
    },
  ] as const,
  services: [
    {
      title: "Academic Research & Thesis Writing",
      description:
        "Full-length research papers, dissertations, and theses developed from outline to final draft built on rigorous methodology and credible sourcing.",
    },
    {
      title: "Literature Review & Annotated Bibliography",
      description:
        "Comprehensive surveys of existing scholarship, organized thematically with critical commentary that situates your work in the broader field.",
    },
    {
      title: "Paraphrasing & Plagiarism Reduction",
      description:
        "Careful rewriting that preserves meaning while improving originality verified against industry-standard similarity checkers.",
    },
    {
      title: "Proofreading & Editing",
      description:
        "Precise editing in APA, Chicago, Harvard, MLA, and other styles. Sentence-level polishing for tone, grammar, and academic register.",
    },
    {
      title: "English ↔ Urdu Translation",
      description:
        "Bidirectional translation that preserves nuance, register, and cultural context — for academic, literary, and professional documents.",
    },
  ] as const,
  process: [
    {
      step: "01",
      title: "Brief",
      description:
        "Share your topic, deadline, style guide, and any source material. I confirm scope before we begin.",
    },
    {
      step: "02",
      title: "Draft",
      description:
        "I produce a structured first draft with citations and notes on methodology or translation choices.",
    },
    {
      step: "03",
      title: "Revise",
      description:
        "Unlimited revisions included. We refine arguments, tone, and formatting until it reads cleanly.",
    },
    {
      step: "04",
      title: "Deliver",
      description:
        "Final document delivered in your preferred format with a similarity report on request.",
    },
  ] as const,
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
] as const;

export const seo = {
  keywords: [
    "academic writing services",
    "thesis writing service",
    "thesis development",
    "dissertation writing",
    "literature review writer",
    "annotated bibliography service",
    "paraphrasing service",
    "plagiarism reduction",
    "proofreading and editing",
    "academic editor",
    "APA editing",
    "Chicago style editor",
    "Harvard referencing",
    "MLA formatting",
    "English to Urdu translation",
    "Urdu to English translation",
    "Urdu translator",
    "academic translation",
    "psychology research writer",
    "research paper writer",
    "Kainat Naz",
    "Kainat Naz İrfan",
  ],
};
