import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const services = [
  {
    title: "AI & Automation",
    description:
      "We automate repetitive admin and manual steps so your team can do more with the same headcount. We focus on practical use cases that reduce errors, save time each week, and pay for themselves quickly.",
    includes:
      "Includes: opportunity review, workflow automation, AI setup, testing, and team handover.",
  },
  {
    title: "Data Foundations and Analytics",
    description:
      "We clean up scattered data and build reporting you can trust. You get clear dashboards for cash flow, sales, operations, and performance so decisions are based on facts, not guesswork.",
    includes:
      "Includes: data consolidation, pipeline setup, Power BI delivery, and tailored dashboards.",
  },
  {
    title: "Custom Internal Software",
    description:
      "When off-the-shelf tools force workarounds, we build software that matches how your business actually operates. The result is faster turnaround, less rework, and lower running costs over time.",
    includes:
      "Includes: process mapping, custom build, rollout support, and optional AI and reporting integration.",
  },
];

function Services() {
  return (
    <section className="mx-auto w-full max-w-6xl space-y-8">
      <Helmet>
        <title>Services | ClearPath Systems</title>
        <meta name="description" content="AI automation, data analytics, and custom internal software for Australian small and medium businesses. Clear scope, clear costs, and measurable outcomes in months." />
        <link rel="canonical" href="https://clearpathsystems.com.au/services" />
      </Helmet>
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/10 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Services
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          Practical AI and data services that improve margins and save time
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-700">
          Built for Australian small and medium businesses: clear scope, clear
          costs, and clear outcomes. We prioritise work that reduces operating
          costs, lifts team productivity, and shows measurable value in months,
          not years.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl bg-stone-200 px-8 py-10 text-left"
          >
            <h2 className="text-base font-semibold text-slate-900">
              {service.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              {service.description}
            </p>
            <p className="mt-5 text-xs font-medium text-slate-700">
              {service.includes}
            </p>
          </article>
        ))}
      </div>

      <div className="rounded-2xl bg-slate-900 px-8 py-10 text-left text-white">
        <h2 className="text-2xl font-semibold">Need a combined solution?</h2>
        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-200 sm:text-base">
          Most businesses need a mix of automation, reporting, and software
          improvements. We design one plan with staged delivery and agreed
          milestones, so you can control spend and see results at each step.
        </p>
        <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:justify-start">
          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] !text-slate-900 transition hover:bg-slate-100 hover:!text-slate-900 visited:!text-slate-900 sm:w-auto"
          >
            Discuss Your Goals
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
