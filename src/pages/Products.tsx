import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FloatingElement } from "@/components/FloatingElement";
import { GlowingOrb } from "@/components/GlowingOrb";
import { ParticleField } from "@/components/ParticleField";
import { Sparkles, Rocket } from "lucide-react";

import reverseludo from "@/assets/reverseludo.png";

const products = [
  {
    image: reverseludo,
    title: "Reverse Ludo",
    description: "Reverse Ludo is a unique and innovative version of the classic Ludo game, where players must reverse their way to win.",
    category: "game" as const,
  },
];

const Products = () => {
  const [filter, setFilter] = useState<"all" | "game" | "app">("all");

  const filteredProducts = filter === "all"
    ? products
    : products.filter(p => p.category === filter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-card to-background relative overflow-hidden">
        <GlowingOrb className="-top-20 -right-20" size="xl" color="primary" />
        <GlowingOrb className="bottom-0 -left-32" size="lg" color="accent" />
        <ParticleField count={30} className="opacity-50" />

        <div className="container px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Award-Winning Products</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary bg-gradient-to-r from-primary via-accent-foreground to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient">Products</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover our collection of award-winning games and innovative applications designed to entertain, inspire, and empower.
            </p>
          </AnimatedSection>
        </div>

        {/* Floating elements */}
        <FloatingElement className="absolute top-40 right-[10%] hidden lg:block" speed="slow">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center rotate-12">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
        </FloatingElement>
      </section>

      {/* Products Grid */}
      <section className="py-12 relative overflow-hidden">
        <div className="container px-4">
          {/* Filter Tabs */}
          <AnimatedSection animation="fade-up" className="flex justify-center mb-12">
            <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
              <TabsList className="grid grid-cols-3 w-full max-w-md backdrop-blur-sm">
                <TabsTrigger value="all" className="transition-all duration-300 data-[state=active]:scale-105">All Products</TabsTrigger>
                <TabsTrigger value="game" className="transition-all duration-300 data-[state=active]:scale-105">Games</TabsTrigger>
                <TabsTrigger value="app" className="transition-all duration-300 data-[state=active]:scale-105">Apps</TabsTrigger>
              </TabsList>
            </Tabs>
          </AnimatedSection>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <AnimatedSection
                key={`${product.title}-${filter}`}
                animation="fade-up"
                delay={index * 100}
              >
                <ProductCard {...product} />
              </AnimatedSection>
            ))}
          </div>

          {/* Load More */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <span>Load More Products</span>
                <div className="ml-2 w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <ParticleField count={20} className="opacity-30" />
        <div className="container px-4 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Coming Soon</h2>
              <p className="text-muted-foreground">
                We're working on exciting new projects. Stay tuned for announcements!
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { name: "InfinityMix", date: "Coming soon" },
            ].map((project, index) => (
              <AnimatedSection key={project.name} animation="scale" delay={index * 150}>
                <div className="p-6 rounded-2xl border border-dashed border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2 bg-background/50 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/20 group-hover:rotate-12 transition-all duration-500">
                    <span className="text-xl font-bold text-primary animate-pulse">?</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.date}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
