const valueProps = [
  {
    title: "Clarity first",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Professional delivery",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Ongoing support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function ValueProps() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-10 text-left">
          <h2 className="text-2xl font-semibold text-slate-900">
            How we work
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {valueProps.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-stone-200 px-8 py-10 text-center"
            >
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
