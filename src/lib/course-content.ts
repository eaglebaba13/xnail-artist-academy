export type CurriculumItem = { number: number; title: string; description: string };
export type CurriculumModule = { number: string; title: string; items: CurriculumItem[] };

export const CURRICULUM: CurriculumModule[] = [
  { number: "01", title: "Nail Science & Professional Hygiene", items: [
    { number: 1, title: "Nail Anatomy & Dermatology", description: "Understand nail structure, growth, common conditions and basic skin/nail science." },
    { number: 2, title: "Advanced Sanitation & Hygiene Protocols", description: "Professional sanitation, disinfection, sterilisation and workplace hygiene." },
    { number: 3, title: "Manicure Mastery", description: "Classic, dry, spa and paraffin manicure techniques." },
    { number: 4, title: "Pedicure Mastery", description: "Spa pedicure, callus care, foot care and basic reflexology techniques." },
    { number: 5, title: "Tools, Equipment & Product Knowledge", description: "Understanding professional tools, products, equipment and their applications." },
    { number: 6, title: "Allergen Awareness & MSDS", description: "Product safety, allergy awareness, chemical handling and MSDS fundamentals." },
  ]},
  { number: "02", title: "Gel & Extension Technology", items: [
    { number: 7, title: "Gel Polish Mastery", description: "Base coat, gel colour, builder gel and top coat application." },
    { number: 8, title: "French & Ombré Gel Techniques", description: "Modern French, baby boomer and ombré applications." },
    { number: 9, title: "Soft Gel Extensions", description: "Application, shaping, structure and maintenance." },
    { number: 10, title: "Hard Gel Extensions", description: "Professional hard gel application and sculpting." },
    { number: 11, title: "Polygel Extensions", description: "Polygel application, shaping, curing and finishing." },
    { number: 12, title: "Acrylic Extension System", description: "Complete acrylic extension process from preparation to finishing." },
    { number: 13, title: "Forms vs. Tips", description: "Understanding tips and forms with advanced extension techniques." },
    { number: 14, title: "Apex & C-Curve Architecture", description: "Creating balanced, strong and professionally structured nails." },
    { number: 15, title: "Refill & Maintenance", description: "Professional infills, rebalance and maintenance procedures." },
    { number: 16, title: "E-File & Drill Machine Mastery", description: "Safe and professional use of electric files and drill bits." },
    { number: 17, title: "Nail Repair Techniques", description: "Repairing cracks, lifting, breaks and damaged extensions." },
    { number: 18, title: "Professional Nail Removal", description: "Safe soak-off and e-file removal techniques." },
    { number: 19, title: "Gel-X & Press-On Nail Systems", description: "Application, customisation and professional finishing." },
  ]},
  { number: "03", title: "Advanced Nail Art", items: [
    { number: 20, title: "Freehand Nail Art Fundamentals", description: "Lines, shapes, detailing and brush control." },
    { number: 21, title: "One-Stroke Nail Art", description: "Professional one-stroke painting techniques." },
    { number: 22, title: "3D Acrylic Nail Art", description: "Sculpting three-dimensional acrylic designs." },
    { number: 23, title: "4D & 5D Embellishment Techniques", description: "Advanced dimensional designs and embellishments." },
    { number: 24, title: "Chrome & Mirror Effects", description: "Chrome powders, mirror effects and specialty finishes." },
    { number: 25, title: "Cat-Eye & Magnetic Gels", description: "Magnetic gel techniques and professional effects." },
    { number: 26, title: "Glitter, Foils & Pigments", description: "Application and combination of specialty nail art materials." },
    { number: 27, title: "Stamping & Decal Techniques", description: "Professional stamping, decals and design transfer." },
    { number: 28, title: "Encapsulation Techniques", description: "Embedding glitter, dried flowers, foil and decorative elements." },
    { number: 29, title: "Bridal Nail Styling", description: "Designing customised nail looks for brides and special occasions." },
    { number: 30, title: "Editorial & Competition Nails", description: "Creative, high-fashion and competition-oriented nail design." },
    { number: 31, title: "Colour Theory for Nail Artists", description: "Colour combinations, contrast, tones and design coordination." },
  ]},
  { number: "04", title: "Professional Practice", items: [
    { number: 32, title: "Live Model Practice", description: "Hands-on training with multiple live models." },
    { number: 33, title: "Photography for Nail Portfolios", description: "Professional nail photography, angles, lighting and portfolio creation." },
    { number: 34, title: "Client Consultation Framework", description: "Understanding client requirements and recommending suitable services." },
    { number: 35, title: "Professional Client Communication", description: "Building confidence, communication skills and long-term client relationships." },
    { number: 36, title: "Service Menu Design", description: "Creating professional nail service menus and packages." },
    { number: 37, title: "Pricing & Profit Margins", description: "Understanding service costing, pricing, margins and profitability." },
    { number: 38, title: "Salon vs. Freelance vs. Studio", description: "Understanding different career and business models." },
  ]},
  { number: "05", title: "Nail Business & Entrepreneurship", items: [
    { number: 39, title: "Branding for Nail Artists", description: "Building a professional personal and business brand." },
    { number: 40, title: "Instagram & Reels Strategy", description: "Content creation, Instagram positioning, Reels and portfolio marketing." },
    { number: 41, title: "Booking Systems & Client Retention", description: "Appointments, follow-ups, repeat bookings and retention strategies." },
    { number: 42, title: "Upselling & Retail", description: "Increasing revenue through add-on services and product sales." },
    { number: 43, title: "Inventory & Supplier Management", description: "Stock planning, product sourcing and supplier management." },
    { number: 44, title: "Hygiene Compliance & Professional Standards", description: "Maintaining professional hygiene, safety and operational standards." },
    { number: 45, title: "Salon, Freelance & Studio Business Planning", description: "Building a practical roadmap for starting and scaling a nail business." },
  ]},
  { number: "06", title: "Career & Industry Preparation", items: [
    { number: 46, title: "Internship at Partner Salon", description: "Industry exposure and practical experience in a professional salon environment." },
    { number: 47, title: "Mock Placement Interviews", description: "Interview preparation, professional presentation and career readiness." },
    { number: 48, title: "Final Theory Examination", description: "Assessment of technical, theoretical and professional knowledge." },
    { number: 49, title: "Final Practical Assessment", description: "Practical evaluation of nail techniques, application, finishing and client service." },
  ]},
];

export const CAREERS = [
  "Professional Nail Artist", "Nail Technician", "Nail Extension Specialist", "Nail Art Educator", "Freelance Nail Artist",
  "Bridal Nail Artist", "Salon Nail Specialist", "Nail Studio Entrepreneur", "Home-Based Nail Entrepreneur", "Nail Content Creator",
] as const;

export const WHAT_YOU_GET = [
  "Comprehensive Basic-to-Advanced Curriculum", "Professional Nail Artist Training", "Practical & Live Model Training",
  "Professional Nail Kit", "Industry-Oriented Certification", "Internship Opportunity", "Placement Assistance",
  "Business & Entrepreneurship Training", "Instagram & Reels Training", "Salon & Freelance Career Guidance",
] as const;