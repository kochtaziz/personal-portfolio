import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile, skillGroups, timeline } from "@/data/site";

const focusAreas = [
  "IT support, troubleshooting, and customer-facing technical service",
  "Networking, Linux, hardware repair, and infrastructure practice",
  "Project-based software learning across web apps, Arduino, IoT, and automation",
];

const education = [
  "Bachelor's Degree in Computer Science - Faculty of Science, Bizerte",
  "Baccalaureat Diploma, Computer Science Track - Lycee Habib Thameur, Bizerte",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <Badge>About</Badge>
          <h1 className="mt-5 text-4xl font-black text-slate-950 sm:text-5xl dark:text-white">
            Practical IT support experience, shaped into software and infrastructure projects.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            I am Mohamed Aziz Kocht, an IT support and software-oriented
            professional from Bizerte, Tunisia. My work combines customer
            support, troubleshooting, computer hardware, Linux, networking, and
            hands-on projects in AI, IoT, Arduino, wireless communication, and
            web development.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/resume">View Resume</Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-[0.85fr_1.15fr]">
          <Image
            src={profile.image}
            alt={profile.name}
            width={900}
            height={1100}
            priority
            className="aspect-[4/5] h-auto w-full rounded-lg border border-slate-200 object-cover shadow-xl dark:border-white/10"
          />
          <Card className="p-6">
            <p className="text-sm font-semibold uppercase text-emerald-700 dark:text-emerald-300">
              Current Direction
            </p>
            <p className="mt-4 text-2xl font-black leading-tight text-slate-950 dark:text-white">
              Building a career at the intersection of IT support, networking,
              and practical product delivery.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              The goal is to become the kind of technical professional who can
              troubleshoot real user problems, understand infrastructure, and
              still build clean software tools that make work easier.
            </p>
          </Card>
        </div>
      </section>

      <section className="mt-14 grid gap-4 lg:grid-cols-3">
        {focusAreas.map((area) => (
          <Card key={area} className="p-6">
            <BriefcaseBusiness className="h-5 w-5 text-emerald-600" />
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {area}
            </p>
          </Card>
        ))}
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-emerald-600" />
            <h2 className="text-2xl font-black text-slate-950 dark:text-white">
              Education
            </h2>
          </div>
          <div className="mt-5 grid gap-3">
            {education.map((item) => (
              <p
                key={item}
                className="rounded-lg border border-slate-200 p-4 text-sm text-slate-600 dark:border-white/10 dark:text-slate-300"
              >
                {item}
              </p>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-emerald-600" />
            <h2 className="text-2xl font-black text-slate-950 dark:text-white">
              Technologies I Use
            </h2>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {skillGroups.flatMap((group) =>
              group.skills.slice(0, 4).map((skill) => (
                <Badge key={`${group.name}-${skill}`}>{skill}</Badge>
              )),
            )}
          </div>
        </Card>
      </section>

      <section className="mt-14">
        <Badge>Timeline</Badge>
        <h2 className="mt-4 text-3xl font-black text-slate-950 dark:text-white">
          Professional path
        </h2>
        <div className="mt-6 grid gap-4">
          {timeline.slice(0, 4).map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                      {item.date}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-slate-950 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
