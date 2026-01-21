import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/krishnainfinitylogo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-card/95 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-transparent border border-border flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30">
              <img
                src={logo}
                alt="Krishnainfinity logo"
                className="w-7 h-7 rounded-md object-cover"
              />
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Krishnainfinity</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-primary py-2",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300",
                    location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="group relative overflow-hidden hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-foreground to-primary translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground relative overflow-hidden rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className={cn("transition-all duration-300", isOpen ? "rotate-90 scale-0" : "rotate-0 scale-100")}>
              <Menu className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className={cn("transition-all duration-300", isOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0")}>
              <X className="w-6 h-6" />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-out",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-muted/50",
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  )}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                    transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                className="w-full mt-2"
                style={{
                  transitionDelay: isOpen ? `${navLinks.length * 50}ms` : "0ms",
                  transform: isOpen ? "translateY(0)" : "translateY(10px)",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
