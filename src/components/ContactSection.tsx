import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  MessageSquare, 
  Calendar, 
  Linkedin, 
  Github, 
  ExternalLink 
} from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      description: "For project inquiries and consultations",
      action: "hello@yourname.com",
      color: "text-primary"
    },
    {
      icon: MessageSquare,
      title: "Let's Chat",
      description: "Quick questions and discussions",
      action: "Schedule a call",
      color: "text-accent"
    },
    {
      icon: Calendar,
      title: "Book a Meeting",
      description: "Detailed project planning sessions",
      action: "View availability",
      color: "text-primary"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-purple-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Work <span className="bg-gradient-primary bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind? I'd love to hear about it. 
              Let's discuss how we can bring your AI vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
              <h3 className="text-2xl font-semibold mb-8 text-foreground">Get In Touch</h3>
              
              {contactMethods.map((method, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-300 group cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300`}>
                        <method.icon className={`h-6 w-6 ${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-muted-foreground mb-3">
                          {method.description}
                        </p>
                        <div className="flex items-center text-primary group-hover:text-accent transition-colors">
                          <span className="text-sm font-medium">{method.action}</span>
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-3 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 ${social.color} group`}
                    >
                      <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-gradient-card border-border/50 animate-slide-up" style={{ animationDelay: "400ms" }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Your name"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="Project inquiry"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;