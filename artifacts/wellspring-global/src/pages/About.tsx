import { Link } from "wouter";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Target, Lightbulb } from "lucide-react";

// Image Paths
import directorImg from "@assets/generated_images/director.jpg";
import researchImg from "@assets/generated_images/research.jpg";
import managerImg from "@assets/generated_images/manager.jpg";
import advisorImg from "@assets/generated_images/advisor.jpg";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background w-full">
      {/* HERO SECTION */}
      <section className="bg-[#0D2B1A] text-white pt-32 pb-24 md:pt-48 md:pb-32 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(46,125,50,0.3),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <AnimatedSection>
            <h1 className="font-serif text-5xl md:text-7xl mb-6">About Well Spring Global</h1>
            <p className="text-[#F57C00] font-serif text-2xl italic tracking-wide mb-8">Health, Hope & Humanity</p>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              We are a consortium of public health experts dedicated to transforming health outcomes in underserved communities worldwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 px-4 md:px-6 container mx-auto -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection delay={0.1}>
            <div className="bg-primary text-white p-10 md:p-16 rounded-3xl h-full flex flex-col shadow-xl">
              <Target size={40} className="text-[#AEEA00] mb-8" />
              <h2 className="font-serif text-3xl mb-4">Our Mission</h2>
              <p className="text-white/90 text-lg leading-relaxed font-medium">
                To conduct research, provide technical support, and implement community-based health programmes that improve access to quality healthcare for underserved populations.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="bg-secondary text-white p-10 md:p-16 rounded-3xl h-full flex flex-col shadow-xl">
              <Lightbulb size={40} className="text-[#AEEA00] mb-8" />
              <h2 className="font-serif text-3xl mb-4">Our Vision</h2>
              <p className="text-white/90 text-lg leading-relaxed font-medium">
                A world where every community, regardless of geography or income, has access to evidence-based healthcare and skilled health workers.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* OBJECTIVES ACCORDION */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Our Objectives</h2>
              <p className="text-muted-foreground text-lg">The foundational pillars that guide our interventions.</p>
            </div>

            <Accordion type="single" collapsible className="w-full bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-border">
              {[
                {
                  id: "A",
                  title: "Research, Technical Support, Consultancy, And Programme Implementation",
                  desc: "Improving access to quality healthcare through community-based health interventions."
                },
                {
                  id: "B",
                  title: "Community Health Research",
                  desc: "Improving health outcomes and addressing public health challenges among vulnerable populations."
                },
                {
                  id: "C",
                  title: "Health Education, Awareness, And Outreach",
                  desc: "Focusing on maternal and child health, nutrition, infectious and non-communicable diseases, and environmental health."
                },
                {
                  id: "D",
                  title: "Strengthen Health Systems",
                  desc: "Partnering with government agencies, NGOs, and other organizations to enhance service delivery."
                },
                {
                  id: "E",
                  title: "Capacity Building",
                  desc: "Training healthcare workers, community volunteers, and youth through training, mentorship, and empowerment."
                },
                {
                  id: "F",
                  title: "Design, Implement, Manage, And Support",
                  desc: "Executing public health, medical, and community development programmes for underserved populations."
                },
                {
                  id: "G",
                  title: "Research, Policy Analysis, And Technical Advisory",
                  desc: "Supporting evidence-based health policies and programmes at local and national levels."
                },
                {
                  id: "H",
                  title: "Public Health Education & Behaviour Change Communication",
                  desc: "Developing and deploying disease prevention programmes for communities and organizations."
                },
                {
                  id: "I",
                  title: "Collaborate With Academic Institutions",
                  desc: "Partnering with research bodies and international organizations to implement sustainable health programs."
                },
                {
                  id: "K",
                  title: "Public Health Consultancy, M&E, Data Analytics",
                  desc: "Providing capacity-building services to governments, private organizations, development partners, and communities."
                },
                {
                  id: "J",
                  title: "Incidental Activities",
                  desc: "Engaging in any other activities conducive to the attainment of the above objectives."
                }
              ].map((obj) => (
                <AccordionItem key={obj.id} value={obj.id} className="border-b-border/50 py-2">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary hover:no-underline transition-colors py-4">
                    <span className="flex gap-4">
                      <span className="text-primary font-bold">{obj.id}.</span>
                      {obj.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-8 pb-6 text-base leading-relaxed">
                    {obj.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="py-24 container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Meet our team</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A consortium of public health experts, researchers, and implementation specialists dedicated to transforming health outcomes.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { img: directorImg, name: "Dr. Emmanuel Okonkwo", title: "Executive Director" },
            { img: researchImg, name: "Dr. Amara Diallo", title: "Director of Research" },
            { img: managerImg, name: "Mr. Chukwuemeka Eze", title: "Director of Programmes" },
            { img: advisorImg, name: "Dr. Fatima Al-Hassan", title: "Technical Advisor" }
          ].map((person, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="w-full aspect-[4/3] mb-6 overflow-hidden rounded-2xl bg-muted grayscale">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-1">{person.name}</h3>
                <p className="text-muted-foreground text-sm">{person.title}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-20 border-t border-border bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h2 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-10">Our Partners & Networks</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {["Government Agencies", "Academic Institutions", "International NGOs", "Development Partners", "Community Organizations"].map((partner, i) => (
                <div key={i} className="px-6 py-4 border border-border rounded-xl bg-muted/20 font-medium text-foreground/70 hover:border-primary hover:text-primary transition-colors">
                  {partner}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
