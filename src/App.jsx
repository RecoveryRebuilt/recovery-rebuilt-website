import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  HardHat,
  Home,
  Leaf,
  Users,
  ShieldCheck,
  HeartHandshake,
  Building2,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const divisions = [
  {
    name: "RR Concrete",
    description:
      "Concrete flatwork, driveways, sidewalks, patios, slabs, and skilled labor opportunities built on reliability and pride.",
    icon: HardHat,
    accent: "text-orange-500",
  },
  {
    name: "RR Roofing",
    description:
      "Roofing, exterior work, repairs, and restoration services built around safety, skill, and dependable crews.",
    icon: Home,
    accent: "text-green-600",
  },
  {
    name: "RR Landscaping",
    description:
      "Landscaping, outdoor improvements, seasonal maintenance, and property support services that create more pathways to work.",
    icon: Leaf,
    accent: "text-blue-600",
  },
  {
    name: "RR Workforce",
    description:
      "Recovery-informed workforce support, case management, stabilization, and employment readiness for long-term success.",
    icon: Users,
    accent: "text-purple-600",
  },
];

const supportPoints = [
  "Recovery-informed employment support",
  "Case management and barrier reduction",
  "LADC-led stabilization and coaching",
  "Workforce readiness and soft-skill development",
  "Coordination with treatment, probation, courts, and partners",
  "Clear expectations, accountability, and dignity on the job",
];

const values = [
  {
    title: "Stability",
    text: "We help people build strong foundations through employment, structure, and support.",
    icon: ShieldCheck,
  },
  {
    title: "Support",
    text: "We walk beside our workers with real-world help, not judgment or empty promises.",
    icon: HeartHandshake,
  },
  {
    title: "Growth",
    text: "We create opportunities for skill-building, responsibility, and long-term advancement.",
    icon: ArrowUpRight,
  },
  {
    title: "Purpose",
    text: "We rebuild lives and communities through meaningful work and second chances.",
    icon: Building2,
  },
];

