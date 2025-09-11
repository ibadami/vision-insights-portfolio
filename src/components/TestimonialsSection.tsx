import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote, Linkedin } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      paragraphs: [
        "Ishrat is an exceptional Machine Learning/CV Engineer and teammate. I had the pleasure of working alongside her at Triplelift as the Product Manager of her eng team, where she consistently demonstrated outstanding technical prowess and leadership, particularly in the challenging domain of virtual product placement.",
        "Ishrat was the lead CV engineer on our most complex computer vision problems, spearheading the development of 0-1 products within virtual product placement. Her contributions were instrumental in building the foundational components of our Connected TV (CTV) ad products, encompassing contextual ads and product insertion, showcasing her ability to conceptualize and execute innovative solutions.",
        "She consistently strived to break down challenging problems into manageable steps, effectively demonstrating progress throughout the development process. Her dedication to not settle for the status quo was evident in every project she tackled, as she consistently pushed for innovative and effective solutions."
      ],
      author: "Teron Samuel",
      title: "Product Manager",
      company: "Netflix Ad",
      linkedinUrl: "https://www.linkedin.com/in/teronsamuel"
    },
    {
      paragraphs: [
        "Ishrat is a deeply curious and thoughtful engineer with a strong foundation in Computer Vision and a sharp eye on emerging trends in LLMs, always staying ahead of the curve. She has a rare ability to distill complex ML research into engaging, accessible content, whether for a room full of experts or newcomers.",
        "This was most visible in her founding and leading of our ML reading group, where she regularly prepared high-quality walkthroughs of the latest CV/ML papers, leading discussions, and distilling the best of those ideas for use in Triplelift's CTV product suite.",
        "As a reflection of both her curiosity and ability to pick up new software skills quickly, she \"vibe coded\" an entire video contextual analysis app in less than a week, at least a year before \"vibe coding\" was even a thing, replete with a Streamlit UI, the majority of which was retained in the final production client-facing app. A great teammate with a sharp sense of humor and unshakable work ethic, Ishrat raises the bar on every team she joins."
      ],
      author: "Yeshwanth Srinivasan",
      title: "VP of Data Science and Engineering", 
      company: "Triplelift",
      linkedinUrl: "https://www.linkedin.com/in/yesh-srinivasan"
    },
    {
      paragraphs: [
        "I had the pleasure of interviewing Ishrat and ultimately hiring her as the second member of our nascent AI/ML/CV team. From day one, she embraced the uncertainty that comes with building a new product.",
        "Ishrat is an exceptionally clear communicator and a deeply thoughtful, logical, and intellectually brilliant thinker. She never shied away from voicing her opinions—always with elegance and tact—and her creative, outside-the-box mindset is balanced by the judgment and wisdom needed to deliver on business goals. Whether working independently or collaborating closely with the team, she consistently demonstrated initiative and adaptability.",
        "Over the course of her tenure, I witnessed remarkable personal growth—not only in her technical skills but also in her interpersonal and soft skills. Ishrat’s positivity and encouragement were a constant source of motivation for me. She was a delight to have on the team, one of my best hires (ever) and I would welcome the opportunity to work with her again without hesitation."
      ],
      author: "Curt Beattie",
      title: "Experienced Technology Leader, Software Developer, Architect and Fractional CTO",
      company: "Crafted, Ex-Triplelift",
      linkedinUrl: "https://www.linkedin.com/in/curt-beattie-50305a12/"
    },
    {
      paragraphs: [
        "I had the pleasure of working with Ishrat Badami, and I have been consistently impressed by her professionalism, organizational skills, and dedication to continuous learning. Her expertise in computer vision and machine learning has been instrumental in driving AI-driven solutions. Ishrat has a remarkable ability to stay on top of complex tasks while maintaining a proactive approach to problem-solving. ",
        "I recently presented alongside her, and her clear communication and attention to detail stood out. I highly recommend her to any team seeking a dedicated and talented professional in the AI field."
      ],
      author: "Kristine Middlemiss",
      title: "Senior Technology Leader | Pioneering the fusion of AI, Technology and Storytelling in Film, TV, Games, VFX and Animation | Part-Time Professor",
      company: "Info-Tech Research Group, Ex-MARZ VFX",
      linkedinUrl: "https://www.linkedin.com/in/kristinemiddlemiss/"
    }
  ];

  const nextTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 400);
  };

  const prevTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 400);
  };

  const goToTestimonial = (index: number) => {
    if (index !== currentIndex && !isTransitioning) {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 400);
    }
  };

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="text-center">
      {/* Quote Icon */}
      <Quote className="h-12 w-12 text-primary mx-auto mb-6 opacity-50" />
      
      {/* Testimonial Text */}
      <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
        {testimonial.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </blockquote>
      
      {/* Author Info */}
      <div className="flex flex-col items-center space-y-2">
        <h4 className="text-xl font-semibold text-foreground">
          {testimonial.author}
        </h4>
        <p className="text-muted-foreground">
          {testimonial.title}
        </p>
        <p className="text-primary font-medium">
          {testimonial.company}
        </p>
        
        {/* LinkedIn Link */}
        <a
          href={testimonial.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 mt-2"
        >
          <Linkedin className="h-4 w-4" />
          <span className="text-sm">View LinkedIn Profile</span>
        </a>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
               <span className="bg-gradient-primary bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What colleagues and collaborators say about working with me on 
              machine learning and computer vision projects.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Main Testimonial Card */}
            <Card className="bg-gradient-card border-border/50 shadow-glow-primary transition-all duration-500 animate-slide-up overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="relative w-full overflow-hidden">
                  {/* Carousel Container */}
                  <div 
                    className="flex transition-all duration-700 ease-out"
                    style={{ 
                      transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div 
                        key={index}
                        className="w-full flex-shrink-0 px-4 transition-opacity duration-700 ease-out"
                        style={{
                          opacity: Math.abs(index - currentIndex) <= 1 ? 1 : 0.3
                        }}
                      >
                        <TestimonialCard testimonial={testimonial} />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              disabled={isTransitioning}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-primary group disabled:opacity-50 disabled:cursor-not-allowed z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
            </button>

            <button
              onClick={nextTestimonial}
              disabled={isTransitioning}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-primary group disabled:opacity-50 disabled:cursor-not-allowed z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                  index === currentIndex
                    ? 'bg-primary shadow-glow-primary scale-110'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-105'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Testimonial Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} of {testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
