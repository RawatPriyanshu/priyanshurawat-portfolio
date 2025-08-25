import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", level: 95, icon: "🌐" },
    { name: "CSS", level: 85, icon: "🎨" },
    { name: "JavaScript", level: 70, icon: "⚡" },
    { name: "React", level: 80, icon: "⚛️" },
    { name: "Node.js", level: 65, icon: "🚀" },
    { name: "MongoDB", level: 75, icon: "🍃" },
  ];

  const professionalSkills = [
    { name: "Creativity", level: 80 },
    { name: "Teamwork", level: 90 },
    { name: "Communication", level: 65 },
    { name: "Problem Solving", level: 70 },
  ];

  const CircularProgress = ({ percentage, label }: { percentage: number; label: string }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="flex flex-col items-center space-y-3">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="hsl(var(--muted))"
              strokeWidth="3"
              fill="transparent"
            />
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out shadow-glow"
              style={{
                filter: "drop-shadow(0 0 6px hsl(var(--primary) / 0.4))"
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">{percentage}%</span>
          </div>
        </div>
        <span className="text-sm font-medium text-center text-foreground">{label}</span>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-gradient mb-4">
            MY SKILLS
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <Card className="bg-card border-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary text-center">
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm text-primary font-bold">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2"
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Professional Skills */}
          <Card className="bg-card border-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary text-center">
                Professional Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-8 pt-4">
                {professionalSkills.map((skill, index) => (
                  <CircularProgress
                    key={index}
                    percentage={skill.level}
                    label={skill.name}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;