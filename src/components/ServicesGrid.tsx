const services = [
  {
    title: "AI & Automation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Automate workflows and reduce manual effort.",
    outcome: "Typical outcome: Reduced manual workload and faster turnaround",
  },
  {
    title: "Cloud & Data Platforms",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Automate workflows and reduce manual effort.",
    outcome: "Typical outcome: Reduced manual workload and faster turnaround",
  },
  {
    title: "Advisory & Delivery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Automate workflows and reduce manual effort.",
    outcome: "Typical outcome: Reduced manual workload and faster turnaround",
  },
];

function ServicesGrid() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">
            How we work
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. We focus on
            clarity, delivery, and long-term outcomes.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl bg-[#f7e9ea] px-8 py-10 text-center"
          >
            <div className="mx-auto mb-6 h-10 w-10 rounded-md bg-slate-300/60" />
            <h3 className="text-base font-semibold text-slate-900">
              {service.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              {service.description}
            </p>
            <p className="mt-5 text-xs font-medium text-slate-700">
              {service.outcome}
            </p>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
