"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Mail, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type ContactFormProps = {
  compact?: boolean;
};

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm({ compact = false }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setFeedback("");

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      company: String(formData.get("company") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Message could not be sent.");
      }

      form.reset();
      setStatus("success");
      setFeedback(data.message || "Message sent successfully.");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Message could not be sent. Please email directly.",
      );
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <input
        aria-hidden="true"
        className="hidden"
        name="company"
        tabIndex={-1}
        autoComplete="off"
      />
      <div className="grid gap-2">
        <label className="text-sm font-semibold" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          required
          minLength={2}
          className="h-11 rounded-md border border-slate-200 bg-white px-3 text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:ring-emerald-400/20"
          placeholder="Your name"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-semibold" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="h-11 rounded-md border border-slate-200 bg-white px-3 text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:ring-emerald-400/20"
          placeholder="you@example.com"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-semibold" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={compact ? 5 : 6}
          className="resize-none rounded-md border border-slate-200 bg-white px-3 py-3 text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:ring-emerald-400/20"
          placeholder="Tell me about the role, project, or opportunity."
        />
      </div>
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : compact ? (
          <ArrowRight className="h-4 w-4" />
        ) : (
          <Mail className="h-4 w-4" />
        )}
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
      {feedback ? (
        <p
          className={`flex items-start gap-2 text-sm ${
            status === "success"
              ? "text-emerald-700 dark:text-emerald-300"
              : "text-red-600 dark:text-red-300"
          }`}
          role="status"
        >
          {status === "success" ? (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          ) : (
            <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
          )}
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
