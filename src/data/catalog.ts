// ============================================================================
// CATALOG — pure product/category data with NO asset imports.
// Kept import-free so build scripts (e.g. sitemap generation) can consume it
// in a plain Node/TS environment. Product runtime data lives in products.ts.
// ============================================================================

export const categorySlugs = [
  "blended-pure-spices",
  "whole-spices",
  "grounded-spices",
] as const;

export const blendedNames = [
  "Chicken Masala", "Meat Masala", "Garam Masala", "Sabji Masala", "Chat Masala",
  "Biryani Pulav Masala", "Fish Masala", "Chole Masala", "Sambar Masala", "Noodles Masala",
  "Rasam Masala", "Pav Bhaji Masala", "Pani Puri Masala", "Jal Jeera", "Kasuri Methi",
  "Black Pepper Powder", "Amchur Powder", "Cumin Powder", "Methi Powder", 
];

export const wholeNames = [
  "Black Pepper", "Chilli Whole", "Black Cardamom", "Clove", "Star Anise",
  "Nutmeg", "Mace", "Cinnamon", "Green Cardamom", "Shahjeera",
  "Poppy Seeds", "Ajwain", "Barik Rai", "Barik Saunf", "Coriander Whole",
  "Dry Ginger", "Fenugreek", "White Til", "Yellow Mustard", "Copra Powder",
  "Jeera", "Kalonji", "Black Til", "Black Mustard", "Moti Saunf",
];

export const groundedNames = [
  "Chilli Powder", "Turmeric Powder", "Coriander Powder", "Kashmiri Chilli Powder", "Mustard  Powder",

];

export function slugify(name: string) {
  return name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/** All product slugs, in catalogue order. */
export const productSlugs = [...blendedNames, ...wholeNames, ...groundedNames].map(slugify);
