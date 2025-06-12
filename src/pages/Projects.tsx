import { ExternalLink, Github, Calendar, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "PM Surya Ghar Yojana Portal",
      description:
        "A comprehensive government platform under the Pradhan Mantri Surya Ghar Yojana initiative, enabling 10 million households to apply for rooftop solar installations and receive subsidies for generating clean electricity.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
      technologies: [
        "React.js",
        "Node.js",
        "MySQL",
        "Express.js",
        "Material UI",
      ],
      features: [
        "40+ RESTful APIs handling 10,000+ daily requests",
        "Responsive frontend for 500,000+ users",
        "Automated serial number verification system",
        "Government subsidy management",
      ],
      url: "https://pmsuryaghar.gov.in",
      category: "Government",
      impact: "10M households",
      status: "Live",
    },
    {
      id: 2,
      title: "BSES Rajdhani Solar Portal",
      description:
        "A specialized portal for BSES Rajdhani consumers in Delhi to apply for rooftop solar systems, track applications, and benefit from net metering and energy savings.",
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop",
      technologies: ["React.js", "Node.js", "MySQL", "Express.js", "REST APIs"],
      features: [
        "Consumer, Installer, and Discom modules",
        "500,000+ monthly request handling",
        "SLD and feasibility management",
        "Meter installation tracking",
      ],
      url: "https://rts.bsesdelhi.com/",
      category: "Energy",
      impact: "100K+ customers",
      status: "Live",
    },
    {
      id: 3,
      title: "I Grow Green Job Portal",
      description:
        "A specialized job portal focused on connecting job seekers with opportunities in green and sustainable sectors, promoting environmental consciousness in career choices.",
      image:
        "data:image/png;base64,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",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
      ],
      features: [
        "Green sector job matching",
        "Sustainable career opportunities",
        "Environmental impact tracking",
        "Employer sustainability metrics",
      ],
      url: "https://jobs.igrowgreen.in/",
      category: "Sustainability",
      impact: "Green Jobs",
      status: "Live",
    },
    {
      id: 4,
      title: "Goa GCZMA Portal",
      description:
        "A regulatory platform for the Goa Coastal Zone Management Authority, managing coastal zones to ensure environmental protection and sustainable coastal development.",
      image: "https://www.gczma.in/assets/goa_logo.svg",
      technologies: ["React.js", "Node.js", "MySQL", "Express.js", "AWS"],
      features: [
        "Coastal zone management",
        "Environmental compliance tracking",
        "Permit application system",
        "Regulatory oversight tools",
      ],
      url: "https://www.gczma.in/",
      category: "Government",
      impact: "Coastal Protection",
      status: "Live",
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Government":
        return <Users className="h-4 w-4" />;
      case "Energy":
        return <Zap className="h-4 w-4" />;
      case "Sustainability":
        return <Calendar className="h-4 w-4" />;
      default:
        return <Calendar className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Government":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Energy":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Sustainability":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of impactful projects spanning government initiatives,
            renewable energy solutions, and sustainable technology platforms
            serving millions of users.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden hover-lift group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={getCategoryColor(project.category)}>
                    {getCategoryIcon(project.category)}
                    <span className="ml-1">{project.category}</span>
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="text-sm text-portfolio-primary font-medium">
                    {project.impact}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-portfolio-primary mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    asChild
                    className="flex-1 bg-portfolio-gradient hover:opacity-90 text-white"
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="hover-glow">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Impact Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  10M+
                </div>
                <div className="text-muted-foreground">Households Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  400+
                </div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  100%
                </div>
                <div className="text-muted-foreground">Uptime Achievement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
