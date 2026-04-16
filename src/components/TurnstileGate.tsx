"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: Record<string, unknown>
      ) => string;
      remove: (widgetId: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

export default function TurnstileGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    // Skip if already verified this session
    if (sessionStorage.getItem("turnstile_verified") === "true") {
      setVerified(true);
      return;
    }

    const renderWidget = () => {
      if (!window.turnstile || !containerRef.current) return;
      if (widgetIdRef.current) return; // already rendered

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: "0x4AAAAAAC-fOFUm09eL0euQ",
        theme: "dark",
        callback: () => {
          sessionStorage.setItem("turnstile_verified", "true");
          setVerified(true);
        },
        "error-callback": () => {
          setError(true);
        },
      });
    };

    // If turnstile script already loaded
    if (window.turnstile) {
      renderWidget();
      return;
    }

    // Load the turnstile script
    window.onTurnstileLoad = renderWidget;
    const script = document.createElement("script");
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  if (verified) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6">
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-10 text-center">
        <h2 className="text-xl font-semibold text-white">
          Verifying you&apos;re human
        </h2>
        <p className="mt-2 text-sm text-zinc-400">
          Please complete the security check to continue.
        </p>
        <div ref={containerRef} className="mt-6 flex justify-center" />
        {error && (
          <p className="mt-4 text-sm text-red-400">
            Verification failed. Please refresh and try again.
          </p>
        )}
      </div>
    </div>
  );
}
