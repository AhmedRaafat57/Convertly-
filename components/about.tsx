"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { BackgroundBeams } from "./ui/background-beams";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-background/60 rounded-2xl p-8 lg:p-16">
      <BackgroundBeams className="opacity-80" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero */}
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <Badge className="w-fit">About</Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Fast, private, browser-native file conversion
            </h1>

            <p className="text-muted-foreground max-w-2xl">
              Convert images, audio and video directly in your browser. No
              uploads, no servers — just fast client-side tools powered by
              WebAssembly and FFmpeg. We focus on privacy, speed and a
              delightful UX.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/">
                <Button size="lg" className="rounded-xl font-semibold">
                  Try the Converter
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="rounded-xl">
                Documentation
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-tr from-white/60 via-white/40 to-transparent p-6 rounded-2xl shadow-lg">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Privacy-first</h3>
                  <p className="text-sm text-muted-foreground">
                    Files stay in your browser — never sent to a server.
                  </p>
                </div>
                <div className="text-2xl font-bold text-primary">Local</div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Powered by FFmpeg</h3>
                  <p className="text-sm text-muted-foreground">
                    Robust format support and high-quality conversions.
                  </p>
                </div>
                <div className="text-2xl font-bold text-primary">FFmpeg</div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Zero configuration</h3>
                  <p className="text-sm text-muted-foreground">
                    Simple defaults for common formats, and advanced options
                    when you need them.
                  </p>
                </div>
                <div className="text-2xl font-bold text-primary">Easy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Image Optimization",
              desc: "Resize, compress, and change formats (JPEG, PNG, WebP, AVIF) — directly in the browser.",
            },
            {
              title: "Video Conversion",
              desc: "Convert and transcode video formats with hardware-accelerated codecs where available.",
            },
            {
              title: "Audio Processing",
              desc: "Extract, convert, and normalize audio tracks without uploading files.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border bg-card/60 p-6">
              <h4 className="font-semibold">{f.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Team / mission */}
        <div className="mt-12 rounded-2xl border p-6 bg-gradient-to-b from-white/40 to-transparent">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Our mission</h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
                We build simple, trustworthy tools that put privacy and
                performance first. Our goal is to make file transformations
                accessible to everyone — with minimal friction and modern
                design.
              </p>
            </div>

            <div className="flex gap-3">
              <Badge variant="secondary">Open Source</Badge>
              <Badge>Client-side</Badge>
              <Badge variant="outline">No tracking</Badge>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 bg-gradient-to-r from-primary/10 via-transparent to-transparent p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="w-full sm:w-auto">
            <h4 className="font-semibold">Ready to convert your files?</h4>
            <p className="text-sm text-muted-foreground">
              Drag & drop or click to get started — conversions happen in your
              browser.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 w-full sm:w-auto mt-2 sm:mt-0 justify-start sm:justify-end">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
