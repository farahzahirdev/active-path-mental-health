import Image from "next/image";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { Reveal, StaggerGrid } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

function ProviderCard({
  provider,
}: {
  provider: (typeof site.providers)[number];
}) {
  return (
    <article className="bt-card flex h-full flex-col !p-5 sm:!p-6">
      <div className="flex items-start gap-4">
        <div className="relative aspect-[4/5] w-[88px] shrink-0 overflow-hidden rounded-brand bg-bt-sand sm:w-[104px]">
          <Image
            src={provider.image}
            alt={provider.name}
            fill
            className="object-cover object-top"
            sizes="104px"
          />
        </div>
        <div className="min-w-0 pt-1">
          <h3 className="text-lg leading-snug">{provider.name}</h3>
          <p className="mt-1 text-sm font-semibold text-bt-accent">{provider.role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-bt-body">{provider.bio}</p>
    </article>
  );
}

export function Providers() {
  return (
    <section id="providers" className="bt-section" aria-labelledby="providers-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow={copy.providers.eyebrow}
            headline={copy.providers.headline}
            body={copy.providers.body}
          />
        </Reveal>
      </div>

      {/* Mobile / tablet: horizontal scroll */}
      <div className="ap-providers-scroll mt-10 lg:hidden" aria-label="Providers carousel">
        <ul className="ap-providers-track">
          {site.providers.map((provider) => (
            <li key={provider.name} className="ap-providers-card">
              <ProviderCard provider={provider} />
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop grid */}
      <div className="mx-auto mt-12 hidden max-w-content px-4 sm:px-6 lg:block lg:px-8">
        <StaggerGrid className="grid gap-5 lg:grid-cols-3" staggerMs={70}>
          {site.providers.map((provider) => (
            <ProviderCard key={provider.name} provider={provider} />
          ))}
        </StaggerGrid>
      </div>

      <Reveal delay={100}>
        <div className="mt-10 flex justify-center px-4">
          <Button href={site.routes.bookConsult}>{copy.ctas.bookConsult}</Button>
        </div>
      </Reveal>
    </section>
  );
}
