import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["HOME", "ABOUT", "EDUCATION", "PROJECTS", "SKILLS", "CONTACT"];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 h-20 m:h-24 x:h-32 bg-cream/70 backdrop-blur-2xl border-b border-gold/10 shadow-[0_12px_30px_rgba(40,30,20,0.06)]">
        <div className="h-full flex items-center justify-between px-4 s:px-6 m:px-8 l:px-10 x:px-16">
          <Logo />

          <nav className="hidden xx:flex items-center gap-18 font-sans text-3xl tracking-widest text-ink">
            {links.map((link) => (
              <NavLink key={link} href={`#${link.toLowerCase()}`}>
                {link}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="xx:hidden relative w-12 h-12 flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            <span
              className={`absolute h-[2px] w-8 bg-gold transition-all duration-500 ease-[cubic-bezier(.65,0,.35,1)]
              ${open ? "rotate-45" : "-translate-y-[6px]"}`}
            />

            <span
              className={`absolute h-[2px] w-8 bg-gold transition-all duration-500 ease-[cubic-bezier(.65,0,.35,1)]
              ${open ? "-rotate-45" : "translate-y-[6px]"}`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed left-0 right-0 top-20 m:top-24 x:top-32
        z-40
        bg-cream/85
        backdrop-blur-3xl
        border-b border-gold/15
        overflow-hidden
        transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
        ${
          open
            ? "max-h-[700px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center py-12 m:py-16 gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="font-display text-4xl s:text-5xl text-ink hover:text-gold transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

function NavLink({ href, children }) {
  return (
    <a href={href} className="group relative">
      {children}
      <span className="absolute left-0 -bottom-1 h-px w-full bg-gold origin-center scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
    </a>
  );
}

function Logo() {
  return (
    <a href="#home" className="group">
      <span className="text-3xl m:text-4xl x:text-5xl font-display text-ink">
        Saket
      </span>
    </a>
  );
}
