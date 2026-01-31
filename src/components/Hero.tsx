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
            Data, AI &amp; Cloud for modern businesses
          </h1>
          <p className="max-w-xl text-base font-light text-slate-600 sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. We design
            and build scalable data and AI platforms.
          </p>
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
