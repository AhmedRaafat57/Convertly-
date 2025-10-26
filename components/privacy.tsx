"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { BackgroundBeams } from "./ui/background-beams";

const POLICY_TEXT = `Privacy Policy

Your privacy matters. This policy explains what data this application collects, why, and how it's used.

1. Client-side processing
Files you upload are processed locally in your browser using client-side WebAssembly (FFmpeg). We do not upload or store your files on any server by default.

2. Temporary data
Converted files are made available as object URLs for download and are released when you close the page or after the browser clears memory. If you explicitly export to a remote location, that is subject to that service's privacy policy.

3. Telemetry & analytics
We aim to minimize telemetry. Any optional analytics is aggregated and anonymized. If you prefer to opt-out, please check settings (if available) or contact the project maintainers.

4. Security
Conversions run locally; however, exercise usual caution with sensitive files. Keep your browser and OS up to date to reduce security risks.

Contact: privacy@example.com
`;

export default function Privacy() {
  const downloadPolicy = useCallback(() => {
    try {
      const blob = new Blob([POLICY_TEXT], {
        type: "text/plain;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "privacy-policy.txt";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      // Fallback: open policy in new tab
      const newWindow = window.open("", "_blank");
      if (newWindow) {
        newWindow.document.write(`<pre>${POLICY_TEXT}</pre>`);
        newWindow.document.close();
      }
    }
  }, []);

  // Note: contact button now navigates to the in-app contact page (/contact)

  return (
    <section className="relative overflow-hidden bg-background/60 rounded-2xl p-8 lg:p-16">
      <BackgroundBeams className="opacity-60" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="space-y-4">
          <Badge className="w-fit">Privacy</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Your privacy matters. This policy explains what data this
            application collects, why, and how it&#39;s used.
          </p>
        </div>

        <div className="mt-8 space-y-8">
          <article className="rounded-2xl border bg-card/60 p-6">
            <h2 className="font-semibold text-lg">Client-side processing</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Files you upload are processed locally in your browser using
              client-side WebAssembly (FFmpeg). We do not upload or store your
              files on any server by default.
            </p>
          </article>

          <article className="rounded-2xl border bg-card/60 p-6">
            <h2 className="font-semibold text-lg">Temporary data</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Converted files are made available as object URLs for download and
              are released when you close the page or after the browser clears
              memory. If you explicitly export to a remote location, that is
              subject to that service&#39;s privacy policy.
            </p>
          </article>

          <article className="rounded-2xl border bg-card/60 p-6">
            <h2 className="font-semibold text-lg">Telemetry & analytics</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We aim to minimize telemetry. Any optional analytics is aggregated
              and anonymized. If you prefer to opt-out, please check settings
              (if available) or contact the project maintainers.
            </p>
          </article>

          <article className="rounded-2xl border bg-card/60 p-6">
            <h2 className="font-semibold text-lg">Security</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Conversions run locally; however, exercise usual caution with
              sensitive files. Keep your browser and OS up to date to reduce
              security risks.
            </p>
          </article>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              <strong>Contact:</strong> privacy@example.com
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={downloadPolicy}
                aria-label="Download privacy policy"
              >
                Download Policy
              </Button>
              <Button asChild aria-label="Contact us about privacy">
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
