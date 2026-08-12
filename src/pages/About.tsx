// import { Target, Eye, ShieldCheck, Factory, Truck, Leaf } from "lucide-react";
// import { SectionHeading } from "@/components/SectionHeading";
// import { Reveal } from "@/components/Reveal";
// import { Seo } from "@/components/Seo";
// import aboutImg from "@/assets/about-manufacturing.jpg";

// const values = [
//   { icon: Target, t: "Our Mission", v: "To deliver 100% pure, authentic spices that bring the real taste of India to every kitchen, while supporting our distribution partners with reliable supply." },
//   { icon: Eye, t: "Our Vision", v: "To become a globally trusted spice brand recognised for uncompromising quality, innovation and food safety." },
//   { icon: ShieldCheck, t: "Food Safety Commitment", v: "Every batch is processed under strict hygiene controls and quality checks to ensure safe, consistent products." },
//   { icon: Factory, t: "Manufacturing Excellence", v: "Modern grinding, blending and packaging facilities that preserve the natural aroma and potency of every spice." },
//   { icon: Truck, t: "Distribution Network", v: "A growing network serving retailers, wholesalers, distributors and export buyers across India and abroad." },
//   { icon: Leaf, t: "Why Choose Us", v: "Pure ingredients, no artificial colours, sealed freshness and a heritage of authentic flavour you can trust." },
// ];

// export default function About() {
//   return (
//     <div>
//       <Seo
//         title="About Us — HITECH SPICES PVT LTD"
//         description="HITECH SPICES is a premium spice manufacturer and distributor in Hyderabad committed to purity, hygiene and authentic taste."
//         canonical="/about"
//         ogTitle="About Us — HITECH SPICES"
//         ogDescription="Premium spice manufacturing with a commitment to purity and food safety."
//       />
//       <section className="bg-charcoal py-16 text-center">
//         <div className="mx-auto max-w-4xl px-5">
//           <h1 className="font-display text-4xl font-extrabold text-cream sm:text-5xl">About HITECH SPICES</h1>
//           <p className="mt-4 text-cream/80">Real Taste Of Spices — crafted with tradition, processed with modern precision.</p>
//         </div>
//       </section>

//       <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2">
//         <Reveal>
//           <SectionHeading align="left" eyebrow="Company Overview" title="A Legacy of Pure, Authentic Spices" subtitle="HITECH SPICES PVT LTD, based in Jeedimetla, Hyderabad, is dedicated to manufacturing and distributing premium quality spices. From signature masala blends to pure whole and ground spices, we combine time-honoured recipes with modern, hygienic processing to deliver consistent, authentic flavour." />
//           <p className="mt-4 text-muted-foreground">Our spices are sourced from trusted farms, carefully cleaned, graded and milled in small batches, then sealed to lock in freshness — ensuring the real taste of spices reaches every customer.</p>
//         </Reveal>
//         <Reveal delay={0.1}>
//           <img src={aboutImg} alt="Spice packaging line" loading="lazy" className="rounded-2xl border border-border shadow-card" />
//         </Reveal>
//       </section>

//       <section className="bg-muted/40 py-16">
//         <div className="mx-auto max-w-7xl px-5">
//           <SectionHeading eyebrow="What Drives Us" title="Mission, Vision & Values" />
//           <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {values.map((v, i) => (
//               <Reveal key={v.t} delay={i * 0.05}>
//                 <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft hover-lift">
//                   <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary"><v.icon className="h-6 w-6" /></span>
//                   <h3 className="mt-4 font-display text-lg font-bold">{v.t}</h3>
//                   <p className="mt-2 text-sm text-muted-foreground">{v.v}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// new about us


import { Target, Eye, ShieldCheck, Factory, Truck, Leaf } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Seo } from "@/components/Seo";
import aboutImg from "@/assets/about-manufacturing.png";
import aboutHeroImg from "@/assets/about-hero.png";

