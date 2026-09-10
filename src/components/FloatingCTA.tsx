"use client";

import { Phone } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";

export function FloatingCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-bt-line bg-bt-paper/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_28px_rgba(29,44,76,0.12)] backdrop-blur-md lg:hidden"
      role="region"
      aria-label="Quick actions"
    >
      <div className="mx-auto flex max-w-content items-center gap-2">
        <a
          href={site.routes.bookConsult}
          className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-[10px] bg-bt-accent px-3 text-center text-sm font-semibold text-white transition hover:bg-bt-accent-hover"
        >
          {copy.floatingCta.book}
        </a>
        <a
          href={site.routes.qualify}
          className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-[10px] border border-bt-accent bg-white px-3 text-center text-sm font-semibold text-bt-ink transition hover:bg-bt-sand"
        >
          {copy.floatingCta.qualify}
        </a>
        <a
          href={site.phoneHref}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[10px] bg-bt-ink px-3 text-white transition hover:bg-bt-ink/90"
          aria-label={`Call ${site.phone}`}
        >
          <Phone className="h-4 w-4" aria-hidden />
          <span className="sr-only">{copy.floatingCta.call}</span>
        </a>
      </div>
    </div>
  );
}
