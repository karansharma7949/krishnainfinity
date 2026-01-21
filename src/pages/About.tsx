import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FloatingElement } from "@/components/FloatingElement";
import { GlowingOrb } from "@/components/GlowingOrb";
import { ParticleField } from "@/components/ParticleField";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Users, Target, Heart, Lightbulb, Sparkles } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible in gaming and app development.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Every product we create is infused with our genuine love for entertainment and technology.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Our players and users are at the heart of everything we do, shaping our journey forward.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every pixel, every line of code, and every user interaction.",
  },
];

const team = [
  { name: "Mohit Paryani", role: "Founder", initials: "MP" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-card to-background relative overflow-hidden">
        <GlowingOrb className="top-0 -left-32" size="xl" color="primary" />
        <GlowingOrb className="bottom-0 right-0" size="lg" color="accent" />
        <ParticleField count={25} className="opacity-50" />

        <div className="container px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Crafting Digital <span className="text-primary bg-gradient-to-r from-primary via-accent-foreground to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient">Experiences</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Since 2025, Krishnainfinity has been on a mission to create games and applications that bring joy, challenge minds, and connect people across the globe.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Krishnainfinity was born from a simple idea: create games and apps that we ourselves would love to use.
                </p>
                <p>
                  We've started with a focused set of products and a growing community of players and users. From games to productivity-focused apps, we stay focused on quality and user experience.
                </p>
                <p>
                  Today, we continue to innovate, embracing new technologies and listening to our community to create the next generation of digital experiences.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-32 rounded-2xl bg-primary/10 flex items-center justify-center group hover:bg-primary/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1 cursor-default">
                      <span className="text-4xl font-bold text-primary"><AnimatedCounter value="2025" /></span>
                    </div>
                    <div className="h-48 rounded-2xl bg-accent flex items-center justify-center group hover:scale-105 transition-all duration-500 hover:-translate-y-1 cursor-default animate-morph">
                      <span className="text-2xl font-semibold text-accent-foreground">Founded</span>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-48 rounded-2xl bg-secondary flex items-center justify-center group hover:scale-105 transition-all duration-500 hover:-translate-y-1 cursor-default">
                      <span className="text-2xl font-semibold text-secondary-foreground">1 Founder</span>
                    </div>
                    <div className="h-32 rounded-2xl bg-primary/10 flex items-center justify-center group hover:bg-primary/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1 cursor-default">
                      <span className="text-4xl font-bold text-primary"><AnimatedCounter value="100+" /></span>
                    </div>
                  </div>
                </div>
                {/* Floating decoration */}
                <FloatingElement className="absolute -top-4 -right-4 hidden lg:block" speed="slow">
                  <div className="w-12 h-12 rounded-full bg-primary/20 animate-pulse" />
                </FloatingElement>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <ParticleField count={20} className="opacity-30" />
        <div className="container px-4 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do at Krishnainfinity.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 100}>
                <Card className="group border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 group-hover:rotate-6 transition-all duration-300">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative overflow-hidden">
        <GlowingOrb className="top-1/2 -left-32" size="lg" color="accent" />
        <div className="container px-4 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the visionaries driving Krishnainfinity's mission forward.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
                <Card className="group border-border/50 hover:border-primary/50 transition-all duration-500 text-center hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-3">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 relative overflow-hidden">
                      <span className="text-2xl font-bold text-primary relative z-10">{member.initials}</span>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-muted-foreground text-sm">{member.role}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="container px-4 relative z-10">
          <AnimatedSection animation="scale">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                "To create digital experiences that entertain, inspire, and bring people together. We believe in the power of play and productivity to transform lives."
              </p>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full animate-pulse" />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
