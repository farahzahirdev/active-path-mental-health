export const site = {
  name: "Active Path Mental Health",
  logo: "/images/logo.svg",
  logoFooter: "/images/logo-footer.svg",
  phone: "(971) 396-5996",
  phoneHref: "tel:+19713965996",
  email: "info@activepath.com",
  emailHref: "mailto:info@activepath.com",
  website: "https://activepath.com",
  routes: {
    bookConsult: "/#book-consult",
    qualify: "/#qualify",
    tms: "/#tms",
    spravato: "/#spravato",
    howItWorks: "/#how-it-works",
    whyChoose: "/#why-choose",
    whoQualifies: "/#who-qualifies",
    videos: "/#videos",
    providers: "/#providers",
    locations: "/#locations",
    faq: "/#faq",
  },
  images: {
    hero: "/images/new-hero.png?v=2",
    tmsTreatment: "/images/find-relief.webp",
    whyChoose: "/images/why-choose.png",
    spravato: "/images/path-forward.png",
    faq: "/images/faq.png",
    iconTms: "/images/icon-tms.svg",
    iconSpravato: "/images/icon-spravato.svg",
  },
  videos: {
    tmsWhatIs: {
      id: "grku3bvciTk",
      title: "What is TMS therapy?",
      service: "TMS",
    },
    tmsStory: {
      id: "wKC2_3MHqIM",
      title: "Todd's story with depression and TMS therapy",
      service: "TMS",
    },
    spravatoStory: {
      id: "UhoRlVH6n8I",
      title: "How SPRAVATO helped Spencer's depression",
      service: "SPRAVATO®",
    },
  },
  providers: [
    {
      name: "Y Pritham Raj, MD, FACP",
      role: "Chief Medical Officer",
      bio: "Board-certified in internal medicine and psychiatry, with deep TMS research experience and a focus on the connection between mind and body.",
      image: "/images/providers/pritham-raj.png",
    },
    {
      name: "Ryan Dozler",
      role: "PMHNP, BSN, RN",
      bio: "Specializes in TMS, SPRAVATO®, and medication management at NW Portland and Salem, offering interventional options when wellness takes many forms.",
      image: "/images/providers/ryan-dozler.png",
    },
    {
      name: "Zach Nelson",
      role: "DNP, PMHNP-BC",
      bio: "Board-certified PMHNP at Kirkland, specializing in TMS, SPRAVATO®, and medication management for adolescents and adults.",
      image: "/images/providers/zach-nelson.png",
    },
    {
      name: "Kyle Pernula",
      role: "PA-C",
      bio: "Provides TMS, SPRAVATO®, and medication management at Clackamas and Vancouver with practical, individualized, evidence-based care.",
      image: "/images/providers/kyle-pernula.png",
    },
    {
      name: "Corri Rekart",
      role: "DNP, ARNP, PMHNP-BC",
      bio: "Board-certified psychiatric nurse practitioner at Tigard, specializing in TMS therapy and collaborative medication management.",
      image: "/images/providers/corri-rekart.png",
    },
    {
      name: "Mason Spong",
      role: "PA-C",
      bio: "NCCPA board-certified physician assistant at NW Portland, specializing in TMS, SPRAVATO®, and medication management.",
      image: "/images/providers/mason-spong.png",
    },
    {
      name: "Audrey Speicher",
      role: "PMHNP-BC",
      bio: "Board-certified PMHNP at Tigard and NW Portland, specializing in ADHD, anxiety, PTSD, OCD, and treatment-resistant depression.",
      image: "/images/providers/audrey-speicher.jpg",
    },
    {
      name: "Jenna Ochoa",
      role: "LCSW",
      bio: "Licensed clinical social worker with 12 years of experience supporting adults, teens, couples, and families through anxiety, depression, and life transitions.",
      image: "/images/providers/jenna-ochoa.png",
    },
    {
      name: "Brenna Cash",
      role: "MA, LPC",
      bio: "Licensed professional counselor focused on depression, anxiety, PTSD, and ADHD, using CBT and solution-focused approaches.",
      image: "/images/providers/brenna-cash.png",
    },
    {
      name: "Heather Mangold",
      role: "LPC",
      bio: "Licensed professional counselor providing psychotherapy for depression and anxiety with CBT, DBT, and trauma-informed care.",
      image: "/images/providers/heather-mangold.png",
    },
  ],
  locations: [
    {
      name: "Clackamas, OR",
      addressLines: ["10151 SE Sunnyside Road, Suite 380", "Clackamas, OR 97015"],
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=10151+SE+Sunnyside+Road+Suite+380,+Clackamas,+OR+97015",
      note: "TMS · SPRAVATO® · Psychiatric care",
    },
    {
      name: "NW Portland, OR",
      addressLines: ["2701 NW Vaughn St., Suite 470", "Portland, OR 97210"],
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=2701+NW+Vaughn+St+Suite+470,+Portland,+OR+97210",
      note: "TMS · SPRAVATO® · Psychiatric care",
    },
    {
      name: "Salem, OR",
      addressLines: ["2525 12th St SE, Suite 210", "Salem, OR 97302"],
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=2525+12th+St+SE+Suite+210,+Salem,+OR+97302",
      note: "TMS · SPRAVATO® · Psychiatric care",
    },
    {
      name: "Tigard, OR",
      addressLines: ["11850 SW 67th Avenue, Suite 130", "Portland, OR 97223"],
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=11850+SW+67th+Avenue+Suite+130,+Portland,+OR+97223",
      note: "TMS · SPRAVATO® · Psychiatric care",
    },
    {
      name: "Kirkland, WA",
      addressLines: ["4020 Lake Washington Blvd NE, Suite 210", "Kirkland, WA 98033"],
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=4020+Lake+Washington+Blvd+NE+Suite+210,+Kirkland,+WA+98033",
      note: "TMS · SPRAVATO® · Psychiatric care",
    },
    {
      name: "Vancouver, WA",
      addressLines: ["1499 S.E. Tech Center Place, Suite 170", "Vancouver, WA 98683"],
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=1499+SE+Tech+Center+Place+Suite+170,+Vancouver,+WA+98683",
      note: "TMS · SPRAVATO® · Psychiatric care",
    },
  ],
  serviceAreas: [
    "Clackamas",
    "NW Portland",
    "Salem",
    "Tigard",
    "Kirkland",
    "Vancouver",
  ],
  ghl: {
    origin: "https://go.4tms.com",
    embedScriptSrc: "https://go.4tms.com/js/form_embed.js",
    calendar: {
      id: "ltE7YtfKmEqmu8LxeEyl",
      iframeId: "active-path-booking-calendar",
      src: "https://go.4tms.com/widget/booking/ltE7YtfKmEqmu8LxeEyl",
      title: "Book your Free Consultation",
    },
    qualifyForm: {
      id: "oosrDlf2uruE0AAnIhAR",
      iframeId: "inline-oosrDlf2uruE0AAnIhAR",
      name: "AP - Schedule a Consult Form",
      height: "2142",
      minHeight: "720px",
      src: "https://go.4tms.com/widget/form/oosrDlf2uruE0AAnIhAR",
      title: "AP - Schedule a Consult Form",
    },
  },
} as const;
