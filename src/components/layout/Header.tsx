import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-CPS.svg";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-900/10 bg-gradient-to-br from-[#f4f8fb] via-[#e7eef5] to-[#fef6ea] backdrop-blur">
      <div className="relative mx-auto flex max-w-8xl items-center justify-between gap-8 px-6 py-4 md:px-10">
        <NavLink
          className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.12em] text-slate-900"
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo}
            alt="ClearPath Systems logo"
            className="h-11 w-11 object-contain"
          />
          <span className="text-[#0b1f3b]">
            <span className="block text-left font-bold">ClearPath</span>
            <span className="block text-left text-[0.7rem] font-light text-slate-500">
              Systems
            </span>
          </span>
        </NavLink>

        <button
          className="inline-flex h-10 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-900/20 bg-white md:hidden"
          type="button"
          aria-controls="app-nav"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="h-0.5 w-6 rounded-full bg-slate-900" />
          <span className="h-0.5 w-6 rounded-full bg-slate-900" />
          <span className="h-0.5 w-6 rounded-full bg-slate-900" />
        </button>

        <nav
          id="app-nav"
          className={`${
            menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          } absolute right-6 top-full mt-3 flex min-w-[12.5rem] flex-col items-start gap-4 rounded-2xl border border-slate-900/10 bg-white px-5 py-4 shadow-xl transition md:pointer-events-auto md:static md:mt-0 md:flex md:min-w-0 md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:px-0 md:py-0 md:opacity-100 md:shadow-none`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative text-sm font-semibold uppercase tracking-[0.12em] text-slate-900 transition ${
                  isActive
                    ? "border-b-2 border-orange-500"
                    : "border-b-2 border-transparent hover:border-orange-500"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
