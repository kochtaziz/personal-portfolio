import Image from "next/image";
import { ExternalLink, LockKeyhole } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { certifications } from "@/data/site";

export default function CertificationsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <Badge>Certifications</Badge>
        <h1 className="mt-5 text-4xl font-black text-slate-950 sm:text-5xl dark:text-white">
          Credentials, badges, and participation proof
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Verified credentials, learning badges, private education records, and
          selected participation documents are organized without overstating
          what each item represents.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {certifications.map((cert) => (
          <Card
            key={`${cert.issuer}-${cert.name}`}
            className="overflow-hidden p-0"
          >
            {"private" in cert && cert.private ? (
              <div className="grid aspect-[16/10] w-full place-items-center bg-slate-950 text-white">
                <div className="text-center">
                  <LockKeyhole className="mx-auto h-10 w-10 text-sky-200" />
                  <p className="mt-4 text-lg font-bold">Private document</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Diploma confirmed, image hidden
                  </p>
                </div>
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
              <Badge>{cert.issuer}</Badge>
              <h2 className="mt-4 text-lg font-bold text-slate-950 dark:text-white">
                {cert.name}
              </h2>
              <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                {cert.date}
              </p>
              {"credentialId" in cert ? (
                <p className="mt-2 break-all font-mono text-xs text-slate-500 dark:text-slate-400">
                  ID {cert.credentialId}
                </p>
              ) : null}
              {"description" in cert ? (
                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {cert.description}
                </p>
              ) : null}
              <div className="mt-4 flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
              {"private" in cert && cert.private ? (
                <Button
                  type="button"
                  variant="secondary"
                  className="mt-5 w-full"
                  disabled
                >
                  Private credential <LockKeyhole className="h-4 w-4" />
                </Button>
              ) : cert.credentialUrl === "#" ? (
                <Button
                  type="button"
                  variant="secondary"
                  className="mt-5 w-full"
                  disabled
                >
                  Credential unavailable
                </Button>
              ) : (
                <Button asChild variant="secondary" className="mt-5 w-full">
                  <a href={cert.credentialUrl} target="_blank" rel="noreferrer">
                    View credential <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
