import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";
import { products, categories } from "@/data/products";

export default function Products() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      <Seo
        title="Our Products — SOLERO SPICES | HITECH SPICES PVT LTD"
        description="Browse 50+ premium spices by SOLERO SPICES (HITECH SPICES PVT LTD): blended masalas, whole spices and ground spices. 100% pure and hygienically processed."
        canonical="/products"
        ogTitle="Our Products — SOLERO SPICES | HITECH SPICES PVT LTD"
        ogDescription="Browse 50+ premium spices and masala blends by SOLERO SPICES."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Products", item: "/products" },
          ],
        }}
      />
      <SectionHeading eyebrow="Full Catalogue" title="Our Products" subtitle="100% pure spices crafted for retailers, distributors, wholesalers and export buyers." />
      {categories.map((c) => (
        <section key={c.slug} className="mt-14">
          <h2 className="mb-6 border-l-4 border-primary pl-3 font-display text-2xl font-bold">{c.name}</h2>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {products.filter((p) => p.category === c.slug).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
