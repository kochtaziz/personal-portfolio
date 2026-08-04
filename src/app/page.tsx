import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Download,
  ExternalLink,
  Layers3,
  Mail,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { MotionSection } from "@/components/motion-section";
import {
  certifications,
  contactLinks,
  featuredProjects,
  metrics,
  profile,
  radarItems,
  skillGroups,
  timeline,
} from "@/data/site";

export default function Home() {
  return (
    <div className="mesh-bg">
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-start gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-20">
        <div>
          <div className="mb-6 flex items-center gap-4">
            <Image
              src={profile.image}
              alt={`${profile.name} portrait`}
              width={88}
              height={88}
              priority
              className="h-20 w-20 rounded-lg border border-slate-200 object-cover shadow-lg dark:border-white/10"
            />
            <Badge className="border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Portfolio OS for technical career proof
            </Badge>
          </div>
          <h1 className="max-w-4xl text-balance text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            A modern professional hub for IT infrastructure, networking,
            software projects, certifications, freelance work, and technical
            writing.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/projects">
                View projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <a href={profile.resumePath}>
                Download CV <Download className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href={`mailto:${profile.email}`}>
                Contact <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-slate-200 bg-white/70 p-4 backdrop-blur dark:border-white/10 dark:bg-slate-950/55"
              >
                <p className="text-2xl font-black text-slate-950 dark:text-white">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <Card className="overflow-hidden bg-white/80 p-0 backdrop-blur dark:bg-slate-950/75 xl:max-h-[760px]">
            <div className="border-b border-slate-200 p-4 dark:border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-950 dark:text-white">
                    Career Command Center
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Recruiter-ready proof, organized like a product
                  </p>
                </div>
                <Badge className="border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
                  Live build
                </Badge>
              </div>
            </div>
            <div className="grid gap-4 p-4 md:grid-cols-[1fr_0.85fr]">
              <div className="space-y-3">
                {featuredProjects.map((project) => (
                  <div
                    key={project.title}
                    className="rounded-lg border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="relative hidden h-16 w-20 shrink-0 overflow-hidden rounded-md bg-slate-100 dark:bg-slate-950 sm:block">
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          sizes="80px"
                          className="object-contain p-1"
                        />
                      </span>
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                        <project.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-950 dark:text-white">
                          {project.title}
                        </p>
                        <p className="mt-1 overflow-hidden text-sm leading-6 text-slate-500 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] dark:text-slate-400">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-950 p-4 text-white dark:border-white/10 dark:bg-black">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Layers3 className="h-4 w-4 text-sky-300" />
                  Future-ready modules
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {radarItems.slice(0, 12).map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-2 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-20 px-4 pb-20 sm:px-6 lg:px-8">
        <MotionSection>
          <SectionHeader
            eyebrow="Featured projects"
            title="Case-study structure from day one"
            description="Every project is prepared to become a full page with problem, solution, architecture, screenshots, lessons, and links."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card key={project.title} className="overflow-hidden p-0">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <Image
                    src={project.image}
                    alt={`${project.title} visual`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-contain p-3"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-md bg-slate-100 text-slate-950 dark:bg-white/10 dark:text-white">
                      <project.icon className="h-5 w-5" />
                    </div>
                    <Badge>{project.status}</Badge>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </MotionSection>

        <MotionSection>
          <SectionHeader
            eyebrow="Certifications"
            title="A credential wall that can scale"
            description="Verified learning evidence across IT support, networking, customer engagement, AI review analysis, English proficiency, robotics, and SEO."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {certifications.slice(0, 6).map((cert) => (
              <Card
                key={`${cert.issuer}-${cert.name}`}
                className="overflow-hidden p-0"
              >
                {"private" in cert && cert.private ? (
                  <div className="grid aspect-[16/10] w-full place-items-center bg-slate-950 text-white">
                    <p className="text-sm font-semibold">Private credential</p>
                  </div>
                ) : (
                  <Image
                    src={cert.image}
                    alt={`${cert.issuer} certificate visual`}
                    width={1200}
                    height={800}
                    className="aspect-[16/10] h-auto w-full bg-white object-contain"
                  />
                )}
                <div className="p-5">
                  <Badge className="mb-5">
                    <BadgeCheck className="mr-2 h-3.5 w-3.5" />
                    {cert.issuer}
                  </Badge>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                    {cert.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {cert.date}
                  </p>
                  {"credentialId" in cert ? (
                    <p className="mt-2 break-all font-mono text-xs text-slate-500 dark:text-slate-400">
                      ID {cert.credentialId}
                    </p>
                  ) : null}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                  {cert.credentialUrl !== "#" ? (
                    <Button asChild variant="secondary" className="mt-5 w-full">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View credential <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>
        </MotionSection>

        <MotionSection>
          <SectionHeader
            eyebrow="Skills overview"
            title="Organized around practical technical domains"
            description="The taxonomy is ready for filtering, search, endorsements, and evidence links later."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <Card key={group.name} className="p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200">
                    <group.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-950 dark:text-white">
                    {group.name}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </MotionSection>

        <MotionSection>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader
              eyebrow="Direction"
              title="Built to grow with Aziz's career"
              description="The current version focuses on presentation and structure. Future phases can add dynamic content without changing the core layout."
            />
            <div className="grid gap-4">
              {timeline.map((item) => (
                <Card key={item.title} className="p-5">
                  <div className="flex gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-rose-50 text-rose-700 dark:bg-rose-400/10 dark:text-rose-200">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-bold text-slate-950 dark:text-white">
                          {item.title}
                        </h3>
                        <Badge>{item.date}</Badge>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection id="contact">
          <Card className="overflow-hidden p-0">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-slate-950 p-6 text-white sm:p-8 dark:bg-black">
                <Badge className="border-white/10 bg-white/10 text-white">
                  Contact
                </Badge>
                <h2 className="mt-5 text-3xl font-black">Let&apos;s connect</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Recruiters, hiring managers, and freelance clients can use
                  this page as the central starting point.
                </p>
                <div className="mt-6 grid gap-3">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:bg-white/10"
                    >
                      <link.icon className="h-4 w-4" />
                      {link.label}
                      <ExternalLink className="ml-auto h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <ContactForm compact />
              </div>
            </div>
          </Card>
        </MotionSection>
      </div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl dark:text-white">
        {title}
      </h2>
      <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}
