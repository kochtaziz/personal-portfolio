import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contactLinks, navItems, profile } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-slate-950 text-sm font-black text-white dark:bg-white dark:text-slate-950">
              AK
            </span>
            <div>
              <p className="font-bold text-slate-950 dark:text-white">
                {profile.name}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Professional portfolio and project hub
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">
            Built as a scalable career platform for technical projects,
            certifications, freelance proof, writing, and future integrations.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-slate-950 dark:text-white">
              Navigate
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-500 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950 dark:text-white">
              Contact
            </p>
            <div className="mt-3 grid gap-2">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
