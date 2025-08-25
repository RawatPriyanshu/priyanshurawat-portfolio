import { Button } from "@/components/ui/button";
import { Github, Instagram, Facebook, Twitter, ArrowDown } from "lucide-react";
import developerPortrait from "@/assets/developer-portrait.jpg";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const scrollToNext = () => {
    const skillsSection = document.querySelector("#skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                HEY, MYSELF{" "}
                <span className="text-gradient">PRIYANSHU RAWAT</span>
              </h1>
              <h2 className="text-2xl md:text-4xl font-heading font-bold">
                I'M A <span className="text-gradient">WEB DEVELOPER</span>
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I am a passionate web developer with a strong foundation in front-end and back-end technologies. 
              I love crafting visually appealing and user-friendly websites. My expertise lies in HTML, CSS, JavaScript, 
              and the MERN stack. With a keen eye for design and performance optimization, I aim to build web experiences 
              that are both functional and engaging.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow hover:shadow-xl transition-all duration-300 font-medium"
              >
                Hire Me
              </Button>
              
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 border border-primary/30 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow group"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-2 border-primary shadow-glow overflow-hidden animate-glow">
                <img
                  src={developerPortrait}
                  alt="Priyanshu Rawat - Web Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button 
            onClick={scrollToNext}
            className="animate-bounce text-primary hover:text-primary-glow transition-colors"
            aria-label="Scroll to next section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;