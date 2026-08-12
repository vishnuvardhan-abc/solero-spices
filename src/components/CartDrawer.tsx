import { useState } from "react";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/cart";
import { inr } from "@/data/products";
import { site, whatsappLink } from "@/data/site";
import { toast } from "sonner";

export function CartDrawer() {
  const { items, total, isOpen, setOpen, updateQuantity, removeItem, clear } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const checkout = () => {
    if (items.length === 0) return;
    if (!name.trim() || !phone.trim() || !address.trim()) {
      toast.error("Please fill in your name, phone and delivery address.");
      return;
    }
    const lines = items
      .map(
        (i, idx) =>
          `${idx + 1}. ${i.name} (${i.size}) x${i.quantity} = ${inr(i.price * i.quantity)}`,
      )
      .join("\n");
    const message =
      `*New Order — ${site.name}*\n\n` +
      `${lines}\n\n` +
      `*Total: ${inr(total)}*\n\n` +
      `*Customer Details*\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Delivery Address: ${address}`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp to confirm your order…");
  };

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent side="right" className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-display text-xl">
            <ShoppingBag className="h-5 w-5 text-primary" /> Your Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center text-muted-foreground">
            <ShoppingBag className="mb-3 h-12 w-12 opacity-30" />
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div className="-mx-1 flex-1 space-y-3 overflow-y-auto px-1 py-2">
              {items.map((i) => (
                <div key={i.id} className="flex gap-3 rounded-lg border border-border bg-card p-3">
                  <img src={i.image} alt={i.name} width={64} height={64} className="h-16 w-16 rounded-md object-cover" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-semibold leading-tight">{i.name}</p>
                      <button onClick={() => removeItem(i.id)} aria-label="Remove" className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground">{i.size} · {inr(i.price)}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center rounded-md border border-border">
                        <button onClick={() => updateQuantity(i.id, i.quantity - 1)} className="px-2 py-1 hover:text-primary" aria-label="Decrease">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{i.quantity}</span>
                        <button onClick={() => updateQuantity(i.id, i.quantity + 1)} className="px-2 py-1 hover:text-primary" aria-label="Increase">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-primary">{inr(i.price * i.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-border pt-4">
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="cart-name" className="text-xs">Name</Label>
                    <Input id="cart-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" maxLength={80} />
                  </div>
                  <div>
                    <Label htmlFor="cart-phone" className="text-xs">Phone</Label>
                    <Input id="cart-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" maxLength={20} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="cart-address" className="text-xs">Delivery Address</Label>
                  <Textarea id="cart-address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Full delivery address" rows={2} maxLength={300} />
                </div>
              </div>
              <div className="flex items-center justify-between text-base font-bold">
                <span>Total</span>
                <span className="text-primary">{inr(total)}</span>
              </div>
              <Button variant="whatsapp" className="w-full" size="lg" onClick={checkout}>
                Send Order on WhatsApp
              </Button>
              <button onClick={clear} className="w-full text-center text-xs text-muted-foreground hover:text-destructive">
                Clear cart
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
