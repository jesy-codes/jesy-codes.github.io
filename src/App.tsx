import type { ReactNode } from "react";
import climbingPhoto from "./assets/jesy-climbing.jpg";

const EMAIL = "jesica.ramtoscano@gmail.com";
const RESUME = "/Jesica_Ramirez_Toscano_Resume.pdf";
const LINKEDIN = "https://www.linkedin.com/in/jesica-ramirez/";
const GITHUB = "https://github.com/jramtos";

type LinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
};

function Link({ href, children, className = "", label }: LinkProps) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-5">
      <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Mark() {
  return (
    <span
      role="img"
      aria-label="Jesica Ramirez Toscano logo"
      className="grid size-10 place-items-center rounded-full border border-ink font-mono text-xs font-medium"
    >
      JRT
    </span>
  );
}

const focusAreas = [
  {
    number: "01",
    title: "Causal inference for policy",
    body: "Difference-in-differences, regression discontinuity, synthetic control, and instrumental variables, used to separate what a decision caused from what merely correlated with it.",
  },
  {
    number: "02",
    title: "Evidence regulators can audit",
    body: "Multi-scenario economic analyses and data investigations for government regulators, including the New York Attorney General, built to stand up to external scrutiny.",
  },
  {
    number: "03",
    title: "Privacy and safety systems",
    body: "A privacy-first framework for regulatory data productions, and a classification model that flags notifiable incidents for Australian regulators.",
  },
  {
    number: "04",
    title: "Measurement and experimentation",
    body: "Experiments and behavioral measurement for earner-quality initiatives, informing Product, Engineering, and Operations decisions at scale.",
  },
];

