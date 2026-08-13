import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Minus, Plus, Check, ShoppingCart, ShieldCheck, Leaf, Sparkles, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { OrnamentDivider, CornerMandala } from "@/components/Ornament";
import { Seo } from "@/components/Seo";
import { useCart } from "@/context/cart";
import {
  getProduct, getCategory, productsByCategory, inr, type Size, type Product,
} from "@/data/products";
import { whatsappLink } from "@/data/site";
import chicken500front from "@/assets/chickenmasala-back.png";

const HIGHLIGHT_ICONS = [Leaf, ShieldCheck, Award, Sparkles, Check, Leaf, Award];

function ProductNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Product not found</h1>
      <Button asChild className="mt-6"><Link to="/products">Back to Products</Link></Button>
    </div>
  );
}

export default function ProductDetail() {
  const { slug = "" } = useParams();
  const product = getProduct(slug);
  if (!product) return <ProductNotFound />;
  return <ProductDetailView product={product} />;
}

function ProductDetailView({ product }: { product: Product }) {
  const { addItem } = useCart();
  const defaultSize = product.sizes[Math.min(1, product.sizes.length - 1)];
  const [size, setSize] = useState<Size>(defaultSize);
  const [qty, setQty] = useState(1);

  // Only two views: Front Packet and Back Packet.
  // const views = useMemo(
  //   () => [
  //     { key: "front",  image: product.frontImage },
  //     { key: "back",  image: product.backImage },
  //   ],
  //   [product],
  // );


  const currentFrontImage = useMemo(() => {
  // Turmeric Powder - 500g packet
  if (product.slug === "chicken-masala" && size === "500g") {
    return chicken500front;
  }

  if (product.slug === "garam-masala" && size === "500g") {
  return chicken500front;
}

if (product.slug === "coriander-powder" && size === "500g") {
  return ;
}

// if (product.slug === "mustard-powder" && size === "500g") {
//   return ;
// }

  return product.frontImage;
}, [product.slug, product.frontImage, size]);

const views = useMemo(
  () => [
    {
      key: "front",
      label: "Front Packet",
      image: currentFrontImage,
    },
    {
      key: "back",
      label: "Back Packet",
      image: product.backImage,
    },
  ],
  [currentFrontImage, product.backImage],
);

  const [activeView, setActiveView] = useState(0);

  const price = product.prices[size] ?? 0;
  const related = useMemo(
    () => productsByCategory(product.category).filter((p) => p.slug !== product.slug).slice(0, 4),
    [product],
  );
  const category = getCategory(product.category);

  const add = () =>
    addItem({ slug: product.slug, name: product.name, size, price, image: product.image }, qty);

  const orderNow = () => {
    const msg = `*Order Inquiry — HITECH SPICES*\n\nProduct: ${product.name}\nSize: ${size}\nQuantity: ${qty}\nTotal: ${inr(price * qty)}`;
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: category?.name,
    brand: { "@type": "Brand", name: "SOLERO SPICES" },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.prices[product.sizes[0]] ?? 0,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "HITECH SPICES PVT LTD" },
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "/products" },
      { "@type": "ListItem", position: 3, name: product.name, item: `/products/${product.slug}` },
    ],
  };

  return (
    <div className="bg-cream-gradient">
      <Seo
        title={`${product.name} — SOLERO SPICES | HITECH SPICES PVT LTD`}
        description={`Buy ${product.name} by SOLERO SPICES (HITECH SPICES PVT LTD). ${product.description.slice(0, 110)}`}
        canonical={`/products/${product.slug}`}
        ogType="product"
        jsonLd={[productSchema, breadcrumbSchema]}
      />

      <div className="mx-auto max-w-7xl px-5 py-10">
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link> /{" "}
          <Link to="/products" className="hover:text-primary">Products</Link> /{" "}
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* <div className="grid gap-10 lg:grid-cols-2"> */}
        {/* to reduce whole size of cards */}

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">

          
          {/* Gallery — main image + 2 thumbnails (Front / Back packet) */}
          <div>
            <div className="relative overflow-hidden rounded-2xl border-ornament bg-white shadow-card">
              <div className="pointer-events-none absolute inset-0 pattern-paisley opacity-40" />
              {/* <img
                src={views[activeView].image}
                alt={`${product.name} — ${views[activeView].label}`}
                width={1024}
                height={1024}
                className="relative aspect-square w-full object-contain sm:object-cover"
              /> */}

              {/* new image sizes for this */}

      <img
  src={views[activeView].image}
  alt={`${product.name} — ${views[activeView].label}`}
  width={1024}
  height={1024}
  className="relative h-[480px] w-full object-cover"
