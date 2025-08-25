import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="w-8 h-8" />
              <span className="text-xl font-heading font-bold text-gradient">
                PORTFOLIO
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Passionate web developer crafting beautiful and functional digital experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-primary">Quick Links</h4>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-primary">Follow Me</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-muted/50 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} MY PORTFOLIO | Designed and Developed with ❤️ by Priyanshu Rawat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;