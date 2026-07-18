import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Counter } from "@/components/Counter";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";

// Image Paths
import heroImg from "@assets/generated_images/hero_programs.jpg";
import maternalProgImg from "@assets/generated_images/prog_maternal.jpg";
import immunisationProgImg from "@assets/generated_images/prog_immunisation.jpg";
import literacyProgImg from "@assets/generated_images/prog_literacy.jpg";
import nutritionProgImg from "@assets/generated_images/prog_nutrition.jpg";
import envProgImg from "@assets/generated_images/prog_env.jpg";
import capacityProgImg from "@assets/generated_images/prog_capacity.jpg";

const programs = [
  {
    id: 1,
    category: "Maternal & Child",
    title: "Rural Maternal Health Initiative",
    location: "Northern Nigeria",
    status: "Active",
    desc: "Equipping rural clinics and training midwives to reduce maternal and infant mortality rates in underserved regions.",
    img: maternalProgImg
  },
  {
    id: 2,
    category: "Infectious Disease",
    title: "Community Immunisation Drive",
    location: "East Africa",
    status: "Ongoing",
    desc: "A coordinated campaign targeting vaccine-preventable diseases in hard-to-reach communities through mobile health teams.",
    img: immunisationProgImg
  },
  {
    id: 3,
    category: "Health Education",
    title: "Health Literacy & Behaviour Change",
    location: "West Africa",
    status: "Active",
    desc: "Community-led workshops and media campaigns promoting preventative health practices and hygiene.",
    img: literacyProgImg
  },
  {
    id: 4,
    category: "Nutrition",
    title: "Child Nutrition & Food Security",
    location: "Sahel Region",
    status: "Ongoing",
    desc: "Addressing severe acute malnutrition through therapeutic feeding centers and agricultural education for mothers.",
    img: nutritionProgImg
  },
  {
    id: 5,
    category: "Environmental",
    title: "Environmental Health Surveillance",
    location: "Sub-Saharan Africa",
    status: "Active",
    desc: "Monitoring water quality, sanitation infrastructure, and vector control to prevent outbreaks of waterborne diseases.",
    img: envProgImg
  },
  {
    id: 6,
    category: "Capacity Building",
    title: "Healthcare Worker Capacity Building",
    location: "Pan-Africa",
    status: "Ongoing",
    desc: "Comprehensive training and mentorship programmes upskilling frontline health workers and community volunteers.",
    img: capacityProgImg
  }
];

export default function Programs() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredPrograms = activeTab === "All" 
    ? programs 
    : programs.filter(p => p.category === activeTab);

  return (
    <div className="flex flex-col min-h-screen bg-background w-full">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Aerial view of African village" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0D2B1A]/80 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Our Programmes</h1>
            <p className="text-xl text-white/90 font-medium">Translating research into tangible community health impact across the continent.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* IMPACT METRICS */}
      <section className="bg-[#AEEA00] py-12 relative z-20 shadow-lg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#0D2B1A]/20">
            <div className="pt-4 md:pt-0">
              <p className="text-3xl md:text-4xl font-bold text-[#0D2B1A] font-serif mb-1">
                <Counter value={50000} format={v => `${(v/1000).toFixed(0)}k+`} />
              </p>
              <p className="text-sm font-bold uppercase tracking-wider text-[#0D2B1A]/80">Communities Reached</p>
            </div>
            <div className="pt-8 md:pt-0">
              <p className="text-3xl md:text-4xl font-bold text-[#0D2B1A] font-serif mb-1">
                <Counter value={6} />
              </p>
              <p className="text-sm font-bold uppercase tracking-wider text-[#0D2B1A]/80">Active Countries</p>
            </div>
            <div className="pt-8 md:pt-0">
              <p className="text-3xl md:text-4xl font-bold text-[#0D2B1A] font-serif mb-1">
                <Counter value={1200} format={v => `${v}+`} />
              </p>
              <p className="text-sm font-bold uppercase tracking-wider text-[#0D2B1A]/80">Workers Trained</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMMES GRID & TABS */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <Tabs defaultValue="All" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12 overflow-x-auto pb-4 no-scrollbar">
            <TabsList className="bg-muted/50 p-1 rounded-full border border-border h-auto inline-flex">
              {["All", "Maternal & Child", "Infectious Disease", "Environmental", "Nutrition", "Health Education", "Capacity Building"].map(tab => (
                <TabsTrigger 
                  key={tab} 
                  value={tab}
                  className="rounded-full px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white text-foreground/70 font-medium whitespace-nowrap transition-all"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((prog, i) => (
              <AnimatedSection key={prog.id} delay={i * 0.1}>
                <div className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm flex flex-col h-full group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img src={prog.img} alt={prog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                        {prog.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                        prog.status === "Active" ? "bg-green-500 text-white" : "bg-blue-500 text-white"
                      }`}>
                        {prog.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium mb-3">
                      <MapPin size={16} className="text-primary" /> {prog.location}
                    </div>
                    <h3 className="font-serif text-2xl text-foreground mb-4 leading-snug group-hover:text-primary transition-colors">{prog.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">{prog.desc}</p>
                    
                    <Link href="/enquiries" className="mt-auto flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm w-fit border-b border-transparent hover:border-primary pb-1">
                      Support this programme <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Tabs>
      </section>
    </div>
  );
}
