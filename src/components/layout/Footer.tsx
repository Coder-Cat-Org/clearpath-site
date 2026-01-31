import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-900/10 bg-slate-700 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <div className="grid gap-y-8 gap-x-30 md:grid-cols-3">
          <div className="text-left pl-15">
            <h2 className="text-lg uppercase tracking-[0.08em]">
              <span className="block font-bold text-white">ClearPath</span>
              <span className="block text-sm font-light text-slate-200">
                Systems
              </span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ut aliquet justo, vitae facilisis risus.
            </p>
          </div>

          <div className="text-left pl-15">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-200">
              Links
            </h3>
            <div className="mt-4 flex flex-col items-left gap-2 text-sm text-slate-300">
              <Link className="hover:text-white" to="/">
                Home
              </Link>
              <Link className="hover:text-white" to="/services">
                Services
              </Link>
              <Link className="hover:text-white" to="/about">
                About
              </Link>
              <Link className="hover:text-white" to="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div className="text-left pl-15">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-200">
              Contact
            </h3>
            <div className="mt-4 flex flex-col items-left gap-2 text-sm text-slate-300">
              <span>hello@clearpathsystems.com</span>
              <span>Brisbane, AU</span>
              <a className="hover:text-white" href="https://www.linkedin.com">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 border-t border-slate-700 pt-5 text-center text-xs text-slate-300 md:flex-row md:justify-center md:gap-6">
          <span>Copyright © {new Date().getFullYear()} ClearPath Systems</span>
          <span>Privacy | Terms</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