/>
            </div>
            {/* <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4"> */}

            {/* <div className="mt-4 grid grid-cols-2 gap-3"> */}
            <div className="mt-4 flex gap-3">

              {views.map((v, i) => (
                <button
                  key={v.key}
                  onClick={() => setActiveView(i)}
                  title={v.label}
                  aria-pressed={activeView === i}
                  // className={`group overflow-hidden rounded-xl border bg-card text-left transition-all ${
                    className={`group h-[190px] overflow-hidden rounded-xl border bg-card text-left transition-all ${
                    activeView === i ? "border-gold ring-2 ring-gold/30 shadow-soft" : "border-border hover:border-gold"
                  }`}
                >
                  <img
                    src={v.image}
                    alt={v.label}
                    loading="lazy"
                    // className="aspect-square w-full object-cover"

                  // thumbnail bottom images change
                  className="h-[160px] w-full object-contain p-4"
                    
                  />
                  {/* <span className="block px-2 py-2 text-center text-xs font-semibold text-foreground"> */}
                  <span className="block px-2 py-1 text-center text-xs font-semibold text-foreground">
                    {v.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            {category && (
              <Link to={`/categories/${category.slug}`} className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary hover:bg-gold/20">
                {category.name}
              </Link>
            )}
            <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{product.name}</h1>
            <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-spice-green/10 px-3 py-1 text-xs font-semibold text-spice-green">
              <Check className="h-3.5 w-3.5" /> In Stock — Ready to Ship
            </p>

            {/* Product Overview */}
            <div className="relative mt-5 overflow-hidden rounded-2xl border border-gold/25 bg-card/70 p-6 shadow-soft backdrop-blur">
              <CornerMandala position="br" className="h-40 w-40" />
              <p className="relative font-display text-lg font-semibold text-primary">Product Overview</p>
              <p className="relative mt-2 leading-relaxed text-muted-foreground">{product.overview}</p>
            </div>

            {/* new product template */}

            {/* Product Highlights */}
            <div className="mt-6">
              <p className="text-sm font-bold uppercase tracking-wider text-gold">Product Highlights</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.highlights.map((h, i) => {
                  const Icon = HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length];
                  return (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gradient-to-r from-cream to-accent/40 px-3 py-1.5 text-xs font-semibold text-foreground shadow-soft"
                    >
                      <Icon className="h-3.5 w-3.5 text-primary" /> {h}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Packaging Options */}
            <div className="mt-6">
              <p className="text-sm font-semibold">Packaging Options</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
                      size === s
                        ? "border-primary bg-primary text-primary-foreground shadow-soft"
                        : "border-border bg-card hover:border-gold hover:text-primary"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Price + qty */}
            <div className="mt-6 flex flex-wrap items-end gap-6">
              <div>
                <p className="text-xs text-muted-foreground">Price</p>
                <p className="font-display text-3xl font-bold text-primary">{inr(price)}</p>
              </div>
              <div>
                <p className="mb-1 text-xs text-muted-foreground">Quantity</p>
                <div className="flex items-center rounded-full border border-border bg-card">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-2 hover:text-primary"><Minus className="h-4 w-4" /></button>
                  <span className="w-10 text-center font-medium">{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)} className="px-3 py-2 hover:text-primary"><Plus className="h-4 w-4" /></button>
                </div>
              </div>
              <p className="ml-auto text-sm text-muted-foreground">Total: <span className="font-bold text-foreground">{inr(price * qty)}</span></p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" onClick={add}><ShoppingCart className="h-4 w-4" /> Add To Cart</Button>
              <Button variant="whatsapp" size="lg" onClick={orderNow}>Order On WhatsApp</Button>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <OrnamentDivider className="mb-6" />
            <h2 className="mb-6 text-center font-display text-2xl font-bold">Related Products</h2>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
              {related.map((p) => (<ProductCard key={p.slug} product={p} />))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
