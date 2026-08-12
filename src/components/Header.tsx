import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Phone, Mail, MapPin, Truck, Globe, Search, ShoppingCart, Menu, X, ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose,
} from "@/components/ui/sheet";
import {
  CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,
} from "@/components/ui/command";
import { useCart } from "@/context/cart";
import { categories, products, productsByCategory } from "@/data/products";
import { site, whatsappLink } from "@/data/site";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products", mega: true },
  { label: "Infrastructure", to: "/infrastructure" },
  // { label: "Quality", to: "/quality" },
  { label: "Careers", to: "/careers" },
  { label: "Distributor", to: "/distributor" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goProduct = (slug: string) => {
    setSearchOpen(false);
    navigate(`/products/${slug}`);
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden bg-charcoal text-cream/90 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 text-xs">
          <div className="flex items-center gap-5">
            <a href={`tel:${site.phone}`} className="flex items-center gap-1.5 hover:text-gold">
              <Phone className="h-3.5 w-3.5 text-gold" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-gold">
              <Mail className="h-3.5 w-3.5 text-gold" /> {site.email}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gold" /> {site.city}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/distributor" className="flex items-center gap-1.5 hover:text-gold">
              <Truck className="h-3.5 w-3.5 text-gold" /> Dealer Inquiry
            </Link>
            <Link to="/distributor" className="flex items-center gap-1.5 hover:text-gold">
              <Globe className="h-3.5 w-3.5 text-gold" /> Export Inquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur transition-shadow",
          scrolled && "shadow-soft",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt={site.name} width={48} height={48} className="h-11 w-auto object-contain" />
            <span className="flex flex-col leading-none">
              {/* <span className="font-display text-lg font-extrabold tracking-tight text-primary">
                SOLERO SPICES
              </span> */}

              <span className="font-display text-lg font-extrabold tracking-tight text-[#E10819]">
  SOLERO SPICES
</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                Sign Of Purity
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              "mega" in link ? (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:text-primary",
                        isActive && "text-primary",
                      )
                    }
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </NavLink>
                  {megaOpen && (
                    <div className="absolute left-1/2 top-full w-[680px] -translate-x-1/2 pt-2">
                      <div className="grid grid-cols-3 gap-4 rounded-xl border border-border bg-popover p-5 shadow-card">
                        {categories.map((c) => (
                          <div key={c.slug}>
                            <Link
                              to={`/categories/${c.slug}`}
                              className="mb-2 block text-sm font-bold text-primary hover:underline"
                            >
                              {c.name}
                            </Link>
                            <ul className="space-y-1">
                              {productsByCategory(c.slug).slice(0, 6).map((p) => (
                                <li key={p.slug}>
                                  <Link
                                    to={`/products/${p.slug}`}
                                    className="block text-xs text-muted-foreground transition-colors hover:text-foreground"
                                  >
                                    {p.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "rounded-md px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:text-primary",
                      isActive && "text-primary",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search products"
              className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-accent hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
            >
              <ShoppingCart className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-gold-foreground">
                  {count}
                </span>
              )}
            </button>
            <Button asChild variant="whatsapp" size="sm" className="hidden sm:inline-flex">
              <a href={whatsappLink("Hello HITECH SPICES, I would like to place an order.")} target="_blank" rel="noopener noreferrer">
                WhatsApp Order
              </a>
            </Button>

            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button aria-label="Open menu" className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-accent lg:hidden">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 overflow-y-auto">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="mb-6 flex items-center gap-3">
                  <img src={logo} alt="" width={40} height={40} className="h-10 w-10" />
                  <span className="font-display font-extrabold text-primary">HITECH SPICES</span>
                </div>
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.to}>
                      <NavLink
                        to={link.to}
                        end={link.to === "/"}
                        className={({ isActive }) =>
                          cn(
                            "rounded-md px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-accent",
                            isActive && "bg-accent text-primary",
                          )
                        }
                      >
                        {link.label}
                      </NavLink>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
                  <a href={`tel:${site.phone}`} className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary" /> {site.phone}
                  </a>
                  <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4 text-primary" /> {site.email}
                  </a>
                  <Button asChild variant="whatsapp" className="w-full">
                    <a href={whatsappLink("Hello HITECH SPICES, I would like to place an order.")} target="_blank" rel="noopener noreferrer">
                      WhatsApp Order
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Search dialog */}
      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <CommandInput placeholder="Search spices & masalas..." />
        <CommandList>
          <CommandEmpty>No products found.</CommandEmpty>
          {categories.map((c) => (
            <CommandGroup key={c.slug} heading={c.name}>
              {productsByCategory(c.slug).map((p) => (
                <CommandItem key={p.slug} value={p.name} onSelect={() => goProduct(p.slug)}>
                  {p.name}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
      {/* eslint-disable-next-line no-unused-expressions */}
      <span className="hidden">{products.length}</span>
    </>
  );
}
