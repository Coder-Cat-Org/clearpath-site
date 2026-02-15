const caseStudies = [
  {
    title: "Contract extraction workflow",
    summary:
      "The client needed a faster way to handle contract data without adding headcount. We built a full-stack extraction workflow for PDF, Word, and Excel contracts that stores terms in a client-defined structure.",
    impact:
      "Result: 90% reduction in processing time, with secure handling and simpler validation for ongoing updates.",
  },
  {
    title: "Anomaly detection",
    summary:
      "The client needed more trustworthy reporting but did not have time for manual data checks. We implemented anomaly detection that flagged costly data-entry issues before downstream processes were impacted.",
    impact:
      "Result: early error detection prevented avoidable write-offs, including $1,000 saved in an initial rollout phase.",
  },
];

function CaseStudies() {
  return (
    <section className="mt-7 w-full py-9">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl text-left">
          <h2 className="text-2xl font-semibold text-slate-900">Case Studies</h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Examples of practical solutions we have delivered with measurable business
            impact and clear operational results.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="rounded-2xl bg-stone-200 px-8 py-10 text-left"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {study.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                {study.summary}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                {study.impact}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CaseStudies;
