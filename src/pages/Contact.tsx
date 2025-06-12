
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "shivanshunigam8@gmail.com",
      href: "mailto:shivanshunigam8@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 7247650665",
      href: "tel:+917247650665"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Ahmedabad, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/shivanshunigam",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/shivanshunigam",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together 
            to create something amazing. I'm always excited about new opportunities and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Let's Connect</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Whether you need a full-stack developer for your 
                startup or want to collaborate on an innovative project, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-4 hover-lift">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-portfolio-gradient rounded-lg text-white">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="font-medium hover:text-portfolio-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-card border hover:bg-accent transition-all duration-300 hover-lift ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-medium text-green-800 dark:text-green-200">Available for Projects</div>
                  <div className="text-sm text-green-600 dark:text-green-300">
                    Currently accepting new opportunities
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 hover-lift">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-6 w-6 text-portfolio-primary mr-3" />
              <h2 className="text-2xl font-semibold">Send Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[120px] resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-portfolio-gradient hover:opacity-90 text-white"
                size="lg"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>

            <div className="mt-6 p-4 bg-accent/50 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                💡 <strong>Quick Response:</strong> I typically respond within 24 hours. 
                For urgent matters, feel free to call or text me directly.
              </p>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Let's turn your vision into reality. I bring technical expertise, creative problem-solving, 
              and a commitment to excellence to every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-portfolio-gradient hover:opacity-90 text-white"
              >
                <a href="mailto:shivanshunigam8@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me Directly
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="hover-lift"
              >
                <a href="tel:+917247650665">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
