import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  organization: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  enquiryType: z.string({ required_error: "Please select an enquiry type" }),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(20, "Message must be at least 20 characters")
});

export default function Enquiries() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      enquiryType: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success("Enquiry Sent Successfully", {
      description: "Thank you for getting in touch. Our team will respond shortly.",
    });
    form.reset();
  };

  return (
    <div className="flex flex-col min-h-screen bg-background w-full">
      {/* HERO SECTION */}
      <section className="bg-[#0D2B1A] text-white pt-32 pb-24 md:pt-48 md:pb-32 px-4 md:px-6 relative text-center">
        <AnimatedSection>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Get In Touch</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Partner with us to implement evidence-based health programmes and build resilient communities.
          </p>
        </AnimatedSection>
      </section>

      {/* CONTACT & FORM */}
      <section className="py-24 px-4 md:px-6 container mx-auto -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Col - Contact Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <AnimatedSection>
              <div className="bg-white border border-border rounded-3xl p-8 shadow-sm">
                <h3 className="font-serif text-2xl mb-8 text-foreground">Contact Information</h3>
                
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">Head Office</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">1 Healthcare Boulevard,<br/>Abuja, Nigeria</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">Phone</p>
                      <p className="text-muted-foreground text-sm">+234 (0) 800 WELLSPRING</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">Email</p>
                      <p className="text-muted-foreground text-sm">info@wellspringglobal.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">Operating Hours</p>
                      <p className="text-muted-foreground text-sm">Mon – Fri: 8:00 AM – 5:00 PM WAT</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Globe className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">Website</p>
                      <p className="text-muted-foreground text-sm">www.wellspringglobal.org</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <div className="bg-[#AEEA00] rounded-3xl p-8 text-[#0D2B1A] shadow-sm">
                <h3 className="font-serif text-xl mb-3">Partnership & Collaboration</h3>
                <p className="text-sm font-medium leading-relaxed opacity-90">
                  Interested in partnering with us on health programmes? We welcome government agencies, NGOs, academic institutions, and development partners.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Col - Form */}
          <div className="lg:col-span-8">
            <AnimatedSection delay={0.2} className="bg-white border border-border rounded-3xl p-8 md:p-12 shadow-sm h-full">
              <h2 className="font-serif text-3xl mb-8 text-foreground">Send us a message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-muted/50 border-border/50 focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organisation / Institution</FormLabel>
                          <FormControl>
                            <Input placeholder="Ministry of Health" className="bg-muted/50 border-border/50 focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" className="bg-muted/50 border-border/50 focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+234..." className="bg-muted/50 border-border/50 focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="enquiryType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Enquiry Type *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-muted/50 border-border/50 focus:ring-primary">
                              <SelectValue placeholder="Select the nature of your enquiry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general">General Enquiry</SelectItem>
                            <SelectItem value="partnership">Programme Partnership</SelectItem>
                            <SelectItem value="consultancy">Technical Consultancy</SelectItem>
                            <SelectItem value="research">Research Collaboration</SelectItem>
                            <SelectItem value="capacity">Capacity Building</SelectItem>
                            <SelectItem value="media">Media & Communications</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject *</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help?" className="bg-muted/50 border-border/50 focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide details about your enquiry..." 
                            className="min-h-[150px] bg-muted/50 border-border/50 focus-visible:ring-primary resize-y" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6 text-lg font-medium shadow-md">
                    Send Enquiry
                  </Button>
                </form>
              </Form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl bg-[#EEEDF0] rounded-3xl p-8 md:p-16">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Frequently asked questions</h2>
              <p className="text-muted-foreground text-lg">Everything you need to know</p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What types of organisations can partner with Well Spring Global?",
                  a: "We welcome partnerships with government health ministries, local and international NGOs, academic and research institutions, development partners, UN agencies, and community-based organisations. Contact us through our enquiry form to explore collaboration opportunities."
                },
                {
                  q: "How does Well Spring Global implement health programmes?",
                  a: "We use a community-centred, evidence-based approach. Our team conducts needs assessments, designs context-appropriate interventions, builds local capacity, and implements programmes in partnership with government agencies and local stakeholders."
                },
                {
                  q: "Do you offer consultancy services to governments and private organisations?",
                  a: "Yes. We provide public health consultancy, monitoring and evaluation, data analytics, research, technical advisory, and capacity-building services to governments, private organisations, development partners, and communities."
                },
                {
                  q: "What geographical areas does Well Spring Global operate in?",
                  a: "Our programmes span sub-Saharan Africa and beyond, with a focus on underserved and vulnerable communities. We work at national, regional, and community levels in partnership with local stakeholders."
                },
                {
                  q: "How can my organisation access your training and capacity building services?",
                  a: "Submit an enquiry through our form or contact us directly. We offer customised training, mentorship, and empowerment programmes for healthcare workers, community volunteers, and youth leaders."
                },
                {
                  q: "Does Well Spring Global conduct original research?",
                  a: "Yes. Research is core to our mission. We conduct applied community health research, policy analysis, and programme evaluations, and we collaborate with academic institutions and international research bodies."
                },
                {
                  q: "How can I support Well Spring Global's work?",
                  a: "You can support us by partnering on programmes, commissioning consultancy services, collaborating on research, or joining our network of health professionals. Use the enquiry form above to get in touch."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border/20 py-2">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline transition-colors py-4 [&>svg]:hidden [&[data-state=open]_.plus-icon]:hidden [&[data-state=open]_.minus-icon]:flex [&[data-state=closed]_.plus-icon]:flex [&[data-state=closed]_.minus-icon]:hidden flex justify-between">
                    <span className="flex-1">{faq.q}</span>
                    <div className="shrink-0 w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center">
                      <span className="plus-icon text-xl leading-none mt-[-2px]">+</span>
                      <span className="minus-icon text-xl leading-none mt-[-2px] hidden">-</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