export default function RecoveryRebuiltWebsite() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-20 items-center justify-center rounded-xl bg-white p-2 shadow-lg">
              <img
                src="/rr-mark.png"
                alt="Recovery Rebuilt RR logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-white">
                Recovery Rebuilt
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-orange-500">
                Building Stability
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-neutral-300 md:flex">
            <a href="#services" className="hover:text-orange-500">
              Services
            </a>
            <a href="#mission" className="hover:text-orange-500">
              Mission
            </a>
            <a href="#workforce" className="hover:text-orange-500">
              Workforce
            </a>
            <a href="#partners" className="hover:text-orange-500">
              Partners
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
          >
            Contact Us
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.25),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent" />

          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <div className="mb-6 inline-flex rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                Construction • Workforce • Recovery Support
              </div>

              <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-tight md:text-7xl">
                Building Stability.{" "}
                <span className="text-orange-500">Rebuilding Lives.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300 md:text-xl">
                Recovery Rebuilt provides concrete, roofing, landscaping, and
                workforce services while creating real employment pathways for
                people rebuilding their lives. We combine dependable crews with
                structure, accountability, and recovery-informed support.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-2xl bg-orange-600 px-7 py-4 text-center text-base font-black uppercase tracking-wide text-white transition hover:bg-orange-500"
                >
                  Request Work
                </a>
                <a
                  href="#partners"
                  className="rounded-2xl border border-white/20 bg-white/5 px-7 py-4 text-center text-base font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-neutral-950"
                >
                  Partner With Us
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative z-10 flex items-center justify-center"
            >
              <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white p-8 text-neutral-950 shadow-2xl">
                <img
                  src="/rr-logo-primary.png"
                  alt="Recovery Rebuilt primary logo"
                  className="mx-auto w-full max-w-sm object-contain"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="bg-neutral-100 px-6 py-20 text-neutral-950">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-orange-600">
                  One Brand. Many Ways To Build.
                </p>
                <h2 className="max-w-3xl text-4xl font-black uppercase tracking-tight md:text-5xl">
                  A brand system built for growth beyond one trade.
                </h2>
              </div>

              <p className="max-w-xl text-lg leading-8 text-neutral-600">
                Recovery Rebuilt is built as one parent brand with multiple
                service divisions: concrete, roofing, landscaping, and workforce
                support. Each division creates practical services for customers
                and real career pathways for workers.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {divisions.map((division) => {
                const Icon = division.icon;

                return (
                  <Card
                    key={division.name}
                    className="rounded-3xl border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <CardContent className="p-7">
                      <Icon
                        className={`mb-6 h-10 w-10 ${division.accent}`}
                        strokeWidth={2.5}
                      />
                      <h3 className="mb-3 text-xl font-black uppercase tracking-wide">
                        {division.name}
                      </h3>
                      <p className="leading-7 text-neutral-600">
                        {division.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="mission" className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-orange-500">
                Our Mission
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-5xl">
                Employment alone is not enough.
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-300">
                People in recovery often need more than a job. They need
                structure, accountability, transportation support, housing
                stability, skill-building, and people who understand the real
                barriers that can lead to job loss or relapse.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="rounded-3xl border border-white/10 bg-neutral-900 p-6"
                  >
                    <Icon className="mb-5 h-9 w-9 text-orange-500" />
                    <h3 className="mb-2 text-xl font-black uppercase tracking-wide">
                      {value.title}
                    </h3>
                    <p className="leading-7 text-neutral-400">{value.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="scholarship" className="bg-neutral-100 px-6 py-20 text-neutral-950">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 rounded-[2rem] bg-white p-8 shadow-xl md:grid-cols-[0.9fr_1.1fr] md:items-center md:p-12">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-orange-600">
                  Community Scholarship Commitment
                </p>
                <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
                  5% of profits reinvested into community opportunity.
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-neutral-600">
                  Recovery Rebuilt commits 5% of company profits toward a
                  community scholarship fund designed to support individuals
                  rebuilding their lives through education, skilled trades
                  training, recovery support, and career advancement.
                </p>
                <p className="mt-5 text-lg leading-8 text-neutral-600">
                  Every project helps build more than a driveway, roof,
                  landscape, or job site. It helps create opportunity for
                  someone working toward stability, purpose, and a stronger
                  future.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="workforce" className="bg-white px-6 py-20 text-neutral-950">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-orange-600">
                Workforce Support
              </p>
              <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
                The bridge between recovery and long-term employment.
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Recovery Rebuilt is designed to help workers stay reliable on
                the job by addressing the barriers that often happen outside of
                work: housing, transportation, appointments, court requirements,
                stress, conflict, and relapse risk.
              </p>

              <div className="mt-8 grid gap-4">
                {supportPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl bg-neutral-100 p-4"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-600" />
                    <p className="font-semibold text-neutral-800">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-neutral-950 p-8 text-white shadow-2xl">
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-orange-500">
                    Daily Flow
                  </p>
                  <h3 className="mt-2 text-3xl font-black uppercase">
                    Structure Creates Stability
                  </h3>
                </div>
                <HardHat className="h-12 w-12 text-orange-500" />
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-lg font-black uppercase text-white">
                    Morning
                  </p>
                  <p className="mt-1 leading-7 text-neutral-400">
                    Attendance, wellness checks, dispatch, and clear
                    expectations for the day.
                  </p>
                </div>

                <div>
                  <p className="text-lg font-black uppercase text-white">
                    During the Day
                  </p>
                  <p className="mt-1 leading-7 text-neutral-400">
                    Job-site support, communication, coaching, and
                    problem-solving when barriers appear.
                  </p>
                </div>

                <div>
                  <p className="text-lg font-black uppercase text-white">
                    End of Day
                  </p>
                  <p className="mt-1 leading-7 text-neutral-400">
                    Follow-up, documentation, supervisor feedback, and
                    stabilization planning when needed.
                  </p>
                </div>

                <div className="rounded-3xl bg-orange-600 p-6">
                  <p className="text-xl font-black uppercase">Goal</p>
                  <p className="mt-2 leading-7 text-orange-50">
                    Help people stay sober, stay housed, stay employed, and
                    build a future they can be proud of.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="px-6 py-20">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 shadow-2xl md:p-12">
            <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-orange-500">
                  Partner With Us
                </p>
                <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
                  Built for colleges, employers, community partners, and
                  workforce programs.
                </h2>
                <p className="mt-6 text-lg leading-8 text-neutral-300">
                  Recovery Rebuilt can work with training partners, recovery
                  organizations, employers, and public workforce systems to
                  create supported employment pipelines that are practical,
                  measurable, and mission-aligned.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-7 text-neutral-950">
                <h3 className="mb-5 text-2xl font-black uppercase">
                  Partnership Focus
                </h3>
                <div className="space-y-4">
                  {[
                    "Training and certification pathways",
                    "Job placement and retention support",
                    "Recovery-informed workforce development",
                    "Employer partnerships and supported crews",
                    "Grant-aligned program structure",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-600" />
                      <p className="font-semibold text-neutral-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-neutral-100 px-6 py-20 text-neutral-950">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-orange-600">
                Contact
              </p>
              <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
                Ready to build something stable?
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Reach out for concrete, roofing, landscaping, partnership
                conversations, workforce pathways, or employment opportunities.
              </p>

              <div className="mt-8 space-y-4 text-neutral-700">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-orange-600" />
                  j.fugalli@recoveryrebuilt.com
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-orange-600" />
                  (507) 491-4387
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-orange-600" />
                  Minnesota
                </div>
              </div>
            </div>

            <form
              action="https://formsubmit.co/j.fugalli@recoveryrebuilt.com"
              method="POST"
              className="rounded-[2rem] bg-white p-7 shadow-xl"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Recovery Rebuilt website inquiry"
              />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  name="name"
                  required
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4 outline-none focus:border-orange-500"
                  placeholder="Name"
                />
                <input
                  name="email"
                  type="email"
                  required
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4 outline-none focus:border-orange-500"
                  placeholder="Email"
                />
              </div>

              <input
                name="inquiry_type"
                className="mt-5 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4 outline-none focus:border-orange-500"
                placeholder="What are you reaching out about?"
              />

              <textarea
                name="message"
                required
                className="mt-5 min-h-36 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4 outline-none focus:border-orange-500"
                placeholder="Message"
              />

              <button
                type="submit"
                className="mt-5 w-full rounded-2xl bg-orange-600 py-4 text-base font-black uppercase tracking-wide text-white transition hover:bg-orange-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-neutral-400 md:flex-row md:items-center">
          <p>© 2026 Recovery Rebuilt. Building Stability. Rebuilding Lives.</p>
          <p>Concrete • Roofing • Landscaping • Workforce Support</p>
        </div>
      </footer>
    </div>
  );
}
