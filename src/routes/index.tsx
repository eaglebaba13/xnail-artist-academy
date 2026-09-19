import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, Check, ChevronDown, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COURSE_CONFIG } from "@/lib/course-config";
import { leadSchema } from "@/lib/lead-schema";
import { initializeMetaPixel, trackMeta } from "@/lib/meta";
import heroImage from "@/assets/nail-course-hero.jpg";
import trainingImage from "@/assets/nail-training.jpg";
import toolsImage from "@/assets/nail-tools.jpg";
import xNailLogo from "@/assets/x-nail.png.asset.json";
import mmaLogo from "@/assets/makemeartist-logo.png.asset.json";

const nailTopics = ["Nail foundations", "Nail anatomy", "Hygiene", "Sanitation", "Tools & products", "Manicure", "Nail preparation", "Gel", "Acrylic", "Extensions", "Nail art", "E-file", "Refill", "Repair", "Removal", "Maintenance", "Practical / model work"];
const businessTopics = ["Pricing", "Costing", "Client management", "Branding", "Salon operations", "Sales", "Profitability", "Business planning", "Growth"];
const digitalTopics = ["Instagram", "Content strategy", "Reels", "WhatsApp Business", "Online bookings", "Customer communication", "Lead generation", "Digital tools", "Digital operations"];
const benefits = ["Professional training", "Practical learning", "Entrepreneurship training", "Digital business skills", "Portfolio development", "Certification*", "Business guidance*"];
const careers = ["Professional Nail Artist", "Home-Based Studio", "Freelance Artist", "Own Nail Bar", "Salon Career"];
const faqs = [
  ["Is this suitable for beginners?", "The program begins with nail foundations and progresses through professional techniques, practical work, business and digital operations."],
  ["What is included in ₹60,000?", "The complete 50-day, 200-hour program covers professional nail training, practical learning, entrepreneurship, digital business skills and portfolio development."],
  ["How long is the program?", "The program runs for 50 days and includes 200 hours across four structured stages."],
  ["Is practical training included?", "Yes. Practical and model work, complete service practice, portfolio creation and a final practical assessment are part of the program."],
  ["Do I receive certification?", "Upon successful completion of the required training, practical assessment and course requirements, students receive the applicable course certificate.*"],
  ["Can I start a nail studio?", "The program includes business planning, pricing, operations, branding and guidance designed to support your professional journey. Outcomes depend on your own plans and circumstances."],
  ["What is the XNAIL Bar opportunity?", COURSE_CONFIG.opportunity],
  ["How do I apply?", "Complete the application form. Our team will contact you to discuss the program and next steps."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Professional Nail Artist & Entrepreneur Program | MakeMeArtist × XNAIL" },
      { name: "description", content: "A 50-day, 200-hour professional nail artistry, entrepreneurship and digital operations program by MakeMeArtist × XNAIL Bar." },
      { property: "og:title", content: "Professional Nail Artist & Entrepreneur Program | MakeMeArtist × XNAIL" },
      { property: "og:description", content: "Master nails, build your brand and start your professional journey with a structured 50-day program." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: COURSE_CONFIG.canonicalUrl }],
  }),
  component: LandingPage,
});

