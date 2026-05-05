export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  service: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    author: "James T.",
    location: "Bramhall, Stockport",
    rating: 5,
    date: "2025-04-10",
    text: "Absolutely outstanding service. My BMW 5 Series had swirl marks all over the bonnet and roof — after Dr. Autocare's two-stage paint correction it literally looks better than when I bought it from the dealership. Ceramic coating applied on top and the water just sheets off. Highly recommend.",
    service: "Paint Correction & Ceramic Coating",
  },
  {
    id: "r2",
    author: "Sarah M.",
    location: "Didsbury, Manchester",
    rating: 5,
    date: "2025-03-22",
    text: "Used Dr. Autocare for a full interior clean on my Audi Q5 — it had dog hair, mud, and coffee stains everywhere. They literally transformed it. The hot water extraction got stains out that I thought were permanent. Great communication, arrived on time, and the result was incredible.",
    service: "Interior Deep Clean",
  },
  {
    id: "r3",
    author: "Daniel R.",
    location: "Cheadle Hulme",
    rating: 5,
    date: "2025-03-08",
    text: "Booked a full valet for my Mercedes GLC. The team was professional, efficient, and extremely thorough. They even cleaned areas I'd never thought to look at. The car came back looking showroom-fresh. Will definitely be using Dr. Autocare again.",
    service: "Full Valet",
  },
  {
    id: "r4",
    author: "Emma W.",
    location: "Sale, Trafford",
    rating: 5,
    date: "2025-02-14",
    text: "Fantastic experience from start to finish. Easy booking, they turned up exactly on time, and the results on my Mini Cooper were spectacular. The paint correction removed all the swirl marks and the car looks genuinely new. Worth every penny.",
    service: "Paint Correction",
  },
  {
    id: "r5",
    author: "Mark H.",
    location: "Wilmslow, Cheshire",
    rating: 5,
    date: "2025-01-30",
    text: "I have a Porsche 911 and I'm very particular about who I let near it. Dr. Autocare came highly recommended and they did not disappoint. The detailing was meticulous, the ceramic coating is flawless, and their attention to detail is second to none. I won't use anyone else.",
    service: "Full Detail & Ceramic Coating",
  },
  {
    id: "r6",
    author: "Claire B.",
    location: "Altrincham",
    rating: 5,
    date: "2025-01-15",
    text: "Brilliant service. My Range Rover Sport had a horrible bird dropping etch on the roof panel. Dr. Autocare polished it out completely — I couldn't even tell where it was. Finished with a wax and the car looks amazing. So convenient having them come to the house too.",
    service: "Scratch Removal & Wax",
  },
  {
    id: "r7",
    author: "Tom L.",
    location: "Hazel Grove, Stockport",
    rating: 5,
    date: "2024-12-20",
    text: "Used the mobile valet service twice now and both times were excellent. Quick, thorough, and reasonably priced. My VW Golf comes back looking like it's just driven out of the showroom. Highly professional and friendly team. 10/10.",
    service: "Full Valet",
  },
  {
    id: "r8",
    author: "Rachel K.",
    location: "Stockport",
    rating: 5,
    date: "2024-12-05",
    text: "Dr. Autocare removed some scratches from my Ford Kuga that I thought would need a bodyshop visit. They used their touch-up technique and the scratches are basically invisible now. Saved me a fortune compared to a respray quote. Amazing work.",
    service: "Scratch Removal",
  },
];
