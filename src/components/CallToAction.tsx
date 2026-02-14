import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="mt-7 w-full py-9">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl bg-slate-900 px-8 py-10 text-left text-white">
          <h2 className="text-2xl font-semibold">
            Ready to talk about your project?
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-200 sm:text-base">
            If you need to reduce process bottlenecks, improve data quality, or
            apply AI without overloading your team, we can design and deliver
            the right solution.
          </p>
          <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:justify-start">
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] !text-slate-900 transition hover:bg-slate-100 hover:!text-slate-900 visited:!text-slate-900 sm:w-auto"
            >
              Book A Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