function LandingPage() {
  useEffect(() => { initializeMetaPixel(); trackMeta("PageView"); trackMeta("ViewContent"); }, []);
  const scrollToForm = () => document.querySelector("#apply")?.scrollIntoView({ behavior: "smooth" });
  return <main className="overflow-hidden bg-background pb-20 md:pb-0">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "Organization", name: COURSE_CONFIG.brand, url: COURSE_CONFIG.canonicalUrl, telephone: COURSE_CONFIG.phoneDisplay },
        { "@type": "Course", name: COURSE_CONFIG.name, description: "Professional nail training with entrepreneurship and digital operations.", provider: { "@type": "Organization", name: COURSE_CONFIG.brand }, offers: { "@type": "Offer", price: COURSE_CONFIG.price, priceCurrency: "INR" } },
        { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
      ],
    }).replace(/</g, "\\u003c") }} />
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-5 md:px-10">
      <div className="flex items-center gap-4"><img src={mmaLogo.url} alt="MakeMeArtist" className="h-7 w-auto md:h-9" /><span className="h-6 w-px bg-foreground/20"/><img src={xNailLogo.url} alt="XNAIL Bar" className="h-10 w-auto md:h-12" /></div>
      <Button variant="dark" onClick={scrollToForm} className="hidden sm:inline-flex">Apply now <ArrowRight size={16}/></Button>
    </header>

    <section className="relative min-h-[92svh] bg-ink text-paper">
      <img src={heroImage} alt="Professional nail artist applying a manicure" width={1200} height={1504} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-hero-overlay"/>
      <div className="relative mx-auto flex min-h-[92svh] max-w-7xl items-end px-5 pb-12 pt-28 md:px-10 md:pb-16">
        <div className="max-w-4xl">
          <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase text-accent tracking-label"><Sparkles size={15}/> Professional Nail Artist & Entrepreneur Program</p>
          <h1 className="font-display text-[clamp(3.3rem,9vw,8.8rem)] leading-[.82] uppercase">Become a<br/>Professional<br/><em className="text-accent not-italic">Nail Artist.</em></h1>
          <div className="mt-7 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div><p className="max-w-xl text-lg text-paper/80 md:text-2xl">Master Nails. Build Your Brand. Start Your Journey.</p><p className="mt-4 text-sm font-bold tracking-label">{COURSE_CONFIG.durationDays} DAYS • {COURSE_CONFIG.durationHours} HOURS</p></div>
            <div className="flex items-center gap-5"><span className="font-display text-4xl">{COURSE_CONFIG.priceLabel}</span><Button size="lg" onClick={scrollToForm}>Apply now <ArrowRight size={18}/></Button></div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-ink px-5 py-24 text-paper md:px-10 md:py-36"><div className="mx-auto max-w-7xl">
      <p className="section-kicker text-accent">The difference</p><h2 className="max-w-5xl font-display text-5xl leading-[.95] uppercase md:text-8xl">Don’t just learn nails.<br/><span className="text-paper/45">Learn how to build a career around them.</span></h2>
      <div className="mt-16 grid grid-cols-3 border-y border-paper/20 py-7 text-center font-bold uppercase tracking-label"><span>Skill</span><span>Business</span><span>Digital</span></div>
    </div></section>

    <section className="px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl">
      <p className="section-kicker">Transformation</p><div className="mt-8 grid gap-3 md:grid-cols-5">{["Passion","Professional Skill","Business","Digital Presence","Opportunity"].map((item,i)=><div key={item} className="flex items-center gap-3 md:block"><div className="flex aspect-[4/3] flex-1 items-end border border-border bg-card p-5 font-display text-2xl uppercase md:aspect-square md:text-3xl"><span><b className="block text-sm text-primary">0{i+1}</b>{item}</span></div>{i<4&&<ArrowDown className="shrink-0 text-primary md:mx-auto md:mt-3"/>}</div>)}</div>
    </div></section>

    <section className="border-y border-border bg-soft px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl">
      <p className="section-kicker">50-day journey</p><h2 className="section-title">One program.<br/>Four stages.</h2>
      <div className="mt-14 divide-y divide-border border-y border-border">{COURSE_CONFIG.phases.map((phase)=><div key={phase.number} className="grid grid-cols-[3rem_1fr_auto] items-center gap-4 py-6 md:grid-cols-[6rem_1fr_auto]"><span className="text-sm text-muted-foreground">{phase.number}</span><h3 className="font-display text-2xl uppercase md:text-4xl">{phase.title}</h3><span className="text-sm font-bold text-primary">{phase.days} DAYS</span></div>)}</div>
    </div></section>

    <section className="grid md:grid-cols-2"><img src={trainingImage} loading="lazy" width={1408} height={912} alt="Nail artist training in a professional academy" className="h-full min-h-[28rem] w-full object-cover"/><div className="bg-primary p-7 text-primary-foreground md:p-14"><p className="section-kicker text-primary-foreground/70">30 days</p><h2 className="section-title">Professional<br/>Nail Training</h2><TopicGrid items={nailTopics}/></div></section>
    <section className="grid md:grid-cols-2"><div className="order-2 bg-ink p-7 text-paper md:order-1 md:p-14"><p className="section-kicker text-accent">10 days</p><h2 className="section-title">Become a<br/>business owner.</h2><TopicGrid items={businessTopics}/></div><img src={toolsImage} loading="lazy" width={1008} height={1264} alt="Professional nail tools and finished nail art" className="order-1 h-full min-h-[30rem] w-full object-cover md:order-2"/></section>

    <section className="px-5 py-24 md:px-10 md:py-32"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[.8fr_1.2fr] md:items-center"><div><p className="section-kicker">2 days</p><h2 className="section-title">Digital marketing<br/>& operations</h2><p className="mt-5 max-w-md text-muted-foreground">Build an online presence designed to help you attract and communicate with customers.</p></div><TopicGrid items={digitalTopics}/></div></section>

    <section className="bg-soft px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><p className="section-kicker">What you get</p><h2 className="section-title">One course.<br/>A complete journey.</h2><div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4">{benefits.map((item,i)=><div key={item} className="min-h-44 border border-border bg-background p-6 -mt-px -ml-px"><span className="text-sm text-primary">0{i+1}</span><h3 className="mt-12 font-display text-2xl uppercase">{item}</h3></div>)}</div><p className="mt-6 text-xs text-muted-foreground">*Final certification and commercial support terms are confirmed during counselling.</p></div></section>

    <section className="px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><p className="section-kicker">Career paths</p><h2 className="section-title">Where can your<br/>skill take you?</h2><div className="mt-12 flex snap-x gap-4 overflow-x-auto pb-5">{careers.map((item,i)=><article key={item} className="flex aspect-[3/4] min-w-[75vw] snap-center flex-col justify-between bg-ink p-6 text-paper sm:min-w-72"><span className="text-primary-foreground/50">0{i+1}</span><h3 className="font-display text-3xl uppercase">{item}</h3></article>)}</div></div></section>

    <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32"><div className="mx-auto max-w-5xl text-center"><p className="section-kicker text-primary-foreground/70">The investment</p><h2 className="font-display text-5xl uppercase leading-none md:text-8xl">You’re not just buying a course.</h2><p className="mt-8 text-xl md:text-3xl">You’re investing in skill + business.</p><p className="my-8 font-display text-6xl md:text-8xl">{COURSE_CONFIG.priceLabel}</p><Button variant="dark" size="lg" onClick={scrollToForm}>Start your journey <ArrowRight size={18}/></Button></div></section>

    <section className="border-b border-border px-5 py-24 md:px-10"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center"><div><p className="section-kicker">XNAIL Bar opportunity</p><h2 className="section-title">Learn the skill.<br/>Explore the path.</h2></div><p className="text-xl leading-relaxed text-muted-foreground">{COURSE_CONFIG.opportunity}</p></div></section>

    <section className="px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-4xl"><p className="section-kicker">FAQ</p><h2 className="section-title">Questions?</h2><div className="mt-10 border-t border-border">{faqs.map(([q,a])=><details key={q} className="group border-b border-border py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold"><span>{q}</span><ChevronDown className="shrink-0 transition-transform group-open:rotate-180" size={18}/></summary><p className="max-w-2xl pt-4 text-sm leading-7 text-muted-foreground">{a}</p></details>)}</div></div></section>

    <section className="bg-ink px-5 py-24 text-paper md:px-10 md:py-32"><div className="mx-auto max-w-6xl text-center"><h2 className="font-display text-6xl uppercase leading-[.9] md:text-9xl">Your passion can become <span className="text-accent">your profession.</span></h2><p className="mt-8 text-sm font-bold tracking-label">{COURSE_CONFIG.durationDays} DAYS · {COURSE_CONFIG.durationHours} HOURS &nbsp; / &nbsp; {COURSE_CONFIG.priceLabel}</p></div></section>

    <ApplicationForm />

    <footer className="border-t border-border px-5 py-10 md:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-bold">{COURSE_CONFIG.brand}</p><p className="mt-1 text-sm text-muted-foreground">{COURSE_CONFIG.phoneDisplay}</p></div><div className="flex gap-3"><Button asChild variant="outline"><a href={COURSE_CONFIG.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp</a></Button><Button asChild variant="dark"><a href={COURSE_CONFIG.phoneHref}><Phone size={16}/> Call now</a></Button></div></div></footer>

    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between border-t border-border bg-background px-4 py-3 shadow-cta md:hidden"><strong>{COURSE_CONFIG.priceLabel}</strong><Button onClick={scrollToForm}>Apply now <ArrowRight size={16}/></Button></div>
  </main>;
}

