import { useState } from "react";
import type { FormEvent } from "react";

const CONTACT_EMAIL = "hello@clearpathsystems.com";
const CONTACT_PHONE_INTL = "+61 448 175 351";

function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [meetingType, setMeetingType] = useState("Video call");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `New Contact Inquiry${company ? ` - ${company}` : ""}`,
    );
    const body = encodeURIComponent(
      [
        "A new business inquiry was submitted from the ClearPath Systems website.",
        "",
        `Name: ${name}`,
        `Company: ${company || "Not provided"}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Preferred meeting type: ${meetingType}`,
        "",
        "Project details:",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="mx-auto w-full max-w-6xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Let&apos;s Talk About Your Business Goals
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-slate-700">
          Based in Brisbane, we work with businesses locally and across
          Australia. In-person meetings are available in Brisbane, and video
          consultations are available nationwide.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
        <aside className="rounded-2xl bg-stone-200 p-6 text-left">
          <h2 className="text-xl font-semibold text-slate-900">Contact Details</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-700 sm:text-base">
            <p>
              <span className="font-semibold text-slate-900">Email:</span>{" "}
              <a className="underline-offset-2 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </p>
            <p>
              <span className="font-semibold text-slate-900">Phone:</span>{" "}
              <a className="underline-offset-2 hover:underline" href={`tel:${CONTACT_PHONE_INTL.replace(/\s+/g, "")}`}>
                {CONTACT_PHONE_INTL}
              </a>
            </p>
            <p>
              <span className="font-semibold text-slate-900">Location:</span>{" "}
              Brisbane, QLD, Australia
            </p>
            <p className="pt-2 text-sm text-slate-600">
              In-person meetings in Brisbane. Video consultations anywhere in
              Australia.
            </p>
          </div>
        </aside>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/10 sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">Send an Inquiry</h2>
          <p className="mt-2 text-sm text-slate-600">
            Fill out this form to draft an email to {CONTACT_EMAIL}. We can
            connect this to your final email system later.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                Name
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-300"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                Company
                <input
                  type="text"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-300"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                Email
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-300"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                Phone
                <input
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-300"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
              Preferred Meeting Type
              <select
                value={meetingType}
                onChange={(event) => setMeetingType(event.target.value)}
                className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-300"
              >
                <option>Video call</option>
                <option>In-person (Brisbane)</option>
                <option>Unsure</option>
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
              Project Details
              <textarea
                required
                rows={6}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell us about your current process, bottlenecks, and what outcomes you want to achieve."
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-300"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-slate-800 sm:w-auto"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
