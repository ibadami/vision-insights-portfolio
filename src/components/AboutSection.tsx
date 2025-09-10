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
              Applied Machine Learning and Computer Vision Engineer with 12+ years of experience 
              building and deploying scalable classical machine learning and deep learning systems. 
              Proficient in the entire ML lifecycle, from data collection and model fine-tuning 
              to model evaluation, validation, and production deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up delay-200">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                With 12+ years of experience across healthcare, media, and academic research, I've 
                specialized in building end-to-end ML pipelines and deploying production systems. 
                From leading technical presentations that secured $5.5M Series A funding to 
                co-authoring approved US patents, I bring both technical depth and business acumen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans classical ML algorithms (Linear Regression, SVM, Random Forest) 
                to cutting-edge deep learning architectures (CNNs, RNNs, vision-language transformers). 
                I excel at translating open-ended business problems into scalable AI solutions that 
                deliver tangible value.
              </p>
            </div>
            
            <div className="animate-slide-up delay-300">
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