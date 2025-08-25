import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectsShowcase from "@/assets/projects-showcase.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Responsive Landing Page",
      description: "A simple responsive Landing page using HTML, CSS and jQuery with modern design principles.",
      image: projectsShowcase,
      technologies: ["HTML", "CSS", "jQuery"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Roofing Website",
      description: "A modern and responsive roofing website built using HTML, CSS with professional styling.",
      image: projectsShowcase,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Gym Website",
      description: "A dynamic and modern gym website designed for fitness enthusiasts with interactive features.",
      image: projectsShowcase,
      technologies: ["React", "CSS", "JavaScript"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Fresh Organic Landing",
      description: "A visually appealing and responsive landing page designed to capture attention for organic products.",
      image: projectsShowcase,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Calculator App",
      description: "A simple calculator built using HTML, CSS, and JavaScript with clean interface design.",
      image: projectsShowcase,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-gradient mb-4">
            PROJECTS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group bg-card border-glow hover:shadow-glow transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;