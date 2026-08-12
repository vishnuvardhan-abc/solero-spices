// import emailjs from "@emailjs/browser";
// import { useRef, useState } from "react";
// import { Seo } from "@/components/Seo";
// import { Phone, Mail, MapPin, Clock } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { SectionHeading } from "@/components/SectionHeading";
// import { site, whatsappLink } from "@/data/site";
// import { toast } from "sonner";

// // import { useRef } from "react";

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const formRef = useRef<HTMLFormElement>(null);
//   // const submit = (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   if (!form.name.trim() || !form.message.trim()) {
//   //     toast.error("Please enter your name and message.");
//   //     return;
//   //   }

// const submit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   if (!form.name.trim() || !form.message.trim()) {
//     toast.error("Please enter your name and message.");
//     return;
//   }

//   try {
//     // await emailjs.send(
//     //   "service_ig7smg4",
//     //   "template_oyfw3og",
//     //   {
//     //     title: "New Contact Enquiry",
//     //     name: form.name,
//     //     email: form.email,
//     //     message: form.message,
//     //   },
//     //   "OBHwEvd2HQyWobVH-"
//     // );


//     await emailjs.send(
//   "service_ezl103e",
//    "template_gkdlnmb",
//   {
//     title: "New Contact Enquiry",
//     name: form.name,
//     email: form.email,
//     message: form.message,
//   },
//   {
//     publicKey: "UAGkPDFZl-fd87LIx",
//   }
// );
//     toast.success("Enquiry sent successfully!");

//     setForm({
//       name: "",
//       email: "",
//       message: "",
//     });

//     formRef.current?.reset();
//  } catch (error: any) {
//   console.log("Status:", error.status);
//   console.log("Text:", error.text);
//   console.log("Error:", error);

//   toast.error("Failed to send enquiry.");
// }
// };

//   //   const msg = `*Contact Inquiry — HITECH SPICES*\n\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
//   //   window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
//   //   toast.success("Opening WhatsApp to send your message…");
//   // };

//   return (
//     <div>
//       <Seo
//         title="Contact Us — HITECH SPICES PVT LTD"
//         description="Contact HITECH SPICES in Jeedimetla, Hyderabad. Call, email or send an inquiry for orders, dealership and export."
//         canonical="/contact"
//         ogTitle="Contact Us — HITECH SPICES"
//         ogDescription="Get in touch with HITECH SPICES, Hyderabad."
//       />

//       <section className="bg-charcoal py-16 text-center">
//         <h1 className="font-display text-4xl font-extrabold text-cream sm:text-5xl">Contact Us</h1>
//         <p className="mt-3 text-cream/80">We'd love to hear from you.</p>
//       </section>
//       <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2">
//         <div>
//           <SectionHeading align="left" eyebrow="Get In Touch" title="Contact Information" />
//           <ul className="mt-6 space-y-4 text-sm">
//             <li className="flex gap-3"><MapPin className="h-5 w-5 text-primary" /><span>{site.addressLine}</span></li>
//             <li className="flex gap-3"><Phone className="h-5 w-5 text-primary" /><a href={`tel:${site.phone}`} className="hover:text-primary">{site.phone}</a></li>
//             <li className="flex gap-3"><Mail className="h-5 w-5 text-primary" /><a href={`mailto:${site.email}`} className="hover:text-primary">{site.email}</a></li>
//             <li className="flex gap-3"><Clock className="h-5 w-5 text-primary" /><span>{site.hours}</span></li>
//           </ul>
//           <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-soft">
//             <iframe title="HITECH SPICES location" src={site.mapEmbed} className="h-72 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
//           </div>
//         </div>
//         <form   ref={formRef} onSubmit={submit} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
//           <h3 className="font-display text-xl font-bold">Send an Inquiry</h3>
//           <div className="mt-4 space-y-4">
//             <div><Label htmlFor="name">Name</Label><Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={80} /></div>
//             <div><Label htmlFor="email">Email</Label><Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={120} /></div>
//             <div><Label htmlFor="message">Message</Label><Textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} /></div>
//             <Button type="submit" variant="hero" className="w-full" size="lg">Send Enquiry</Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }




// new contact one


import { useState } from "react";
import { Seo } from "@/components/Seo";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "@/components/SectionHeading";
import { site, whatsappLink } from "@/data/site";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.message.trim()) {
      toast.error("Please enter your name and message.");
      return;
    }

    const msg = `*Contact Inquiry — HITECH SPICES*

👤 Name: ${form.name}
📧 Email: ${form.email}

📝 Message:
${form.message}`;

    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");

    toast.success("Opening WhatsApp...");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <Seo
        title="Contact Us — HITECH SPICES PVT LTD"
        description="Contact HITECH SPICES in Jeedimetla, Hyderabad. Call, email or send an inquiry for orders, dealership and export."
        canonical="/contact"
        ogTitle="Contact Us — HITECH SPICES"
        ogDescription="Get in touch with HITECH SPICES, Hyderabad."
      />

      <section className="bg-charcoal py-16 text-center">
        <h1 className="font-display text-4xl font-extrabold text-cream sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-3 text-cream/80">
          We'd love to hear from you.
        </p>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Get In Touch"
            title="Contact Information"
          />

          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{site.addressLine}</span>
            </li>

            <li className="flex gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <a
                href={`tel:${site.phone}`}
                className="hover:text-primary"
              >
                {site.phone}
              </a>
            </li>

            <li className="flex gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a
                href={`mailto:${site.email}`}
                className="hover:text-primary"
              >
                {site.email}
              </a>
            </li>

            <li className="flex gap-3">
              <Clock className="h-5 w-5 text-primary" />
              <span>{site.hours}</span>
            </li>
          </ul>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              title="HITECH SPICES location"
              src={site.mapEmbed}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form
          onSubmit={submit}
          className="rounded-2xl border border-border bg-card p-6 shadow-soft"
        >
          <h3 className="font-display text-xl font-bold">
            Send an Inquiry
          </h3>

          <div className="mt-4 space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                maxLength={80}
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                maxLength={120}
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                maxLength={1000}
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              className="w-full"
              size="lg"
            >
              Send Enquiry
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}