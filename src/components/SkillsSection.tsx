import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "R", "C++", "JavaScript", "SQL", "MATLAB"],
      color: "bg-primary/20 text-primary"
    },
    {
      category: "Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "MLflow"],
      color: "bg-accent/20 text-accent"
    },
    {
      category: "Computer Vision",
      skills: ["OpenCV", "YOLO", "Detectron2", "MediaPipe", "PIL", "ImageIO"],
      color: "bg-primary/20 text-primary"
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Git", "CI/CD", "MLOps"],
      color: "bg-accent/20 text-accent"
    },
    {
      category: "Data Science",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Apache Spark"],
      color: "bg-primary/20 text-primary"
    },
    {
      category: "Specialized Tools",
      skills: ["CUDA", "OpenVINO", "ONNX", "Weights & Biases", "Roboflow", "Label Studio"],
      color: "bg-accent/20 text-accent"
    }
  ];

  const achievements = [
    { metric: "5+", label: "Years Experience" },
    { metric: "50+", label: "Projects Completed" },
    { metric: "20+", label: "Happy Clients" },
    { metric: "99%", label: "Success Rate" }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit of technologies and methodologies 
              that I use to build world-class AI solutions.
            </p>
          </div>

          {/* Achievement Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${100 + index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {achievement.metric}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:shadow-glow-primary transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-foreground">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className={`${category.color} border-0 hover:scale-105 transition-transform duration-200`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: "1100ms" }}>
            <Card className="bg-gradient-card border-border/50 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how my expertise can help bring your AI vision to life.
                </p>
                <a 
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-glow-primary transition-all duration-300"
                >
                  Start a Conversation
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;