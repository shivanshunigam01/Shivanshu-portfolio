
import { ExternalLink, Github, Calendar, Users, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "PM Surya Ghar Yojana Portal",
      description: "A comprehensive government platform under the Pradhan Mantri Surya Ghar Yojana initiative, enabling 10 million households to apply for rooftop solar installations and receive subsidies for generating clean electricity.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
      technologies: ["React.js", "Node.js", "MySQL", "Express.js", "Material UI"],
      features: [
        "40+ RESTful APIs handling 10,000+ daily requests",
        "Responsive frontend for 500,000+ users",
        "Automated serial number verification system",
        "Government subsidy management"
      ],
      url: "https://pmsuryaghar.gov.in",
      category: "Government",
      impact: "10M households",
      status: "Live"
    },
    {
      id: 2,
      title: "BSES Rajdhani Solar Portal",
      description: "A specialized portal for BSES Rajdhani consumers in Delhi to apply for rooftop solar systems, track applications, and benefit from net metering and energy savings.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop",
      technologies: ["React.js", "Node.js", "MySQL", "Express.js", "REST APIs"],
      features: [
        "Consumer, Installer, and Discom modules",
        "500,000+ monthly request handling",
        "SLD and feasibility management",
        "Meter installation tracking"
      ],
      url: "https://rts.bsesdelhi.com/",
      category: "Energy",
      impact: "100K+ customers",
      status: "Live"
    },
    {
      id: 3,
      title: "I Grow Green Job Portal",
      description: "A specialized job portal focused on connecting job seekers with opportunities in green and sustainable sectors, promoting environmental consciousness in career choices.",
      image: "https://images.unsplash.com/photo-1573495627258-568d2aa1bdb1?w=600&h=400&fit=crop",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      features: [
        "Green sector job matching",
        "Sustainable career opportunities",
        "Environmental impact tracking",
        "Employer sustainability metrics"
      ],
      url: "https://jobs.igrowgreen.in/",
      category: "Sustainability",
      impact: "Green Jobs",
      status: "Live"
    },
    {
      id: 4,
      title: "Goa GCZMA Portal",
      description: "A regulatory platform for the Goa Coastal Zone Management Authority, managing coastal zones to ensure environmental protection and sustainable coastal development.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      technologies: ["React.js", "Node.js", "MySQL", "Express.js", "AWS"],
      features: [
        "Coastal zone management",
        "Environmental compliance tracking",
        "Permit application system",
        "Regulatory oversight tools"
      ],
      url: "https://www.gczma.in/",
      category: "Government",
      impact: "Coastal Protection",
      status: "Live"
    }
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
            A showcase of impactful projects spanning government initiatives, renewable energy solutions, 
            and sustainable technology platforms serving millions of users.
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
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
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
                <div className="text-3xl font-bold gradient-text mb-2">10M+</div>
                <div className="text-muted-foreground">Households Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">500K+</div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
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
