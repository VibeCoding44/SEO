"use client";

import { useState } from "react";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
};

export default function RequestTourForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "loading" });

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/request-tour", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.message || "Submission failed.");
      }

      setState({
        status: "success",
        message: "Thanks! We will follow up within 1 business day.",
      });
      event.currentTarget.reset();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong.";
      setState({ status: "error", message });
    }
  }

  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-12">
      <div className="rounded-3xl border border-zinc-200 bg-white p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Request a Tour
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Tell us a bit about your family and we will reach out to schedule a
          visit.
        </p>

        <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-zinc-700">
              Parent/Guardian Name
              <input
                className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm"
                name="name"
                required
                autoComplete="name"
              />
            </label>
            <label className="text-sm text-zinc-700">
              Student Grade
              <input
                className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm"
                name="grade"
                placeholder="e.g. 6th"
                required
              />
            </label>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-zinc-700">
              Email
              <input
                className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </label>
            <label className="text-sm text-zinc-700">
              Phone
              <input
                className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
              />
            </label>
          </div>
          <label className="text-sm text-zinc-700">
            Message
            <textarea
              className="mt-2 min-h-[120px] w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm"
              name="message"
              placeholder="What day/time works best?"
            />
          </label>
          <label className="sr-only" aria-hidden="true">
            Leave this field empty
            <input tabIndex={-1} name="company" autoComplete="off" />
          </label>
          <div className="flex flex-wrap items-center gap-4">
            <button
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
              type="submit"
              disabled={state.status === "loading"}
            >
              {state.status === "loading" ? "Sending..." : "Submit Request"}
            </button>
            {state.message ? (
              <p
                className={`text-sm ${
                  state.status === "error" ? "text-red-600" : "text-zinc-600"
                }`}
              >
                {state.message}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
