
import { Code2, Database, Cloud, Wrench, Monitor, Server } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="h-6 w-6" />,
      color: "bg-blue-500",
      skills: [
        { name: "React.js", level: 95, experience: "2+ years" },
        { name: "JavaScript (ES6+)", level: 90, experience: "2+ years" },
        { name: "HTML5 & CSS3", level: 95, experience: "3+ years" },
        { name: "Tailwind CSS", level: 88, experience: "1.5+ years" },
        { name: "Material UI", level: 85, experience: "1+ years" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      color: "bg-green-500",
      skills: [
        { name: "Node.js", level: 92, experience: "2+ years" },
        { name: "Express.js", level: 90, experience: "2+ years" },
        { name: "RESTful APIs", level: 95, experience: "2+ years" },
        { name: "Sequelize ORM", level: 80, experience: "1+ years" },
        { name: "Stored Procedures", level: 75, experience: "1+ years" }
      ]
    },
    {
      title: "Database Management",
      icon: <Database className="h-6 w-6" />,
      color: "bg-purple-500",
      skills: [
        { name: "MySQL", level: 90, experience: "2+ years" },
        { name: "MongoDB", level: 80, experience: "1+ years" },
        { name: "Database Design", level: 85, experience: "2+ years" },
        { name: "Query Optimization", level: 88, experience: "1.5+ years" },
        { name: "Data Migration", level: 75, experience: "1+ years" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      color: "bg-orange-500",
      skills: [
        { name: "AWS (S3, EC2, Lambda)", level: 75, experience: "1+ years" },
        { name: "Docker", level: 65, experience: "Basic" },
        { name: "GitHub Actions", level: 70, experience: "6+ months" },
        { name: "Linux CLI", level: 80, experience: "1+ years" },
        { name: "CI/CD Pipelines", level: 70, experience: "6+ months" }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      color: "bg-red-500",
      skills: [
        { name: "JavaScript", level: 92, experience: "2+ years" },
        { name: "Python", level: 80, experience: "1+ years" },
        { name: "C++", level: 75, experience: "2+ years" },
        { name: "SQL", level: 88, experience: "2+ years" },
        { name: "TypeScript", level: 85, experience: "1+ years" }
      ]
    },
    {
      title: "Developer Tools",
      icon: <Wrench className="h-6 w-6" />,
      color: "bg-yellow-500",
      skills: [
        { name: "Git & GitHub", level: 90, experience: "2+ years" },
        { name: "VS Code", level: 95, experience: "3+ years" },
        { name: "Postman", level: 90, experience: "2+ years" },
        { name: "GitLab", level: 80, experience: "1+ years" },
        { name: "Debugging Tools", level: 85, experience: "2+ years" }
      ]
    }
  ];

  const professionalSkills = [
    "Advanced Database Design and Optimization",
    "Application Development and Maintenance", 
    "Skilled in Project Management Tools",
    "Experienced in Git and GitHub Workflows",
    "Proficient in Version Control Systems",
    "Knowledgeable in Computer Architecture",
    "Web Application Security Best Practices",
    "Performance Optimization and Monitoring"
  ];

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-gray-500";
  };

  const getSkillLevelText = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across full-stack development, 
            database management, cloud technologies, and modern development practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover-lift">
              <div className="flex items-center mb-6">
                <div className={`p-3 ${category.color} rounded-lg text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full text-white ${getSkillLevelColor(skill.level)}`}>
                          {getSkillLevelText(skill.level)}
                        </span>
                        <span className="text-xs text-muted-foreground">{skill.experience}</span>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Professional Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Professional Skills</h2>
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {professionalSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="w-2 h-2 bg-portfolio-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Experience Summary */}
        <section>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Skills in Action</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">40+</div>
                <div className="text-sm text-muted-foreground">RESTful APIs Built</div>
                <div className="text-xs text-muted-foreground mt-1">Using Node.js & Express.js</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">500K+</div>
                <div className="text-sm text-muted-foreground">Users Served</div>
                <div className="text-xs text-muted-foreground mt-1">React.js Applications</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">25%</div>
                <div className="text-sm text-muted-foreground">Query Performance Boost</div>
                <div className="text-xs text-muted-foreground mt-1">MySQL Optimization</div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These skills have been honed through real-world projects in government initiatives, 
                renewable energy solutions, and large-scale web applications serving millions of users.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
