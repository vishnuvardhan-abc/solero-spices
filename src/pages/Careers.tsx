import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Seo } from "@/components/Seo";
import {
  TrendingUp, GraduationCap, ShieldCheck, Award, Users, Briefcase,
  MapPin, Clock, Mail, Phone, Building2, ArrowRight, Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { OrnamentDivider, CornerMandala } from "@/components/Ornament";
import { jobs, benefits, hr } from "@/data/careers";
import { site, whatsappLink } from "@/data/site";
import { toast } from "sonner";
import heroImg from "@/assets/infrastructure.jpg";

const benefitIcons = {
  TrendingUp, GraduationCap, ShieldCheck, Award, Users, Briefcase,
} as const;

export default function Careers() {
  const formRef = useRef<HTMLFormElement>(null);
  const [resumeName, setResumeName] = useState("");
  const [f, setF] = useState({
    name: "", email: "", mobile: "", location: "", position: "",
    experience: "", company: "", salary: "", message: "",
  });

  const scrollToForm = (position?: string) => {
    if (position) setF((p) => ({ ...p, position }));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // const submit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!f.name.trim() || !f.mobile.trim() || !f.position) {
  //     toast.error("Please enter your name, mobile number and position.");
  //     return;
  //   }
  //   const msg =
  //     `*Job Application — HITECH SPICES*\n\n` +
  //     `Name: ${f.name}\n` +
  //     `Email: ${f.email}\n` +
  //     `Mobile: ${f.mobile}\n` +
  //     `Location: ${f.location}\n` +
  //     `Position: ${f.position}\n` +
  //     `Experience: ${f.experience}\n` +
  //     `Current Company: ${f.company}\n` +
  //     `Expected Salary: ${f.salary}\n` +
  //     `Resume: ${resumeName || "(to be emailed)"}\n` +
  //     `Message: ${f.message}`;
  //   window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  //   toast.success("Opening WhatsApp to send your application…");
  // };


  const submit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!f.name.trim() || !f.mobile.trim() || !f.position) {
    toast.error("Please enter your name, mobile number and position.");
    return;
  }

  const msg =
`*📝 New Career Application*

👤 Name: ${f.name}
📧 Email: ${f.email}
📱 Mobile: ${f.mobile}
📍 Location: ${f.location}
💼 Position: ${f.position}
📈 Experience: ${f.experience}
🏢 Current Company: ${f.company}
💰 Expected Salary: ${f.salary}

💬 Message:
${f.message}

📎 Please attach your resume (PDF/DOC) before sending this message.`;

  window.open(
    whatsappLink(msg),
    "_blank",
    "noopener,noreferrer"
  );

  toast.success("WhatsApp opened. Please attach your resume and send the application.");

  reset();
};

  const reset = () => {
    setF({ name: "", email: "", mobile: "", location: "", position: "", experience: "", company: "", salary: "", message: "" });
    setResumeName("");
    formRef.current?.reset();
  };

  return (
    <div>
      <Seo
        title="Careers — HITECH SPICES PVT LTD | Jobs in Hyderabad"
        description="Build your career with HITECH SPICES, a premium spice manufacturer in Hyderabad. Explore current openings in marketing, sales, production, quality and more."
        canonical="/careers"
        ogTitle="Careers at HITECH SPICES"
        ogDescription="Join a growing team dedicated to delivering quality spices across India."
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal">
        <img src={heroImg} alt="HITECH SPICES manufacturing facility" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div aria-hidden className="pointer-events-none absolute inset-0 pattern-paisley opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-charcoal/90" />
        <CornerMandala className="absolute right-6 top-6 hidden text-gold/30 md:block" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:py-28">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-6 bg-gold" /> Join Our Team <span className="h-px w-6 bg-gold" />
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold text-cream sm:text-5xl lg:text-6xl">
            Build Your Career with Hitech Spices
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg">
            Join a growing team dedicated to delivering quality spices across India. We are always looking for passionate, talented, and hardworking individuals.
          </p>
          <Button variant="gold" size="xl" className="mt-8" onClick={() => scrollToForm()}>
            Apply Now <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeading eyebrow="Why Join Us" title="A Workplace Where You Grow" subtitle="At Hitech Spices, we invest in our people with opportunities, learning and a culture built on respect." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = benefitIcons[b.icon];
            return (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover-lift">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-spice-gradient text-cream shadow-soft transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Current Openings */}
      <section className="bg-cream-gradient py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Current Openings" title="Find Your Role" subtitle="Explore open positions and apply for the one that fits your strengths." />
          <OrnamentDivider className="mx-auto mt-6" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, i) => (
              <Reveal key={job.slug} delay={(i % 3) * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover-lift">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                    <Building2 className="h-3.5 w-3.5" /> {job.department}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-foreground">{job.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-gold" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-gold" /> {job.type}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{job.description}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /> {r}
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero" className="mt-6 w-full" onClick={() => scrollToForm(job.title)}>
                    Apply
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="mx-auto max-w-3xl px-5 py-20">
        <SectionHeading eyebrow="Apply Now" title="Job Application Form" subtitle="Fill in your details below and our HR team will review your application." />
        <form ref={formRef} onSubmit={submit} className="mt-10 grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft sm:grid-cols-2 sm:p-8">
          <div>
            <Label htmlFor="c-name">Full Name *</Label>
            <Input id="c-name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} maxLength={80} required />
          </div>
          <div>
            <Label htmlFor="c-email">Email Address</Label>
            <Input id="c-email" type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} maxLength={120} />
          </div>
          <div>
            <Label htmlFor="c-mobile">Mobile Number *</Label>
            <Input id="c-mobile" type="tel" value={f.mobile} onChange={(e) => setF({ ...f, mobile: e.target.value })} maxLength={20} required />
          </div>
          <div>
            <Label htmlFor="c-loc">Current Location</Label>
            <Input id="c-loc" value={f.location} onChange={(e) => setF({ ...f, location: e.target.value })} maxLength={120} />
          </div>
          <div>
            <Label htmlFor="c-position">Position Applying For *</Label>
            <select
              id="c-position"
              value={f.position}
              onChange={(e) => setF({ ...f, position: e.target.value })}
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="" disabled>Select a position…</option>
              {jobs.map((j) => (
                <option key={j.slug} value={j.title}>{j.title}</option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="c-exp">Years of Experience</Label>
            <Input id="c-exp" value={f.experience} onChange={(e) => setF({ ...f, experience: e.target.value })} maxLength={30} />
          </div>
          <div>
            <Label htmlFor="c-company">Current Company</Label>
            <Input id="c-company" value={f.company} onChange={(e) => setF({ ...f, company: e.target.value })} maxLength={120} />
          </div>
          <div>
            <Label htmlFor="c-salary">Expected Salary</Label>
            <Input id="c-salary" value={f.salary} onChange={(e) => setF({ ...f, salary: e.target.value })} maxLength={40} />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="c-resume">Resume Upload (PDF/DOC/DOCX)</Label>
            <label htmlFor="c-resume" className="mt-1 flex cursor-pointer items-center gap-2 rounded-md border border-dashed border-input bg-background px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground">
              <Upload className="h-4 w-4 text-gold" />
              {resumeName || "Choose a file…"}
            </label>
            <input
              id="c-resume"
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) => setResumeName(e.target.files?.[0]?.name ?? "")}
            />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="c-msg">Cover Letter / Message</Label>
            <Textarea id="c-msg" rows={4} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} maxLength={1000} />
          </div>
          <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
            <Button type="submit" variant="hero" size="lg" className="flex-1">Submit Application</Button>
            <Button type="button" variant="outline" size="lg" className="flex-1" onClick={reset}>Reset Form</Button>
          </div>
        </form>
      </section>

      {/* HR Contact */}
      <section className="bg-charcoal-gradient py-16">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="font-display text-3xl font-bold text-cream">Have Questions?</h2>
          <p className="mx-auto mt-3 max-w-xl text-cream/75">
            Reach out to our HR team for any queries about open roles or the application process.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <a href={`mailto:${hr.email}`} className="group rounded-2xl border border-cream/15 bg-cream/5 p-6 transition-colors hover:border-gold/40">
              <Mail className="mx-auto h-7 w-7 text-gold" />
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-gold">Email </p>
              <p className="mt-1 text-sm text-cream/85 group-hover:text-cream">solerospices@gmail.com</p>
            </a>
            <a href={`tel:${hr.phone}`} className="group rounded-2xl border border-cream/15 bg-cream/5 p-6 transition-colors hover:border-gold/40">
              <Phone className="mx-auto h-7 w-7 text-gold" />
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-gold">Phone</p>
              <p className="mt-1 text-sm text-cream/85 group-hover:text-cream">9704233311</p>
            </a>
            <div className="rounded-2xl border border-cream/15 bg-cream/5 p-6">
              <Clock className="mx-auto h-7 w-7 text-gold" />
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-gold">Business Hours</p>
              <p className="mt-1 text-sm text-cream/85">{hr.hours}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