const values = [
  {
    icon: Target,
    t: "Our Mission",
    v: "To deliver premium-quality spices that preserve their natural aroma, flavour and freshness while exceeding customer expectations through consistent quality, innovation and reliable service.",
  },
  {
    icon: Eye,
    t: "Our Vision",
    v: "To become one of India's most trusted and globally recognised spice manufacturers by setting new benchmarks in quality, food safety and customer satisfaction.",
  },
  {
    icon: ShieldCheck,
    t: "Quality & Food Safety",
    v: "Every batch undergoes strict quality inspections and hygienic processing to ensure purity, consistency and food safety before reaching our customers.",
  },
  {
    icon: Factory,
    t: "Modern Manufacturing",
    v: "HITECH SPICES operates one of India's most modern integrated spice processing plants with advanced cleaning, grading, grinding, blending and hygienic packaging facilities.",
  },
  {
    icon: Truck,
    t: "Reliable Distribution",
    v: "Our strong distribution network ensures timely delivery of premium-quality spices to distributors, wholesalers, retailers and business partners across India.",
  },
  {
    icon: Leaf,
    t: "Why Choose Us",
    v: "Over four decades of industry expertise, premium raw materials, advanced manufacturing technology and an unwavering commitment to authentic taste make us the preferred choice.",
  },
];

export default function About() {
  return (
    <div>
      <Seo
        title="About Us — HITECH SPICES PVT LTD"
        description="HITECH SPICES PVT LTD is a leading spice manufacturer with over 40 years of industry expertise, delivering premium-quality spices through advanced manufacturing technology."
        canonical="/about"
        ogTitle=" HITECH SPICES PVT LTD"
        ogDescription="Experience, innovation and authentic taste combined with modern spice manufacturing."
      />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
  <img
    src={aboutHeroImg}
    alt="HITECH SPICES"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/55"></div>

  <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 text-center">
    <h1 className="font-display text-5xl font-extrabold text-white lg:text-6xl">
      HITECH SPICES PVT LTD
    </h1>

    <p className="mt-6 max-w-3xl text-xl text-white/90">
      More than four decades of industry expertise, powered by innovation,
      quality and the authentic taste of Indian spices.
    </p>
  </div>
</section>

      {/* Company Overview */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <Reveal>
          {/* <SectionHeading
            align="left"
            eyebrow="Our Story"
            title="A Legacy Built on Experience, Quality & Trust"
            subtitle="Established in 2016, HITECH SPICES PVT. LTD. was founded by Mr. Rajiv Modi, a respected industry veteran with over 40 years of experience in the spice business. Driven by a vision to deliver premium-quality spices with authentic taste, he laid the foundation for the trusted Solero Spices brand."
          /> */}

          <SectionHeading
  align="left"
  eyebrow="Our Story"
  title="A Legacy Built on Experience, Quality & Trust"
/>

<p className="mt-6 leading-8 text-muted-foreground">
  Established in <strong>2016</strong>, <strong>HITECH SPICES PVT. LTD.</strong> was
  founded by <strong>Mr. Rajiv Modi</strong>, a respected industry veteran with
  over <strong>40 years of experience</strong> in the spice business. Driven by
  a vision to deliver premium-quality spices with authentic taste, he laid the
  foundation for the trusted <strong>Solero Spices</strong> brand.
</p>

          <p className="mt-6 leading-8 text-muted-foreground">
            Today, under the leadership of Managing Director <strong>Mr. Mukund Modi</strong>,
            the company continues to expand with a commitment to innovation,
            quality and customer satisfaction. HITECH SPICES combines traditional
            knowledge with cutting-edge technology to produce spices that meet
            the highest standards of purity, freshness and consistency.
          </p>

          <p className="mt-6 leading-8 text-muted-foreground">
            Our state-of-the-art integrated manufacturing facility is equipped
            with advanced machinery for cleaning, grading, grinding, blending,
            processing and hygienic packaging. Every stage of production is
            carefully monitored to preserve the natural flavour, aroma and
            nutritional value of our spices while ensuring complete food safety.
          </p>

          <p className="mt-6 leading-8 text-muted-foreground">
            With a strong commitment to excellence and customer trust, HITECH
            SPICES has become a reliable partner for distributors, wholesalers,
            retailers and consumers who value authentic taste and uncompromising
            quality.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <img
            src={aboutImg}
            alt="HITECH SPICES Manufacturing Facility"
            loading="lazy"
            className="rounded-3xl border border-border shadow-2xl"
          />
        </Reveal>
      </section>

      {/* Mission Vision */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Mission, Vision & Core Values"
            subtitle="Everything we do is guided by our commitment to quality, innovation, customer satisfaction and delivering the real taste of spices."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary">
                    <v.icon className="h-7 w-7" />
                  </span>

                  <h3 className="mt-5 font-display text-xl font-bold">
                    {v.t}
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {v.v}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}