export default function Contact() {
  const roman = toRoman(new Date().getFullYear());
  return (
    <section
      id="contact"
      className="bg-forest pt-24 s:pt-32 m:pt-40 x:pt-48 border-b border-gold pb-16 s:pb-20 m:pb-24 x:pb-20 min-h-screen"
    >
      <div className="mx-auto w-full max-w-[2500px] px-5 s:px-8 m:px-10 l:px-16 x:ml-40 x:px-0">
        <p className="text-lg s:text-xl m:text-2xl x:text-3xl font-sans uppercase tracking-[0.35em] text-gold">
          § 05 — CONTACT
        </p>

        <h2 className="mt-6 x:mt-8 font-display text-5xl s:text-6xl m:text-7xl l:text-[6vw] x:text-[8vw] leading-[1.15] text-cream">
          Let's build <span className="text-gold">something</span> deliberate.
        </h2>
        <div className="mt-10 m:mt-14 x:mt-20 w-full border-t-2 border-gold/30"></div>

        <ContactCards />
        <div className="mt-10 m:mt-14 x:mt-20 w-full border-t-2 border-gold/30"></div>
        <div className="mt-6 x:mt-8 flex flex-col gap-2 x:gap-4">
          <p className="font-sans text-lg s:text-xl m:text-2xl x:text-3xl text-cream/60">
            SD Hall of Residence, Rourkela, Odisha 769008
          </p>

          <p className="font-sans text-lg s:text-xl m:text-2xl x:text-3xl text-cream/60">
            Vadodara, Gujarat 390001
          </p>
        </div>
      </div>
      <div className="mt-20 m:mt-28 x:mt-40 h-px w-full bg-gold/20"></div>
      <div className="flex flex-col l:flex-row items-start l:items-center justify-between gap-6 l:gap-0 py-6 m:py-8 x:py-12">
        <p className="font-sans text-base s:text-lg m:text-xl x:text-2xl mx-5 s:mx-8 m:mx-10 l:mx-16 x:ml-40 x:mr-0 uppercase tracking-[0.35em] text-gold/80">
          <span className="text-lg s:text-xl m:text-2xl x:text-3xl">©</span>{" "}
          {roman} · SAKET
        </p>

        <p className="font-sans text-base s:text-lg m:text-xl x:text-2xl mx-5 s:mx-8 m:mx-10 l:mx-16 x:mr-90 x:ml-0 uppercase tracking-[0.35em] text-gold/80">
          CRAFTED WITH INTENT.
        </p>
      </div>
    </section>
  );
}

function ContactCards() {
  const contacts = [
    {
      title: "Email",
      value: "saketbawlia@gmail.com",
      href: "mailto:saketbawlia@gmail.com",
    },
    {
      title: "LinkedIn",
      value: "SaketKumar016",
      href: "https://linkedin.com/in/saket-kumar016",
    },
    {
      title: "GitHub",
      value: "SAKET707",
      href: "https://github.com/SAKET707",
    },
  ];

  return (
    <div className="mt-10 m:mt-14 x:mt-20 flex flex-col l:flex-row gap-5 m:gap-8 x:gap-10">
      {contacts.map((contact) => (
        <ContactCard key={contact.title} {...contact} />
      ))}
    </div>
  );
}

function ContactCard({ title, value, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex-1 border border-gold/20 p-6 s:p-8 m:p-10 x:p-12 transition-all duration-500 hover:bg-cream"
    >
      <p className="font-sans text-base s:text-lg m:text-xl x:text-2xl uppercase tracking-[0.35em] text-gold transition-colors duration-500 group-hover:text-moss">
        {title}
      </p>

      <div className="mt-6 x:mt-12 flex items-center gap-3 x:gap-4">
        <h3 className="font-display text-2xl s:text-3xl m:text-4xl x:text-5xl text-cream transition-colors duration-500 group-hover:text-ink">
          {value}
        </h3>

        <span className="text-2xl s:text-3xl m:text-4xl x:text-5xl text-cream transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink">
          ↗
        </span>
      </div>
    </a>
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
