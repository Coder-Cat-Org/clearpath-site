import heroImage from "../assets/hero_image.png";

function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10 lg:py-20">
        <div className="space-y-4 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            ClearPath Systems
          </p>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
            Data, AI &amp; Analytics for modern businesses
          </h1>
          <p className="max-w-xl text-base font-light text-slate-600 sm:text-lg">
            We design and build scalable data and AI solutions for your business.
          </p>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-end">
            <button className="w-full rounded-xl border border-slate-900/20 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-900 transition hover:border-slate-900/40 sm:w-auto">
              Call Now
            </button>
            <button className="w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 sm:w-auto">
              View Services
            </button>
          </div>
        </div>

        <div className="flex w-full items-center justify-center rounded-2xl bg-slate-50 p-4 sm:p-6">
          <img
            src={heroImage}
            alt="ClearPath Systems platform visualization"
            className="h-auto w-full max-w-[520px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
