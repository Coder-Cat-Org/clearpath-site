import { Link } from "react-router-dom";

const services = [
  {
    title: "AI & Automation",
    description:
      "We design and implement AI & automation that removes repetitive work and improves consistency across everyday operations. We manage the technical delivery end-to-end so your team can stay focused on running the business.",
    includes:
      "Includes: use-case prioritisation, workflow automation, AI implementation, and handover.",
  },
  {
    title: "Data Foundations and Analytics",
    description:
      "We build dependable data foundations and reporting that give leaders confidence in the numbers. This includes practical data engineering, dashboard delivery, and analytics that support better day-to-day decisions.",
    includes:
      "Includes: pipeline design, data modelling, Power BI development, and custom dashboards.",
  },
  {
    title: "Custom Internal Software",
    description:
      "We build internal software around your workflows when off-the-shelf tools are not a fit. Where useful, we include integrated AI automation and embedded analytics from the start.",
    includes:
      "Includes: end-to-end delivery with optional AI and analytics integration.",
  },
];

function Services() {
  return (
    <section className="mx-auto w-full max-w-6xl space-y-8">
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/10 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Services
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          Practical services across AI, data, and custom software
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-700">
          We deliver measurable outcomes for small and medium businesses that do
          not have spare time or internal specialists to lead complex technical
          projects. Each engagement is scoped to your priorities and delivered
          in practical stages.
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
          Most projects combine elements from more than one service. We can
          structure a delivery plan that links application development with AI
          automation and analytics so your team gets one coherent system rather
          than disconnected tools.
        </p>
        <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:justify-start">
          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] !text-slate-900 transition hover:bg-slate-100 hover:!text-slate-900 visited:!text-slate-900 sm:w-auto"
          >
            Discuss Your Requirements
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
