export interface Service {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: string;
  duration: string;
  icon: string;
  features: string[];
  faqs: { question: string; answer: string }[];
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "mobile-car-valeting",
    name: "Mobile Car Valeting",
    shortName: "Car Valeting",
    tagline: "Professional valeting brought to your door across Greater Manchester",
    description:
      "Dr. Autocare provides a fully mobile car valeting service covering Stockport and the wider Greater Manchester area. We come to you — at home, at work, or anywhere convenient.",
    longDescription: `Mobile car valeting means professional-grade cleaning without the hassle of driving to a valet centre. Dr. Autocare brings everything needed to deliver a thorough, expert clean directly to your location in Stockport and across Greater Manchester.

Our mobile valeting service covers both interior and exterior cleaning using professional-grade products that are safe for your vehicle's paintwork, trim, and upholstery. We use hot water extraction for interiors and pH-neutral shampoos for exteriors, ensuring a deep, safe clean every time.

Whether your car needs a basic wash and vacuum or a full valet — including engine bay, leather conditioning, and tyre dressing — our mobile team arrives equipped to handle it all. We carry our own water supply and power, so no facilities are needed at your location.`,
    price: "From £40",
    duration: "2–4 hours",
    icon: "Car",
    features: [
      "Exterior hand wash and rinse",
      "Wheel and tyre cleaning",
      "Door shuts and sills cleaned",
      "Full interior vacuum",
      "Dashboard and trim wipe-down",
      "Window cleaning inside and out",
      "Air freshener finish",
      "We supply our own water and power",
    ],
    faqs: [
      {
        question: "What is mobile car valeting?",
        answer:
          "Mobile car valeting is a professional cleaning service where a trained valet technician travels to your location — home, workplace, or any suitable place — and cleans your vehicle on-site using professional equipment and products.",
      },
      {
        question: "How long does a mobile car valet take?",
        answer:
          "A standard mobile car valet typically takes 2 to 4 hours depending on the vehicle size and condition. A full valet with interior deep-clean can take up to 6 hours.",
      },
      {
        question: "Do you need access to water or electricity at my location?",
        answer:
          "No. Dr. Autocare is fully self-contained — we carry our own water supply and power generator, so we can valet your car in any driveway, car park, or roadside location.",
      },
      {
        question: "How much does mobile car valeting cost in Stockport?",
        answer:
          "Prices start from £40 for a mini valet and range up to £200+ for a full valet with paint correction. Contact us for a personalised quote based on your vehicle and requirements.",
      },
    ],
    keywords: [
      "mobile car valeting Stockport",
      "car valeting Stockport",
      "mobile valet Greater Manchester",
      "car valet near me Stockport",
      "professional car valeting Manchester",
    ],
    metaTitle: "Mobile Car Valeting Stockport | Dr. Autocare — We Come To You",
    metaDescription:
      "Professional mobile car valeting in Stockport and Greater Manchester. Dr. Autocare brings expert-grade cleaning to your door. Self-contained — no facilities needed. Book today.",
  },
  {
    slug: "car-detailing",
    name: "Car Detailing",
    shortName: "Car Detailing",
    tagline: "Show-car finish achieved at your doorstep in Stockport",
    description:
      "Car detailing goes beyond valeting — it restores and protects every surface of your vehicle to a near-factory or better-than-factory finish. Dr. Autocare delivers professional detailing across Greater Manchester.",
    longDescription: `Car detailing is the meticulous process of cleaning, correcting, and protecting every surface of a vehicle — inside and out. Unlike a standard valet, detailing involves multi-stage paint decontamination, machine polishing, and long-term protection application.

Dr. Autocare's detailing packages cover everything from a thorough decontamination wash (clay bar, iron fallout removal) through to machine polishing and ceramic coating or wax protection. The result is a vehicle that not only looks immaculate but is protected against environmental damage for months or years.

Our detailers are trained in paint thickness measurement, safe machine polishing techniques, and the application of professional coating systems. We work on all vehicle types — hatchbacks, SUVs, luxury saloons, and prestige sports cars — always using products appropriate to the vehicle's finish.`,
    price: "From £120",
    duration: "4–8 hours",
    icon: "Sparkles",
    features: [
      "Multi-stage decontamination wash",
      "Clay bar paint decontamination",
      "Iron fallout and tar removal",
      "Machine polishing (one or two stage)",
      "Paint sealant or wax application",
      "Engine bay detailing",
      "Leather cleaning and conditioning",
      "All plastics, rubbers, and vinyls dressed",
    ],
    faqs: [
      {
        question: "What is the difference between car valeting and car detailing?",
        answer:
          "Valeting focuses on cleaning a car to a high standard. Detailing goes further — it corrects paint imperfections (swirl marks, light scratches), decontaminates all surfaces, and applies protective coatings. Detailing produces a show-quality finish that lasts significantly longer.",
      },
      {
        question: "How long does car detailing take?",
        answer:
          "A full detail typically takes 4 to 8 hours depending on the vehicle size and condition. More heavily soiled vehicles or those requiring multi-stage paint correction may take longer and can be spread over two days.",
      },
      {
        question: "How often should I get my car detailed?",
        answer:
          "For most drivers, a full detail once or twice per year is sufficient, supplemented by regular maintenance washes. Vehicles used daily in urban environments like Manchester may benefit from quarterly maintenance details.",
      },
      {
        question: "Do you offer car detailing in Manchester?",
        answer:
          "Yes. Dr. Autocare provides mobile car detailing across Greater Manchester, including Manchester city centre, Stockport, Cheadle, Didsbury, Salford, and surrounding areas.",
      },
    ],
    keywords: [
      "car detailing Stockport",
      "auto detailing Manchester",
      "professional car detailing Greater Manchester",
      "mobile car detailing Stockport",
      "full car detail near me",
    ],
    metaTitle: "Car Detailing Stockport & Manchester | Dr. Autocare Professional Detail",
    metaDescription:
      "Expert mobile car detailing in Stockport and Greater Manchester. Paint decontamination, machine polishing, ceramic coating. Dr. Autocare — show-car results at your door.",
  },
  {
    slug: "paint-correction",
    name: "Paint Correction",
    shortName: "Paint Correction",
    tagline: "Eliminate swirl marks and scratches for a mirror-like finish",
    description:
      "Paint correction removes swirl marks, water spots, light scratches, and oxidation from your vehicle's paintwork using professional machine polishers. Dr. Autocare delivers flawless results across Stockport and Manchester.",
    longDescription: `Paint correction is the process of safely removing defects from a vehicle's clear coat using machine polishers and cutting compounds. Defects include swirl marks (caused by incorrect washing), random isolated scratches (RIDS), water spots, bird dropping etching, and light oxidation.

Dr. Autocare's paint correction service begins with a thorough paint thickness assessment to determine how much correction is safe for your specific vehicle. We then work through a calculated polishing process — from cutting stages that remove defects to refining stages that restore maximum gloss.

A single-stage polish will remove 50–70% of defects and significantly enhance gloss. A two-stage correction targets 80–95% defect removal, delivering a mirror-like finish. All paint correction work is finished with a protective layer (wax, sealant, or ceramic coating) to lock in the results and safeguard against future damage.`,
    price: "From £180",
    duration: "6–12 hours",
    icon: "Zap",
    features: [
      "Paint thickness gauge assessment",
      "Safe decontamination wash",
      "Single or two-stage machine polishing",
      "Random isolated scratch reduction",
      "Swirl mark removal",
      "Water spot and bird dropping etch correction",
      "Gloss enhancement measurement",
      "Protective wax, sealant, or ceramic coating finish",
    ],
    faqs: [
      {
        question: "What is paint correction?",
        answer:
          "Paint correction is the process of removing surface defects — swirl marks, light scratches, water spots — from a vehicle's clear coat using machine polishers and abrasive compounds, restoring the paintwork to a like-new or better finish.",
      },
      {
        question: "Can paint correction fix deep scratches?",
        answer:
          "Paint correction can remove or significantly reduce defects within the clear coat layer. Deep scratches that have cut through the clear coat into the base coat or primer cannot be corrected by polishing alone and require respraying.",
      },
      {
        question: "Will paint correction damage my car?",
        answer:
          "In the hands of a trained professional, paint correction is completely safe. Dr. Autocare measures paint thickness before beginning any polishing to ensure sufficient clear coat remains and applies only appropriate levels of cut for your vehicle.",
      },
      {
        question: "How long does paint correction last?",
        answer:
          "The correction itself is permanent for the defects removed. The paintwork is then vulnerable to new defects, which is why we always recommend a protective coating (ceramic coating or high-quality wax) immediately after correction to preserve the results.",
      },
    ],
    keywords: [
      "paint correction Stockport",
      "swirl mark removal Manchester",
      "paint correction Greater Manchester",
      "scratch removal car Stockport",
      "machine polishing Manchester",
    ],
    metaTitle: "Paint Correction Stockport | Swirl Mark Removal — Dr. Autocare",
    metaDescription:
      "Professional paint correction in Stockport and Manchester. Remove swirl marks, scratches, and water spots. Mobile service — Dr. Autocare comes to you. Get a free quote.",
  },
  {
    slug: "scratch-removal",
    name: "Scratch Removal",
    shortName: "Scratch Removal",
    tagline: "Targeted scratch repair without the bodyshop price tag",
    description:
      "Dr. Autocare's mobile scratch removal service tackles light-to-medium scratches and scuffs using professional-grade products, saving you the cost of a full respray for minor paintwork damage.",
    longDescription: `Surface scratches are inevitable — car parks, road debris, branches, and careless washing all leave their mark. Dr. Autocare's targeted scratch removal service assesses the depth and nature of each scratch and applies the most appropriate solution.

For scratches within the clear coat (the most common type), our machine polishing and finishing techniques can completely eliminate the mark or reduce its visibility to near-invisible levels. For deeper scratches or stone chips that have reached the base coat, we use touch-up paint and blending techniques to achieve the most invisible repair possible without a full panel respray.

Our mobile scratch removal service covers all vehicle types and paint colours. We bring colour-matched touch-up solutions and professional finishing compounds, delivering results that are far superior to DIY scratch remover products.`,
    price: "From £60",
    duration: "1–3 hours",
    icon: "Wrench",
    features: [
      "Scratch depth and type assessment",
      "Clear coat scratch polishing and removal",
      "Deeper scratch touch-up with colour-matched paint",
      "Blending and finishing for seamless result",
      "Panel-specific treatment",
      "Final protective wax application",
      "Fully mobile — we come to you",
    ],
    faqs: [
      {
        question: "Can scratches be removed from a car without respraying?",
        answer:
          "Yes. Scratches that are within the clear coat layer can be fully removed through machine polishing. Scratches into the base coat can be significantly improved using colour-matched touch-up and professional finishing techniques, without the need for a full panel respray.",
      },
      {
        question: "How do I know if a scratch is fixable by polishing?",
        answer:
          "Run your fingernail across the scratch. If your nail catches, the scratch is likely deeper than the clear coat and may need touch-up paint. If your nail glides over it, it is likely a clear coat scratch that polishing can fully remove.",
      },
      {
        question: "How much does scratch removal cost in Stockport?",
        answer:
          "Dr. Autocare's scratch removal starts from £60 for a single panel with minor clear coat scratches. Multiple panels or deeper scratches are quoted individually. Contact us with photos for an accurate estimate.",
      },
    ],
    keywords: [
      "scratch removal Stockport",
      "car scratch repair Manchester",
      "mobile scratch removal Greater Manchester",
      "remove car scratches Stockport",
      "swirl mark scratch removal near me",
    ],
    metaTitle: "Car Scratch Removal Stockport | Mobile Scratch Repair — Dr. Autocare",
    metaDescription:
      "Mobile car scratch removal in Stockport and Greater Manchester. Clear coat scratches, scuffs, and stone chips treated at your location. Dr. Autocare — professional results, affordable pricing.",
  },
  {
    slug: "interior-cleaning",
    name: "Interior Cleaning",
    shortName: "Interior Cleaning",
    tagline: "Deep interior cleaning that restores freshness and hygiene",
    description:
      "Dr. Autocare's interior cleaning service covers every surface inside your vehicle — from carpets and seats to headlining and vents. Hot water extraction, steam cleaning, and professional products deliver a genuinely deep clean.",
    longDescription: `A clean interior is essential for both comfort and the long-term value of your vehicle. Dr. Autocare's interior cleaning service goes far beyond a vacuum and wipe-down — we use professional hot water extraction machines, steam cleaners, and specialist interior products to thoroughly clean every surface inside your car.

Our interior cleaning process removes embedded dirt, bacteria, allergens, and odours from carpets, seats (fabric or leather), headlining, door cards, dashboard, and all trim pieces. We treat stains using appropriate agitation and extraction techniques, and finish all surfaces with protective dressings where applicable.

For vehicles with leather seats, we use pH-balanced leather cleaners followed by a conditioning treatment to keep leather supple and prevent cracking. Fabric interiors are hot-water extracted and treated with a fabric protector spray. Odour elimination treatments are available for vehicles suffering from persistent smells (smoke, food, damp).`,
    price: "From £80",
    duration: "2–5 hours",
    icon: "Layers",
    features: [
      "Full vacuum including boot and under seats",
      "Hot water extraction for carpets and fabric seats",
      "Steam cleaning for vents, buttons, and crevices",
      "Leather cleaning and conditioning",
      "Dashboard and all trim surfaces cleaned",
      "Door shuts, pockets, and storage areas",
      "Headlining spot cleaning",
      "Odour elimination treatment",
      "Fabric protector application",
    ],
    faqs: [
      {
        question: "What is hot water extraction in car interior cleaning?",
        answer:
          "Hot water extraction (HWE) uses hot water and cleaning solution injected into carpet fibres or fabric seats under pressure, then immediately extracted by a powerful vacuum. It removes embedded dirt, bacteria, and stains more effectively than vacuuming alone.",
      },
      {
        question: "Can you remove stains from car seats?",
        answer:
          "Most stains — including coffee, food, mud, and ink — can be significantly reduced or completely removed using professional agitation and hot water extraction. Results depend on stain type, age, and fabric. We assess each stain individually and will advise if a stain is permanent before beginning work.",
      },
      {
        question: "How long before I can use my car after interior cleaning?",
        answer:
          "After hot water extraction, carpets and seats typically need 2–4 hours to dry in warm conditions, or up to 8 hours in cold weather. We recommend leaving windows slightly open during drying. We will advise on drying times specific to your vehicle.",
      },
      {
        question: "Do you clean leather car interiors?",
        answer:
          "Yes. Dr. Autocare uses specialist pH-balanced leather cleaners and conditioners appropriate for your specific leather type (perforated, pigmented, aniline). Conditioning prevents cracking and keeps leather looking and feeling new.",
      },
    ],
    keywords: [
      "interior car cleaning Stockport",
      "car interior cleaning Manchester",
      "hot water extraction car Stockport",
      "deep clean car interior Greater Manchester",
      "leather seat cleaning Stockport",
    ],
    metaTitle: "Car Interior Cleaning Stockport | Deep Clean Service — Dr. Autocare",
    metaDescription:
      "Professional mobile car interior cleaning in Stockport and Manchester. Hot water extraction, steam cleaning, leather conditioning. Dr. Autocare — deep clean at your door.",
  },
  {
    slug: "exterior-protection",
    name: "Exterior Protection",
    shortName: "Exterior Protection",
    tagline: "Long-lasting paint protection for Greater Manchester's roads and weather",
    description:
      "Protect your vehicle's paintwork against the elements with Dr. Autocare's professional exterior protection treatments — including ceramic coatings, paint sealants, and carnauba wax.",
    longDescription: `Greater Manchester's climate — frequent rain, road salt in winter, and urban pollution — is harsh on vehicle paintwork. Dr. Autocare's exterior protection treatments create a durable barrier between your paint and the environment, maintaining your car's appearance and resale value.

We offer three tiers of protection depending on your budget and desired durability:

**Carnauba Wax:** Natural protection providing a warm, deep shine. Lasts 2–4 months. Ideal for regular maintenance or pre-sale preparation.

**Paint Sealant:** Synthetic polymer protection. Lasts 4–12 months. Harder and more durable than wax, providing enhanced water beading and contamination resistance.

**Ceramic Coating:** Professional-grade SiO2 or TiO2 coating that chemically bonds to the clear coat. Lasts 2–5 years depending on the product. Provides extreme hydrophobic properties, UV protection, and scratch resistance. Our most popular long-term protection solution.

All protection treatments are applied after a thorough decontamination wash to ensure a clean, contaminant-free surface for optimal bonding and performance.`,
    price: "From £80",
    duration: "2–6 hours",
    icon: "Shield",
    features: [
      "Decontamination wash before application",
      "Carnauba wax application (2–4 month protection)",
      "Paint sealant application (4–12 month protection)",
      "Ceramic coating application (2–5 year protection)",
      "Alloy wheel coating available",
      "Glass coating for hydrophobic windscreen",
      "Plastic trim and rubber protection",
      "Aftercare advice included",
    ],
    faqs: [
      {
        question: "What is a ceramic coating for cars?",
        answer:
          "A ceramic coating is a liquid polymer that chemically bonds to your vehicle's clear coat, creating a permanent protective layer. It provides hydrophobic (water-repelling) properties, UV protection, enhanced gloss, and improved resistance to light scratches, bird droppings, and environmental contaminants.",
      },
      {
        question: "How long does ceramic coating last?",
        answer:
          "Professional-grade ceramic coatings applied by Dr. Autocare last between 2 and 5 years with proper maintenance. Consumer-grade spray ceramics last significantly less. We offer annual inspection and top-up services to maintain coating performance.",
      },
      {
        question: "Do I need paint correction before ceramic coating?",
        answer:
          "Ideally, yes. Ceramic coating locks in the current state of your paint — including any swirl marks or scratches. For the best result, we recommend a paint correction stage before coating application to ensure the coating enhances a flawless surface.",
      },
      {
        question: "Is ceramic coating worth it in Manchester's weather?",
        answer:
          "Absolutely. Greater Manchester's high rainfall and road salt in winter make ceramic coating particularly valuable. The hydrophobic properties mean water sheets off quickly, reducing water spotting and making maintenance washes much easier and quicker.",
      },
    ],
    keywords: [
      "ceramic coating Stockport",
      "paint protection Manchester",
      "car wax Stockport",
      "paint sealant Greater Manchester",
      "exterior car protection Manchester",
    ],
    metaTitle: "Exterior Car Protection Stockport | Ceramic Coating & Wax — Dr. Autocare",
    metaDescription:
      "Professional exterior paint protection in Stockport and Manchester. Ceramic coatings, paint sealants, carnauba wax. Dr. Autocare mobile service — long-lasting results.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
