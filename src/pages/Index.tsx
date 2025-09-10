import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import PublicationsSection from "@/components/PublicationsSection";
import PatentSection from "@/components/PatentSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <PublicationsSection />
      <PatentSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            2025 Computer Vision & ML Engineer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
