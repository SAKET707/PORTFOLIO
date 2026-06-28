export default function About() {
  return (
    <section
      id="about"
      className="bg-cream relative overflow-hidden pt-24 s:pt-32 m:pt-40 x:pt-48 pb-28 s:pb-36 m:pb-44 x:pb-56"
    >
      <AboutBackground />
      <div className="relative z-10 max-w-[2500px] mx-auto px-5 s:px-8 m:px-10 l:px-16 x:ml-40 x:px-0 grid grid-cols-1 l:grid-cols-[40%_60%] gap-12 m:gap-16 l:gap-20 x:gap-28">
        <div>
          <p className="mb-8 m:mb-10 x:mb-12 text-lg s:text-xl m:text-2xl x:text-3xl font-sans uppercase tracking-[0.35em] text-gold">
            § 01 — ABOUT
          </p>

          <h2 className="font-display text-5xl s:text-6xl m:text-7xl l:text-[4.5vw] x:text-[5vw] leading-[1.15] text-ink">
            A student,
            <br />
            a builder,
            <br />a curious mind.
          </h2>
        </div>

        <div className="grid grid-rows-[auto_auto] mt-10 m:mt-16 l:mt-20 x:mt-24 gap-8 m:gap-12 x:gap-16">
          <div className="space-y-6 m:space-y-8 x:space-y-10 font-sans text-xl s:text-2xl m:text-3xl l:text-[2rem] x:text-4xl leading-[1.8] text-cocoa/80">
            <p>
              I'm{" "}
              <span className="text-ink text-3xl s:text-4xl m:text-[2.6rem] x:text-5xl font-display">
                Saket
              </span>
              , an AI enthusiast who enjoys building intelligent systems that
              solve practical problems. Currently based in Vadodara, Gujarat,
              I'm driven by curiosity and enjoy turning ideas into reliable,
              real-world applications through thoughtful engineering.
            </p>

            <p>
              My interests span Machine Learning, Deep Learning, Natural
              Language Processing, Retrieval-Augmented Generation, and
              Generative AI. Alongside building end-to-end AI projects, I'm
              continuously strengthening my foundations in Data Structures, SQL,
              and modern frontend development to create AI experiences that are
              both intelligent and intuitive.
            </p>

            <div className="mt-8 m:mt-10 x:mt-12 h-px w-full max-w-160 bg-gold/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutBackground() {
  return (
    <div
      className="absolute inset-0 bg-center bg-cover opacity-5"
      style={{
        backgroundImage: "url('images/about-bg.svg')",
      }}
    />
  );
}
