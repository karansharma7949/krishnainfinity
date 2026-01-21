import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FloatingElement } from "@/components/FloatingElement";
import { GlowingOrb } from "@/components/GlowingOrb";
import { ParticleField } from "@/components/ParticleField";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { MagneticButton } from "@/components/MagneticButton";
import { ArrowRight, Users, Download, Trophy, Zap, Sparkles, Star } from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import reverseludo from "@/assets/reverseludo.png";
import appProductivity from "@/assets/app-productivity.jpg";

const stats = [
  { icon: Users, value: "100+", label: "Active Users" },
  { icon: Download, value: "100+", label: "Downloads" },
  { icon: Zap, value: "2+", label: "Products" },
];

const featuredProducts = [
  {
    image: reverseludo,
    title: "Reverse Ludo",
    description: "Reverse Ludo is a unique and innovative version of the classic Ludo game, where players must reverse their way to win.",
    category: "game" as const,
  },
  {
    image: appProductivity,
    title: "InfinityMix",
    description: "Coming soon — InfinityMix will let you mix and match audio tracks to create your own custom mix.",
    category: "app" as const,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-slow-zoom"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />

        {/* Animated Orbs */}
        <GlowingOrb className="top-20 -left-32" size="lg" color="primary" />
        <GlowingOrb className="bottom-40 -right-20" size="xl" color="accent" />
        <GlowingOrb className="top-1/2 left-1/4" size="md" color="primary" />

        {/* Particles */}
        <ParticleField count={30} />

        {/* Floating Decorative Elements */}
        <FloatingElement className="absolute top-32 right-[20%] hidden md:block" speed="slow">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center animate-spin-slow">
            <Star className="w-8 h-8 text-primary" />
          </div>
        </FloatingElement>
        <FloatingElement className="absolute bottom-40 left-[15%] hidden md:block" speed="medium">
          <div className="w-12 h-12 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-accent-foreground" />
          </div>
        </FloatingElement>
        <FloatingElement className="absolute top-1/2 right-[10%] hidden lg:block" speed="fast">
          <div className="w-10 h-10 rounded-lg bg-primary/5 backdrop-blur-sm border border-primary/10 animate-morph" />
        </FloatingElement>

        <div className="container relative z-10 px-4 py-20 text-center">
          <AnimatedSection animation="fade-up" delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm animate-glow-pulse">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">New Release: Reverse Ludo</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
              Creating Games & Apps That
              <span className="text-primary bg-gradient-to-r from-primary via-accent-foreground to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient"> Inspire Joy</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              We craft immersive gaming experiences and innovative mobile applications loved by a growing community.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Button size="lg" className="group relative overflow-hidden" asChild>
                  <Link to="/products">
                    <span className="relative z-10 flex items-center">
                      Explore Products
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent-foreground to-primary bg-[length:200%_auto] opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button size="lg" variant="outline" className="backdrop-blur-sm hover:bg-background/50 transition-all duration-300" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </MagneticButton>
            </div>
          </AnimatedSection>

          {/* Scroll Indicator */}
          <AnimatedSection animation="fade-up" delay={600}>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
                <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/80 backdrop-blur-lg border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} animation="scale" delay={index * 100}>
                  <div className="text-center group">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                      <stat.icon className="w-7 h-7 text-primary transition-transform group-hover:scale-110" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 relative overflow-hidden">
        <GlowingOrb className="top-0 right-0" size="lg" color="accent" />
        <div className="container px-4 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Featured Products</h2>
                <p className="text-muted-foreground">Discover our latest and most popular creations</p>
              </div>
              <MagneticButton>
                <Button variant="outline" className="group" asChild>
                  <Link to="/products">
                    View All Products
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProducts.map((product, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
                <ProductCard {...product} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-20 bg-card relative overflow-hidden">
        <ParticleField count={20} className="opacity-50" />
        <div className="container px-4 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Krishnainfinity?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're committed to delivering exceptional experiences through innovation and passion.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Innovation First", desc: "We push boundaries with cutting-edge technology and creative game mechanics." },
              { icon: Users, title: "Community Driven", desc: "Our players shape our products through continuous feedback and engagement." },
              { icon: Trophy, title: "Award Winning", desc: "Recognized globally for excellence in game design and user experience." },
            ].map((item, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
                <Card className="group border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 group-hover:rotate-3">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4">
          <AnimatedSection animation="scale">
            <div className="relative rounded-3xl overflow-hidden bg-primary p-12 md:p-20 text-center group">
              {/* Animated Background Effects */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent))_0%,transparent_50%)] opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--accent-foreground))_0%,transparent_40%)] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

              {/* Floating shapes */}
              <FloatingElement className="absolute top-10 left-10" speed="slow">
                <div className="w-20 h-20 rounded-full border-2 border-primary-foreground/20 animate-spin-slow" />
              </FloatingElement>
              <FloatingElement className="absolute bottom-10 right-10" speed="medium">
                <div className="w-16 h-16 rounded-xl border-2 border-primary-foreground/20 rotate-45" />
              </FloatingElement>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Ready to Start Your Adventure?
                </h2>
                <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                  Join our growing community and discover why Krishnainfinity is the home of unforgettable gaming experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton>
                    <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform" asChild>
                      <Link to="/products">Browse Products</Link>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 transition-all" asChild>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
