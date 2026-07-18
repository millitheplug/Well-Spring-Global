import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Activity, Globe, Users, Heart, Smile, MoveLeft, MoveRight, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Counter } from "@/components/Counter";

// Image Paths
import workerImg from "@assets/generated_images/african_healthcare_worker.jpg";
import motherImg from "@assets/generated_images/african_mother_baby.jpg";
import chwImg from "@assets/generated_images/african_chw.jpg";
import researcherImg from "@assets/generated_images/african_researcher.jpg";
import community4Img from "@assets/generated_images/community_4.jpg";
import community2Img from "@assets/generated_images/community_2.jpg";
import community1Img from "@assets/generated_images/community_1.jpg";
import community3Img from "@assets/generated_images/community_3.jpg";

import maternalImg from "@assets/generated_images/maternalImg.jpg";
import survImg from "@assets/generated_images/survImg.jpg";
import ncdImg from "@assets/generated_images/ncdImg.jpg";
import envImg from "@assets/generated_images/envImg.jpg";
import sysImg from "@assets/generated_images/sysImg.jpg";
import nutritionImg from "@assets/generated_images/prog_nutrition.jpg";
import mentalImg from "@assets/generated_images/mentalImg.jpg";

import bentoHealthImg from "@assets/generated_images/bentoHealthImg.jpg";
import bentoNutritionImg from "@assets/generated_images/bentoNutritionImg.jpg";

import crisis1Img from "@assets/generated_images/crisis1Img.jpg";
import crisis2Img from "@assets/generated_images/crisis2Img.jpg";
import crisis3Img from "@assets/generated_images/crisis3Img.jpg";
import crisis4Img from "@assets/generated_images/crisis4Img.jpg";
import crisis5Img from "@assets/generated_images/crisis5Img.jpg";
import crisis6Img from "@assets/generated_images/crisis6Img.jpg";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } }
};

