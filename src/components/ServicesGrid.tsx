import aiAutoImage from "../assets/ai_auto_image.png";
import dataAnalyticsImage from "../assets/data_analytics_image.png";
import customSoftwareImage from "../assets/custom_software_image.png";

const services = [
  {
    title: "AI & Automation",
    description:
      "We automate repetitive admin and workflow steps so your team can focus on customers, delivery, and growth. We handle design, build, and rollout so implementation does not become another internal project.",
    outcome: "Typical outcome: Less manual processing, fewer errors, and faster day-to-day execution.",
    image: aiAutoImage,
  },
  {
    title: "Data & Analytics Foundations",
    description:
      "We consolidate key data sources and improve data quality so your reports are clear and dependable. You get trusted numbers for decisions without relying on spreadsheet patchwork.",
    outcome: "Typical outcome: Clear performance visibility and better decisions with less reporting rework.",
    image: dataAnalyticsImage,
  },
  {
    title: "Custom Software & Internal Tools",
    description:
      "When off-the-shelf tools do not fit, we build internal software around your real workflows. Your team gets tools that are easy to adopt and reduce time lost to workarounds.",
    outcome: "Typical outcome: Faster operations with purpose-built tools that match how your business runs.",
    image: customSoftwareImage,
  },
];

function ServicesGrid() {
  return (
    <section className="mt-7 w-full py-9">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl text-left">
          <h2 className="text-2xl font-semibold text-slate-900">
            Our Services
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Practical AI and data services for small and medium businesses that
            need outcomes without adding delivery burden to internal teams.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl bg-stone-200 px-8 py-10 text-left"
          >
            <img
              src={service.image}
              alt={service.title}
              className="mb-6 rounded-md object-contain"
              loading="lazy"
            />
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
