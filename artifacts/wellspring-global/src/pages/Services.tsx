import { Link } from "wouter";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { 
  Stethoscope, FlaskConical, Heart, Building2, Users, 
  Activity, FileText, Megaphone, Globe, BarChart3, Handshake, ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Community Health Research & Consultancy",
    desc: "Technical support, consultancy and programme implementation for community health improvement."
  },
  {
    icon: FlaskConical,
    title: "Applied Public Health Research",
    desc: "Evidence-based research addressing health outcomes for vulnerable populations."
  },
  {
    icon: Heart,
    title: "Health Education & Outreach",
    desc: "Awareness and outreach programmes on maternal/child health, nutrition, infectious and non-communicable diseases."
  },
  {
    icon: Building2,
    title: "Health Systems Strengthening",
    desc: "Partnering with government agencies and NGOs to enhance grassroots service delivery."
  },
  {
    icon: Users,
    title: "Capacity Building & Training",
    desc: "Training and mentorship for healthcare workers, community volunteers, and youth."
  },
  {
    icon: Activity,
    title: "Programme Design & Management",
    desc: "Designing and implementing public health and community development programmes for underserved populations."
  },
  {
    icon: FileText,
    title: "Policy Analysis & Technical Advisory",
    desc: "Research and advisory services for evidence-based health policy development."
  },
  {
    icon: Megaphone,
    title: "Behaviour Change Communication",
    desc: "Health education and disease prevention communication programmes."
  },
  {
    icon: Globe,
    title: "Academic & International Collaboration",
    desc: "Partnerships with academic institutions and international organizations for sustainable programmes."
  },
  {
    icon: BarChart3,
    title: "Monitoring, Evaluation & Analytics",
    desc: "M&E, data analytics, and research services for governments and development partners."
  },
  {
    icon: Handshake,
    title: "Programme Implementation Support",
    desc: "End-to-end implementation management for public health and community wellbeing programmes."
  }
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-background w-full">
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-24 px-4 md:px-6 container mx-auto text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Expertise & Capabilities
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Delivering evidence-based interventions, rigorous research, and strategic technical support to strengthen health systems globally.
          </p>
        </AnimatedSection>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-32 px-4 md:px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <motion.div 
                className="bg-white border border-border p-8 rounded-3xl h-full flex flex-col shadow-sm group hover:border-primary/30"
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <service.icon className="text-foreground group-hover:text-primary transition-colors" size={28} />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-4 leading-snug">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">{service.desc}</p>
                <Link href="/enquiries" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            </AnimatedSection>
          ))}
          
          {/* CTA Card in Grid */}
          <AnimatedSection delay={services.length * 0.05}>
            <motion.div 
              className="bg-[#0D2B1A] border border-[#0D2B1A] p-8 rounded-3xl h-full flex flex-col justify-center items-center text-center shadow-lg group"
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <h3 className="font-serif text-3xl text-white mb-4">Custom Request?</h3>
              <p className="text-white/70 mb-8">We develop bespoke public health solutions tailored to specific community needs and partner objectives.</p>
              <Link href="/enquiries" className="bg-[#AEEA00] text-[#0D2B1A] px-6 py-3 rounded-full font-bold w-full hover:bg-white transition-colors">
                Contact Our Team
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#0D2B1A] text-white py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
              <div className="lg:col-span-1">
                <h2 className="font-serif text-4xl mb-6 text-[#AEEA00]">Why Partner With Us?</h2>
                <Link href="/enquiries" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium transition-colors">
                  Partner with us <ArrowRight size={18} />
                </Link>
              </div>
              
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 border-l-0 lg:border-l border-white/10 lg:pl-12">
                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm">1</span>
                    Evidence-Based
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm">Our interventions are rooted in rigorous research, data analytics, and proven public health methodologies.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm">2</span>
                    Community-Centred
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm">We design programmes with, not just for, the communities we serve, ensuring cultural relevance and sustainability.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm">3</span>
                    Results-Driven
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm">Robust monitoring and evaluation frameworks ensure our programmes deliver measurable, lasting health outcomes.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
