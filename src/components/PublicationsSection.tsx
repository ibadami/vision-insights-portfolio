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
      description: "Advanced 3D semantic segmentation techniques for modular furniture using reversible jump Markov Chain Monte Carlo algorithms.",
      url: "https://www.researchgate.net/publication/311796081_3D_Semantic_Segmentation_of_Modular_Furniture_using_rjMCMC"
    },
    {
      title: "Semantic Segmentation of Modular Furniture",
      authors: "Pohlen et al.",
      venue: "IEEE WACV",
      year: "2016",
      type: "Conference",
      description: "Novel approaches to semantic segmentation of modular furniture in indoor environments.",
      url: "https://www.researchgate.net/publication/303563895_Semantic_segmentation_of_modular_furniture"
    },
    {
      title: "Depth-Enhanced Hough Forests for Object-Class Detection",
      authors: "Badami et al.",
      venue: "SPME @ ICRA",
      year: "2013",
      type: "Workshop",
      description: "Enhanced object detection using depth information and Hough Forest algorithms for RGB-D images.",
      url: "https://www.researchgate.net/publication/237841683_Depth-Enhanced_Hough_Forests_for_Object-Class_Detection_and_Continuous_Pose_Estimation"
    },
    {
      title: "Material Recognition: Bayesian Framework or SVMs?",
      authors: "Badami et al.",
      venue: "CESCG",
      year: "2012",
      type: "Conference",
      description: "Comparative study of Bayesian frameworks versus Support Vector Machines for material recognition tasks.",
      url: "https://cg.cs.uni-bonn.de/backend/v1/files/publications/Badami-Material_Recognition_Bayesian_Inference_or_SVMs.pdf-c36eeeaea5c6b464858731d473a63c83.pdf"
    },
    {
      title: "NimbRo@Home: Winning Team of RoboCup@Home 2012",
      authors: "Stückler et al.",
      venue: "RoboCup Symposium",
      year: "2012",
      type: "Symposium",
      description: "Technical report on the winning RoboCup@Home 2012 team, showcasing advanced robotics and AI integration.",
      url: "https://www.researchgate.net/publication/233860881_NimbRoHome_Winning_Team_of_the_RoboCupHome_Competition_2012"
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
    <section id="publications" className="py-20 bg-background">
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
                    <a href={publication.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      {publication.title} <ExternalLink className="h-4 w-4 text-primary" />
                    </a>
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
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
