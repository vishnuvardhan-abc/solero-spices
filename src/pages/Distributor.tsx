// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import { Seo } from "@/components/Seo";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { SectionHeading } from "@/components/SectionHeading";
// import { site, whatsappLink } from "@/data/site";
// import { toast } from "sonner";

// export default function Distributor() {
//   const [f, setF] = useState({ name: "", company: "", phone: "", email: "", location: "", message: "" });
//   // const submit = (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   if (!f.name.trim() || !f.phone.trim()) {
//   //     toast.error("Please enter your name and phone number.");
//   //     return;
//   //   }
//   //   const msg = `*Distributor Inquiry — HITECH SPICES*\n\nName: ${f.name}\nCompany: ${f.company}\nPhone: ${f.phone}\nEmail: ${f.email}\nLocation: ${f.location}\nMessage: ${f.message}`;
//   //   window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
//   //   toast.success("Opening WhatsApp to send your inquiry…");
//   // };

//   const submit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   if (!f.name.trim() || !f.phone.trim()) {
//     toast.error("Please enter your name and phone number.");
//     return;
//   }

//   try {
//     await emailjs.send(
//       "service_pqwxbfd",
//       "template_yy8xsvi", // We'll replace this in Step 4
//       {
//         title: "New Distributor Enquiry",
//         name: f.name,
//         company: f.company,
//         phone: f.phone,
//         email: f.email,
//         location: f.location,
//         message: f.message,
//       },
//       {
//         publicKey: "sm-gAhpZ4Rb0ORISR",
//       }
//     );

//     toast.success("Distributor enquiry sent successfully!");

//     setF({
//       name: "",
//       company: "",
//       phone: "",
//       email: "",
//       location: "",
//       message: "",
//     });

//   // } catch (error: any) {
//   //   console.log(error);

//   //   toast.error("Failed to send enquiry.");
//   // }

//   } catch (error: any) {
//   console.log("Status:", error.status);
//   console.log("Text:", error.text);
//   console.log(error);

//   toast.error("Failed to send enquiry.");
// }
// };
//   return (
//     <div>
//       <Seo
//         title="Distributor Inquiry — HITECH SPICES PVT LTD"
//         description="Become a distributor or dealer of HITECH SPICES. Submit your inquiry for dealership and export partnership opportunities."
//         canonical="/distributor"
//         ogTitle="Distributor Inquiry — HITECH SPICES"
//         ogDescription="Partner with HITECH SPICES as a distributor or dealer."
//       />

//       <section className="bg-charcoal py-16 text-center">
//         <h1 className="font-display text-4xl font-extrabold text-cream sm:text-5xl">Distributor Inquiry</h1>
//         <p className="mt-3 text-cream/80">Partner with a trusted premium spice brand.</p>
//       </section>
//       <div className="mx-auto max-w-3xl px-5 py-16">
//         <SectionHeading eyebrow="Grow With Us" title="Become a Distributor" subtitle="Fill in your details and our team will get in touch to discuss dealership and export opportunities." />
//         <form onSubmit={submit} className="mt-10 grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft sm:grid-cols-2">
//           <div><Label htmlFor="d-name">Name</Label><Input id="d-name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} maxLength={80} /></div>
//           <div><Label htmlFor="d-company">Company</Label><Input id="d-company" value={f.company} onChange={(e) => setF({ ...f, company: e.target.value })} maxLength={120} /></div>
//           <div><Label htmlFor="d-phone">Phone</Label><Input id="d-phone" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} maxLength={20} /></div>
//           <div><Label htmlFor="d-email">Email</Label><Input id="d-email" type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} maxLength={120} /></div>
//           <div className="sm:col-span-2"><Label htmlFor="d-loc">Location</Label><Input id="d-loc" value={f.location} onChange={(e) => setF({ ...f, location: e.target.value })} maxLength={120} /></div>
//           <div className="sm:col-span-2"><Label htmlFor="d-msg">Message</Label><Textarea id="d-msg" rows={4} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} maxLength={1000} /></div>
//           <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
//             <Button type="submit" variant="hero" size="lg" className="flex-1">Submit Inquiry</Button>
//             <Button asChild type="button" variant="whatsapp" size="lg" className="flex-1">
//               <a href={whatsappLink("Hello HITECH SPICES, I am interested in becoming a distributor.")} target="_blank" rel="noopener noreferrer">WhatsApp Inquiry</a>
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


// new for whatsup enquiry

import { useState } from "react";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "@/components/SectionHeading";
import { whatsappLink } from "@/data/site";
import { toast } from "sonner";

export default function Distributor() {
  const [f, setF] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!f.name.trim() || !f.phone.trim()) {
      toast.error("Please enter your name and phone number.");
      return;
    }

    const msg = `*Distributor Inquiry — HITECH SPICES*

👤 Name: ${f.name}
🏢 Company: ${f.company}
📞 Phone: ${f.phone}
📧 Email: ${f.email}
📍 Location: ${f.location}

📝 Message:
${f.message}`;

    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");

    toast.success("Opening WhatsApp...");

    setF({
      name: "",
      company: "",
      phone: "",
      email: "",
      location: "",
      message: "",
    });
  };

  return (
    <div>
      <Seo
        title="Distributor Inquiry — HITECH SPICES PVT LTD"
        description="Become a distributor or dealer of HITECH SPICES. Submit your inquiry for dealership and export partnership opportunities."
        canonical="/distributor"
        ogTitle="Distributor Inquiry — HITECH SPICES"
        ogDescription="Partner with HITECH SPICES as a distributor or dealer."
      />

      <section className="bg-charcoal py-16 text-center">
        <h1 className="font-display text-4xl font-extrabold text-cream sm:text-5xl">
          Distributor Inquiry
        </h1>
        <p className="mt-3 text-cream/80">
          Partner with a trusted premium spice brand.
        </p>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-16">
        <SectionHeading
          eyebrow="Grow With Us"
          title="Become a Distributor"
          subtitle="Fill in your details and our team will get in touch to discuss dealership and export opportunities."
        />

        <form
          onSubmit={submit}
          className="mt-10 grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft sm:grid-cols-2"
        >
          <div>
            <Label htmlFor="d-name">Name</Label>
            <Input
              id="d-name"
              value={f.name}
              onChange={(e) => setF({ ...f, name: e.target.value })}
              maxLength={80}
            />
          </div>

          <div>
            <Label htmlFor="d-company">Company</Label>
            <Input
              id="d-company"
              value={f.company}
              onChange={(e) => setF({ ...f, company: e.target.value })}
              maxLength={120}
            />
          </div>

          <div>
            <Label htmlFor="d-phone">Phone</Label>
            <Input
              id="d-phone"
              value={f.phone}
              onChange={(e) => setF({ ...f, phone: e.target.value })}
              maxLength={20}
            />
          </div>

          <div>
            <Label htmlFor="d-email">Email</Label>
            <Input
              id="d-email"
              type="email"
              value={f.email}
              onChange={(e) => setF({ ...f, email: e.target.value })}
              maxLength={120}
            />
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="d-loc">Location</Label>
            <Input
              id="d-loc"
              value={f.location}
              onChange={(e) => setF({ ...f, location: e.target.value })}
              maxLength={120}
            />
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="d-msg">Message</Label>
            <Textarea
              id="d-msg"
              rows={4}
              value={f.message}
              onChange={(e) => setF({ ...f, message: e.target.value })}
              maxLength={1000}
            />
          </div>

          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="sm:col-span-2 w-full"
          >
            Submit Inquiry
          </Button>
        </form>
      </div>
    </div>
  );
}