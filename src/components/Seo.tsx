import { Helmet } from "react-helmet-async";
import { site } from "@/data/site";

const SITE_URL = site.url;
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

type JsonLd = Record<string, unknown>;

type SeoProps = {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  image?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  /** One or more JSON-LD structured-data objects. */
  jsonLd?: JsonLd | JsonLd[];
};

export function Seo({
  title,
  description,
  canonical,
  keywords = site.keywords,
  image,
  ogTitle,
  ogDescription,
  ogType = "website",
  jsonLd,
}: SeoProps) {
  const url = canonical ? `${SITE_URL}${canonical}` : undefined;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : DEFAULT_OG_IMAGE;
  const resolvedOgTitle = ogTitle ?? title;
  const resolvedOgDescription = ogDescription ?? description;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {url && <link rel="canonical" href={url} />}

      {/* Open Graph */}
      {resolvedOgTitle && <meta property="og:title" content={resolvedOgTitle} />}
      {resolvedOgDescription && (
        <meta property="og:description" content={resolvedOgDescription} />
      )}
      <meta property="og:type" content={ogType} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {resolvedOgTitle && <meta name="twitter:title" content={resolvedOgTitle} />}
      {resolvedOgDescription && (
        <meta name="twitter:description" content={resolvedOgDescription} />
      )}
      <meta name="twitter:image" content={ogImage} />

      {/* Structured data */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
