import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Code2, ExternalLink, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const textField = (key: string) => {
    const value = (project as Record<string, unknown>)[key];
    return typeof value === "string" ? value : undefined;
  };
  const listField = (key: string) => {
    const value = (project as Record<string, unknown>)[key];
    return Array.isArray(value) &&
      value.every((item) => typeof item === "string")
      ? value
      : undefined;
  };

  const problem = textField("problem");
  const solution = textField("solution");
  const architecture = textField("architecture");
  const lessonsLearned = textField("lessonsLearned");
  const futureImprovements = textField("futureImprovements");
  const githubUrl = textField("githubUrl");
  const githubLabel = textField("githubLabel");
  const liveDemoUrl = textField("liveDemoUrl");
  const docsUrl = textField("docsUrl");
  const sourceCodeNote = textField("sourceCodeNote");
  const features = listField("features");

  const sections: Array<[string, string]> = [
    ["Overview", project.description],
    [
      "Problem",
      problem ??
        "The project focuses on turning a practical technical challenge into a documented implementation that can be reviewed, improved, and reused.",
    ],
    [
      "Solution",
      solution ??
        "The solution is presented through its visible output, implementation notes, and supporting project evidence.",
    ],
    [
      "Architecture",
      architecture ??
        "The architecture is organized around clear inputs, implementation logic, and outputs that can be expanded as more project evidence is added.",
    ],
    [
      "Lessons learned",
      lessonsLearned ??
        "The project strengthened practical planning, debugging, documentation, and the habit of connecting technical decisions to user value.",
    ],
    [
      "Future improvements",
      futureImprovements ??
        "Future improvements, backlog items, and deployment notes will be added here.",
    ],
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/projects">
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
      </Button>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Badge>{project.status}</Badge>
          <h1 className="mt-5 text-4xl font-black text-slate-950 sm:text-5xl dark:text-white">
            {project.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {githubUrl ? (
              <Button asChild variant="secondary">
                <a href={githubUrl} target="_blank" rel="noreferrer">
                  <Code2 className="h-4 w-4" />
                  {githubLabel ?? "View GitHub"}
                </a>
              </Button>
            ) : (
              <Button type="button" variant="secondary" disabled>
                <Code2 className="h-4 w-4" />
                {sourceCodeNote ?? "Private repository"}
              </Button>
            )}
            {docsUrl ? (
              <Button asChild variant="secondary">
                <a href={docsUrl} target="_blank" rel="noreferrer">
                  <FileText className="h-4 w-4" />
                  Case README
                </a>
              </Button>
            ) : null}
            {liveDemoUrl ? (
              <Button asChild variant="secondary">
                <a href={liveDemoUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live demo
                </a>
              </Button>
            ) : (
              <Button type="button" variant="secondary" disabled>
                <ExternalLink className="h-4 w-4" />
                Live demo not available
              </Button>
            )}
          </div>
        </div>
        <Image
          src={project.image}
          alt={`${project.title} visual`}
          width={1200}
          height={800}
          priority
          className="aspect-[16/10] h-auto w-full rounded-lg border border-slate-200 object-cover shadow-2xl dark:border-white/10"
        />
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {sections.map(([title, body]) => (
          <Card key={title} className="p-6">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {body}
            </p>
          </Card>
        ))}
        <Card className="p-6 lg:col-span-2">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">
            Features
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {(
              features ?? [
                "Project documentation",
                "Implementation notes",
                "Portfolio evidence",
              ]
            ).map((feature) => (
              <Badge key={feature}>{feature}</Badge>
            ))}
          </div>
        </Card>
      </div>

      {project.screenshots?.length ? (
        <div className="mt-12">
          <Badge>Screenshots</Badge>
          <h2 className="mt-4 text-2xl font-black text-slate-950 dark:text-white">
            Product visuals
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {project.screenshots.map((screenshot) => (
              <Image
                key={screenshot}
                src={screenshot}
                alt={`${project.title} screenshot`}
                width={1200}
                height={800}
                className="h-auto w-full rounded-lg border border-slate-200 object-cover shadow-sm dark:border-white/10"
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
