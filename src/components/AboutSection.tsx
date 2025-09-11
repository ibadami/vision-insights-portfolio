import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Eye, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "12+ Years Experience",
      description: "Extensive experience in classical ML and deep learning systems across multiple industries"
    },
    {
      icon: Eye,
      title: "Computer Vision Expert",
      description: "Advanced expertise in CNNs, RNNs, vision-language transformers, and multimodal LLMs"
    },
    {
      icon: Zap,
      title: "Revenue Impact",
      description: "Proven track record of translating business problems into impactful, revenue-generating products"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With 12+ years of experience across academic research, healthcare, VFX, and Ad Tech, I've 
              specialized in building end-to-end ML pipelines and deploying production systems. 
              From leading technical presentations that secured $5.5M Series A funding to 
              co-authoring approved US patent and academic publications, I bring both technical depth and business acumen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up delay-200">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
              I began my journey in machine learning in 2013 after completing my Master’s in Computer Science with a focus on Computer Vision and Graphics at the <a href="https://www.uni-bonn.de/en/studying/degree-programs/degree-programs-a-z/computer-science-msc" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">University of Bonn</a>, Germany.
              I then worked as a Research and Teaching Assistant at the <a href="https://www.vision.rwth-aachen.de/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">RWTH Aachen University</a> on an EU-funded project called <a href="http://strands-project.eu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">STRANDS</a>. My research focused on 3D understanding of indoor environments—modeling furniture and assessing cabinet and shelf affordances; so robots could navigate spaces and interact with objects for tasks such as tidying up or retrieving tools.
              After academia, I transitioned to industry as a Machine Learning Engineer at <a href="https://nevisq.com/en/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NevisQ GmbH</a>, where I developed fall-detection systems using infrared sensor strips installed in elderly care facilities; helping address staff shortages and improve resident safety.
              When I moved to Canada, I joined <a href="https://monstersaliensrobotszombies.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Marz VFX</a> as a Computer Vision Engineer, where I spearheaded the patent submission and production deployment of an automatic de-aging pipeline. This technology was successfully applied to projects such as Zoe’s Extraordinary Playlist and Turner & Hooch, enabling automated blemish correction on lead actors in post-production.
              Later, I contributed to technical discussions and presentations that supported raising a $5.5M AI Series A investment. At <a href="https://triplelift.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">TripleLift</a>, my work focused on analyzing large volumes of video content to identify brand-safe and brand-suitable moments for ad insertion.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans classical ML algorithms (Linear Regression, SVM, Random Forest) 
                to cutting-edge deep learning architectures (CNNs, RNNs, vision-language transformers, RAG). 
                I excel at translating open-ended business problems into scalable AI solutions that 
                deliver tangible value.
              </p>
            </div>
            
            <div className="animate-slide-up delay-300">
              {/* Photo Section */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <img 
                    src="/photo.jpeg" 
                    alt="Ishrat Badami" 
                    className="w-65 h-65 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20 shadow-lg hover:shadow-glow-primary transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10"></div>
                </div>
              </div>
              <Card className="bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-300">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-4 text-primary">Philosophy</h4>
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "The best AI solutions seamlessly integrate into existing workflows, 
                    enhancing human capabilities while delivering measurable business impact. 
                    Success comes from understanding both the technical possibilities and 
                    the real-world constraints."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/50 hover:shadow-glow-primary transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <item.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;