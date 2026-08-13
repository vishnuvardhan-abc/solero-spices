// ============================================================================
// SITE CONFIG — edit company details, contact info & WhatsApp number here.
// ============================================================================

export const site = {
  name: "HITECH SPICES PVT LTD",
  brand: "SOLERO SPICES",
  shortName: "Hitech Spices",
  tagline: "Real Taste Of Spices",
  // Public website URL used for canonical tags, sitemap & structured data.
  // 👉 Update this to your live domain after deployment.
  url: "https://www.hitechspices.com",
  // Default keywords used across pages for on-page SEO.
  keywords:
    "SOLERO SPICES, HITECH SPICES PVT LTD, Solero Spices, Indian Spices, Spice Manufacturer, Spice Supplier, Blended Spices, Whole Spices, Ground Spices, Premium Masala, Hyderabad Spices",
  // WhatsApp number in international format, digits only (country code + number)
  whatsapp: "919704233311",
  phone: "040 4852 8671",
  email: "solerospices@gmail.com",
  addressLine: "D-86, Phase-1, Jeedimetla Industrial Area, Hyderabad, Telangana 500055, India",
  streetAddress: "Jeedimetla Industrial Area",
  region: "Telangana",
  postalCode: "500055",
  country: "IN",
  city: "Hyderabad",
  hours: "Mon – Sat: 9:00 AM – 6:00 PM",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },
  // Google Maps embed for Jeedimetla, Hyderabad
  // mapEmbed:
  //   "https://www.google.com/maps?q=Jeedimetla,Hyderabad,Telangana&output=embed",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.80281211644277!2d78.45556227949685!3d17.514911315529492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb901edd9b49f9%3A0xd7d13fbd5080c543!2sHitech%20Spices%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1784630695561!5m2!1sen!2sus",
  mapLink: "https://www.google.com/maps/search/Jeedimetla,+Hyderabad,+Telangana",
} as const;


export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
