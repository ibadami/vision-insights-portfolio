import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  Database, 
  Cpu, 
  Target, 
  BarChart3, 
  Shield 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Camera,
      title: "Computer Vision Solutions",
      description: "Custom image processing, object detection, and visual recognition systems tailored to your business needs.",
      features: ["Object Detection", "Image Classification", "Facial Recognition", "OCR Systems"]
    },
    {
      icon: Cpu,
      title: "Machine Learning Models",
      description: "End-to-end ML model development from data preprocessing to production deployment.",
      features: ["Predictive Analytics", "Deep Learning", "NLP Solutions", "Model Optimization"]
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Build robust data pipelines and infrastructure to support your AI initiatives.",
      features: ["Data Pipeline Design", "ETL Processes", "Data Validation", "Cloud Integration"]
    },
    {
      icon: Target,
      title: "AI Strategy Consulting",
      description: "Strategic guidance on how to integrate AI technologies into your business operations.",
      features: ["Technology Assessment", "ROI Analysis", "Implementation Roadmap", "Team Training"]
    },
    {
      icon: BarChart3,
      title: "Performance Optimization",
      description: "Optimize existing AI systems for better performance, accuracy, and efficiency.",
      features: ["Model Tuning", "Performance Analysis", "Cost Optimization", "Scalability Planning"]
    },
    {
      icon: Shield,
      title: "AI Auditing & Validation",
      description: "Ensure your AI systems are reliable, fair, and compliant with industry standards.",
      features: ["Bias Detection", "Model Validation", "Security Assessment", "Compliance Review"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI and machine learning solutions to help your business 
              leverage the power of intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:shadow-glow-primary transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-center text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 text-center">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/30 hover:border-primary hover:shadow-glow-accent transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;