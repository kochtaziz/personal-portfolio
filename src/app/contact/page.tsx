import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { contactLinks, profile } from "@/data/site";

const opportunities = [
  "IT Support and Technical Support roles",
  "Customer Solution Representative roles",
  "Junior networking, systems, and infrastructure opportunities",
  "Freelance websites, support workflows, and technical documentation",
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Badge>Contact</Badge>
          <h1 className="mt-5 text-4xl font-black text-slate-950 sm:text-5xl dark:text-white">
            Let us talk about support, infrastructure, projects, or freelance work.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            I am open to recruiter conversations, customer support and IT
            support opportunities, junior technical roles, and project-based
            freelance work.
          </p>
          <div className="mt-8 grid gap-3">
            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <Mail className="h-4 w-4 text-emerald-600" />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <Phone className="h-4 w-4 text-emerald-600" />
              <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>
                {profile.phone}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <MapPin className="h-4 w-4 text-emerald-600" />
              <span>{profile.location}</span>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button key={link.label} asChild variant="secondary">
                  <a href={link.href} target="_blank" rel="noreferrer">
                    <Icon className="h-4 w-4" />
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-black text-slate-950 dark:text-white">
            Send a Message
          </h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </Card>
      </section>

      <section className="mt-14">
        <Badge>Best Fit</Badge>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {opportunities.map((item) => (
            <Card key={item} className="p-5">
              <p className="text-sm font-semibold text-slate-950 dark:text-white">
                {item}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
