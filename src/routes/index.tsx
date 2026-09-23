import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, Award, BookOpen, BriefcaseBusiness, Camera, Check, ChevronDown, Menu, MessageCircle, Phone, Sparkles, X, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CAREERS, CURRICULUM, WHAT_YOU_GET } from "@/lib/course-content";
import { COURSE_CONFIG } from "@/lib/course-config";
import { COURSE_IMAGES } from "@/lib/course-images";
import { leadSchema } from "@/lib/lead-schema";
import { initializeMetaPixel, trackMeta } from "@/lib/meta";
import xNailLogo from "@/assets/x-nail.png.asset.json";
import mmaLogo from "@/assets/makemeartist-logo.png.asset.json";
import avedaLogo from "@/assets/aveda-education.png.asset.json";

const description = "Join the Professional Nail Artist & Entrepreneur Program — a 50-day, 200-hour Basic-to-Advanced nail education program covering professional nail training, advanced extensions, nail art, business development, digital marketing, practical training, certification and career preparation.";
const nav = [["Program", "program"], ["Curriculum", "curriculum"], ["Career", "career"], ["Certification", "certification"], ["Investment", "investment"]] as const;
const transformation = [
  ["Passion", "Discover your passion for nail artistry."],
  ["Professional Skill", "Build professional technical skills."],
  ["Business", "Understand how to operate and grow a nail business."],
  ["Digital Presence", "Learn Instagram, Reels and portfolio marketing."],
  ["Opportunity", "Prepare for salon, freelance and entrepreneurial career paths."],
] as const;
const journey = ["Professional Training", "Practical Learning", "Entrepreneurship Training", "Digital Business Skills", "Portfolio Development", "Certification", "Career & Business Guidance"] as const;
const overviewTopics = ["Nail anatomy", "Hygiene", "Manicure", "Pedicure", "Gel", "Extensions", "Acrylic", "Advanced nail art", "Live model practice", "Photography", "Client consultation", "Pricing", "Branding", "Instagram & Reels", "Booking systems", "Inventory", "Business planning", "Career preparation"];
const trainingHighlights = ["Nail foundations", "Nail anatomy", "Hygiene", "Sanitation", "Tools & products", "Manicure", "Nail preparation", "Gel", "Acrylic", "Extensions", "Nail art", "E-file", "Refill", "Repair", "Removal", "Maintenance", "Practical / model work"];
const certificationItems = ["Industry-oriented certification", "Final theory examination", "Final practical assessment", "Practical training", "Portfolio development"];
const placementItems = ["Salon interview opportunities", "Partner salon referrals", "Freelance career guidance", "Portfolio development", "Interview preparation", "Career counselling"];
const investmentItems = ["Professional Training", "200 Hours of Education", "50-Day Program", "Professional Nail Kit", "Registration", "Practical Training", "Live Model Practice", "Internship Opportunity", "Final Assessment", "Certification", "Placement Assistance"];
const benefitIcons: LucideIcon[] = [BookOpen, Sparkles, BriefcaseBusiness, Camera, Award];
const faqs = [
  ["Is this program suitable for beginners?", "Yes. The curriculum progresses from nail science and professional hygiene through advanced techniques, practical training and career preparation."],
  ["What does the ₹60,000 fee include?", "It includes the 50-day, 200-hour program, professional training, a professional nail kit, registration, practical training, live model practice, internship opportunity, final assessment, certification and placement assistance."],
  ["What certificate is awarded?", "Students successfully completing the required training, practical work and assessments receive the applicable ACBAP Program Certificate."],
  ["Is placement guaranteed?", "No. Placement assistance may include salon interview opportunities, partner salon referrals, portfolio development, interview preparation and career counselling."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Professional Nail Artist & Entrepreneur Program | ACBAP" },
      { name: "description", content: description },
      { property: "og:title", content: "Professional Nail Artist & Entrepreneur Program | ACBAP" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: COURSE_CONFIG.canonicalUrl },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: COURSE_CONFIG.canonicalUrl }],
  }),
  component: LandingPage,
});

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { initializeMetaPixel(); trackMeta("PageView"); trackMeta("ViewContent"); }, []);
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };
  const apply = () => scrollTo("apply");
  return <main className="overflow-x-clip bg-background pb-20 md:pb-0">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Course", name: COURSE_CONFIG.name, description, provider: { "@type": "Organization", name: COURSE_CONFIG.brand }, offers: { "@type": "Offer", price: COURSE_CONFIG.price, priceCurrency: "INR" } }).replace(/</g, "\\u003c") }} />

    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto grid h-[74px] max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 lg:h-[86px] lg:px-8">
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-4">
          <img src={avedaLogo.url} alt="Aveda Education" className="h-10 w-auto max-w-[6.75rem] shrink-0 object-contain lg:h-12 lg:max-w-[8rem]" />
          <span className="h-8 w-px shrink-0 bg-border" />
          <img src={mmaLogo.url} alt="MakeMeArtist" className="h-7 min-w-0 max-w-[6rem] object-contain lg:h-8 lg:max-w-[8rem]" />
          <div className="hidden items-center gap-3 border-l border-border pl-4 md:flex"><span className="text-[9px] font-extrabold uppercase tracking-label text-muted-foreground">Industry partner</span><img src={xNailLogo.url} alt="XNAIL, industry partner" className="h-8 w-auto max-w-[6.5rem] object-contain" /></div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:flex">{nav.map(([label,id])=><button key={id} onClick={()=>scrollTo(id)} className="cursor-pointer border-0 bg-transparent text-[11px] font-extrabold uppercase tracking-label text-foreground transition-colors hover:text-primary">{label}</button>)}</nav>
          <Button onClick={apply} className="hidden sm:inline-flex">Apply now <ArrowRight size={16}/></Button>
          <Button variant="ghost" size="icon" className="xl:hidden" onClick={()=>setMenuOpen(v=>!v)} aria-label={menuOpen?"Close navigation":"Open navigation"}>{menuOpen?<X/>:<Menu/>}</Button>
        </div>
      </div>
      {menuOpen&&<nav aria-label="Mobile navigation" className="border-t border-border bg-background px-5 py-5 xl:hidden"><div className="grid gap-1">{nav.map(([label,id])=><button key={id} onClick={()=>scrollTo(id)} className="min-h-11 border-b border-border bg-transparent text-left text-sm font-bold uppercase">{label}</button>)}<button onClick={apply} className="min-h-11 bg-transparent text-left text-sm font-bold uppercase text-primary">Apply now</button></div></nav>}
    </header>

    <section className="relative min-h-[94svh] bg-ink pt-[74px] text-paper lg:pt-[86px]">
      <img src={COURSE_IMAGES.hero} alt="Professional nail artist applying a manicure in a modern salon" width={1600} height={1104} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[67%_center]" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto flex min-h-[calc(94svh-74px)] max-w-7xl items-end px-5 py-10 md:px-10 md:py-14 lg:min-h-[calc(94svh-86px)]">
        <div className="max-w-[54rem]">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-label text-accent">Professional Nail Artist & Entrepreneur Program</p>
          <h1 className="font-display text-[clamp(4rem,10vw,9rem)] leading-[.82] uppercase">Become a<br/>Professional<br/><span className="text-primary">Nail Artist.</span></h1>
          <p className="mt-6 max-w-xl text-lg font-semibold text-paper/85 md:text-2xl">Master Nails. Build Your Brand. Start Your Career.</p>
          <div className="mt-6 flex flex-wrap items-end gap-x-8 gap-y-4 border-y border-paper/25 py-5"><div><p className="text-xs font-bold uppercase tracking-label text-paper/65">Program format</p><p className="mt-1 text-sm font-extrabold sm:text-base">50 DAYS • 200 HOURS</p></div><strong className="font-display text-5xl text-accent">₹60,000</strong></div>
          <div className="mt-6 flex flex-wrap gap-3"><Button size="lg" onClick={apply}>Apply now <ArrowRight size={18}/></Button><Button size="lg" variant="outline" onClick={()=>scrollTo("curriculum")} className="border-paper/60 bg-transparent text-paper hover:bg-paper hover:text-ink">View curriculum</Button></div>
        </div>
      </div>
    </section>

    <section id="program" className="scroll-mt-24 border-b border-border bg-soft px-5 py-20 md:px-10 md:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
      <div><p className="section-kicker">Program overview</p><h2 className="section-title">Learn.<br/>Practice.<br/><span className="text-primary">Earn.</span></h2></div>
      <div className="lg:pt-12"><p className="text-2xl font-bold leading-snug md:text-3xl">A comprehensive Basic-to-Advanced Nail Education Program for aspiring nail artists, salon professionals, freelancers and future beauty entrepreneurs.</p><p className="mt-6 max-w-3xl leading-7 text-muted-foreground">From nail anatomy and hygiene to advanced extensions, creative nail art, client management, digital marketing and business development — build professional skills through structured education and practice.</p><div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 border-y border-border py-7 sm:grid-cols-3">{overviewTopics.map(item=><span key={item} className="flex items-center gap-2 text-sm font-semibold"><Check size={14} className="shrink-0 text-primary"/>{item}</span>)}</div></div>
    </div></section>

    <section className="bg-ink px-5 py-24 text-paper md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><p className="section-kicker text-accent">Transformation</p><h2 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-[.9] md:text-8xl">From interest to industry readiness.</h2><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{transformation.map(([title,copy],i)=><article key={title} className="group relative min-h-[28rem] overflow-hidden bg-ink"><img src={COURSE_IMAGES.transformation[i]} alt={`${title} stage of the professional nail artist journey`} loading="lazy" width={912} height={1200} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/><span className="absolute inset-0 bg-card-overlay"/><div className="absolute inset-x-0 bottom-0 p-5"><span className="text-sm font-bold text-accent">0{i+1}</span><h3 className="mt-2 font-display text-3xl uppercase">{title}</h3><p className="mt-2 text-sm leading-6 text-paper/75">{copy}</p></div></article>)}</div></div></section>

    <section className="px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><p className="section-kicker">The experience</p><h2 className="section-title">One course.<br/>A complete journey.</h2><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{journey.map((title,i)=><article key={title} className="group relative min-h-[25rem] overflow-hidden bg-ink text-paper"><img src={COURSE_IMAGES.journey[i]} alt={`${title} within the ACBAP program`} loading="lazy" width={912} height={1104} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/><span className="absolute inset-0 bg-card-overlay"/><div className="absolute inset-x-0 bottom-0 p-6"><span className="text-sm font-bold text-accent">0{i+1}</span><h3 className="mt-2 font-display text-3xl uppercase leading-none">{title}</h3></div></article>)}</div></div></section>

    <section className="border-y border-border bg-soft px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><p className="section-kicker">What you get</p><h2 className="section-title">Built for<br/>professional<br/>practice.</h2></div><div className="grid sm:grid-cols-2">{WHAT_YOU_GET.map((item,i)=>{const Icon=benefitIcons[i%benefitIcons.length] ?? BookOpen;return <div key={item} className="flex min-h-32 gap-4 border-b border-border py-6 sm:border-l sm:px-6"><Icon className="shrink-0 text-primary" size={22}/><div><span className="text-xs font-bold text-muted-foreground">{String(i+1).padStart(2,"0")}</span><h3 className="mt-2 text-base font-extrabold uppercase">{item}</h3></div></div>})}</div></div></div></section>

    <Curriculum />

    <section className="grid lg:grid-cols-2"><img src={COURSE_IMAGES.professionalTraining} alt="Instructor overseeing professional nail training with live models" loading="lazy" width={1408} height={1008} className="h-full min-h-[28rem] w-full object-cover"/><div className="bg-primary p-7 text-primary-foreground md:p-14 lg:p-16"><p className="section-kicker text-primary-foreground/70">Professional education</p><h2 className="section-title">Professional<br/>Nail Training</h2><div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-3">{trainingHighlights.map(item=><span key={item} className="flex items-start gap-2 border-t border-primary-foreground/25 pt-3 text-sm"><Check size={15} className="mt-0.5 shrink-0"/>{item}</span>)}</div></div></section>

    <section id="career" className="scroll-mt-24 px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><p className="section-kicker">Career paths</p><h2 className="section-title">Where can your<br/>skill take you?</h2><div className="scrollbar-thin -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 md:-mx-10 md:px-10">{CAREERS.map((career,i)=><article key={career} className="group relative aspect-[3/4] min-w-[78vw] snap-center overflow-hidden bg-ink text-paper sm:min-w-[19rem]"><img src={COURSE_IMAGES.careers[i]} alt={`${career} career path`} loading="lazy" width={800} height={1104} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/><span className="absolute inset-0 bg-card-overlay"/><div className="absolute inset-x-0 bottom-0 p-6"><span className="text-sm font-bold text-accent">{String(i+1).padStart(2,"0")}</span><h3 className="mt-2 font-display text-3xl uppercase leading-none">{career}</h3></div></article>)}</div><div className="mt-12 grid gap-8 border-t border-border pt-10 lg:grid-cols-[.8fr_1.2fr]"><h3 className="font-display text-5xl uppercase leading-none md:text-7xl">Build your career as a</h3><div><p className="text-lg leading-8 text-muted-foreground">Develop professional skills through practical exposure, portfolio development and focused career preparation across salon, freelance, education, content and entrepreneurial pathways.</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{CAREERS.map(c=><span key={c} className="flex gap-2 text-sm font-bold"><Check size={15} className="shrink-0 text-primary"/>{c}</span>)}</div></div></div></div></section>

    <section id="certification" className="scroll-mt-24 border-y border-border bg-soft"><div className="grid lg:grid-cols-2"><div className="p-7 md:p-14 lg:p-20"><p className="section-kicker">Certification</p><h2 className="section-title">Certification &<br/>Career Support</h2><p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">Students successfully completing the required training, practical work and assessments receive the applicable <strong className="text-foreground">ACBAP Program Certificate.</strong></p><div className="mt-8 grid gap-3">{certificationItems.map(item=><span key={item} className="flex gap-3 border-t border-border pt-3 font-semibold"><Award size={18} className="shrink-0 text-primary"/>{item}</span>)}</div></div><img src={COURSE_IMAGES.certificationSupport} alt="Instructor assessing a student's practical nail work" loading="lazy" width={1408} height={912} className="h-full min-h-[32rem] w-full object-cover"/></div></section>

    <section className="grid lg:grid-cols-2"><img src={COURSE_IMAGES.placementAssistance} alt="Career counsellor conducting a professional nail industry interview" loading="lazy" width={1408} height={912} className="h-full min-h-[30rem] w-full object-cover"/><div className="bg-ink p-7 text-paper md:p-14 lg:p-20"><p className="section-kicker text-accent">Career preparation</p><h2 className="section-title">Placement<br/>Assistance</h2><p className="mt-6 text-lg text-paper/70">Career support may include:</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{placementItems.map(item=><span key={item} className="flex gap-2 border-t border-paper/20 pt-3 text-sm font-semibold"><Check size={15} className="shrink-0 text-accent"/>{item}</span>)}</div></div></section>

    <section className="grid border-b border-border lg:grid-cols-2"><div className="order-2 p-7 md:p-14 lg:order-1 lg:p-20"><p className="section-kicker">Industry exposure</p><h2 className="section-title">Internship</h2><p className="mt-7 max-w-xl text-xl leading-9 text-muted-foreground">Selected/eligible students can receive practical industry exposure through partner salons.</p></div><img src={COURSE_IMAGES.internshipSalon} alt="Nail student gaining practical exposure at a partner salon" loading="lazy" width={1408} height={912} className="order-1 h-full min-h-[28rem] w-full object-cover lg:order-2"/></section>

    <section id="investment" className="scroll-mt-24 bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="section-kicker text-primary-foreground/70">Program investment</p><p className="mt-5 font-display text-8xl leading-none md:text-9xl">₹60,000</p><p className="mt-5 font-bold uppercase tracking-label">50 Days • 200 Hours • Certificate Program</p><div className="mt-8 flex flex-wrap gap-3"><Button variant="dark" size="lg" onClick={apply}>Apply now <ArrowRight size={18}/></Button><Button asChild variant="outline" size="lg" className="border-primary-foreground/70 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href={COURSE_CONFIG.phoneHref}><Phone size={17}/> Talk to counsellor</a></Button></div></div><div className="grid sm:grid-cols-2">{investmentItems.map(item=><span key={item} className="flex min-h-14 items-center gap-3 border-b border-primary-foreground/25 py-3 font-semibold sm:px-5"><Check size={17} className="shrink-0"/>{item}</span>)}</div></div></section>

    <section className="bg-ink px-5 py-24 text-paper md:px-10 md:py-32"><div className="mx-auto max-w-6xl text-center"><p className="section-kicker text-accent">Your next chapter</p><h2 className="mt-5 font-display text-[clamp(4.5rem,12vw,10rem)] uppercase leading-[.78]">Learn.<br/>Practice.<br/><span className="text-primary">Earn.</span></h2><p className="mx-auto mt-8 max-w-2xl text-xl">Turn Your Passion for Nail Art Into a Professional Career.</p><p className="mt-3 text-sm font-bold uppercase tracking-label text-paper/60">Master the Skills. Build Your Brand. Start Your Career.</p><Button size="lg" onClick={apply} className="mt-8">Apply now <ArrowRight size={18}/></Button></div></section>

    <section className="px-5 py-24 md:px-10 md:py-28"><div className="mx-auto max-w-4xl"><p className="section-kicker">FAQ</p><h2 className="section-title">Questions?</h2><div className="mt-10 border-t border-border">{faqs.map(([q,a])=><details key={q} className="group border-b border-border"><summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-5 font-bold"><span>{q}</span><ChevronDown className="shrink-0 transition-transform group-open:rotate-180" size={18}/></summary><p className="max-w-2xl pb-6 text-sm leading-7 text-muted-foreground">{a}</p></details>)}</div></div></section>

    <ApplicationForm />
    <footer className="border-t border-border px-5 py-10 md:px-10"><div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"><div className="min-w-0"><p className="font-bold">{COURSE_CONFIG.brand}</p><p className="mt-1 text-sm text-muted-foreground">{COURSE_CONFIG.phoneDisplay}</p></div><div className="flex flex-wrap gap-3"><Button asChild variant="outline"><a href={COURSE_CONFIG.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp</a></Button><Button asChild variant="dark"><a href={COURSE_CONFIG.phoneHref}><Phone size={16}/> Call now</a></Button></div></div></footer>
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[minmax(0,1fr)_auto] items-center border-t border-border bg-background px-4 py-3 shadow-cta md:hidden"><strong>₹60,000</strong><Button onClick={apply}>Apply now <ArrowRight size={16}/></Button></div>
  </main>;
}

function Curriculum() { return <section id="curriculum" className="scroll-mt-24 bg-ink px-5 py-24 text-paper md:px-10 md:py-32"><div className="mx-auto max-w-6xl"><div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><p className="section-kicker text-accent">Complete curriculum</p><h2 className="mt-4 font-display text-6xl uppercase leading-[.85] md:text-9xl">Six modules.<br/>49 lessons.</h2></div><p className="max-w-sm text-sm leading-7 text-paper/65">A complete path from nail science and technical mastery to professional practice, business and career preparation.</p></div><div className="mt-14 border-t border-paper/20">{CURRICULUM.map((module,index)=><details key={module.number} className="group border-b border-paper/20" open={index===0}><summary className="grid min-h-24 cursor-pointer list-none grid-cols-[3rem_minmax(0,1fr)_auto] items-center gap-3 py-5 md:grid-cols-[5rem_minmax(0,1fr)_auto]"><span className="text-sm font-bold text-accent">{module.number}</span><h3 className="font-display text-2xl uppercase leading-none md:text-4xl">{module.title}</h3><ChevronDown className="shrink-0 transition-transform group-open:rotate-180"/></summary><div className="grid gap-px bg-paper/15 pb-px sm:grid-cols-2">{module.items.map(item=><article key={item.number} className="bg-ink p-5 md:p-6"><span className="text-xs font-bold text-accent">{String(item.number).padStart(2,"0")}</span><h4 className="mt-2 font-bold">{item.title}</h4><p className="mt-2 text-sm leading-6 text-paper/60">{item.description}</p></article>)}</div></details>)}</div></div></section> }

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
    try { const response=await fetch("/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(parsed.data)}); if(!response.ok){const body=await response.json().catch(()=>({error:"Please try again."}));setError(body.error||"Please try again.");setState("idle");return;} trackMeta("Lead",parsed.data.meta_event_id); setState("success"); }
    catch { setError("We could not submit your application. Please try again."); setState("idle"); }
  }
  if(state==="success") return <section id="apply" className="scroll-mt-24 bg-soft px-5 py-24 md:px-10"><div className="mx-auto max-w-2xl text-center"><div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check/></div><h2 className="section-title">Thank you.</h2><p className="mt-4 text-xl">Our team will contact you shortly.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Button asChild><a href={COURSE_CONFIG.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Chat on WhatsApp</a></Button><Button asChild variant="outline"><a href={COURSE_CONFIG.phoneHref}><Phone size={17}/> Call now</a></Button></div></div></section>;
  return <section id="apply" className="scroll-mt-24 bg-soft px-5 py-24 md:px-10 md:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="section-kicker">Application</p><h2 className="section-title">Start your<br/>journey.</h2><p className="mt-5 max-w-md text-muted-foreground">Tell us about your goals. Our team will contact you to discuss the program and next steps.</p></div><form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
    <Field name="full_name" label="Full name" required/><Field name="mobile" label="Mobile number" inputMode="tel" required/><Field name="whatsapp_number" label="WhatsApp number" inputMode="tel" required/><Field name="email" label="Email" type="email"/><Field name="city" label="City" required/><Field name="profession" label="Current profession" required/>
    <Select name="experience" label="Experience level" options={["No previous experience","Some personal experience","Completed previous training","Currently working in beauty/nails"]}/><Select name="career_interest" label="Preferred career path" options={[...CAREERS]}/><Select name="source" label="How did you hear about us?" options={["Instagram","Facebook","WhatsApp","Google","Friend or family","MakeMeArtist","Other"]}/>
    <div className="sm:col-span-2">{error&&<p role="alert" className="mb-4 text-sm font-bold text-destructive">{error}</p>}<Button type="submit" size="lg" disabled={state==="sending"} className="w-full sm:w-auto">{state==="sending"?"Submitting…":"Submit application"}<ArrowRight size={18}/></Button><p className="mt-3 text-xs text-muted-foreground">By submitting, you agree to be contacted about this program.</p></div>
  </form></div></section>;
}
function Field({label,...props}:{label:string;name:string;required?:boolean;type?:string;inputMode?:"tel"}){return <label className="grid gap-2 text-sm font-bold">{label}<input {...props} className="h-12 border-b border-input bg-transparent px-1 font-normal outline-none transition-colors focus:border-primary"/></label>}
function Select({label,name,options}:{label:string;name:string;options:readonly string[]}){return <label className="grid gap-2 text-sm font-bold sm:col-span-2">{label}<select name={name} required defaultValue="" className="h-12 border-b border-input bg-transparent px-1 font-normal outline-none focus:border-primary"><option value="" disabled>Select an option</option>{options.map(o=><option key={o}>{o}</option>)}</select></label>}