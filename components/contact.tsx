"use client";
import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { BackgroundBeams } from "./ui/background-beams";
import { toast } from "sonner";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (em: string) => /\S+@\S+\.\S+/.test(em);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill all fields.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent(`Contact from ${name}`);
    const bodyText = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const body = encodeURIComponent(bodyText);
    const mailto = `mailto:privacy@example.com?subject=${subject}&body=${body}`;

    // Try to open the user's mail client in a new window/tab. Some browsers
    // block window.open for mailto or the system might not have a default
    // mail client configured. Provide a clipboard fallback when needed.
    try {
      const opened = window.open(mailto, "_blank");
      if (opened) {
        // Give the browser a moment and then focus
        opened.focus();
        toast.success("Opening your mail client...");
        return;
      }
    } catch (err) {
      // fallthrough to clipboard fallback
    }

    // Fallback: copy the mailto and body to clipboard and show instructions
    try {
      await navigator.clipboard.writeText(`privacy@example.com\n\n${bodyText}`);
      toast.success(
        "Mail client blocked or not configured — email copied to clipboard. Paste it into your mail client."
      );
    } catch (err) {
      // As a last resort, open a new tab with the message so user can copy it
      const newWin = window.open("", "_blank");
      if (newWin) {
        newWin.document.write(`<pre>${bodyText.replace(/</g, "&lt;")}</pre>`);
        newWin.document.close();
      }
      toast.error("Could not copy to clipboard. Opened content in a new tab.");
    }
  };

  return (
    <section className="relative overflow-hidden bg-background/60 rounded-2xl p-8 lg:p-16">
      <BackgroundBeams className="opacity-60" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="space-y-4">
          <Badge className="w-fit">Contact</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold">Get in touch</h1>
          <p className="text-muted-foreground">
            Have a question or need support? Send us a message and we&#39;ll get
            back to you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span className="text-sm font-medium mb-1">Name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-md border px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium mb-1">Email</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md border px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@example.com"
                type="email"
                required
              />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-sm font-medium mb-1">Message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[140px] rounded-md border px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
              placeholder="Tell us about your issue or question"
              required
            />
          </label>

          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Prefer email? privacy@example.com
            </div>
            <div className="flex gap-3">
              <Button type="submit" size="lg">
                Send message
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setName("");
                  setEmail("");
                  setMessage("");
                  toast.success("Cleared");
                }}
              >
                Clear
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
