// import { SectionHeading } from "@/components/SectionHeading";
// import { Reveal } from "@/components/Reveal";
// import { Seo } from "@/components/Seo";
// import infraImg from "@/assets/infrastructure.jpg";


// import manufacturingImg from "@/assets/manufacturing.png";
// import packagingImg from "@/assets/packaging.png";
// import storageImg from "@/assets/storage.png";
// import qualityImg from "@/assets/quality.png";
// import logisticImg from "@/assets/logistic.png";
// import productionImg from "@/assets/production.png"

// new one adding from old file



// const sections = [
//   { t: "Manufacturing Unit", v: "Advanced grinding and blending machinery that preserves natural oils, colour and aroma while ensuring consistent quality at scale." },
//   { t: "Packaging Unit", v: "Automated, hygienic packaging lines with sealed, tamper-evident packs that lock in freshness for longer shelf life." },
//   { t: "Storage Facility", v: "Climate-controlled warehousing that protects raw materials and finished goods from moisture and contamination." },
//   { t: "Quality Testing", v: "In-house testing for purity, moisture, colour and microbial safety on every batch before dispatch." },
//   { t: "Logistics", v: "An efficient distribution network ensuring timely supply to retailers, distributors and export buyers." },
// ];

// export default function Infrastructure() {
//   return (
//     <div>
//       <Seo
//         title="Infrastructure — HITECH SPICES PVT LTD"
//         description="Modern spice manufacturing, packaging, storage, quality testing and logistics infrastructure at HITECH SPICES, Hyderabad."
//         canonical="/infrastructure"
//         ogTitle="Infrastructure — HITECH SPICES"
//         ogDescription="State-of-the-art spice processing infrastructure."
//       />

//       <section className="relative overflow-hidden bg-charcoal">
//         <img src={infraImg} alt="Spice manufacturing facility" className="absolute inset-0 h-full w-full object-cover opacity-30" />
//         <div className="relative mx-auto max-w-7xl px-5 py-24 text-center">
//           <h1 className="font-display text-4xl font-extrabold text-cream sm:text-5xl">Our Infrastructure</h1>
//           <p className="mx-auto mt-4 max-w-2xl text-cream/80">Modern, hygienic facilities engineered for purity, consistency and scale.</p>
//         </div>
//       </section>
//       <div className="mx-auto max-w-7xl px-5 py-16">
//         <SectionHeading eyebrow="Built For Quality" title="From Sourcing to Shipping" subtitle="Every stage is controlled to deliver the real taste of spices, safely and consistently." />
//         <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {sections.map((s, i) => (
//             <Reveal key={s.t} delay={i * 0.05}>
//               <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft hover-lift">
//                 <span className="font-display text-3xl font-bold text-gold/60">0{i + 1}</span>
//                 <h3 className="mt-2 font-display text-lg font-bold">{s.t}</h3>
//                 <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// new one for card to insert with images

import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Seo } from "@/components/Seo";

import infraImg from "@/assets/infrastructure.png";

import manufacturingImg from "@/assets/manufacturing.png";
import productionImg from "@/assets/production.png";
import packagingImg from "@/assets/packaging.png";
import storageImg from "@/assets/storage.png";
import qualityImg from "@/assets/quality.png";
import logisticImg from "@/assets/logistic.png";

export default function Infrastructure() {
  return (
    <div>
      <Seo
        title="Infrastructure — HITECH SPICES PVT LTD"
        description="Modern spice manufacturing, packaging, storage, quality testing and logistics infrastructure at HITECH SPICES, Hyderabad."
        canonical="/infrastructure"
        ogTitle="Infrastructure — HITECH SPICES"
        ogDescription="State-of-the-art spice processing infrastructure."
      />

      {/* Hero Section */}
      {/* <section className="relative overflow-hidden bg-charcoal"> */}
      <section className="relative h-[500px] overflow-hidden bg-charcoal">
        <img
          src={infraImg}
          alt="Spice manufacturing facility"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        {/* <div className="relative mx-auto max-w-7xl px-5 py-24 text-center"> */}
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 text-center">
          <h1 className="font-display text-4xl font-extrabold text-cream sm:text-5xl">
            Our Infrastructure
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-cream/80">
            Modern, hygienic facilities engineered for purity, consistency and
            scale.
          </p>
        </div>
      </section>

      {/* Infrastructure Cards */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading
          eyebrow="Built For Quality"
          title="From Sourcing to Shipping"
          subtitle="Every stage is controlled to deliver the real taste of spices, safely and consistently."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Manufacturing */}
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src={manufacturingImg}
                alt="Manufacturing Unit"
                className="h-64 w-full object-cover"
              />

              <div className="p-7">
                <h3 className="font-display text-2xl font-bold text-charcoal">
                  Manufacturing Unit
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  Advanced grinding and blending machinery that preserves the
                  natural oils, aroma and colour of spices while ensuring
                  consistent production quality.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Production */}
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src={productionImg}
                alt="Production & Packaging"
                className="h-64 w-full object-cover"
              />

              <div className="p-7">
                <h3 className="font-display text-2xl font-bold text-charcoal">
                  Production & Packaging
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  Every product is processed and packed under strict hygiene
                  standards to ensure freshness and safety. Every batch is
                  carefully handled to deliver superior quality and reliability.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Packaging */}
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src={packagingImg}
                alt="Packaging Unit"
                className="h-64 w-full object-cover"
              />

              <div className="p-7">
                <h3 className="font-display text-2xl font-bold text-charcoal">
                  Packaging Unit
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  Automated hygienic packaging lines with advanced sealing
                  technology to maintain freshness, aroma and long shelf life.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Storage */}
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src={storageImg}
                alt="Storage Facility"
                className="h-64 w-full object-cover"
              />

              <div className="p-7">
                <h3 className="font-display text-2xl font-bold text-charcoal">
                  Storage Facility
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  Climate-controlled warehouses designed to protect raw
                  materials and finished products from moisture and
                  contamination.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Quality */}
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src={qualityImg}
                alt="Quality Testing"
                className="h-64 w-full object-cover"
              />

              <div className="p-7">
                <h3 className="font-display text-2xl font-bold text-charcoal">
                  Quality Testing
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  Every batch undergoes rigorous testing for purity, moisture,
                  colour, aroma and food safety before dispatch.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Logistics */}
{/*           
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src={logisticImg}
                alt="Logistics"
                className="h-64 w-full object-cover"
              />

              <div className="p-7">
                <h3 className="font-display text-2xl font-bold text-charcoal">
                  Logistics
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  A reliable distribution network ensuring timely delivery to
                  retailers, distributors and export partners across India and
                  overseas.
                </p>
              </div>
            </div>
          </Reveal> */}

        </div>
      </section>
    </div>
  );
}