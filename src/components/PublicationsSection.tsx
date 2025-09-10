import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink } from "lucide-react";

const PublicationsSection = () => {
  const publications = [
    {
      title: "3D Semantic Segmentation of Modular Furniture using rjMCMC",
      authors: "Badami et al.",
      venue: "IEEE WACV",
      year: "2017",
      type: "Conference",
      description: "Advanced 3D semantic segmentation techniques for modular furniture using reversible jump Markov Chain Monte Carlo algorithms."
    },
    {
      title: "Semantic Segmentation of Modular Furniture",
      authors: "Pohlen et al.",
      venue: "IEEE WACV",
      year: "2016",
      type: "Conference",
      description: "Novel approaches to semantic segmentation of modular furniture in indoor environments."
    },
    {
      title: "Depth-Enhanced Hough Forests for Object-Class Detection",
      authors: "Badami et al.",
      venue: "SPME @ ICRA",
      year: "2013",
      type: "Workshop",
      description: "Enhanced object detection using depth information and Hough Forest algorithms for RGB-D images."
    },
    {
      title: "Material Recognition: Bayesian Framework or SVMs?",
      authors: "Badami et al.",
      venue: "CESCG",
      year: "2012",
      type: "Conference",
      description: "Comparative study of Bayesian frameworks versus Support Vector Machines for material recognition tasks."
    },
    {
      title: "NimbRo@Home: Winning Team of RoboCup@Home 2012",
      authors: "Stückler et al.",
      venue: "RoboCup Symposium",
      year: "2012",
      type: "Symposium",
      description: "Technical report on the winning RoboCup@Home 2012 team, showcasing advanced robotics and AI integration."
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Conference':
        return 'bg-primary/20 text-primary';
      case 'Workshop':
        return 'bg-accent/20 text-accent';
      case 'Symposium':
        return 'bg-secondary/20 text-secondary-foreground';
      default:
        return 'bg-muted/20 text-muted-foreground';
    }
  };

  return (
    <section id="publications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Research <span className="bg-gradient-primary bg-clip-text text-transparent">Publications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Peer-reviewed research contributions in computer vision, machine learning, 
              and robotics published at top-tier conferences and workshops.
            </p>
          </div>

          <div className="grid gap-8">
            {publications.map((publication, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:shadow-glow-primary transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${100 + index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-6 w-6 text-primary" />
                      <Badge className={getTypeColor(publication.type)}>
                        {publication.type}
                      </Badge>
                      <Badge variant="outline" className="text-muted-foreground">
                        {publication.year}
                      </Badge>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {publication.title}
                  </h3>
                  
                  <div className="mb-3">
                    <p className="text-muted-foreground">
                      <span className="font-medium">{publication.authors}</span> • {publication.venue} {publication.year}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {publication.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: "800ms" }}>
            <Card className="bg-gradient-card border-border/50 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Research Impact
                </h3>
                <p className="text-muted-foreground mb-6">
                  My research focuses on practical applications of computer vision and machine learning, 
                  with contributions spanning 3D scene understanding, object detection, and robotic systems.
                </p>
                <div className="flex justify-center gap-8 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">5</div>
                    <div className="text-sm text-muted-foreground">Publications</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">6</div>
                    <div className="text-sm text-muted-foreground">Years Active</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">3</div>
                    <div className="text-sm text-muted-foreground">Research Areas</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
