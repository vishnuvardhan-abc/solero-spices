import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { site, whatsappLink } from "@/data/site";
import { categories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { OrnamentDivider } from "@/components/Ornament";
import logo from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal-gradient text-cream/80">
      <div aria-hidden className="pointer-events-none absolute inset-0 pattern-paisley opacity-[0.06]" />
      <div className="relative h-1 w-full bg-gold-gradient" />
      <div className="relative mx-auto max-w-7xl px-5 pt-10">
        <OrnamentDivider tone="cream" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-4">

        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt={site.name} width={48} height={48} className="h-12 w-12 object-contain" />
            <div className="leading-none">
              <p className="font-display text-lg font-extrabold text-cream">SOLERO SPICES</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Sign Of Purity</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            Premium spice manufacturing & distribution. 100% pure, hygienically processed spices trusted by distributors, retailers and export buyers.
          </p>
          <div className="mt-4 flex gap-2">
            {[
              { Icon: Facebook, href: site.social.facebook },
              { Icon: Instagram, href: site.social.instagram },
              { Icon: Linkedin, href: site.social.linkedin },
              { Icon: Youtube, href: site.social.youtube },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} aria-label="Social link" className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-gold hover:text-gold-foreground">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display text-base font-bold text-cream">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { l: "About Us", to: "/about" as const },
              { l: "Products", to: "/products" as const },
              { l: "Infrastructure", to: "/infrastructure" as const },
              // { l: "Quality Assurance", to: "/quality" as const },
              { l: "Careers", to: "/careers" as const },
              { l: "Distributor Inquiry", to: "/distributor" as const },
              { l: "Contact", to: "/contact" as const },
            ].map((x) => (
              <li key={x.to}>
                <Link to={x.to} className="text-cream/70 transition-colors hover:text-gold">{x.l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-base font-bold text-cream">Categories</h4>
          <ul className="space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={`/categories/${c.slug}`} className="text-cream/70 transition-colors hover:text-gold">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 overflow-hidden rounded-lg border border-cream/15">
            <iframe
              title="Map"
              src={site.mapEmbed}
              className="h-28 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display text-base font-bold text-cream">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span className="text-cream/70">{site.addressLine}</span>
            </li>
            <li>
              <a href={`tel:${site.phone}`} className="flex items-center gap-2.5 text-cream/70 hover:text-gold">
                <Phone className="h-4 w-4 text-gold" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 text-cream/70 hover:text-gold">
                <Mail className="h-4 w-4 text-gold" /> {site.email}
              </a>
            </li>
          </ul>
          <Button asChild variant="whatsapp" className="mt-4 w-full">
            <a href={whatsappLink("Hello HITECH SPICES, I would like to enquire.")} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>

      <div className="relative border-t border-gold/20 bg-charcoal/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-cream/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All Rights Reserved.</p>
          <p className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-gold" />{site.addressLine}</p>
        </div>
      </div>

    </footer>
  );
}
