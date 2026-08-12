import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Leaf, ShieldCheck, Sparkles, Truck, Award, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { OrnamentDivider, CornerMandala } from "@/components/Ornament";
import { Seo } from "@/components/Seo";
import { categories, products } from "@/data/products";

import { site, whatsappLink } from "@/data/site";
import heroImg from "@/assets/hero-spices.jpg";

const trust = [
  { icon: Sparkles, label: "50+ Products" },
  { icon: Award, label: "Premium Quality" },
  { icon: ShieldCheck, label: "Hygienically Processed" },
  { icon: Truck, label: "Trusted Distribution" },
  { icon: Leaf, label: "100% Pure Spices" },
];

export default function Home() {
  const featured = products.slice(0, 8);
  return (
    <>
      <Seo
        title="SOLERO SPICES | HITECH SPICES PVT LTD | Premium Indian Spices Manufacturer"
        description="SOLERO SPICES by HITECH SPICES PVT LTD is a trusted manufacturer and supplier of premium Indian spices including blended spices, whole spices, and ground spices. Quality spices with authentic taste."
        canonical="/"
        ogDescription="SOLERO SPICES by HITECH SPICES PVT LTD — premium Indian blended, whole and ground spices with authentic taste."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "HITECH SPICES PVT LTD",
          brand: "SOLERO SPICES",
          url: "https://www.hitechspices.com/",
          logo: "https://www.hitechspices.com/icon-512.png",
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="Assorted premium Indian spices" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
       {/* this is colour changing purpose */}
        <div className="absolute inset-0 bg-hero-gradient opacity-95" />
        
        <div aria-hidden className="pointer-events-none absolute inset-0 pattern-paisley opacity-[0.12]" />
        <CornerMandala position="tr" className="h-80 w-80 opacity-[0.1]" />
        <CornerMandala position="bl" className="h-72 w-72 opacity-[0.08]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start px-5 py-24 sm:py-32 lg:py-40">

          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur"
          >
            <Leaf className="h-3.5 w-3.5" /> Spice Manufacturing & Distribution
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-cream sm:text-6xl"
          >
            HITECH SPICES <span className="text-gradient-gold">PVT LTD</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 max-w-xl text-lg text-cream/85"
          >
            {site.tagline} — premium, 100% pure spices crafted with tradition and processed with modern hygiene standards.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild variant="gold" size="xl">
              <Link to="/products">View Products <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a href={whatsappLink("Hello HITECH SPICES, I would like to place an order.")} target="_blank" rel="noopener noreferrer">
                Order On WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="relative border-b border-gold/20 bg-spice-gradient">
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-10 sm:grid-cols-3 lg:grid-cols-5">
          {trust.map((t) => (
            <div key={t.label} className="flex flex-col items-center gap-2 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-card text-primary shadow-soft">
                <t.icon className="h-6 w-6" />
              </span>
              <span className="text-sm font-semibold">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="relative overflow-hidden px-5 py-20">
        <CornerMandala position="tl" className="opacity-[0.05]" />
        <div className="relative mx-auto max-w-7xl">
        <SectionHeading eyebrow="Our Range" title="Explore Spice Categories" subtitle="From signature masala blends to pure whole and ground spices — everything your kitchen needs." />
        <OrnamentDivider className="mt-5" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.1}>
              <Link to={`/categories/${c.slug}`} className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-soft hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                  <div className="absolute bottom-0 p-5">
                    <h3 className="font-display text-xl font-bold text-cream">{c.name}</h3>
                    <p className="text-sm text-cream/80">{c.short}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5">
                  <span className="text-sm font-semibold text-primary">View Products</span>
                  <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        </div>
      </section>


      {/* Featured products */}
      <section className="relative overflow-hidden bg-cream-gradient py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 pattern-paisley opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Bestsellers" title="Featured Products" subtitle="Customer favourites, freshly milled and sealed for maximum freshness." />
          <OrnamentDivider className="mt-5" />
          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
            {featured.map((p) => (<ProductCard key={p.slug} product={p} />))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="hero" size="lg"><Link to="/products">Browse All Products</Link></Button>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-charcoal-gradient py-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 pattern-paisley opacity-[0.07]" />
        <CornerMandala position="tr" className="opacity-[0.08]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold text-cream sm:text-3xl">Become a Distributor</h2>
            <p className="mt-2 text-cream/75">Partner with HITECH SPICES and grow with a trusted premium brand.</p>
          </div>
          <Button asChild variant="gold" size="xl"><Link to="/distributor">Distributor Inquiry</Link></Button>
        </div>
      </section>
    </>
  );
}
