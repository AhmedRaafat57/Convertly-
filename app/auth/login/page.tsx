"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { toast } from "sonner";

export default function Page() {
  const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI;

  const handleGithub = () => {
    if (!clientId) {
      toast.error("Missing NEXT_PUBLIC_GITHUB_CLIENT_ID environment variable");
      return;
    }

    const params = new URLSearchParams({
      client_id: clientId,
      scope: "read:user",
    });

    if (redirectUri) params.set("redirect_uri", redirectUri);

    const url = `https://github.com/login/oauth/authorize?${params.toString()}`;
    window.location.href = url;
  };

  return (
    <main className="min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-md p-8 rounded-2xl border bg-card/60">
        <h1 className="text-2xl font-bold mb-4">Sign in</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Sign in with GitHub to continue. You will be redirected to GitHub to
          authorize the application.
        </p>

        <div className="flex gap-3">
          <Button size="lg" onClick={handleGithub} className="w-full">
            <span className="flex items-center justify-center gap-2">
              <Github /> Sign in with GitHub
            </span>
          </Button>
        </div>
      </div>
    </main>
  );
}
