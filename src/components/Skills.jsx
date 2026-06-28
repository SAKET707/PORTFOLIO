export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-cream relative overflow-hidden pt-24 s:pt-32 m:pt-40 x:pt-48 pb-32 s:pb-40 m:pb-52 x:pb-64 min-h-screen"
    >
      <div className="relative z-10 mx-auto max-w-[2500px] px-5 s:px-8 m:px-10 l:px-16 x:ml-40 x:px-0">
        <p className="text-lg s:text-xl m:text-2xl x:text-3xl font-sans uppercase tracking-[0.35em] text-gold">
          § 04 — SKILLS
        </p>
        <h2 className="font-display text-5xl s:text-6xl m:text-7xl l:text-[4.5vw] x:text-[5vw] leading-[1.15] text-ink">
          Capabilities.
        </h2>
        <SkillBlocks />
      </div>
    </section>
  );
}

function SkillBlocks() {
  const skills = [
    {
      title: "Languages",
      items: ["Python", "Java", "C", "C++", "HTML/CSS", "SQL"],
    },
    {
      title: "Operating Systems",
      items: ["Windows"],
    },
    {
      title: "Developer Tools",
      items: [
        "Git",
        "GitHub",
        "Docker",
        "Cursor",
        "VS Code",
        "Postman",
        "Jupyter Notebook",
      ],
    },
    {
      title: "Frameworks",
      items: [
        "React",
        "Tailwind CSS",
        "FastAPI",
        "PyTorch",
        "LangChain",
        "LangGraph",
      ],
    },
  ];

  return (
    <div className="mt-10 m:mt-14 x:mt-20 grid grid-cols-1 s:grid-cols-2 l:grid-cols-4 gap-5 m:gap-6 x:gap-8">
      {skills.map((skill) => (
        <SkillBlock key={skill.title} {...skill} />
      ))}
    </div>
  );
}

function SkillBlock({ title, items }) {
  return (
    <div className="border border-cocoa/20 bg-cream/90 p-6 s:p-8 x:p-10 transition-all duration-500 hover:bg-gold/10">
      <h3 className="font-display text-3xl s:text-4xl m:text-5xl x:text-6xl text-ink">
        {title}
      </h3>

      <div className="mt-6 x:mt-8 h-px w-16 x:w-20 bg-gold/40"></div>

      <div className="mt-6 x:mt-10 flex flex-col gap-2 m:gap-3 x:gap-4">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 s:px-4 x:px-5 py-2 x:py-3 font-sans text-lg s:text-xl m:text-2xl x:text-3xl text-cocoa/90 hover:bg-cream/80 hover:text-ink"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
