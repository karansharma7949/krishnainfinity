import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  category: "game" | "app";
  featured?: boolean;
}

export function ProductCard({ image, title, description, category, featured }: ProductCardProps) {
  return (
    <Card className={`group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${featured ? 'md:col-span-2' : ''}`}>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 ${featured ? 'h-64' : 'h-48'}`}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badge with animation */}
        <div className="absolute top-4 left-4 transition-transform duration-300 group-hover:scale-110">
          <Badge variant={category === "game" ? "default" : "secondary"} className="shadow-lg">
            {category === "game" ? "Game" : "App"}
          </Badge>
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
        </div>
      </div>
      <CardContent className="p-6 relative">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 group/btn overflow-hidden" asChild>
          <Link to="/privacy" aria-label={`Privacy policy for ${title}`}>
            <span className="relative">
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
            </span>
            <ArrowRight className="ml-2 w-4 h-4 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
