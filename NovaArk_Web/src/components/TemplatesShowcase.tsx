import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  BookOpen, 
  Users, 
  Calendar,
  MessageSquare,
  BarChart3,
  Camera,
  Music,
  Briefcase,
  Heart,
  Gamepad2,
  Newspaper
} from "lucide-react";

const TemplatesShowcase = () => {
  const templates = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "Complete online store with cart, payments, and admin panel",
      icon: ShoppingCart,
      tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
      category: "Business",
      complexity: "Advanced",
      deployTime: "3 min",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Analytics Dashboard"]
    },
    {
      id: 2,
      name: "Learning Management System",
      description: "Educational platform with courses, quizzes, and progress tracking",
      icon: BookOpen,
      tech: ["Next.js", "Prisma", "Auth0", "AWS S3"],
      category: "Education",
      complexity: "Advanced",
      deployTime: "4 min",
      features: ["Video Streaming", "Quiz Engine", "Progress Tracking", "Certificates"]
    },
    {
      id: 3,
      name: "Social Media Dashboard",
      description: "Community platform with posts, comments, and real-time chat",
      icon: Users,
      tech: ["React", "Socket.io", "Redis", "MongoDB"],
      category: "Social",
      complexity: "Intermediate",
      deployTime: "2 min",
      features: ["Real-time Chat", "Media Upload", "Push Notifications", "User Profiles"]
    },
    {
      id: 4,
      name: "Project Management Tool",
      description: "Team collaboration with tasks, kanban boards, and time tracking",
      icon: Calendar,
      tech: ["Vue.js", "Express", "PostgreSQL", "WebSockets"],
      category: "Productivity",
      complexity: "Intermediate",
      deployTime: "3 min",
      features: ["Kanban Boards", "Time Tracking", "Team Collaboration", "Reporting"]
    },
    {
      id: 5,
      name: "Customer Support Portal",
      description: "Help desk with ticketing system and knowledge base",
      icon: MessageSquare,
      tech: ["React", "FastAPI", "Elasticsearch", "PostgreSQL"],
      category: "Business",
      complexity: "Advanced",
      deployTime: "3 min",
      features: ["Ticket System", "Knowledge Base", "Live Chat", "Analytics"]
    },
    {
      id: 6,
      name: "Analytics Dashboard",
      description: "Business intelligence with charts, reports, and data visualization",
      icon: BarChart3,
      tech: ["React", "D3.js", "Python", "ClickHouse"],
      category: "Analytics",
      complexity: "Advanced",
      deployTime: "4 min",
      features: ["Real-time Charts", "Custom Reports", "Data Export", "Alerts"]
    },
    {
      id: 7,
      name: "Portfolio Website",
      description: "Professional showcase with blog, gallery, and contact forms",
      icon: Camera,
      tech: ["Gatsby", "Contentful", "Netlify", "GraphQL"],
      category: "Personal",
      complexity: "Beginner",
      deployTime: "1 min",
      features: ["Blog System", "Image Gallery", "Contact Forms", "SEO Optimized"]
    },
    {
      id: 8,
      name: "Music Streaming App",
      description: "Audio platform with playlists, recommendations, and social features",
      icon: Music,
      tech: ["React Native", "Node.js", "AWS S3", "Redis"],
      category: "Entertainment",
      complexity: "Advanced",
      deployTime: "5 min",
      features: ["Audio Streaming", "Playlists", "Recommendations", "Social Features"]
    },
    {
      id: 9,
      name: "Job Board Platform",
      description: "Recruitment site with job listings, applications, and employer tools",
      icon: Briefcase,
      tech: ["Next.js", "Supabase", "Stripe", "Algolia"],
      category: "Business",
      complexity: "Intermediate",
      deployTime: "3 min",
      features: ["Job Search", "Application Tracking", "Employer Dashboard", "Payments"]
    }
  ];

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Beginner": return "bg-accent text-accent-foreground";
      case "Intermediate": return "bg-secondary text-secondary-foreground";
      case "Advanced": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Pre-built Templates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with battle-tested templates and customize them to your needs. Each template is production-ready with best practices built-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="shadow-card hover:shadow-hover transition-smooth group overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <template.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      {template.category}
                    </Badge>
                    <Badge className={`text-xs ${getComplexityColor(template.complexity)}`}>
                      {template.complexity}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {template.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {template.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tech Stack */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">TECH STACK</p>
                  <div className="flex flex-wrap gap-1">
                    {template.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">KEY FEATURES</p>
                  <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                    {template.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deploy Time */}
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
                  <span>Deploy time: {template.deployTime}</span>
                  <Badge variant="outline" className="text-xs">
                    Ready to use
                  </Badge>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Preview
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    Use Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Template CTA */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto shadow-card bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Need a Custom Template?
              </h3>
              <p className="text-muted-foreground mb-6">
                Describe your specific requirements and our AI will generate a custom template tailored to your needs.
              </p>
              <Button variant="hero" size="lg">
                Create Custom Template
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TemplatesShowcase;