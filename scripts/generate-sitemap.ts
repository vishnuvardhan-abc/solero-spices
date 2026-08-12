// ============================================================================
// Sitemap generator — runs before `dev` and `build` (predev/prebuild hooks).
// Writes public/sitemap.xml automatically from the current routes & catalogue,
// so new products/categories are always included. Update BASE_URL via the
// `url` field in src/data/site.ts.
// ============================================================================

import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { categorySlugs, productSlugs } from "../src/data/catalog";
import { site } from "../src/data/site";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = site.url.replace(/\/$/, "");

type Entry = {
  path: string;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  priority?: string;
};

const staticRoutes: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/products", changefreq: "weekly", priority: "0.9" },
  { path: "/infrastructure", changefreq: "monthly", priority: "0.6" },
  { path: "/quality", changefreq: "monthly", priority: "0.6" },
  { path: "/careers", changefreq: "monthly", priority: "0.5" },
  { path: "/distributor", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.6" },
];

const categoryRoutes: Entry[] = categorySlugs.map((slug) => ({
  path: `/categories/${slug}`,
  changefreq: "weekly",
  priority: "0.8",
}));

const productRoutes: Entry[] = productSlugs.map((slug) => ({
  path: `/products/${slug}`,
  changefreq: "monthly",
  priority: "0.7",
}));

const entries = [...staticRoutes, ...categoryRoutes, ...productRoutes];
const lastmod = new Date().toISOString().split("T")[0];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve(__dirname, "../public/sitemap.xml"), xml + "\n");
console.log(`sitemap.xml written (${entries.length} URLs)`);
