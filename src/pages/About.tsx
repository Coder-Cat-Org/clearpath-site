import { Link } from "react-router-dom";

function About() {
  const capabilities = [
    {
      title: "Business-ready AI systems",
      description:
        "We design and deliver AI systems for day-to-day operations, not one-off demos. From document extraction to workflow automation, each solution is built for dependable use and measurable value.",
    },
    {
      title: "Dependable data and reporting",
      description:
        "We build data pipelines and reporting layers that improve confidence in your numbers and decision quality. This includes data modelling, anomaly detection, and forecasting aligned to operational planning.",
    },
    {
      title: "Low-lift delivery for busy teams",
      description:
        "We handle scoping, implementation, and rollout with clear communication and manageable milestones. Your team gets tools they can adopt quickly without carrying the technical workload.",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl space-y-8">
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/10 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          About ClearPath Systems
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          A practical partner for Australian small and medium businesses
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-700">
          ClearPath Systems helps businesses apply AI and analytics in ways that
          are commercially useful from day one. If your team does not have time
          or in-house specialist expertise, we provide end-to-end delivery that
          reduces manual work, improves decisions, and lowers operating drag.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {capabilities.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl bg-stone-200 px-8 py-10 text-left"
          >
            <h2 className="text-base font-semibold text-slate-900">
              {item.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      <div className="rounded-2xl bg-slate-900 px-8 py-10 text-left text-white">
        <h2 className="text-2xl font-semibold">
          Built for outcomes, not hype
        </h2>
        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-200 sm:text-base">
          Our approach is structured and outcome-focused. We identify
          high-impact opportunities, implement in manageable stages, and support
          adoption so your team sees value quickly.
        </p>
        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-200 sm:text-base">
          Whether you need process automation, stronger reporting foundations,
          or a tailored internal platform, we deliver solutions aligned with
          how your business actually runs.
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

export default About;
