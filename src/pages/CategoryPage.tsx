import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { Seo } from "@/components/Seo";
import { getCategory, productsByCategory, categories } from "@/data/products";

function CategoryNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Category not found</h1>
      <Button asChild className="mt-6"><Link to="/products">All Products</Link></Button>
    </div>
  );
}

export default function CategoryPage() {
  const { slug = "" } = useParams();
  const category = getCategory(slug);
  if (!category) return <CategoryNotFound />;
  const items = productsByCategory(category.slug);
  return (
    <div>
      <Seo
        title={`${category.name} — SOLERO SPICES | HITECH SPICES PVT LTD`}
        description={category.description.slice(0, 155)}
        canonical={`/categories/${category.slug}`}
        ogTitle={`${category.name} — SOLERO SPICES | HITECH SPICES PVT LTD`}
        ogDescription={category.description.slice(0, 155)}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Products", item: "/products" },
            { "@type": "ListItem", position: 3, name: category.name, item: `/categories/${category.slug}` },
          ],
        }}
      />
      <section className="relative overflow-hidden bg-charcoal">
        <img src={category.image} alt={category.name} className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center">
          <h1 className="font-display text-4xl font-extrabold text-cream">{category.name}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-cream/80">{category.description}</p>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {items.map((p) => (<ProductCard key={p.slug} product={p} />))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.filter((c) => c.slug !== category.slug).map((c) => (
            <Button key={c.slug} asChild variant="outline">
              <Link to={`/categories/${c.slug}`}>{c.name}</Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
