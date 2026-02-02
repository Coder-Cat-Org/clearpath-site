import aiAutoImage from "../assets/ai_auto_image.png";
import dataAnalyticsImage from "../assets/data_analytics_image.png";
import customSoftwareImage from "../assets/custom_software_image.png";

const services = [
  {
    title: "AI & Automation",
    description:
      "We help businesses reduce manual work by applying practical AI and automation to everyday processes. The focus is on improving efficiency, reducing errors, and freeing up your team’s time without unnecessary complexity.",
    outcome: "Typical outcome: Less time spent on admin and faster, more consistent operations.",
    image: aiAutoImage,
  },
  {
    title: "Data & Analytics Foundations",
    description:
      "We build reliable data foundations that give businesses confidence in their numbers and reporting. By consolidating data and improving data quality, we help decision-makers gain clear, trustworthy insights.",
    outcome: "Clear visibility into performance and data you can rely on to make better decisions.",
    image: dataAnalyticsImage,
  },
  {
    title: "Custom Software & Internal Tools",
    description:
      "We design and build custom internal tools when off-the-shelf software doesn’t quite fit your business. Our solutions are simple, secure, and tailored to how your team actually works.",
    outcome: "Purpose-built tools that streamline processes and reduce reliance on manual workarounds.",
    image: customSoftwareImage,
  },
];

function ServicesGrid() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">
            Our Services
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
            className="rounded-2xl bg-stone-200 px-8 py-10 text-center"
          >
            <img
              src={service.image}
              alt={service.title}
              className="mx-auto mb-6 rounded-md object-contain"
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
