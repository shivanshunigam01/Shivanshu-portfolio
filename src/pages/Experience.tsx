
import { MapPin, Calendar, ExternalLink, Building2, Trophy } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "200Ok Solutions",
      role: "Full Stack Developer",
      location: "Ahmedabad, India",
      period: "Present",
      type: "Current",
      description: "Currently working as a Full Stack Developer, contributing to various web applications and maintaining high-quality code standards.",
      projects: [],
      technologies: ["React.js", "Node.js", "JavaScript", "MongoDB"],
      achievements: []
    },
    {
      id: 2,
      company: "AHA Solar Technologies Limited",
      role: "Software Development Engineer",
      location: "Ahmedabad, India",
      period: "Sep 2023 - Present",
      type: "Full-time",
      description: "Leading full-stack development for major government renewable energy initiatives, serving millions of users nationwide.",
      projects: [
        {
          name: "PM Surya Ghar Muft Bijli Yojana",
          description: "Government initiative for 10 million households to receive free solar electricity",
          impact: "10M households, 500K+ users"
        },
        {
          name: "BSES Rajdhani Solar Portal",
          description: "Electricity distribution platform for Delhi region",
          impact: "100K+ customers, 500K+ monthly requests"
        },
        {
          name: "GOA GCZMA Portal",
          description: "Coastal zone management authority platform",
          impact: "Environmental protection & compliance"
        }
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Material UI", "REST APIs"],
      achievements: [
        "Engineered 40+ RESTful APIs handling 10,000+ daily requests",
        "Built responsive frontends serving 500,000+ users",
        "Reduced query execution time by 25% through database optimization",
        "Automated verification system processing 450,000 entries monthly",
        "Saved 30+ man-hours through automation initiatives"
      ]
    },
    {
      id: 3,
      company: "Scale AI",
      role: "AI Trainer",
      location: "San Francisco, CA (Remote)",
      period: "Nov 2022 - Aug 2023",
      type: "Remote",
      description: "Specialized in training and evaluating AI models, providing critical feedback for performance improvements and accuracy enhancements.",
      projects: [
        {
          name: "AI Model Training & Evaluation",
          description: "Comprehensive model performance assessment and optimization",
          impact: "20% reduction in model error rates"
        },
        {
          name: "Data Review Workflow Optimization",
          description: "Improved evaluation processes and quality standards",
          impact: "30% faster evaluation process"
        }
      ],
      technologies: ["AI/ML", "Python", "Data Analysis", "Zendesk", "Slack"],
      achievements: [
        "Reduced model error rates by 20% through continuous optimization",
        "Improved data review workflows by 30% while maintaining quality",
        "Provided comprehensive feedback to engineering teams",
        "Identified and corrected systematic errors for consistency",
        "Collaborated with cross-functional teams for alignment"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Current":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Full-time":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Remote":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
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
            Work <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through impactful roles in software development, from government initiatives 
            to AI training, consistently delivering scalable solutions and measurable results.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-primary to-portfolio-secondary"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-portfolio-primary rounded-full border-4 border-background shadow-lg"></div>

                <div className="ml-16">
                  <Card className="p-6 hover-lift">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                        <div className="flex items-center text-portfolio-primary font-medium mb-2">
                          <Building2 className="h-4 w-4 mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.location}
                          <Calendar className="h-4 w-4 ml-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>
                      <Badge className={getTypeColor(exp.type)}>
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Projects */}
                    {exp.projects.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium mb-3">Key Projects:</h4>
                        <div className="space-y-3">
                          {exp.projects.map((project, idx) => (
                            <div key={idx} className="bg-accent/50 rounded-lg p-3">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h5 className="font-medium text-sm mb-1">{project.name}</h5>
                                  <p className="text-xs text-muted-foreground mb-2">
                                    {project.description}
                                  </p>
                                  <div className="text-xs text-portfolio-primary font-medium">
                                    Impact: {project.impact}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {exp.achievements.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium mb-3 flex items-center">
                          <Trophy className="h-4 w-4 mr-2 text-yellow-500" />
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-portfolio-primary mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Highlights */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Career Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years Professional Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-2">10M+</div>
                <div className="text-sm text-muted-foreground">Users Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-2">40+</div>
                <div className="text-sm text-muted-foreground">APIs Developed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-2">25%</div>
                <div className="text-sm text-muted-foreground">Performance Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
