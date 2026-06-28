export default function Education() {
  return (
    <section
      id="education"
      className="bg-forest pt-24 s:pt-32 m:pt-40 x:pt-48 border-b border-gold pb-32 s:pb-40 m:pb-52 x:pb-64 min-h-screen"
    >
      <div className="mx-auto max-w-[2500px] px-5 s:px-8 m:px-10 l:px-16 x:ml-40 x:px-0">
        <p className="text-lg s:text-xl m:text-2xl x:text-3xl font-sans uppercase tracking-[0.35em] text-gold">
          § 02 — EDUCATION
        </p>

        <h2 className="mt-6 x:mt-8 font-display text-5xl s:text-6xl m:text-7xl l:text-[3.5vw] x:text-[4vw] leading-[1.15] text-cream">
          Academic journey.
        </h2>

        <div className="px-0 s:px-4 m:px-8 x:px-12">
          <div className="mt-16 h-[2px] w-full bg-gold/30"></div>
          <EducationItems />
        </div>
      </div>
    </section>
  );
}

function EducationItem({ institute, degree, score, duration, location }) {
  return (
    <div className="border-b border-gold/20 py-10 s:py-12 m:py-16 x:py-20 px-4 s:px-6 m:px-10 x:px-16 transition-all duration-500 ease-out hover:bg-moss x:hover:pl-20">
      <div className="flex flex-col l:flex-row justify-between items-start gap-6 l:gap-0">
        <div>
          <h3 className="font-display tracking-wider text-3xl s:text-4xl m:text-5xl x:text-6xl text-cream">
            {institute}
          </h3>

          <p className="mt-3 x:mt-5 text-lg s:text-xl m:text-2xl x:text-3xl text-cream/80">
            {degree}
          </p>

          <p className="mt-2 x:mt-3 text-base s:text-lg m:text-xl x:text-2xl text-gold">
            {score}
          </p>

          <p className="mt-2 x:mt-3 text-base s:text-lg m:text-xl x:text-2xl text-cream/60">
            {location}
          </p>
        </div>

        <span className="text-base s:text-lg m:text-xl x:text-2xl tracking-wider text-gold whitespace-nowrap">
          {duration}
        </span>
      </div>
    </div>
  );
}

function EducationItems() {
  const education = [
    {
      institute: "National Institute of Technology, Rourkela",
      degree: "Bachelor of Technology in Artificial Intelligence",
      score: "CGPA - 9.30",
      duration: "Aug 2024 — Present",
      location: "Rourkela, Odisha",
    },
    {
      institute: "Swami Keshwanand Convent School",
      degree: "AISCCE – CBSE (PCM)",
      score: "Percentage - 94.20%",
      duration: "May 2024",
      location: "Sikar, Rajasthan",
    },
    {
      institute: "Jawahar Navodaya Vidyalaya, Odhan",
      degree: "AISSE – CBSE",
      score: "Percentage - 94.67%",
      duration: "May 2022",
      location: "Sirsa, Haryana",
    },
  ];

  return (
    <div>
      {education.map((edu, index) => (
        <div key={edu.institute} className="border-b border-gold/20 ">
          <EducationItem {...edu} />
        </div>
      ))}
    </div>
  );
}
