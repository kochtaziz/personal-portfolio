import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { timeline } from "@/data/site";

const outcomes = [
  "Resolved technical issues across laptops, printers, peripherals, operating systems, and network services.",
  "Supported customers with clear explanations, product guidance, and practical troubleshooting.",
  "Built project evidence across AI workflows, web apps, Arduino, wireless communication, and IT labs.",
  "Managed business and customer operations while improving processes through practical technical thinking.",
];

const education = [
  {
    title: "Bachelor's Degree, Computer Science",
    place: "Faculty of Science, Bizerte",
  },
  {
    title: "Baccalaureat Diploma, Computer Science Track",
    place: "Lycee Habib Thameur, Bizerte",
  },
];

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <div>
          <Badge>Experience</Badge>
          <h1 className="mt-5 text-4xl font-black text-slate-950 sm:text-5xl dark:text-white">
            Professional timeline with hands-on technical support and builder experience.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            My background combines freelance tech support, customer operations,
            hardware troubleshooting, small-business ownership, and continuous
            project-based learning in software, networking, and embedded systems.
          </p>
        </div>
        <Card className="p-6">
          <p className="text-sm font-semibold uppercase text-emerald-700 dark:text-emerald-300">
            Summary
          </p>
          <p className="mt-4 text-4xl font-black text-slate-950 dark:text-white">
            ~6 years
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Practical experience solving technical, customer, and operational
            problems across freelance work, retail operations, and IT support.
          </p>
        </Card>
      </section>

      <section className="mt-14 grid gap-4 lg:grid-cols-2">
        {outcomes.map((outcome) => (
          <Card key={outcome} className="p-5">
            <div className="flex gap-3">
              <BriefcaseBusiness className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                {outcome}
              </p>
            </div>
          </Card>
        ))}
      </section>

      <section className="mt-14">
        <Badge>Roles</Badge>
        <div className="mt-6 grid gap-4">
          {timeline.slice(0, 4).map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="p-6">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <Badge>{item.date}</Badge>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mt-14 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <Card className="p-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-emerald-600" />
            <h2 className="text-2xl font-black text-slate-950 dark:text-white">
              Education
            </h2>
          </div>
          <div className="mt-5 grid gap-3">
            {education.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-slate-200 p-4 dark:border-white/10"
              >
                <p className="font-semibold text-slate-950 dark:text-white">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {item.place}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-black text-slate-950 dark:text-white">
            Recruiter Notes
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            This timeline is designed to show more than job titles. It connects
            customer support, troubleshooting, business responsibility, and
            project evidence into one profile: someone comfortable speaking to
            users, diagnosing systems, and learning by building.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link href="/resume">
                Open Resume
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
