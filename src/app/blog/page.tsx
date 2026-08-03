import Link from "next/link";
import { ArrowRight, BookOpen, Network, PenLine } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plannedTopics = [
  {
    title: "Networking Notes",
    description:
      "Short lessons from TCP/IP, routing, wireless experiments, and nRF24L01 packet testing.",
    icon: Network,
  },
  {
    title: "Project Writeups",
    description:
      "Behind-the-scenes notes explaining decisions, bugs, architecture, and improvements from portfolio projects.",
    icon: PenLine,
  },
  {
    title: "Career Reflections",
    description:
      "Practical notes from IT support, customer service, learning habits, and building a stronger technical profile.",
    icon: BookOpen,
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="max-w-3xl">
        <Badge>Blog</Badge>
        <h1 className="mt-5 text-4xl font-black text-slate-950 sm:text-5xl dark:text-white">
          Technical writing hub
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          This section is ready for future articles. The first writing track
          will focus on practical networking notes, project writeups, and
          career lessons from IT support and hands-on technical learning.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/projects">
              Read Project Case Studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        {plannedTopics.map((topic) => {
          const Icon = topic.icon;
          return (
            <Card key={topic.title} className="p-6">
              <Icon className="h-5 w-5 text-emerald-600" />
              <h2 className="mt-4 text-xl font-bold text-slate-950 dark:text-white">
                {topic.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {topic.description}
              </p>
            </Card>
          );
        })}
      </section>
    </div>
  );
}
