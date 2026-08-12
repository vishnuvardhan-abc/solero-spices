import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { inr, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const from = product.sizes
    .map((s) => product.prices[s])
    .filter((n): n is number => typeof n === "number")
    .reduce((min, n) => (min === undefined || n < min ? n : min), undefined as number | undefined) ?? 0;
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-500 hover-lift-lg hover:border-gold/50"
    >
      <div className="relative aspect-square overflow-hidden bg-spice-gradient">
        
        <div className="pointer-events-none absolute inset-0 pattern-paisley opacity-40" />
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="relative h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-3 top-3 rounded-full border border-gold/40 bg-cream/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow-soft backdrop-blur">
          100% Pure
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-1 font-display text-lg font-bold text-foreground">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          From <span className="font-bold text-primary">{inr(from)}</span>
        </p>
        <span className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 group-hover:bg-gold-gradient group-hover:text-gold-foreground group-hover:shadow-gold">
          View Product
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
