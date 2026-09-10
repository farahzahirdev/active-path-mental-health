import { Header } from "./Header";
import { Hero } from "./Hero";
import { WhatIsTms } from "./WhatIsTms";
import { Spravato } from "./Spravato";
import { SupportiveVideos } from "./SupportiveVideos";
import { HowItWorks } from "./HowItWorks";
import { WhyChoose } from "./WhyChoose";
import { InsuranceStrip } from "./InsuranceStrip";
import { WhoQualifies } from "./WhoQualifies";
import { Providers } from "./Providers";
import { Locations } from "./Locations";
import { BookConsult } from "./BookConsult";
import { Faq } from "./Faq";
import { QualifyForm } from "./QualifyForm";
import { FinalCta } from "./FinalCta";
import { Footer } from "./Footer";
import { FloatingCTA } from "./FloatingCTA";

export function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pb-24 lg:pb-0">
        <Hero />
        <WhatIsTms />
        <Spravato />
        <SupportiveVideos />
        <HowItWorks />
        <WhyChoose />
        <InsuranceStrip />
        <WhoQualifies />
        <Providers />
        <Locations />
        <BookConsult />
        <Faq />
        <QualifyForm />
        <FinalCta />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
