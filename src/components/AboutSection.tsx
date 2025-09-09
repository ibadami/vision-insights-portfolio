import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Eye, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Deep expertise in neural networks, deep learning, and AI model development"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced image processing, object detection, and visual recognition systems"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge solutions that push the boundaries of what's possible"
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
              I'm a passionate computer vision and machine learning engineer with a drive to 
              solve complex problems using artificial intelligence. My approach combines 
              technical expertise with creative problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up delay-200">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                With years of experience in the field, I've worked on projects ranging from 
                autonomous systems to medical imaging, always pushing the envelope of what's 
                possible with AI technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of technology to transform industries and improve lives. 
                My consultancy work focuses on helping businesses integrate AI solutions that 
                are not just technically sound, but also practical and scalable.
              </p>
            </div>
            
            <div className="animate-slide-up delay-300">
              <Card className="bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-300">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-4 text-primary">Philosophy</h4>
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "The best AI solutions are those that seamlessly integrate into existing 
                    workflows, enhancing human capabilities rather than replacing them."
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