
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Gradient Background */}
      <section className="py-20 lg:py-32 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-portfolio-gradient opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Hi, I'm <span className="gradient-text-rainbow">Shivanshu</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              I'm a Full Stack Developer who specializes in building scalable web applications 
              that serve millions of users. I work with modern technologies like React.js, Node.js, 
              and have experience in government projects and renewable energy solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact">
                <Button size="lg" className="btn-gradient text-white border-0 hover:shadow-lg">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-2 border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary hover:text-white">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/shivanshunigam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-primary hover:text-portfolio-secondary transition-colors hover:scale-110 transform duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/shivanshunigam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-secondary hover:text-portfolio-accent transition-colors hover:scale-110 transform duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:shivanshunigam8@gmail.com"
                className="text-portfolio-accent hover:text-portfolio-pink transition-colors hover:scale-110 transform duration-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Colorful Background */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                About <span className="text-portfolio-primary">Me</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am a Software Development Engineer with a Master's degree in Computer Applications 
                  from Vellore Institute of Technology, where I achieved a CGPA of 8.38, ranking in 
                  the top 10% of 150 students.
                </p>
                <p>
                  My expertise spans across modern web technologies, with hands-on experience in 
                  developing large-scale applications that serve millions of users. I've had the 
                  privilege of working on government initiatives that directly impact citizens' lives, 
                  including renewable energy projects and utility management systems.
                </p>
                <p>
                  What drives me is the opportunity to create solutions that not only meet technical 
                  requirements but also contribute to societal welfare and environmental sustainability.
                </p>
              </div>
              <Link to="/about">
                <Button variant="outline" className="mt-6 border-2 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-portfolio-gradient rounded-2xl opacity-20 animate-pulse-gentle"></div>
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=600&fit=crop&crop=face"
                alt="Shivanshu Nigam"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto relative z-10 hover-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights with Vibrant Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            My <span className="text-portfolio-secondary">Experience</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Card className="p-8 hover-lift border-l-4 border-l-portfolio-primary bg-gradient-to-r from-portfolio-primary/5 to-transparent">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Software Development Engineer</h3>
                    <p className="text-portfolio-primary font-medium">AHA Solar Technologies Limited</p>
                  </div>
                  <div className="text-sm text-muted-foreground bg-portfolio-primary/10 px-3 py-1 rounded-full">Sep 2023 - Present</div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Leading full-stack development for major government renewable energy initiatives, 
                  serving millions of users nationwide.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center p-4 bg-portfolio-accent/10 rounded-lg">
                    <div className="font-bold text-2xl text-portfolio-accent">10M+</div>
                    <div className="text-muted-foreground">Households Served</div>
                  </div>
                  <div className="text-center p-4 bg-portfolio-secondary/10 rounded-lg">
                    <div className="font-bold text-2xl text-portfolio-secondary">40+</div>
                    <div className="text-muted-foreground">APIs Developed</div>
                  </div>
                  <div className="text-center p-4 bg-portfolio-pink/10 rounded-lg">
                    <div className="font-bold text-2xl text-portfolio-pink">500K+</div>
                    <div className="text-muted-foreground">Active Users</div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-lift border-l-4 border-l-portfolio-secondary bg-gradient-to-r from-portfolio-secondary/5 to-transparent">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">AI Trainer</h3>
                    <p className="text-portfolio-secondary font-medium">Scale AI</p>
                  </div>
                  <div className="text-sm text-muted-foreground bg-portfolio-secondary/10 px-3 py-1 rounded-full">Nov 2022 - Aug 2023</div>
                </div>
                <p className="text-muted-foreground">
                  Specialized in training and evaluating AI models, providing critical feedback 
                  for performance improvements and accuracy enhancements.
                </p>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/experience">
                <Button variant="outline" className="border-2 border-portfolio-indigo text-portfolio-indigo hover:bg-portfolio-indigo hover:text-white">
                  View Full Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects with Colorful Gradient Background */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            Featured <span className="text-portfolio-orange">Projects</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover-lift border-2 border-transparent hover:border-portfolio-primary">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=300&fit=crop"
                  alt="PM Surya Ghar Yojana"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-portfolio-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">PM Surya Ghar Yojana Portal</h3>
                <p className="text-muted-foreground mb-4">
                  Government initiative enabling 10 million households to apply for rooftop 
                  solar installations and receive subsidies.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium bg-portfolio-accent/20 text-portfolio-accent px-3 py-1 rounded-full">Government Project</span>
                  <ArrowRight className="h-4 w-4 text-portfolio-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover-lift border-2 border-transparent hover:border-portfolio-secondary">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=300&fit=crop"
                  alt="BSES Rajdhani Portal"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-portfolio-gradient-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">BSES Rajdhani Solar Portal</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized portal for BSES Rajdhani consumers in Delhi to apply for 
                  rooftop solar systems and track applications.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium bg-portfolio-info/20 text-portfolio-info px-3 py-1 rounded-full">Energy Sector</span>
                  <ArrowRight className="h-4 w-4 text-portfolio-secondary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link to="/projects">
              <Button variant="outline" className="border-2 border-portfolio-pink text-portfolio-pink hover:bg-portfolio-pink hover:text-white">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section with Rainbow Gradient */}
      <section className="py-20 bg-portfolio-gradient-rainbow relative overflow-hidden">
        <div className="absolute inset-0 bg-background/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Let's Work <span className="gradient-text-rainbow">Together</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited about new opportunities and collaborations. 
              Let's discuss how we can work together to create something amazing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/contact">
                <Button size="lg" className="btn-gradient text-white border-0">
                  Get In Touch
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" asChild className="border-2 border-portfolio-orange text-portfolio-orange hover:bg-portfolio-orange hover:text-white">
                <a href="tel:+917247650665">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Me
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2 bg-portfolio-primary/10 px-4 py-2 rounded-full">
                <MapPin className="h-4 w-4 text-portfolio-primary" />
                <span>Ahmedabad, India</span>
              </div>
              <div className="flex items-center gap-2 bg-portfolio-secondary/10 px-4 py-2 rounded-full">
                <Mail className="h-4 w-4 text-portfolio-secondary" />
                <span>shivanshunigam8@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
