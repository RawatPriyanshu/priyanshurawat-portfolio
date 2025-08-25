import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, GraduationCap, Briefcase } from "lucide-react";

const Resume = () => {
  const education = [
    {
      degree: "Bachelor's Degree (BCA)",
      institution: "JB Knowledge Park (MDU)",
      period: "2022 - 2025",
      description: "Pursuing a Bachelor of Computer Applications (BCA) with a focus on software development, web technologies, and database management."
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Jaypee Public School",
      period: "2020 - 2022",
      description: "Completed my 12th-grade education in Commerce, gaining analytical and problem-solving skills before pursuing my passion for computer science."
    },
    {
      degree: "Secondary Education (10th Grade)",
      institution: "Doon Bharti Public School",
      period: "2018 - 2020",
      description: "Completed my 10th-grade education with a strong academic foundation and a keen interest in learning."
    }
  ];

  const experience = [
    {
      role: "MERN Stack Training",
      company: "Reputed Training Institute",
      period: "Current",
      description: "Currently undergoing MERN stack training at a reputed institute to enhance my full-stack development skills and stay updated with modern web technologies."
    },
    {
      role: "Virtual Internship",
      company: "CodeSoft",
      period: "Recent",
      description: "Gaining hands-on experience by working on real-world projects, sharpening my expertise in web development and collaborative programming."
    }
  ];

  const TimelineItem = ({ 
    title, 
    subtitle, 
    period, 
    description, 
    icon 
  }: { 
    title: string; 
    subtitle: string; 
    period: string; 
    description: string; 
    icon: React.ReactNode; 
  }) => (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full shadow-glow"></div>
      <div className="absolute left-2 top-4 w-0.5 h-full bg-primary/30 last:hidden"></div>
      
      <Card className="bg-card border-glow ml-4">
        <CardContent className="p-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              {icon}
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-heading font-semibold text-primary mb-1">
                {title}
              </h4>
              <p className="text-sm text-muted-foreground font-medium mb-1">
                {subtitle} | {period}
              </p>
            </div>
          </div>
          <p className="text-sm text-foreground leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-gradient mb-4">
            RESUME
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My educational background and professional experience in web development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-8 text-center">
              Education
            </h3>
            <div className="space-y-0">
              {education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  title={edu.degree}
                  subtitle={edu.institution}
                  period={edu.period}
                  description={edu.description}
                  icon={<GraduationCap size={20} className="text-primary" />}
                />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-8 text-center">
              Experience
            </h3>
            <div className="space-y-0">
              {experience.map((exp, index) => (
                <TimelineItem
                  key={index}
                  title={exp.role}
                  subtitle={exp.company}
                  period={exp.period}
                  description={exp.description}
                  icon={<Briefcase size={20} className="text-primary" />}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow hover:shadow-xl transition-all duration-300 font-medium"
            asChild
          >
            <a href="/resume/Priyanshu-Rawat.pdf" download>
              <Download size={20} className="mr-2" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;