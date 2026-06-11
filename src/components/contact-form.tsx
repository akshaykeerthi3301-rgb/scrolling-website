"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [notice, setNotice] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setNotice("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      setStatus("error");
      setNotice(data?.error ?? "Something went wrong. Please try again.");
      return;
    }

    setStatus("success");
    setNotice("Message received. The production email provider can be connected when the domain goes live.");
    setForm(initialState);
  }

  return (
    <form onSubmit={submit} className="grid gap-4">
      <label className="grid gap-2 text-sm font-medium text-neutral-800 dark:text-white/84">
        Name
        <input
          required
          value={form.name}
          onChange={(event) => setForm((value) => ({ ...value, name: event.target.value }))}
          className="h-12 rounded-sm border border-neutral-300 bg-white px-3 text-neutral-950 outline-none transition focus:border-neutral-950 dark:border-white/15 dark:bg-white/6 dark:text-white dark:focus:border-white"
          placeholder="Your name"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-neutral-800 dark:text-white/84">
        Email
        <input
          required
          type="email"
          value={form.email}
          onChange={(event) => setForm((value) => ({ ...value, email: event.target.value }))}
          className="h-12 rounded-sm border border-neutral-300 bg-white px-3 text-neutral-950 outline-none transition focus:border-neutral-950 dark:border-white/15 dark:bg-white/6 dark:text-white dark:focus:border-white"
          placeholder="you@example.com"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-neutral-800 dark:text-white/84">
        Project
        <textarea
          required
          minLength={20}
          rows={6}
          value={form.message}
          onChange={(event) => setForm((value) => ({ ...value, message: event.target.value }))}
          className="resize-none rounded-sm border border-neutral-300 bg-white px-3 py-3 text-neutral-950 outline-none transition focus:border-neutral-950 dark:border-white/15 dark:bg-white/6 dark:text-white dark:focus:border-white"
          placeholder="Tell me what you want to build."
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-neutral-950 px-5 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-neutral-950 dark:hover:bg-amber-100"
      >
        {status === "loading" ? "Sending" : "Send message"}
        <Send size={16} aria-hidden="true" />
      </button>

      {notice ? (
        <p className={`text-sm ${status === "error" ? "text-red-600 dark:text-red-300" : "text-emerald-700 dark:text-emerald-300"}`}>
          {notice}
        </p>
      ) : null}
    </form>
  );
}
