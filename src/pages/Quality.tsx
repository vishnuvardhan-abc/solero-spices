import { ShieldCheck, FlaskConical, Sparkles, Package, Leaf, BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Seo } from "@/components/Seo";
import qualityImg from "@/assets/quality.jpg";


const items = [
  { icon: FlaskConical, t: "Quality Control", v: "Every batch is tested for purity, colour, aroma and moisture before approval." },
  { icon: ShieldCheck, t: "Food Safety", v: "Strict food-safety protocols across sourcing, processing and packaging." },
  { icon: Sparkles, t: "Hygiene Standards", v: "Clean-room processing and sanitised equipment to prevent contamination." },
  { icon: Package, t: "Packaging Standards", v: "Sealed, tamper-evident, food-grade packaging that preserves freshness." },
  { icon: Leaf, t: "Raw Material Selection", v: "Spices sourced from trusted farms and graded for premium quality." },
  { icon: BadgeCheck, t: "Consistency", v: "Standardised recipes ensure the same authentic taste, every time." },
];

export default function Quality() {
  return (
    <div>
      <Seo
        title="Quality Assurance — HITECH SPICES PVT LTD"
        description="Quality control, food safety, hygiene and packaging standards at HITECH SPICES. FSSAI & ISO aligned processes."
        canonical="/quality"
        ogTitle="Quality Assurance — HITECH SPICES"
        ogDescription="Rigorous quality control and food safety standards."
      />

      <section className="relative overflow-hidden bg-charcoal">
        <img src={qualityImg} alt="Quality testing laboratory" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 text-center">
          <h1 className="font-display text-4xl font-extrabold text-cream sm:text-5xl">Quality Assurance</h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">Purity you can trust — verified at every step.</p>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading eyebrow="Our Promise" title="Uncompromising Standards" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft hover-lift">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary"><s.icon className="h-6 w-6" /></span>
                <h3 className="mt-4 font-display text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Certifications" title="Standards We Uphold" subtitle="Aligned with national and international food safety standards." />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {["FSSAI", "ISO 22000", "HACCP", "Export Grade"].map((c) => (
              <div key={c} className="flex h-24 items-center justify-center rounded-xl border border-dashed border-border bg-card text-center font-display text-lg font-bold text-primary">
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
