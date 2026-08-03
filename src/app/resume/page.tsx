import Link from "next/link";
import { Download, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile, skillGroups, timeline } from "@/data/site";

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <Badge>Resume</Badge>
          <h1 className="mt-5 text-4xl font-black text-slate-950 sm:text-5xl dark:text-white">
            CV download and online resume
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            A general professional CV is available now and can be refined as
            Aziz adds exact education, roles, links, and achievements.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <Button asChild>
              <a href={profile.resumePath} download>
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={profile.resumePath} target="_blank" rel="noreferrer">
                <Eye className="h-4 w-4" />
                View CV online
              </a>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/contact">Contact Aziz</Link>
            </Button>
          </div>
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-black text-slate-950 dark:text-white">
            {profile.name}
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            {profile.role}
          </p>
          <div className="mt-6 grid gap-5">
            <section>
              <h3 className="font-bold text-slate-950 dark:text-white">
                Professional summary
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Emerging IT and software professional focused on networking,
                systems support, cloud-ready applications, and practical project
                delivery.
              </p>
            </section>
            <section>
              <h3 className="font-bold text-slate-950 dark:text-white">
                Core skills
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skillGroups.flatMap((group) =>
                  group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  )),
                )}
              </div>
            </section>
            <section>
              <h3 className="font-bold text-slate-950 dark:text-white">
                Current focus
              </h3>
              <div className="mt-3 grid gap-3">
                {timeline.map((item) => (
                  <div key={item.title}>
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">
                      {item.title}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