function TopicGrid({items}:{items:readonly string[]}) { return <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-4">{items.map(item=><div key={item} className="flex items-start gap-2 border-t border-current/20 pt-3 text-sm"><Check size={15} className="mt-0.5 shrink-0"/>{item}</div>)}</div> }

function ApplicationForm() {
  const [state,setState]=useState<"idle"|"sending"|"success">("idle");
  const [error,setError]=useState("");
  async function submit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError("");
    const form=new FormData(event.currentTarget); const params=new URLSearchParams(window.location.search);
    const raw=Object.fromEntries(form.entries());
    const payload={...raw,utm_source:params.get("utm_source")||"",utm_medium:params.get("utm_medium")||"",utm_campaign:params.get("utm_campaign")||"",utm_content:params.get("utm_content")||"",utm_term:params.get("utm_term")||"",fbclid:params.get("fbclid")||"",gclid:params.get("gclid")||"",landing_page:window.location.href,referrer:document.referrer,meta_event_id:crypto.randomUUID()};
    const parsed=leadSchema.safeParse(payload); if(!parsed.success){setError(parsed.error.issues[0]?.message||"Please check your details.");return;}
    setState("sending");
    const response=await fetch("/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(parsed.data)});
    if(!response.ok){const body=await response.json().catch(()=>({error:"Please try again."}));setError(body.error||"Please try again.");setState("idle");return;}
    trackMeta("Lead",parsed.data.meta_event_id); setState("success");
  }
  if(state==="success") return <section id="apply" className="bg-soft px-5 py-24 md:px-10"><div className="mx-auto max-w-2xl text-center"><div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check/></div><h2 className="section-title">Thank you.</h2><p className="mt-4 text-xl">Our team will contact you shortly.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Button asChild><a href={COURSE_CONFIG.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Chat on WhatsApp</a></Button><Button asChild variant="outline"><a href={COURSE_CONFIG.phoneHref}><Phone size={17}/> Call now</a></Button></div></div></section>;
  return <section id="apply" className="bg-soft px-5 py-24 md:px-10"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="section-kicker">Application</p><h2 className="section-title">Ready to start?</h2><p className="mt-5 max-w-md text-muted-foreground">Tell us about your goals. Our team will contact you to discuss the program and next steps.</p></div><form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
    <Field name="full_name" label="Full name" required/><Field name="mobile" label="Mobile number" inputMode="tel" required/><Field name="whatsapp_number" label="WhatsApp number" inputMode="tel" required/><Field name="email" label="Email" type="email"/><Field name="city" label="City" required/><Field name="profession" label="Current profession" required/>
    <Select name="experience" label="Previous nail / beauty experience" options={["No previous experience","Some personal experience","Completed previous training","Currently working in beauty/nails"]}/><Select name="career_interest" label="What are you interested in?" options={["Professional nail career","Freelancing","Home-based studio","Own nail bar","Salon career"]}/><Select name="source" label="How did you hear about us?" options={["Instagram","Facebook","WhatsApp","Google","Friend or family","MakeMeArtist","Other"]}/>
    <div className="sm:col-span-2">{error&&<p role="alert" className="mb-4 text-sm font-bold text-destructive">{error}</p>}<Button type="submit" size="lg" disabled={state==="sending"} className="w-full sm:w-auto">{state==="sending"?"Submitting…":"Submit application"}<ArrowRight size={18}/></Button><p className="mt-3 text-xs text-muted-foreground">By submitting, you agree to be contacted about this program.</p></div>
  </form></div></section>;
}
function Field({label,...props}:{label:string;name:string;required?:boolean;type?:string;inputMode?:"tel"}){return <label className="grid gap-2 text-sm font-bold">{label}<input {...props} className="h-12 border-b border-input bg-transparent px-1 font-normal outline-none transition-colors focus:border-primary"/></label>}
function Select({label,name,options}:{label:string;name:string;options:string[]}){return <label className="grid gap-2 text-sm font-bold sm:col-span-2">{label}<select name={name} required defaultValue="" className="h-12 border-b border-input bg-transparent px-1 font-normal outline-none focus:border-primary"><option value="" disabled>Select an option</option>{options.map(o=><option key={o}>{o}</option>)}</select></label>}
