"use client";

import { useEffect, useRef } from "react";
import { site } from "@/content/site";
import { createGhlFormIframe, initGhlIframe, unmountGhlEmbed, waitForGhlEmbed } from "@/lib/ghlEmbed";

const form = site.ghl.qualifyForm;

export function GhlInquiryForm() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const iframe = createGhlFormIframe({
      id: form.id,
      name: form.name,
      height: form.height,
      iframeId: form.iframeId,
      minHeight: form.minHeight,
    });

    host.replaceChildren(iframe);

    const handleLoad = () => waitForGhlEmbed(iframe);
    iframe.addEventListener("load", handleLoad);
    initGhlIframe(iframe);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      unmountGhlEmbed(host);
    };
  }, []);

  return <div ref={hostRef} className="w-full min-h-[720px]" />;
}
