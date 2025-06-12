
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="text-sm font-medium text-portfolio-primary mb-4">
                👋 Hello, I'm
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">Shivanshu Nigam</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6">
                Full Stack Developer
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Software Development Engineer with expertise in building scalable web applications. 
                Specialized in React.js, Node.js, and modern full-stack development with experience 
                in government projects serving millions of users.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/projects">
                  <Button size="lg" className="bg-portfolio-gradient hover:opacity-90 text-white group">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="hover-lift">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/shivanshunigam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border hover:bg-accent transition-all duration-300 hover-lift"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/shivanshunigam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border hover:bg-accent transition-all duration-300 hover-lift"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:shivanshunigam8@gmail.com"
                  className="p-3 rounded-full bg-card border hover:bg-accent transition-all duration-300 hover-lift"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-portfolio-gradient rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=600&fit=crop&crop=face"
                  alt="Shivanshu Nigam"
                  className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover-lift">
              <div className="text-3xl font-bold gradient-text mb-2">2+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </Card>
            <Card className="p-6 text-center hover-lift">
              <div className="text-3xl font-bold gradient-text mb-2">40+</div>
              <div className="text-muted-foreground">APIs Developed</div>
            </Card>
            <Card className="p-6 text-center hover-lift">
              <div className="text-3xl font-bold gradient-text mb-2">500K+</div>
              <div className="text-muted-foreground">Users Served</div>
            </Card>
            <Card className="p-6 text-center hover-lift">
              <div className="text-3xl font-bold gradient-text mb-2">4</div>
              <div className="text-muted-foreground">Major Projects</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my notable projects that have made a significant impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover-lift group">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">PM Surya Ghar Yojana</h3>
                <p className="text-muted-foreground">
                  Government initiative for 10 million households to get free solar electricity
                </p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-portfolio-primary font-medium">Government Project</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>

            <Card className="p-6 hover-lift group">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">BSES Rajdhani Portal</h3>
                <p className="text-muted-foreground">
                  Solar installation portal for Delhi electricity distribution
                </p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-portfolio-primary font-medium">Energy Sector</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link to="/projects">
              <Button variant="outline" size="lg" className="hover-lift">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