const projects = [
  {
    number: "01",
    name: "Predicting Polarization",
    type: "NLP · Online discourse",
    href: "https://github.com/advanced-ml-project/project/blob/main/documents/Predicting_Polarization.pdf",
    description:
      "Tested whether the language in news outlets' tweets can predict polarization in the comments they receive, using logistic regression, RNNs, and a PyTorch CNN.",
    className: "bg-cobalt text-paper",
    visual: (
      <div className="absolute inset-x-8 bottom-0 top-16 overflow-hidden rounded-t-2xl bg-paper p-5 text-ink shadow-2xl sm:inset-x-14 sm:top-20">
        <div className="flex items-center justify-between border-b border-line pb-4">
          <div className="h-2.5 w-20 rounded-full bg-ink" />
          <div className="flex gap-2">
            <div className="size-2.5 rounded-full bg-mist" />
            <div className="size-2.5 rounded-full bg-cobalt" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 pt-5">
          <div className="col-span-2 rounded-xl bg-cloud p-4">
            <div className="mb-5 h-2 w-16 rounded-full bg-cobalt" />
            <div className="space-y-2">
              <div className="h-2 rounded-full bg-line" />
              <div className="h-2 w-3/4 rounded-full bg-line" />
            </div>
          </div>
          <div className="rounded-xl bg-lemon p-3">
            <div className="font-display text-3xl font-semibold">65%</div>
            <div className="mt-6 h-2 w-10 rounded-full bg-ink/40" />
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    name: "COVID-19 in Mexico",
    type: "Machine learning · Public health",
    href: "https://github.com/ml-project-2020/covid/blob/master/ML_paper.pdf",
    description:
      "Balanced and weighted random forests predicting severe disease outcomes from Mexican government health and socioeconomic data, to show how public-health datasets can inform policy.",
    className: "bg-moss text-paper",
    visual: (
      <div className="absolute inset-x-8 bottom-0 top-16 grid grid-cols-2 gap-3 rounded-t-2xl border-x border-t border-paper/20 p-5 sm:inset-x-14 sm:top-20">
        <div className="rounded-xl bg-paper/10 p-4">
          <div className="mb-4 font-mono text-xs uppercase tracking-wider text-paper/60">Model inputs</div>
          <div className="h-2 w-3/4 rounded-full bg-paper/60" />
          <div className="mt-2 h-2 w-1/2 rounded-full bg-paper/30" />
        </div>
        <div className="rounded-xl bg-paper p-4 text-ink">
          <div className="mb-5 flex gap-2">
            <div className="size-4 rounded-full bg-moss" />
            <div className="size-4 rounded-full bg-lemon" />
            <div className="size-4 rounded-full bg-coral" />
          </div>
          <div className="rounded-lg bg-ink px-3 py-2 font-mono text-xs text-paper">Risk / Prediction</div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    name: "Mapping Crime in Mexico City",
    type: "Public safety · Web application",
    href: "https://github.com/jramtos/mexcrimes",
    description:
      "A web application serving crime-risk information by location and time of day, built on more than two million records from the city government's open-data API.",
    className: "bg-coral text-ink",
    visual: (
      <div className="absolute inset-x-8 bottom-0 top-16 overflow-hidden rounded-t-2xl bg-paper p-5 sm:inset-x-14 sm:top-20">
        <div className="grid h-full grid-cols-6 grid-rows-4 gap-1.5">
          {[0, 1, 0, 0, 2, 1, 1, 3, 2, 1, 0, 0, 0, 2, 3, 3, 2, 1, 1, 0, 1, 2, 1, 0].map((level, i) => (
            <div
              key={i}
              className={
                level === 3 ? "rounded bg-ink" : level === 2 ? "rounded bg-ink/55" : level === 1 ? "rounded bg-ink/20" : "rounded bg-cloud"
              }
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "04",
    name: "Hohonu Water Levels",
    type: "Civic data · Time series",
    href: "https://www.youtube.com/watch?v=Xzz5Nq3ZxFI",
    description:
      "A data pipeline to clean, calibrate, and predict coastal water levels for communities facing frequent flooding. Scraped 200+ URLs for standardized datums and tuned vector autoregression forecasts.",
    className: "bg-lemon text-ink",
    visual: (
      <div className="absolute inset-x-8 bottom-0 top-16 flex items-end justify-center sm:inset-x-16 sm:top-20">
        <div className="relative h-full w-full max-w-sm rounded-t-full border border-ink/20 bg-paper">
          <div className="absolute inset-8 rounded-full border border-ink/15" />
          <div className="absolute inset-16 rounded-full border border-ink/15" />
          <div className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cobalt" />
          <div className="absolute left-1/2 top-1/2 h-px w-20 origin-left -rotate-45 bg-cobalt" />
        </div>
      </div>
    ),
  },
];

const experience = [
  {
    year: "2024—NOW",
    role: "Scientist II · Earner Progression Science",
    company: "Uber",
    detail:
      "Built a causal estimation framework (order-level fixed effects) that quantifies the marketplace cost of courier behavior and informs earner-quality policy. Designed experiments and measurement frameworks across Product, Engineering, and Operations, and contributed to a real-time feedback system generating $36M in annual cost savings.",
  },
  {
    year: "2021—2024",
    role: "Applied Scientist II · Policy Research, Legal Data & Economics",
    company: "Uber",
    detail:
      "Produced economic analyses and data investigations that gave regulators in multiple jurisdictions, including the New York Attorney General, externally auditable evidence. Built a privacy framework for regulatory data productions and a classification model that automates detection of notifiable incidents for Australian regulators (projected AUD 500K annual savings; 2023 Reimagine Award nominee).",
  },
  {
    year: "2020",
    role: "Data Scientist",
    company: "Deep Dive",
    detail: "Helped build a natural-language processing pipeline for large-scale text data.",
  },
  {
    year: "2017—2019",
    role: "Economist · General Directorate of Economic Research",
    company: "Banco de México",
    detail:
      "Quantified the tone of 80+ central-bank statements (2008–2019) with NLP to produce a policy-signal index, and derived inflation expectations and interest-rate forecasts from market instruments and surveys to support monetary policy.",
  },
];

const education = [
  {
    year: "2019—2021",
    name: "University of Chicago",
    detail: "MS, Computational Analysis and Public Policy · Honors Distinction",
  },
  {
    year: "2012—2017",
    name: "Universidad de las Américas Puebla",
    detail: "BA, Economics · Magna Cum Laude · First place, regional empirical research thesis competition",
  },
];

const stats = [
  ["~7", "Years in applied data & policy"],
];

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
        <Link href="#top" label="Back to top" className="transition-transform hover:scale-105">
          <Mark />
        </Link>
        <div className="hidden items-center gap-8 font-mono text-xs uppercase tracking-wider sm:flex">
          <Link href="#focus" className="link-underline">Focus</Link>
          <Link href="#work" className="link-underline">Work</Link>
          <Link href="#about" className="link-underline">About</Link>
          <Link href="#contact" className="link-underline">Contact</Link>
        </div>
        <Link
          href={RESUME}
          className="rounded-full border border-ink px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:bg-ink hover:text-paper"
        >
          Résumé
        </Link>
      </nav>

      <section id="top" className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:px-12 lg:pb-28">
        <div className="mb-10 flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-moss opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-moss" />
          </span>
          Open to Applied AI roles, particularly in Safety, Policy and/or Social Impact
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <h1 className="font-display text-5xl font-medium leading-none tracking-tight sm:text-7xl lg:col-span-3 lg:text-6xl xl:text-7xl">
            Hello there! I&apos;m <span className="whitespace-nowrap">Jesy—</span>
            <span className="font-serif italic text-cobalt">Mexicana, climber, runner,</span>
            {" "}soon-to-be-polyglot, and applied data scientist.
          </h1>
          <figure className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl bg-cloud lg:col-span-2 lg:max-w-none">
            <img
              src={climbingPhoto}
              alt="Jesy smiling while climbing a steep granite route with cables, with forested mountains below"
              className="aspect-4/5 w-full object-cover"
            />
            <figcaption className="px-5 py-4 font-mono text-xs uppercase tracking-wider text-muted">
              You&apos;ll find me outside when not working.
            </figcaption>
          </figure>
        </div>
        <div className="mt-12 grid gap-8 border-t border-line pt-6 md:grid-cols-2">
          <p className="max-w-lg text-lg leading-relaxed text-muted">
            I&apos;ve worked alongside product teams, regulators, and policymakers, turning large-scale data into
            applications to make better-informed decisions. My goal is to one day work full time building
            safe and beneficial AI tools.
          </p>
          <div className="flex flex-wrap items-end gap-x-8 gap-y-4 md:justify-end">
            <Link href="#work" className="group flex items-center gap-3 font-medium">
              See the work
              <span className="grid size-10 place-items-center rounded-full bg-ink text-paper transition-transform group-hover:translate-x-1"><Arrow /></span>
            </Link>
            <Link href={RESUME} className="link-underline pb-1 font-medium">Download résumé</Link>
          </div>
        </div>
      </section>

      <section id="focus" className="border-y border-line bg-cloud">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-cobalt">What I bring</p>
          <h2 className="max-w-4xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            Rigorous causal methods and useful ML applications, aimed at real-world consequences.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div key={area.number} className="bg-paper p-7 sm:p-10">
                <p className="font-mono text-xs text-muted">{area.number}</p>
                <h3 className="mt-10 font-display text-2xl font-medium tracking-tight sm:text-3xl">{area.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{area.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-ink py-20 text-paper sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex items-end justify-between border-b border-paper/20 pb-5">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-paper/60">Selected research &amp; projects</p>
              <h2 className="font-display text-4xl font-medium tracking-tight sm:text-6xl">Data with a purpose.</h2>
            </div>
            <p className="hidden font-mono text-xs text-paper/60 sm:block">
              {String(projects.length).padStart(2, "0")} PROJECTS
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project) => (
              <article key={project.name} className="group grid overflow-hidden rounded-3xl bg-paper text-ink lg:grid-cols-5">
                <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-2 lg:min-h-96">
                  <div className="mb-14 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-muted lg:mb-0">
                    <span>{project.number}</span>
                    <span>{project.type}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">{project.name}</h3>
                    <p className="mt-4 max-w-sm leading-relaxed text-muted">{project.description}</p>
                    <Link href={project.href} className="mt-7 inline-flex items-center gap-2 font-medium text-cobalt">
                      Read the project <Arrow />
                    </Link>
                  </div>
                </div>
                <div className={`relative min-h-80 overflow-hidden sm:min-h-96 lg:col-span-3 ${project.className}`}>
                  <div className="absolute left-6 top-5 font-mono text-xs uppercase tracking-widest opacity-60">Case study / {project.number}</div>
                  {project.visual}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-16 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:px-12">
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-cobalt">A little about me</p>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            From economic policy to responsible, real-world AI.
          </h2>
        </div>
        <div className="flex flex-col justify-between gap-14">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              My path began in economic research at Banco de México, where I did international market analysis and
              derived inflation expectations from surveys, to understand the perception of the economy and inform
              monetary policy decisions.
            </p>
            <p>
              After working briefly on an NLP project analyzing the sentiment of governors in their policy minutes, I
              realized I needed to learn more. So I left for the University of Chicago to study machine learning,
              causal inference methods, and their applications in public policy.
            </p>
            <p>
              After UChicago, I started in Legal Data &amp; Economics, building evidence for regulators and ML-based
              systems to automate our compliance requirements. Today, as a scientist on Earner Progression, I use
              causal frameworks, uplift modeling, and experiments to understand and improve the products that help
              earners progress on the platform.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 border-t border-line pt-6">
            {stats.map(([value, label]) => (
              <div key={label}>
                <div className="font-display text-3xl font-semibold sm:text-4xl">{value}</div>
                <p className="mt-1 text-sm text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-cloud">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid border-b border-line py-12 sm:grid-cols-3">
            <div className="mb-8 font-mono text-xs uppercase tracking-widest text-muted sm:mb-0">Experience</div>
            <div className="sm:col-span-2">
              {experience.map((item) => (
                <div key={item.role} className="grid gap-3 border-b border-line py-7 first:pt-0 last:border-0 last:pb-0 sm:grid-cols-4 sm:items-start">
                  <p className="font-mono text-xs text-muted">{item.year}</p>
                  <div className="sm:col-span-2">
                    <p className="font-medium">{item.role}</p>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{item.detail}</p>
                  </div>
                  <p className="text-muted sm:text-right">{item.company}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid py-12 sm:grid-cols-3">
            <div className="mb-8 font-mono text-xs uppercase tracking-widest text-muted sm:mb-0">Education</div>
            <div className="sm:col-span-2">
              {education.map((item) => (
                <div key={item.name} className="grid gap-3 border-b border-line py-7 first:pt-0 last:border-0 last:pb-0 sm:grid-cols-4 sm:items-start">
                  <p className="font-mono text-xs text-muted">{item.year}</p>
                  <div className="sm:col-span-3">
                    <p className="font-medium">{item.name}</p>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-cobalt text-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <p className="font-mono text-xs uppercase tracking-widest text-paper/70">Working on something that matters?</p>
          <h2 className="mt-7 max-w-4xl font-display text-5xl font-medium leading-none tracking-tight sm:text-7xl">
            Let&apos;s make technology safer and more accountable.
          </h2>
          <Link href={`mailto:${EMAIL}`} className="group mt-12 inline-flex items-center gap-4 border-b border-paper pb-2 text-xl font-medium sm:text-2xl">
            {EMAIL}
            <span className="transition-transform group-hover:translate-x-1"><Arrow /></span>
          </Link>
          <div className="mt-24 flex flex-col gap-5 border-t border-paper/20 pt-6 font-mono text-xs uppercase tracking-wider sm:flex-row sm:items-center sm:justify-between">
            <p>Jesica Ramirez Toscano · Applied Data Scientist</p>
            <div className="flex gap-6">
              <Link href={LINKEDIN} className="link-underline">LinkedIn</Link>
              <Link href={GITHUB} className="link-underline">GitHub</Link>
              <Link href={RESUME} className="link-underline">Résumé</Link>
            </div>
            <p>Economics × Data × Policy</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
