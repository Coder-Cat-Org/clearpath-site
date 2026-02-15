import clarityFirstImage from "../assets/clarty_first_image.png";
import professionalDeliveryImage from "../assets/professional_delivery_image.png";
import reliableSupportImage from "../assets/reliable_support_image.png";

const valueProps = [
  {
    title: "Clarity first",
    description:
      "We identify the highest-value use cases first, so you avoid wasted spend and focus only on work that moves your business forward.",
    image: clarityFirstImage,
    imageAlt: "Clarity first",
  },
  {
    title: "Professional delivery",
    description:
      "We handle scoping, build, testing, and rollout with clear timelines, so your team is not stuck managing technical delivery.",
    image: professionalDeliveryImage,
    imageAlt: "Professional delivery",
  },
  {
    title: "Ongoing support",
    description:
      "After launch, we stay involved to monitor performance, refine workflows, and support your team as your operations evolve.",
    image: reliableSupportImage,
    imageAlt: "Reliable support",
  },
];

function ValueProps() {
  return (
    <section className="mt-7 w-full py-9">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl text-left">
          <h2 className="text-2xl font-semibold text-slate-900">
            How We Work
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            We start by getting clear on what matters most, deliver the work
            with a solid plan, and stay with you to support improvements over
            time.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {valueProps.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-stone-200 px-8 py-10 text-left"
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                className="mb-6 rounded-md object-contain"
                loading="lazy"
              />
              <h3 className="text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValueProps;
