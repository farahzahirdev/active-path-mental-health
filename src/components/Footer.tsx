import Image from "next/image";
import { Phone } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer pb-24 lg:pb-0">
      <div className="site-footer-accent" aria-hidden />

      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="site-footer-top">
            <div className="site-footer-brand">
              <Image
                src={site.logoFooter}
                alt={site.name}
                width={240}
                height={56}
                className="h-[52px] w-auto sm:h-[60px]"
              />
              <p className="site-footer-tagline">{copy.footer.tagline}</p>
            </div>
            <div className="site-footer-cta">
              <p className="site-footer-cta-text">Ready to take the next step?</p>
              <div className="flex flex-wrap gap-3">
                <Button href={site.routes.bookConsult}>{copy.footer.bookCta}</Button>
                <Button href={site.phoneHref} variant="secondary-light">
                  <Phone className="h-4 w-4" aria-hidden />
                  {site.phone}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="site-footer-disclaimer">
          <p>{copy.footer.disclaimer}</p>
          <p className="mt-3">{copy.footer.eligibility}</p>
        </div>

        <div className="site-footer-bottom">
          <p>
            © {year} {site.name}. {copy.footer.rights}
          </p>
          <a href={site.website} className="site-footer-bottom-link">
            activepath.com
          </a>
        </div>
      </div>
    </footer>
  );
}
