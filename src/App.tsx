import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/cart";
import { Toaster } from "@/components/ui/sonner";
import { RootLayout } from "@/layouts/RootLayout";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Products = lazy(() => import("@/pages/Products"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const CategoryPage = lazy(() => import("@/pages/CategoryPage"));
const Infrastructure = lazy(() => import("@/pages/Infrastructure"));
const Quality = lazy(() => import("@/pages/Quality"));
const Careers = lazy(() => import("@/pages/Careers"));
const Distributor = lazy(() => import("@/pages/Distributor"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/categories/:slug" element={<CategoryPage />} />
              <Route path="/infrastructure" element={<Infrastructure />} />
              <Route path="/quality" element={<Quality />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/distributor" element={<Distributor />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster richColors position="top-center" />
    </CartProvider>
  );
}
