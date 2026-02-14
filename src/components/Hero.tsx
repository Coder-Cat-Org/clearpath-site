import heroImage from "../assets/hero_image.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="mt-7 w-full py-9">
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/10 sm:p-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-4 text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                ClearPath Systems
              </p>
              <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
                AI and data solutions for small and medium businesses
              </h1>
              <p className="max-w-xl text-base font-light text-slate-600 sm:text-lg">
                We do the technical work from start to finish, so you and your
                team can stay focused on running the business.
              </p>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-start">
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-slate-900/20 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-900 transition hover:border-slate-900/40 sm:w-auto"
                >
                  Book A Discovery Call
                </Link>
                <Link
                  to="/services"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] !text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 hover:!text-white visited:!text-white sm:w-auto"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="flex w-full items-center justify-center rounded-2xl bg-slate-50 p-4 sm:p-6">
              <img
                src={heroImage}
                alt="ClearPath Systems platform visualization"
                className="h-auto w-full max-w-[520px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
