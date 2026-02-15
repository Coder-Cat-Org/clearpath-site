import clarityFirstImage from "../assets/clarty_first_image.png";
import professionalDeliveryImage from "../assets/professional_delivery_image.png";
import reliableSupportImage from "../assets/reliable_support_image.png";

const valueProps = [
  {
    title: "Clarity first",
    description:
      "We work with you to prioritise the highest-value opportunities first, so you can improve operations without wasting time or budget.",
    image: clarityFirstImage,
    imageAlt: "Clarity first",
  },
  {
    title: "Professional delivery",
    description:
      "We handle scoping, build, testing, and rollout with clear timelines and milestones, so your team is not stuck managing technical delivery.",
    image: professionalDeliveryImage,
    imageAlt: "Professional delivery",
  },
  {
    title: "Ongoing support",
    description:
      "After launch, we keep improving workflows and supporting your team, so results are maintained as your business grows.",
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
           We focus on what will create real impact first, roll it out in clear stages, and stay involved to keep things improving over time.
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
