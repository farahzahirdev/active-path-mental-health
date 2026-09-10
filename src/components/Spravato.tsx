import Image from "next/image";
import { CheckCircle2, Droplets } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Spravato() {
  return (
    <section id="spravato" className="bt-section bt-section-alt">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <article
              className="medication-feature-card"
              tabIndex={0}
              aria-label="SPRAVATO esketamine treatment"
            >
              <div className="medication-feature-media">
                <Image
                  src={site.images.spravato}
                  alt="Your path forward starts here at Active Path Mental Health"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                <div className="medication-feature-overlay">
                  <span className="inline-flex rounded-brand bg-[rgba(245,251,252,0.14)] p-4">
                    <Droplets className="h-8 w-8 text-bt-lavender" aria-hidden />
                  </span>
                  <h3 className="mt-5 !text-[#f5fbfc]">SPRAVATO® in clinic</h3>
                  <p className="mt-3 text-sm leading-relaxed text-bt-lavender">
                    Supervised nasal spray for treatment-resistant depression, often
                    covered by insurance when clinically appropriate.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal className="space-y-8" delay={100}>
            <SectionHeader
              eyebrow={copy.spravato.eyebrow}
              headline={copy.spravato.headline}
              body={copy.spravato.body}
              splitOnDesktop
              className="!mx-0 !max-w-none"
            />

            <ul className="space-y-3">
              {copy.spravato.points.map((point) => (
                <li
                  key={point}
                  className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-start sm:gap-3 sm:text-left"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-bt-accent" aria-hidden />
                  <span className="text-sm leading-relaxed text-bt-body">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button href={site.routes.qualify}>{copy.spravato.cta}</Button>
              <Button href={site.routes.bookConsult} variant="secondary">
                {copy.ctas.bookConsult}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
