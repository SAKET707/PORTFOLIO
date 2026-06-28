import { useEffect, useRef } from "react";

import HorizontalLoop from "../utils/HorizontalLoop";

export default function Home() {
  return (
    <section
      id="home"
      className="bg-cream pt-32 pb-48 min-h-136 relative overflow-hidden"
    >
      <HomeBackground />

      <div className="flex relative z-10 max-w-[1450px] mx-auto px-5 s:px-8 m:px-10 l:px-16 x:pl-2 x:ml-40 pt-12 s:pt-16 m:pt-32 l:pt-40 x:pt-48 pb-10 s:pb-14 m:pb-32 l:pb-40 x:pb-48 flex-col items-start">
        <PortfolioLabel />

        <h1 className="mb-5 m:mb-8 x:mb-10 text-6xl s:text-7xl m:text-8xl l:text-[8vw] x:text-[9vw] text-ink font-display">
          Saket
        </h1>
        <div className="flex flex-col m:flex-col l:flex-row items-start l:items-center gap-8 l:gap-10 justify-evenly">
          <p className="text-xl s:text-2xl m:text-3xl l:text-3xl x:text-4xl leading-[1.6] text-cocoa/80 font-sans tracking-normal">
            <span className="text-ink">Artificial Intelligence</span>{" "}
            undergraduate at <span className="text-ink">NIT Rourkela</span>,
            building reliable AI systems that combine Machine Learning,
            Retrieval-Augmented Generation, and Agentic AI into practical,
            production-ready applications.
          </p>
          <a
            href="https://github.com/SAKET707/SAKET707/blob/main/SAKET-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg s:text-xl m:text-2xl x:text-3xl font-sans tracking-[0.25em] text-ink border border-ink px-6 s:px-8 x:px-10 py-3 x:py-4 hover:bg-ink transition-all duration-300 ease-out cursor-pointer hover:text-cream"
          >
            RÉSUMÉ
          </a>
        </div>
      </div>
      <Strip />
    </section>
  );
}

function HomeBackground() {
  return (
    <div
      className="absolute inset-0 opacity-5 bg-center bg-cover"
      style={{
        backgroundImage: "url('images/home-bg.svg')",
      }}
    />
  );
}

function Strip() {
  const containerRef = useRef(null);

  const skills = [
    "Machine Learning",
    "Deep Learning",
    "RAG Systems",
    "Agentic AI",
    "Quant Finance",
    "NLP",
  ];

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".marquee-item");

    const loop = HorizontalLoop(items, {
      repeat: -1,
      speed: 1.3,
      paused: false,
    });

    return () => loop.kill();
  }, []);

  return (
    <div className="overflow-hidden relative z-10 border-y border-gold/30 py-5 s:py-6 m:py-8 l:py-10 x:py-12">
      <div ref={containerRef} className="flex items-center whitespace-nowrap">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="marquee-item flex shrink-0 items-center gap-4 s:gap-6 m:gap-8 l:gap-10 px-5 s:px-7 m:px-9 l:px-10 x:px-12"
          >
            <span className="italic text-moss font-display text-2xl s:text-3xl m:text-4xl l:text-[2.7rem] x:text-5xl">
              {skill}
            </span>

            <span className="text-moss text-lg s:text-xl m:text-2xl x:text-3xl">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PortfolioLabel() {
  const currentYear = new Date().getFullYear();
  const romanYear = toRoman(currentYear);
  return (
    <div className="flex flex-row items-center mb-5 m:mb-8 x:mb-10">
      <span className="h-px self-center bg-gold w-14"></span>
      <span className="text-sm s:text-base m:text-xl x:text-3xl ml-3 tracking-[0.2em] m:tracking-[0.3em] x:tracking-[0.4em] font-sans text-moss">
        PORTFOLIO
      </span>
      <span className="text-sm s:text-base m:text-xl x:text-3xl font-sans mr-3 text-moss">
        {" "}
        ·{" "}
      </span>
      <span className="text-sm s:text-base m:text-xl x:text-3xl tracking-[0.2em] m:tracking-[0.3em] x:tracking-[0.4em] font-sans text-moss">
        {romanYear}
      </span>
    </div>
  );
}

function toRoman(num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let roman = "";

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      roman += symbols[i];
      num -= values[i];
    }
  }

  return roman;
}
