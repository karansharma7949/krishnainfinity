import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FloatingElement } from "@/components/FloatingElement";
import { GlowingOrb } from "@/components/GlowingOrb";
import { ParticleField } from "@/components/ParticleField";
import { MagneticButton } from "@/components/MagneticButton";
import { Mail, MapPin, Phone, Send, MessageSquare, Building, Sparkles } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@krishnainfinity.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    description: "Mon-Fri 9am to 6pm EST",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Gujarat, India",
    description: "Gujarat",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay for animation effect
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent! ✨",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-card to-background relative overflow-hidden">
        <GlowingOrb className="-top-20 -left-20" size="xl" color="primary" />
        <GlowingOrb className="bottom-0 right-0" size="lg" color="accent" />
        <ParticleField count={25} className="opacity-50" />

        <div className="container px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">We'd Love to Hear From You</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get in <span className="text-primary bg-gradient-to-r from-primary via-accent-foreground to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question, feedback, or partnership opportunity? We'd love to hear from you.
            </p>
          </AnimatedSection>
        </div>

        {/* Floating element */}
        <FloatingElement className="absolute top-40 right-[15%] hidden lg:block" speed="slow">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center rotate-12">
            <Mail className="w-7 h-7 text-primary" />
          </div>
        </FloatingElement>
      </section>

      {/* Contact Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <AnimatedSection key={index} animation="fade-right" delay={index * 100}>
                  <Card className="group border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 group-hover:rotate-6 transition-all duration-300">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{info.title}</h3>
                        <p className="text-foreground">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}

              {/* Additional Links */}
              <AnimatedSection animation="fade-right" delay={300}>
                <Card className="border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                    <div className="space-y-3">
                      {[
                        { icon: MessageSquare, text: "Press Inquiries" },
                        { icon: Building, text: "Careers" },
                        { icon: Mail, text: "Support" },
                      ].map((link, i) => (
                        <a
                          key={link.text}
                          href="#"
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 group"
                        >
                          <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          <span className="relative">
                            {link.text}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                          </span>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <AnimatedSection animation="fade-left" delay={200} className="lg:col-span-2">
              <Card className="border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <CardContent className="p-8 relative z-10">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 group">
                        <Label htmlFor="name" className="group-focus-within:text-primary transition-colors">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/10"
                        />
                      </div>
                      <div className="space-y-2 group">
                        <Label htmlFor="email" className="group-focus-within:text-primary transition-colors">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 group">
                      <Label htmlFor="subject" className="group-focus-within:text-primary transition-colors">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/10"
                      />
                    </div>
                    <div className="space-y-2 group">
                      <Label htmlFor="message" className="group-focus-within:text-primary transition-colors">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:scale-[1.01] focus:shadow-lg focus:shadow-primary/10 resize-none"
                      />
                    </div>
                    <MagneticButton>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full md:w-auto group relative overflow-hidden hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        <span className="relative z-10 flex items-center">
                          {isSubmitting ? "Sending..." : "Send Message"}
                          <Send className={`ml-2 w-4 h-4 transition-all duration-300 ${isSubmitting ? 'animate-bounce' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-foreground to-primary translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                      </Button>
                    </MagneticButton>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <ParticleField count={15} className="opacity-30" />
        <div className="container px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                Frequently Asked Questions
              </h2>
            </AnimatedSection>
            <div className="space-y-6">
              {[
                {
                  q: "How can I report a bug in one of your games?",
                  a: "You can report bugs through our in-game support feature or by emailing support@krishnainfinity.com with details about the issue."
                },
                {
                  q: "Do you offer partnership opportunities?",
                  a: "Yes! We're always open to collaboration. Please reach out through our contact form with your proposal."
                },
                {
                  q: "How can I apply for a job at Krishnainfinity?",
                  a: "Visit our Careers page to see current openings. We're always looking for talented individuals to join our team."
                }
              ].map((faq, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group cursor-default">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{faq.q}</h3>
                    <p className="text-muted-foreground text-sm">{faq.a}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
