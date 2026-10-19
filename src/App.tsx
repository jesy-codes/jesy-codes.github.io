import type { ReactNode } from "react";
import climbingPhoto from "./assets/jesy-climbing.jpg";
import polarizationImg from "./assets/projects/polarization.png";
import hohonuImg from "./assets/projects/hohonu.png";
import covidImg from "./assets/projects/covid.png";
import recidivismImg from "./assets/projects/recidivism.png";
import mexcrimesImg from "./assets/projects/mexcrimes.png";

// Joined at runtime so the address never appears as plain text in the built files.
const EMAIL = ["jesica.ramtoscano", "gmail.com"].join("@");
const RESUME = "/Jesica_Ramirez_Toscano_Resume.pdf";
const LINKEDIN = "https://www.linkedin.com/in/jesica-ramirez/";
const GITHUB = "https://github.com/jesy-codes";

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

type Project = {
  name: string;
  subtitle: string;
  href: string;
  cta: string;
  image: string;
  alt: string;
  className: string;
  description: ReactNode;
};

const projects: Project[] = [
  {
    name: "COVID-19 in Mexico",
    subtitle: "Predicting severe disease outcomes using health and socioeconomic variables",
    href: "https://github.com/jesy-codes/covid-mex/blob/master/ML_paper.pdf",
    cta: "Read the paper",
    image: covidImg,
    alt: "Choropleth map of Mexico showing relative hospitalization risk by state",
    className: "bg-moss text-paper",
    description: (
      <>
        Along with Roberto Barroso, Steph Ramos and Oscar Noriega, we studied and predicted severe disease outcomes for
        COVID-19 patients in Mexico. The predictions were useful in developing a relative risk index between Mexican
        states.
      </>
    ),
  },
  {
    name: "Predicting Polarization From News Outlets Tweets",
    subtitle: "NLP and Neural Networks",
    href: "https://github.com/advanced-ml-project/project/blob/main/documents/Predicting_Polarization.pdf",
    cta: "Read the paper",
    image: polarizationImg,
    alt: "Table of tweets correctly predicted as high polarity, with word-level importance highlighted in red and green",
    className: "bg-cobalt text-paper",
    description: (
      <>
        With Kelsey Anderson and Stephanie Ramos, we built different supervised machine learning models to test if the
        text extracted from tweets posted by news media accounts is predictive of the polarization in the comments they
        receive. We used logistic regression, recurrent and convolutional neural networks to predict polarization in
        comments with 65% accuracy. Our research aimed to contribute to creating a more civil and less polarized space
        for discourse on social media.
      </>
    ),
  },
  {
    name: "Chronic Crime Behavior",
    subtitle: "Through the lens of mental health and other social dimensions",
    href: "https://jramtos.github.io/dynamic_vis/",
    cta: "Explore the visualization",
    image: recidivismImg,
    alt: "Heatmap of average arrests by age group and frequency of restlessness, from the BJS 2016 Inmates Survey",
    className: "bg-coral text-ink",
    description: (
      <>
        To better understand mass incarceration and mental health in the U.S., I examined arrest histories across social
        dimensions such as mental illness, emotional distress, and family conditions (e.g. foster care, homelessness),
        using the Bureau of Justice Statistics&apos; 2016 Survey of Prison Inmates. I built an interactive, scroll-driven
        visualization that tells the story: among inmates aged 35–44, for example, average arrests rise from 8.0 to
        12.2 as restlessness goes from never to constant.
      </>
    ),
  },
  {
    name: "Mapping Crimes in Mexico City",
    subtitle: "At a certain day and hour, using Django and SQLite",
    href: "https://github.com/jramtos/mexcrimes",
    cta: "View the code",
    image: mexcrimesImg,
    alt: "Web app screenshot: a map of Mexico City crimes per precinct, and a zoomed view with the user's address, police station, and reported crimes",
    className: "bg-lemon text-ink",
    description: (
      <>
        Motivated by the growing crime incidence in Mexico City (CDMX), this web-app aims to provide the user
        information on the number of crimes that happened at a specified place, day of the week, and hour, with the
        purpose of the user potentially taking certain precautions when going to a specified area given that time and
        day of the week.
      </>
    ),
  },
  {
    name: "Hohonu: Water Level Anomaly Detection and Prediction",
    subtitle: "Civic Data & Technology Clinic",
    href: "https://www.youtube.com/watch?v=Xzz5Nq3ZxFI",
    cta: "Watch the presentation",
    image: hohonuImg,
    alt: "Two line charts of a tide series: a Butterworth-filtered series, and the raw series with high and low tides marked",
    className: "bg-cobalt text-paper",
    description: (
      <>
        With Charlie Sheils and MengChen Chung, we built a data pipeline to clean, calibrate and predict water level
        data of coastal monitoring stations from{" "}
        <Link href="https://www.hohonu.io" className="underline">
          Hohonu
        </Link>
        , an early-stage venture that measures and predicts water levels to assist communities harmed by frequent
        flooding through low-cost, solar-powered hardware.
      </>
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
          <Link href="#experience" className="link-underline">Experience</Link>
          <Link href="#work" className="link-underline">Projects</Link>
          <Link href="#about" className="link-underline">About</Link>
          <Link href="#mission" className="link-underline">Next</Link>
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
          Open to Applied AI roles
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
            applications to make better-informed decisions. My goal is to build high-impact AI applications for public
            benefit.
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

      <section id="experience" className="border-y border-line bg-cloud">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-cobalt">What I bring</p>
          <h2 className="max-w-4xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            Experience as an economist and data scientist.
          </h2>

          <div className="mt-14 border-b border-line">
            {experience.map((item) => (
              <div key={item.role} className="grid gap-3 border-t border-line py-8 sm:grid-cols-4 sm:items-start">
                <p className="font-mono text-xs text-muted">{item.year}</p>
                <div className="sm:col-span-2">
                  <p className="text-lg font-medium">{item.role}</p>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted">{item.detail}</p>
                </div>
                <p className="text-muted sm:text-right">{item.company}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-4">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">Education</p>
            <div className="space-y-6 sm:col-span-3">
              {education.map((item) => (
                <div key={item.name} className="grid gap-1 sm:grid-cols-3">
                  <p className="font-mono text-xs text-muted">{item.year}</p>
                  <div className="sm:col-span-2">
                    <p className="font-medium">{item.name}</p>
                    <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
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
            {projects.map((project, i) => {
              const number = String(i + 1).padStart(2, "0");
              return (
                <article key={project.name} className="grid overflow-hidden rounded-3xl bg-paper text-ink lg:grid-cols-5">
                  <div className="flex flex-col justify-between gap-12 p-7 sm:p-10 lg:col-span-2">
                    <p className="font-mono text-xs uppercase tracking-wider text-muted">{number}</p>
                    <div>
                      <h3 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">{project.name}</h3>
                      <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted">{project.subtitle}</p>
                      <p className="mt-5 leading-relaxed text-muted">{project.description}</p>
                      <Link href={project.href} className="mt-7 inline-flex items-center gap-2 font-medium text-cobalt">
                        {project.cta} <Arrow />
                      </Link>
                    </div>
                  </div>
                  <div className={`relative min-h-80 overflow-hidden sm:min-h-96 lg:col-span-3 ${project.className}`}>
                    <div className="absolute inset-0 flex items-center justify-center px-6 pb-8 pt-14 sm:px-10">
                      <img
                        src={project.image}
                        alt={project.alt}
                        loading="lazy"
                        className="max-h-full max-w-full rounded-xl bg-paper object-contain shadow-2xl"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
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

      <section id="mission" className="border-y border-line bg-cloud">
        <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
          <h2 className="mb-5 font-mono text-xs uppercase tracking-widest text-cobalt">Where I&apos;m heading</h2>
          <p className="font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
            I&apos;m focused on deploying AI systems for public benefit and social equity: practical, mission-driven
            applications that bridge the gap between frontier research and real-world impact, such as accessible
            financial tools for small businesses and educational systems for underfunded schools.
          </p>
        </div>
      </section>

      <footer id="contact" className="bg-cobalt text-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <h2 className="max-w-4xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            Working on Applied AI? Want to discuss regulating AI and making it safer?
          </h2>
          <p className="mt-10 max-w-3xl text-xl leading-relaxed sm:text-2xl">
            Hit me up at{" "}
            <Link href={`mailto:${EMAIL}`} className="border-b border-paper font-medium">
              {EMAIL}
            </Link>
            .
          </p>
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
