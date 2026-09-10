const ctas = {
  call: "Call",
  qualify: "Find out if you Qualify",
  qualifyShort: "Qualify",
  bookConsult: "Book your Free Consultation",
  bookConsultShort: "Book Consult",
} as const;

export const copy = {
  ctas,
  header: {
    nav: {
      tms: "TMS",
      spravato: "SPRAVATO®",
      whyChoose: "Why Us",
      whoQualifies: "Who Qualifies",
      videos: "Videos",
      providers: "Providers",
      locations: "Locations",
      faq: "FAQ",
    },
    qualifyCta: ctas.bookConsultShort,
    bookCta: ctas.bookConsultShort,
  },
  hero: {
    tagline: "Care that never gives up.",
    headlineLine1: "Hope for",
    headlineLine2: "Treatment-Resistant",
    headlineLine3: "Depression",
    headlineAccent: "& Anxiety",
    subheadline:
      "Personalized TMS Therapy and SPRAVATO® across Oregon and Washington — FDA-cleared, insurance-friendly care when medications and therapy haven’t been enough.",
    primaryCta: ctas.bookConsult,
    secondaryCta: ctas.qualify,
    chips: [
      { label: "FDA-Cleared", icon: "shield" as const },
      { label: "BrainsWay & NeuroStar", icon: "brain" as const },
      { label: "Insurance Accepted", icon: "heart" as const },
    ],
  },
  trustBar: {
    items: [
      {
        title: "FDA-Cleared",
        subtitle: "Evidence-based care",
        icon: "shield" as const,
      },
      {
        title: "Non-Invasive Options",
        subtitle: "TMS without surgery",
        icon: "pill" as const,
      },
      {
        title: "Most Major Insurance",
        subtitle: "Plans accepted",
        icon: "insurance" as const,
      },
      {
        title: "6 Convenient Locations",
        subtitle: "Oregon & Washington",
        icon: "map" as const,
      },
    ],
  },
  whatIsTms: {
    eyebrow: "TMS Therapy",
    headline: "Drug-free relief for depression that hasn’t budged",
    body: "Transcranial Magnetic Stimulation uses focused magnetic pulses to stimulate areas of the brain involved in mood. At Active Path, we offer BrainsWay and NeuroStar — FDA-cleared devices for adults who haven’t found enough relief with medication alone.",
    points: [
      {
        title: "Non-invasive & medication-free",
        body: "No surgery, no sedation, and no systemic medication side effects from TMS itself.",
      },
      {
        title: "BrainsWay & NeuroStar",
        body: "Two leading FDA-cleared TMS systems, so your provider can match technology to your needs.",
      },
      {
        title: "Outpatient sessions",
        body: "Brief in-clinic visits that fit into your week — then you return to your day.",
      },
    ],
    cta: ctas.bookConsult,
  },
  spravato: {
    eyebrow: "SPRAVATO® (Esketamine)",
    headline: "In-clinic nasal spray for treatment-resistant depression",
    body: "SPRAVATO® is an FDA-approved, insurance-supported nasal spray administered under medical supervision. It can be part of a personalized plan when antidepressants haven’t brought enough relief.",
    points: [
      "Supervised in-clinic administration with monitoring by our clinical team",
      "Often covered by major insurance when clinically appropriate",
      "Can be coordinated alongside therapy, medication management, and TMS",
    ],
    cta: ctas.qualify,
  },
  howItWorks: {
    eyebrow: "How It Works",
    headline: "Your path forward starts here",
    steps: [
      {
        step: "01",
        title: "Free phone consultation",
        body: "Talk with an intake coordinator who gathers your information and helps schedule next steps.",
      },
      {
        step: "02",
        title: "Personalized care plan",
        body: "Providers tailor your plan using clinical data, proven treatments, and your lived experience.",
      },
      {
        step: "03",
        title: "Begin treatment",
        body: "Start TMS, SPRAVATO®, or coordinated care with a team that stays with you.",
      },
    ],
  },
  whyChoose: {
    eyebrow: "Why Active Path",
    headline: "Personalized care that never gives up",
    body: "We specialize in advanced, evidence-based treatments for depression and related conditions — delivered with warmth across Oregon and Washington.",
    cards: [
      {
        title: "Care that never gives up",
        body: "Hope for people who feel stuck after trying medications and therapy without enough relief.",
      },
      {
        title: "FDA-cleared treatments",
        body: "TMS with BrainsWay and NeuroStar, plus in-clinic SPRAVATO® when it’s the right fit.",
      },
      {
        title: "Insurance accepted",
        body: "Covered by most major plans — Aetna, Cigna, Kaiser, Providence, Regence, and more.",
      },
      {
        title: "Oregon & Washington clinics",
        body: "Six locations so care is nearby — Clackamas, Portland, Salem, Tigard, Kirkland, Vancouver.",
      },
      {
        title: "Personalized plans",
        body: "Care built on real data and lived experience — not a one-size-fits-all protocol.",
      },
      {
        title: "Licensed providers",
        body: "A clinical team focused on treatment-resistant depression and advanced options.",
      },
    ],
  },
  insuranceStrip: {
    label: "Covered by most major insurance",
    logos: [
      { src: "/images/insurance/aetna.png", alt: "Aetna", width: 160, height: 80 },
      { src: "/images/insurance/cigna.png", alt: "Cigna", width: 160, height: 80 },
      { src: "/images/insurance/providence.png", alt: "Providence", width: 180, height: 80 },
      { src: "/images/insurance/kaiser.png", alt: "Kaiser", width: 160, height: 80 },
      { src: "/images/insurance/regence.png", alt: "Regence", width: 180, height: 80 },
      { src: "/images/insurance/premera.png", alt: "Premera", width: 160, height: 80 },
      { src: "/images/insurance/moda.webp", alt: "Moda", width: 140, height: 80 },
      { src: "/images/insurance/pacific-source.png", alt: "PacificSource", width: 180, height: 80 },
      { src: "/images/insurance/tricare.webp", alt: "TRICARE", width: 160, height: 80 },
      { src: "/images/insurance/united.png", alt: "United", width: 160, height: 80 },
      { src: "/images/insurance/anthem.png", alt: "Anthem", width: 160, height: 80 },
    ],
  },
  whoQualifies: {
    eyebrow: "Who Qualifies",
    headline: "Is advanced depression care right for you?",
    subheadline:
      "TMS and SPRAVATO® may help if you’ve tried multiple treatments without enough relief — or you’re seeking a non-drug or advanced alternative.",
    items: [
      {
        title: "Treatment-Resistant Depression",
        body: "Adults whose depression hasn’t improved enough after medications and/or therapy.",
        tag: "MDD",
      },
      {
        title: "Seeking Non-Drug Options",
        body: "People exploring FDA-cleared TMS as an alternative or complement to antidepressants.",
        tag: "TMS",
      },
      {
        title: "Ready for Advanced Care",
        body: "Busy professionals, parents, and referrals looking for evidence-based next steps nearby.",
        tag: "OR & WA",
      },
    ],
    cta: ctas.qualify,
    note: "Eligibility is determined after a clinical evaluation. Individual results vary.",
  },
  supportiveVideos: {
    eyebrow: "Learn more",
    headline: "TMS & SPRAVATO® videos",
    body: "Hear how these treatments work — and real stories from people who found relief at Active Path.",
    items: [
      {
        videoKey: "tmsWhatIs" as const,
        label: "TMS education",
        description: "A clear overview of TMS therapy and what to expect.",
      },
      {
        videoKey: "tmsStory" as const,
        label: "TMS patient story",
        description: "Todd shares his experience with depression and TMS.",
      },
      {
        videoKey: "spravatoStory" as const,
        label: "SPRAVATO® patient story",
        description: "Spencer shares how SPRAVATO® helped his depression.",
      },
    ],
  },
  providers: {
    eyebrow: "Our providers",
    headline: "Meet the clinical team",
    body: "Psychiatric providers and therapists who partner with you on TMS, SPRAVATO®, and personalized care across Oregon and Washington.",
  },
  locations: {
    eyebrow: "Locations",
    headline: "Six clinics across Oregon & Washington",
    body: "Wherever you are in the region, we’re nearby and ready to help you take the next step.",
    serving: "Serving Clackamas, NW Portland, Salem, Tigard, Kirkland, and Vancouver.",
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Common questions about care at Active Path",
    items: [
      {
        q: "Do you accept insurance?",
        a: "Yes — most major plans are accepted, including Aetna, Cigna, Providence, Kaiser, Regence, Premera, Moda, PacificSource, TRICARE, United, and Anthem. Our team can help verify benefits before you begin.",
      },
      {
        q: "What is TMS therapy?",
        a: "TMS uses magnetic pulses to stimulate mood-related brain areas. It is FDA-cleared, non-invasive, and offered with BrainsWay and NeuroStar devices. Eligibility is determined after clinical evaluation; individual results vary.",
      },
      {
        q: "What is SPRAVATO®?",
        a: "SPRAVATO® (esketamine) is an FDA-approved nasal spray for treatment-resistant depression, administered in clinic under medical supervision. Many insurance plans cover it when clinically appropriate.",
      },
      {
        q: "How do I book a free consultation?",
        a: "Use the booking calendar on this page, call (971) 396-5996, or submit the qualification form. A free consultation does not guarantee a specific treatment or outcome.",
      },
      {
        q: "Where are your clinics?",
        a: "We have locations in Clackamas, NW Portland, Salem, and Tigard in Oregon, plus Kirkland and Vancouver in Washington.",
      },
      {
        q: "Who determines if I’m eligible?",
        a: "Eligibility is determined after a clinical evaluation and safety screening. We’ll review your history and goals during consultation.",
      },
    ],
  },
  bookConsult: {
    eyebrow: "Schedule",
    headline: ctas.bookConsult,
    body: "Pick a time that works for you. We’ll answer questions about TMS and SPRAVATO®, review next steps, and help you understand your options — no pressure.",
    callPrompt: "Prefer to talk first?",
    qualifyLink: "Find out if you Qualify instead",
  },
  qualify: {
    eyebrow: "Get Started",
    headline: ctas.qualify,
    body: "Share a few details about your symptoms and treatment history. Our team will follow up to discuss whether TMS or SPRAVATO® may be appropriate.",
    formTitle: "Qualification Form",
    formSubtitle: "Confidential. Takes about 2 minutes.",
    bookLink: "Ready to pick a time? Book your free consultation",
    callPrompt: "Prefer to talk now?",
    trustLine:
      "Eligibility is determined after clinical evaluation. Individual results vary.",
  },
  finalCta: {
    headline: "Ready to feel like yourself again?",
    body: "Book a free consultation, find out if you qualify, or call Active Path. Care that never gives up starts with a conversation.",
    primaryCta: ctas.bookConsult,
    secondaryCta: ctas.call,
  },
  floatingCta: {
    book: "Book Consult",
    qualify: "Qualify",
    call: "Call",
  },
  footer: {
    bookCta: ctas.bookConsult,
    tagline:
      "Personalized psychiatric care across Oregon and Washington — TMS Therapy, SPRAVATO®, and a team that never gives up.",
    disclaimer:
      "This website provides educational information only and is not medical advice. Active Path Mental Health does not provide emergency services. If you are in crisis, call 911 or dial 988 for the Suicide & Crisis Lifeline.",
    eligibility:
      "Treatment eligibility is determined after clinical evaluation and safety screening. Individual results vary. No outcome guarantees are made. SPRAVATO® is a registered trademark of Janssen Pharmaceuticals, Inc.",
    rights: "All rights reserved.",
  },
} as const;
