import { BadgeCheck, CircleDot, Headphones, Network, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { certifications, projects, skillGroups } from "@/data/site";

const strengths = [
  {
    title: "Support Mindset",
    description:
      "Customer-facing troubleshooting across hardware, software, operating systems, printers, peripherals, and network issues.",
    icon: Headphones,
  },
  {
    title: "Network Practice",
    description:
      "Hands-on TCP/IP, routing, wireless experiments, nRF24L01 packet testing, and infrastructure lab work.",
    icon: Network,
  },
  {
    title: "Builder Habits",
    description:
      "Project-based learning with web apps, automation scripts, Arduino prototypes, AI workflows, and documented case studies.",
    icon: Wrench,
  },
];

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section>
        <Badge>Skills</Badge>
        <div className="mt-5 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <h1 className="text-4xl font-black text-slate-950 sm:text-5xl dark:text-white">
              A practical capability map for IT support, networking, and software projects.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              My strongest value is practical problem-solving: understanding
              the issue, testing carefully, explaining clearly, and building a
              solution that can be repeated or improved.
            </p>
          </div>
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase text-emerald-700 dark:text-emerald-300">
              Skill Evidence
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-3xl font-black text-slate-950 dark:text-white">
                  {skillGroups.length}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  domains
                </p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-950 dark:text-white">
                  {projects.length}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  case studies
                </p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-950 dark:text-white">
                  {certifications.length}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  credentials
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mt-14 grid gap-4 lg:grid-cols-3">
        {strengths.map((strength) => {
          const Icon = strength.icon;
          return (
            <Card key={strength.title} className="p-6">
              <Icon className="h-5 w-5 text-emerald-600" />
              <h2 className="mt-4 text-xl font-bold text-slate-950 dark:text-white">
                {strength.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {strength.description}
              </p>
            </Card>
          );
        })}
      </section>

      <section className="mt-14">
        <Badge>Capability Groups</Badge>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <Card key={group.name} className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                    {group.name}
                  </h2>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mt-14 grid gap-4 lg:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-emerald-600" />
            <h2 className="text-2xl font-black text-slate-950 dark:text-white">
              Certifications Connected To Skills
            </h2>
          </div>
          <div className="mt-5 grid gap-3">
            {certifications.slice(0, 6).map((certification) => (
              <div
                key={certification.name}
                className="rounded-lg border border-slate-200 p-4 dark:border-white/10"
              >
                <p className="font-semibold text-slate-950 dark:text-white">
                  {certification.name}
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {certification.issuer}
                </p>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-2">
            <CircleDot className="h-5 w-5 text-emerald-600" />
            <h2 className="text-2xl font-black text-slate-950 dark:text-white">
              Current Learning Focus
            </h2>
          </div>
          <div className="mt-5 grid gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            <p>Networking fundamentals and practical packet-level diagnostics.</p>
            <p>Linux, systems administration, and infrastructure troubleshooting.</p>
            <p>Modern web delivery with Next.js, TypeScript, clean UI, and deployment readiness.</p>
            <p>AI-assisted research tools, workflow automation, and responsible technical communication.</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
