export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-cream relative overflow-hidden pt-24 s:pt-32 m:pt-40 x:pt-48 pb-32 s:pb-40 m:pb-52 x:pb-64 min-h-screen"
    >
      <ProjectsBackground />
      <div className="relative z-10 mx-auto max-w-[2500px] px-5 s:px-8 m:px-10 l:px-16 x:ml-40 x:px-0">
        <p className="text-lg s:text-xl m:text-2xl x:text-3xl font-sans uppercase tracking-[0.35em] text-gold">
          § 03 — PROJECTS
        </p>

        <div className="mt-6 x:mt-8 flex flex-col l:flex-row items-start l:items-end justify-between gap-8">
          <h2 className="font-display text-5xl s:text-6xl m:text-7xl l:text-[4.5vw] x:text-[5vw] leading-[1.15] text-ink">
            My Work.
          </h2>

          <a
            href="https://github.com/SAKET707"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-ink px-6 s:px-8 x:px-10 py-3 x:py-4 font-sans text-lg s:text-xl m:text-2xl tracking-[0.25em] text-ink transition-all duration-300 hover:bg-ink hover:text-cream"
          >
            ALL ON GITHUB
          </a>
        </div>

        <div className="mt-16 h-[2px] w-full bg-gold/30"></div>
        <ProjectItems />
      </div>
    </section>
  );
}
function ProjectsBackground() {
  return (
    <div
      className="absolute inset-0 bg-center bg-cover opacity-10 pointer-events-none"
      style={{
        backgroundImage: "url('images/a.jpg')",
      }}
    />
  );
}

function ProjectItems() {
  const projects = [
    {
      number: "01",
      title: "STUDYSYNC",
      subtitle: "AI-Powered Learning Management Platform",
      date: "June 2026",
      github: "https://github.com/SAKET707/STUDYSYNC",
      tech: [
        "FastAPI",
        "React",
        "Google GenAI",
        "Groq",
        "Python",
        "Pydantic",
        "Requests",
        "Uvicorn",
      ],
      points: [
        "Collaborated on an AI-powered platform for automated evaluation of online examinations across multiple subjects.",
        "Developed backend APIs using FastAPI and integrated Google GenAI and Groq for automated answer evaluation.",
        "Built the Login and Signup pages in React with the frontend team.",
      ],
    },
    {
      number: "02",
      title: "ARES",
      subtitle: "Agent for Repository Exploration & Structured Analysis",
      date: "Dec 2025",
      github: "https://github.com/SAKET707/ARES",
      tech: [
        "Python",
        "Streamlit",
        "Groq",
        "Agno",
        "PyGitHub",
        "Pydantic",
        "Tree-sitter",
      ],
      points: [
        "Designed a tool-driven GitHub repository intelligence system focused on correctness and minimal hallucination.",
        "Implemented a dual-agent architecture with strict responsibility separation for intent routing and code analysis.",
        "Enabled repository exploration, file inspection, dependency analysis, and README-based summaries.",
      ],
    },
    {
      number: "03",
      title: "RETRIEVIST",
      subtitle: "Tool-Augmented RAG Chatbot",
      date: "Dec 2025",
      github: "https://github.com/SAKET707/RETRIEVIST",
      tech: [
        "Python",
        "Streamlit",
        "LangChain",
        "Groq",
        "Pinecone",
        "HuggingFace",
      ],
      points: [
        "Built a modular Retrieval-Augmented Generation chatbot with intelligent routing.",
        "Integrated PDF, text and web ingestion with semantic search powered by Pinecone.",
        "Implemented tool-enabled agents and deployed on Streamlit Cloud.",
      ],
    },
  ];

  return (
    <div className="mt-10 m:mt-14 x:mt-20">
      {projects.map((project) => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </div>
  );
}

function ProjectItem({ number, title, subtitle, date, github, tech, points }) {
  return (
    <div className="grid grid-cols-1 l:grid-cols-[8%_32%_44%_16%] gap-8 l:gap-10 border-b border-gold/20 px-4 s:px-6 m:px-8 x:px-8 py-10 s:py-12 m:py-16 x:py-20 hover:bg-gold/10 transition-all duration-500">
      <p className="font-display text-3xl s:text-4xl m:text-5xl x:text-6xl text-gold">
        {number}
      </p>

      <ProjectInfo title={title} subtitle={subtitle} date={date} />

      <ProjectDescription points={points} tech={tech} />

      <GithubLink github={github} />
    </div>
  );
}

function ProjectInfo({ title, subtitle, date }) {
  return (
    <div>
      <h3 className="font-display text-3xl s:text-4xl m:text-5xl x:text-6xl text-ink">
        {title}
      </h3>

      <p className="mt-4 x:mt-6 text-xl s:text-2xl m:text-3xl x:text-4xl italic leading-[1.4] text-cocoa/80">
        {subtitle}
      </p>

      <p className="mt-6 x:mt-10 font-sans text-base s:text-lg m:text-xl x:text-2xl uppercase tracking-[0.35em] text-gold">
        {date}
      </p>
    </div>
  );
}

function ProjectDescription({ points, tech }) {
  return (
    <div>
      <ul className="space-y-4 m:space-y-6 x:space-y-8">
        {points.map((point) => (
          <li
            key={point}
            className="flex gap-3 s:gap-4 m:gap-5 x:gap-6 text-lg s:text-xl m:text-2xl l:text-3xl x:text-4xl leading-[1.5] text-cocoa/90"
          >
            <span className="text-gold">—</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <TechStack tech={tech} />
    </div>
  );
}
function TechStack({ tech }) {
  return (
    <div className="mt-8 x:mt-12 flex flex-wrap gap-2 m:gap-3 x:gap-4">
      {tech.map((item) => (
        <span
          key={item}
          className=" px-3 s:px-4 x:px-5 py-2 x:py-3 font-sans text-sm s:text-base m:text-lg x:text-xl uppercase tracking-[0.15em] text-cocoa/90 transition-all duration-300 hover:bg-gold/10 hover:border-ink hover:text-ink"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
function GithubLink({ github }) {
  return (
    <div className="flex justify-end items-start x:pr-28">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-ink px-4 s:px-5 x:px-6 py-2 x:py-3 font-sans text-sm s:text-base m:text-lg x:text-xl uppercase tracking-[0.25em] text-ink transition-all duration-300 hover:bg-ink hover:text-cream"
      >
        GITHUB ↗
      </a>
    </div>
  );
}
