import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useForm, ValidationError } from '@formspree/react';
import { 
  Mail, 
  MessageSquare, 
  Calendar, 
  Linkedin, 
  Github, 
  ExternalLink,
  Loader2,
  CheckCircle,
  MapPin
} from "lucide-react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mldwzbzl");
  const { toast } = useToast();

  // Show success toast when form is successfully submitted
  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you as soon as possible.",
      });
    }
  }, [state.succeeded, toast]);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      description: "For project inquiries and consultations",
      action: "badami.ishrat@gmail.com",
      color: "text-primary"
    },
    {
      icon: Calendar,
      title: "Schedule a Meeting",
      description: "Book a consultation directly through my calendar",
      action: "Book a meeting",
      href: "https://calendar.app.google/c3nTf2Q78iPHeNiJA",
      color: "text-accent"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Ottawa, Ontario, Canada",
      color: "text-primary"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ishrat-badami/",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ibadami",
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
              Based in Ottawa, Ontario, Canada and available for remote collaboration worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
              <h3 className="text-2xl font-semibold mb-8 text-foreground">Contact</h3>
              
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-6 text-foreground">Send a Message</h4>
                  
                  {state.succeeded ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h5 className="text-xl font-semibold text-foreground mb-2">Thank you!</h5>
                      <p className="text-muted-foreground">Your message has been sent successfully. I'll get back to you soon!</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-foreground">Name</Label>
                          <Input 
                            id="name"
                            name="name"
                            placeholder="Your name"
                            className="bg-background border-border focus:border-primary"
                            required
                          />
                          <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                            className="text-red-500 text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-foreground">Email</Label>
                          <Input 
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            className="bg-background border-border focus:border-primary"
                            required
                          />
                          <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                            className="text-red-500 text-sm"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-foreground">Subject</Label>
                        <Input 
                          id="subject"
                          name="subject"
                          placeholder="Project inquiry"
                          className="bg-background border-border focus:border-primary"
                          required
                        />
                        <ValidationError 
                          prefix="Subject" 
                          field="subject"
                          errors={state.errors}
                          className="text-red-500 text-sm"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-foreground">Message</Label>
                        <Textarea 
                          id="message"
                          name="message"
                          placeholder="Tell me about your project..."
                          rows={6}
                          className="bg-background border-border focus:border-primary resize-none"
                          required
                        />
                        <ValidationError 
                          prefix="Message" 
                          field="message"
                          errors={state.errors}
                          className="text-red-500 text-sm"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={state.submitting}
                        className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 disabled:opacity-50"
                      >
                        {state.submitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Methods */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: "300ms" }}>
              <h3 className="text-2xl font-semibold mb-8 text-foreground">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-primary/10 ${method.color}`}>
                          <method.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{method.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                          {method.href ? (
                            <a href={method.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300">
                              {method.action}
                            </a>
                          ) : method.isScheduler ? (
                            <p className="text-sm font-medium text-foreground">{method.action}</p>
                          ) : (
                            <p className="text-sm font-medium text-foreground">{method.action}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-8 animate-slide-up lg:col-span-2" style={{ animationDelay: "400ms" }}>
              <h3 className="text-2xl font-semibold mb-8 text-foreground text-center">Connect With Me</h3>
              
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 ${social.color} group`}
                  >
                    <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;