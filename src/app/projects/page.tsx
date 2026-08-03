import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { additionalProjects, projects } from "@/data/site";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <Badge>Projects</Badge>
        <h1 className="mt-5 text-4xl font-black text-slate-950 sm:text-5xl dark:text-white">
          Project case studies
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          A structured project library with visuals, technology tags, and
          individual pages prepared for architecture, screenshots, lessons, and
          links.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <Card className="h-full overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-xl">
              <Image
                src={project.image}
                alt={`${project.title} visual`}
                width={1200}
                height={800}
                className="aspect-[16/10] h-auto w-full object-cover"
              />
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <Badge>{project.status}</Badge>
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </div>
                <h2 className="mt-4 text-lg font-bold text-slate-950 dark:text-white">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <section className="mt-16">
        <Badge>Additional Project Evidence</Badge>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {additionalProjects.map((project) => (
            <Card key={project.title} className="p-5">
              <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                {project.period}
              </p>
              <h2 className="mt-3 text-lg font-bold text-slate-950 dark:text-white">
                {project.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
