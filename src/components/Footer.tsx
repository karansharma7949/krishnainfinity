import { Link } from "react-router-dom";
import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import logo from "@/assets/reverseludo.png";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Press", path: "/press" },
  ],
  products: [
    { name: "Games", path: "/products" },
    { name: "Apps", path: "/products" },
    { name: "Updates", path: "/updates" },
  ],
  support: [
    { name: "Help Center", path: "/help" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30">
                <img
                  src={logo}
                  alt="Krishnainfinity logo"
                  className="w-7 h-7 rounded-md object-cover"
                />
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Krishnainfinity</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mb-6">
              Creating immersive games and innovative apps for a growing community of players and users.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted/20 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: "Company", links: footerLinks.company },
            { title: "Products", links: footerLinks.products },
            { title: "Support", links: footerLinks.support },
          ].map((section, sectionIndex) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block relative group"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Krishnainfinity. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Terms of Service", "Privacy Policy"].map((text, index) => (
              <Link
                key={text}
                to={text === "Terms of Service" ? "/terms" : "/privacy"}
                className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {text}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
