import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar, Users } from "lucide-react";

const PatentSection = () => {
  const patent = {
    title: "Method and system for image processing",
    patentNumber: "US11875491B2",
    status: "Approved",
    description: "Co-authored US patent for automatic de-aging and digital makeup using AI for the product named Vanity AI. This innovative system leverages advanced computer vision and machine learning techniques to perform real-time facial transformations and enhancements.",
    applicationDate: "Filed during tenure at MARZ Inc.",
    inventors: "Ishrat Badami et al.",
    assignee: "MARZ Inc.",
    url: "https://patents.google.com/patent/US11875491B2",
    technicalAreas: ["Computer Vision", "Machine Learning", "Image Processing", "Facial Recognition", "AI-powered VFX"],
    impact: "This patent represents a significant advancement in AI-powered visual effects technology, enabling automatic facial transformations for entertainment and media applications."
  };

  return (
    <section id="patents" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Patent <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Intellectual property contributions in AI-powered image processing and computer vision technologies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border/50 hover:shadow-glow-primary transition-all duration-300 animate-slide-up">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        {patent.status}
                      </Badge>
                      <Badge variant="outline" className="ml-2 text-muted-foreground">
                        {patent.patentNumber}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:border-primary hover:shadow-glow-accent transition-all duration-300"
                    onClick={() => window.open(patent.url, '_blank')}
                  >
                    View Patent
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {patent.title}
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span className="font-medium">Inventors:</span>
                      <span>{patent.inventors}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">Filed:</span>
                      <span>{patent.applicationDate}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Award className="h-4 w-4" />
                      <span className="font-medium">Assignee:</span>
                      <span>{patent.assignee}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {patent.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Technical Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {patent.technicalAreas.map((area, index) => (
                      <Badge 
                        key={index}
                        variant="secondary"
                        className="bg-primary/20 text-primary border-0"
                      >
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Impact & Innovation</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {patent.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: "400ms" }}>
            <Card className="bg-gradient-card border-border/50 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Innovation Leadership
                </h3>
                <p className="text-muted-foreground mb-6">
                  This patent demonstrates my ability to translate cutting-edge research into 
                  practical, commercially viable AI solutions that push the boundaries of 
                  what's possible in computer vision and image processing.
                </p>
                <div className="flex justify-center gap-8 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">1</div>
                    <div className="text-sm text-muted-foreground">US Patent</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">AI/VFX</div>
                    <div className="text-sm text-muted-foreground">Technology Area</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">2022</div>
                    <div className="text-sm text-muted-foreground">Patent Year</div>
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

export default PatentSection;
