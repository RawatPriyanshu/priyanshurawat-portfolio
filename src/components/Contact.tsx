import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Link as LinkIcon } from "lucide-react";
import { Github, Instagram, Facebook, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "A-11 Shiv Durga Vihar Lakkarpur, Faridabad 121009"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9999999999"
    },
    {
      icon: Mail,
      label: "Email",
      value: "priyanshu.rawat@example.com"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-gradient mb-4">
            CONTACT ME
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. Get in touch and let's create something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 shadow-glow">
                    <info.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary mb-1">
                      {info.label}
                    </h4>
                    <p className="text-foreground text-sm leading-relaxed">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <Card className="bg-card border-glow">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-primary">
                  <LinkIcon size={20} />
                  Connect with me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="p-3 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow group border border-primary/20"
                      aria-label={social.label}
                    >
                      <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary">
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter Your Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-primary/30 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-primary/30 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Type your message here..."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-primary/30 focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow hover:shadow-xl transition-all duration-300 font-medium"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;