const PRIORITY_AREAS = [
  { title: "Maternal & Child Health", desc: "Comprehensive care programmes protecting mothers and infants across underserved communities.", img: maternalImg },
  { title: "Infectious Disease", desc: "Surveillance, prevention, and response to infectious disease outbreaks in vulnerable regions.", img: survImg },
  { title: "Non-communicable Diseases", desc: "Prevention and management of NCDs including diabetes, hypertension and cardiovascular disease.", img: ncdImg },
  { title: "Environmental Health", desc: "Addressing environmental risk factors affecting community health and wellbeing.", img: envImg },
  { title: "Health Systems", desc: "Strengthening health infrastructure and service delivery at grassroots level.", img: sysImg },
  { title: "Nutrition", desc: "Fighting malnutrition and food insecurity to improve child growth and maternal health.", img: nutritionImg },
  { title: "Mental Health", desc: "Integrating mental health services into primary care and community programmes.", img: mentalImg },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PRIORITY_AREAS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const getCardIndex = (offset: number) => {
    const len = PRIORITY_AREAS.length;
    return (activeIndex + offset + len) % len;
  };

  return (
    <div className="flex flex-col min-h-screen bg-background w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-4 md:px-6 container mx-auto">
        {/* Animated Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        <motion.div 
          className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none -z-10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.05] tracking-tight mb-6"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          >
            Building Healthier Communities, <span className="text-primary italic">One Life at a Time</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}
          >
            A consortium of public health experts delivering evidence-based interventions, research, and capacity building across underserved communities.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
          >
            <Link 
              href="/services" 
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-1"
            >
              Explore Our Services
            </Link>
            <Link 
              href="/enquiries" 
              className="w-full sm:w-auto bg-transparent border-2 border-primary/20 text-foreground px-8 py-4 rounded-full font-semibold text-lg hover:border-primary hover:bg-primary/5 transition-all"
            >
              Make an Enquiry
            </Link>
          </motion.div>
        </div>
      </section>

      {/* BENTO GRID SECTION (Screenshot 1 Match) */}
      <section className="px-4 md:px-6 container mx-auto mb-32 z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-5 gap-4 auto-rows-[160px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: Dark Green Tall */}
          <motion.div 
            variants={staggerItem}
            className="md:col-span-1 row-span-2 bg-[#0D2B1A] text-white rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group"
          >
            <div>
              <h3 className="font-serif text-6xl font-bold mb-2">12+</h3>
              <p className="text-white/70 text-sm leading-relaxed">Years of programme experience transforming health across communities.</p>
            </div>
            <Link href="/services" className="mt-4 flex items-center justify-between text-sm font-semibold bg-white/10 hover:bg-white/20 transition-colors px-4 py-3 rounded-full">
              <span>Explore our work</span>
              <div className="bg-white text-[#0D2B1A] rounded-full p-1"><ArrowUpRight size={14} /></div>
            </Link>
          </motion.div>

          {/* Card 2: Health Photo Wide */}
          <motion.div 
            variants={staggerItem}
            className="md:col-span-2 row-span-1 rounded-3xl relative overflow-hidden group"
          >
            <img src={bentoHealthImg} alt="Primary Care" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute top-4 left-4">
              <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Primary Care</span>
            </div>
          </motion.div>

          {/* Card 3: Join White */}
          <motion.div 
            variants={staggerItem}
            className="md:col-span-1 row-span-1 bg-white border border-border shadow-sm rounded-3xl p-6 flex flex-col items-center justify-center text-center group"
          >
            <h3 className="font-serif text-2xl text-foreground mb-4">Join 120,000+ People</h3>
            <Link href="/enquiries" className="inline-flex items-center gap-2 bg-[#0D2B1A] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0D2B1A]/90 transition-colors">
              Join our network <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Card 4: Lime Tall */}
          <motion.div 
            variants={staggerItem}
            className="md:col-span-1 row-span-2 bg-[#AEEA00] text-[#0D2B1A] rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-full h-1/2 opacity-30 mix-blend-multiply pointer-events-none">
               <img src={community1Img} alt="Hands" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h3 className="font-serif text-2xl font-bold mb-4">Partner with us today</h3>
              <Link href="/enquiries" className="flex items-center justify-between text-sm font-semibold bg-[#0D2B1A] text-white hover:bg-[#0D2B1A]/80 transition-colors px-4 py-3 rounded-full">
                <span>Explore now</span>
                <div className="bg-white/20 rounded-full p-1"><ArrowRight size={14} /></div>
              </Link>
            </div>
          </motion.div>

          {/* Card 5: Let them thrive */}
          <motion.div 
            variants={staggerItem}
            className="md:col-span-1 row-span-1 bg-[#111] text-white rounded-3xl p-6 flex items-center gap-4 group"
          >
            <Smile className="text-[#AEEA00] shrink-0" size={32} />
            <h3 className="font-serif text-xl leading-tight">Let them thrive</h3>
          </motion.div>

          {/* Card 6: Nutrition Photo */}
          <motion.div 
            variants={staggerItem}
            className="md:col-span-1 row-span-1 rounded-3xl relative overflow-hidden group"
          >
            <img src={bentoNutritionImg} alt="Nutrition" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white text-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Nutrition</span>
            </div>
          </motion.div>

          {/* Card 7: Your home for help */}
          <motion.div 
            variants={staggerItem}
            className="md:col-span-1 row-span-1 bg-[#F1F5F9] border border-border shadow-sm rounded-3xl p-6 flex flex-col justify-center items-center text-center group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#AEEA00]/20 rounded-bl-full" />
            <Heart className="text-[#0D2B1A] mb-2 relative z-10" size={28} />
            <h3 className="font-serif text-lg text-[#0D2B1A] relative z-10">Your home for help</h3>
          </motion.div>
        </motion.div>
      </section>

      {/* APPROACH SECTION */}
      <section className="py-24 px-4 md:px-6 container mx-auto">
        <AnimatedSection className="bg-[#AEEA00] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-[#0D2B1A] mb-4">Our Approach</h2>
            <p className="text-[#0D2B1A]/70 text-lg max-w-2xl mx-auto font-medium">How we create sustainable health impact in the communities that need it most.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { img: motherImg, title: "Strengthen Primary Care", desc: "Equipping grassroots facilities with essential resources, training, and operational frameworks." },
              { img: chwImg, title: "Build Local Capacity", desc: "Empowering community members and health workers to lead and sustain health initiatives." },
              { img: researcherImg, title: "Drive Evidence", desc: "Utilizing rigorous data collection and research to inform policies and target interventions." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl grayscale">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif text-2xl text-[#0D2B1A] mb-3">{item.title}</h3>
                <p className="text-[#0D2B1A]/80 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* PRIORITY AREAS - Spotlight Carousel */}
      <section className="py-24 bg-[#0D2B1A] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(174,234,0,0.1),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 mb-16 text-center relative z-10">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Priority Areas</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">Delivering targeted interventions across key health domains.</p>
          </AnimatedSection>
        </div>

        <div className="relative h-[480px] w-full flex items-center justify-center perspective-[1000px] z-10">
          <AnimatePresence initial={false}>
            {[-1, 0, 1].map((offset) => {
              const idx = getCardIndex(offset);
              const card = PRIORITY_AREAS[idx];
              const isCenter = offset === 0;
              
              return (
                <motion.div
                  key={`${idx}-${offset}`}
                  className={`absolute w-[280px] md:w-[360px] rounded-3xl overflow-hidden shadow-2xl ${isCenter ? 'z-20' : 'z-10'}`}
                  initial={{ 
                    x: offset * 200, 
                    scale: 0.8, 
                    opacity: 0 
                  }}
                  animate={{ 
                    x: offset * (typeof window !== 'undefined' && window.innerWidth > 768 ? 380 : 260), 
                    scale: isCenter ? 1.05 : 0.85, 
                    opacity: isCenter ? 1 : 0.5,
                    filter: isCenter ? 'grayscale(0%)' : 'grayscale(100%)'
                  }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  style={{ height: isCenter ? '420px' : '380px' }}
                >
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl text-white mb-2">{card.title}</h3>
                    {isCenter && (
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                        className="text-white/80 text-sm leading-relaxed"
                      >
                        {card.desc}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center items-center gap-6 mt-8 relative z-10">
          <button 
            onClick={() => setActiveIndex(prev => (prev - 1 + PRIORITY_AREAS.length) % PRIORITY_AREAS.length)}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <MoveLeft size={20} />
          </button>
          <div className="flex gap-2">
            {PRIORITY_AREAS.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'w-6 bg-[#AEEA00]' : 'bg-white/30'}`} />
            ))}
          </div>
          <button 
            onClick={() => setActiveIndex(prev => (prev + 1) % PRIORITY_AREAS.length)}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <MoveRight size={20} />
          </button>
        </div>
      </section>

      {/* EXTREME NEED PROGRAMMES (Bento Match) */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Programmes In Critical Need</h2>
            <p className="text-muted-foreground text-lg">Critical interventions requiring immediate support and partnership.</p>
          </div>
          <div className="hidden md:flex gap-3">
            <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"><MoveLeft size={20} /></button>
            <button className="w-12 h-12 rounded-full bg-[#0D2B1A] text-white flex items-center justify-center hover:bg-[#0D2B1A]/90 transition-colors"><MoveRight size={20} /></button>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px]">
          {/* Large Left Card */}
          <div className="col-span-1 row-span-2 group rounded-3xl overflow-hidden relative block h-full">
            <img src={crisis1Img} alt="Nigeria Crisis" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-[#F57C00] font-bold text-xs tracking-wider uppercase mb-2 block">Northern Nigeria</span>
              <h3 className="font-serif text-2xl text-white">Rural Health Crisis in Northern Nigeria</h3>
            </div>
          </div>

          {/* Top Middle */}
          <div className="col-span-1 row-span-1 group rounded-3xl overflow-hidden relative block h-full">
            <img src={crisis2Img} alt="Maternal Health" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-serif text-xl text-white">Maternal Health Crisis Nigeria</h3>
            </div>
          </div>

          {/* Top Right Landscape */}
          <div className="col-span-1 row-span-1 group rounded-3xl overflow-hidden relative block h-full">
            <img src={crisis3Img} alt="Disease Outbreak" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-[#AEEA00] font-bold text-xs tracking-wider uppercase mb-1 block">East Africa</span>
              <h3 className="font-serif text-xl text-white">Disease Outbreak</h3>
            </div>
          </div>

          {/* Bottom Left Landscape (Placed in row 3 col 1 via grid flow, wait - let's be explicit) */}
          <div className="col-span-1 row-span-1 group rounded-3xl overflow-hidden relative block h-full" style={{ gridColumn: "1", gridRow: "3" }}>
            <img src={crisis6Img} alt="Environmental" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-serif text-xl text-white">Environmental Health West Africa</h3>
            </div>
          </div>

          {/* Bottom Middle Tall */}
          <div className="col-span-1 row-span-2 group rounded-3xl overflow-hidden relative block h-full" style={{ gridColumn: "2", gridRow: "2 / span 2" }}>
            <img src={crisis4Img} alt="Malnutrition" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-serif text-2xl text-[#AEEA00] mb-2">Children's Malnutrition Crisis</h3>
              <p className="text-white/80 text-sm">Help provide life-saving nutrition</p>
            </div>
          </div>

          {/* Bottom Right Small (col 3 row 2) */}
          <div className="col-span-1 row-span-1 group rounded-3xl overflow-hidden relative block h-full" style={{ gridColumn: "3", gridRow: "2" }}>
            <img src={crisis5Img} alt="Child Health" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-serif text-xl text-white">Child Health Sahel Region</h3>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION (4 counters moved above Join section) */}
      <section className="bg-white py-16 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-border">
              <div className="text-center px-4">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2 font-serif">
                  <Counter value={120859} format={(v) => `${v.toLocaleString()}+`} />
                </p>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">People Reached</p>
              </div>
              <div className="text-center px-4">
                <p className="text-4xl md:text-5xl font-bold text-secondary mb-2 font-serif">
                  <Counter value={1200} format={(v) => `${v}+`} />
                </p>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Healthcare Workers Trained</p>
              </div>
              <div className="text-center px-4">
                <p className="text-4xl md:text-5xl font-bold text-[#F57C00] mb-2 font-serif">
                  <Counter value={47} format={(v) => `${v}+`} />
                </p>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Research Projects Completed</p>
              </div>
              <div className="text-center px-4">
                <p className="text-4xl md:text-5xl font-bold text-foreground mb-2 font-serif">
                  <Counter value={35} format={(v) => `${v}+`} />
                </p>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Global Programme Partners</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* COMMUNITY JOIN BANNER (Screenshot 3 Match) */}
      <section className="py-24 px-4 md:px-6 container mx-auto">
        <AnimatedSection>
          <div className="bg-white border border-border shadow-xl rounded-[3rem] p-10 md:p-16 relative flex flex-col justify-center items-center overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_140px] gap-8 w-full">
              
              {/* Left Images */}
              <div className="hidden md:flex flex-col gap-6 items-end justify-center">
                <div className="w-28 h-28 rounded-2xl overflow-hidden grayscale">
                  <img src={community1Img} alt="Community" className="w-full h-full object-cover" />
                </div>
                <div className="w-32 h-32 rounded-2xl overflow-hidden grayscale -translate-x-6">
                  <img src={community2Img} alt="Community" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Centre Content */}
              <div className="flex flex-col items-center text-center justify-center py-8 z-10">
                <p className="text-muted-foreground text-lg md:text-xl font-medium mb-6">
                  Join our network and be part of a positive change in global health. With over:
                </p>
                <h2 className="font-serif text-7xl md:text-9xl text-foreground font-bold mb-6 tracking-tighter">
                  <Counter value={120859} format={(v) => `${v.toLocaleString()}+`} />
                </h2>
                <p className="text-xl md:text-2xl text-foreground font-serif mb-10">
                  people already joining our health movement
                </p>
                <Link 
                  href="/enquiries" 
                  className="bg-[#0D2B1A] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-3"
                >
                  Yes, I want to join our network <ArrowRight size={20} />
                </Link>
              </div>

              {/* Right Images */}
              <div className="hidden md:flex flex-col gap-6 items-start justify-center">
                <div className="w-32 h-32 rounded-2xl overflow-hidden grayscale translate-x-4">
                  <img src={community3Img} alt="Community" className="w-full h-full object-cover" />
                </div>
                <div className="w-24 h-24 rounded-2xl overflow-hidden grayscale">
                  <img src={community4Img} alt="Community" className="w-full h-full object-cover" />
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* DIAGONAL TICKER BANDS (Screenshot 3 Match) */}
      <section className="py-20 flex flex-col items-center justify-center overflow-hidden">
        <div className="relative w-full h-[120px] flex items-center justify-center">
          {/* Dark Band - Slanted */}
          <div className="absolute w-[110%] bg-[#0D2B1A] py-5 whitespace-nowrap flex z-10 shadow-xl" style={{ transform: "rotate(-2deg) scale(1.1)" }}>
            <motion.div 
              className="flex gap-8 items-center text-white text-lg font-bold tracking-[0.2em] uppercase"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {Array(4).fill("COMMUNITY HEALTH • MATERNAL CARE • DISEASE PREVENTION • RESEARCH & POLICY • CAPACITY BUILDING • PROGRAMME IMPLEMENTATION • ").map((text, i) => (
                <span key={i} className="px-4">{text}</span>
              ))}
            </motion.div>
          </div>

          {/* Lime Band - Slanted */}
          <div className="absolute w-[110%] bg-[#AEEA00] py-5 whitespace-nowrap flex z-0" style={{ transform: "rotate(2deg) scale(1.1)" }}>
            <motion.div 
              className="flex gap-8 items-center text-[#0D2B1A] text-lg font-bold tracking-[0.2em] uppercase"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
              {Array(4).fill("HEALTH, HOPE & HUMANITY • TRANSFORMING LIVES • EVIDENCE-BASED SOLUTIONS • PUBLIC HEALTH EXCELLENCE • ").map((text, i) => (
                <span key={i} className="px-4">{text}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
