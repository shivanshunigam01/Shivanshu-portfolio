
import { GraduationCap, Award, Target, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate full-stack developer with a strong foundation in both front-end and back-end technologies,
            committed to building scalable solutions that make a real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">My Journey</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                I am a Software Development Engineer with a Master's degree in Computer Applications from 
                Vellore Institute of Technology, where I achieved a CGPA of 8.38, ranking in the top 10% 
                of 150 students.
              </p>
              <p>
                My expertise spans across modern web technologies, with hands-on experience in developing 
                large-scale applications that serve millions of users. I've had the privilege of working 
                on government initiatives that directly impact citizens' lives, including renewable energy 
                projects and utility management systems.
              </p>
              <p>
                What drives me is the opportunity to create solutions that not only meet technical requirements 
                but also contribute to societal welfare and environmental sustainability.
              </p>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-portfolio-gradient rounded-2xl filter blur-xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=500&fit=crop&crop=face"
                alt="Shivanshu Nigam"
                className="relative z-10 rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover-lift">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-portfolio-gradient rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Master of Computer Applications</h3>
                  <p className="text-portfolio-primary font-medium">Vellore Institute of Technology</p>
                  <p className="text-sm text-muted-foreground">2022 - 2024</p>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      CGPA: 8.38 (Top 10%)
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-lift">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-portfolio-gradient rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Bachelor of Computer Applications</h3>
                  <p className="text-portfolio-primary font-medium">Awadhesh Pratap Singh University</p>
                  <p className="text-sm text-muted-foreground">2019 - 2022</p>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                      78% Percentage
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover-lift">
              <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full w-fit mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Government Projects</h3>
              <p className="text-muted-foreground">
                Contributed to major government initiatives serving millions of citizens
              </p>
            </Card>

            <Card className="p-6 text-center hover-lift">
              <div className="p-4 bg-green-100 dark:bg-green-900 rounded-full w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Performance Excellence</h3>
              <p className="text-muted-foreground">
                Optimized database queries, reduced execution time by 25%
              </p>
            </Card>

            <Card className="p-6 text-center hover-lift">
              <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Scale Impact</h3>
              <p className="text-muted-foreground">
                Built applications serving 500,000+ users with high availability
              </p>
            </Card>
          </div>
        </section>

        {/* Personal Interests */}
        <section>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Beyond Code</h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
              and staying updated with the latest trends in web development. I'm passionate about renewable 
              energy solutions and believe in using technology to create a sustainable future.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
