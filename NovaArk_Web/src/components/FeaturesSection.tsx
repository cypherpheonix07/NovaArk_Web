import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database,
  Lock,
  Zap,
  Globe,
  Smartphone,
  Cloud,
  GitBranch,
  Cpu,
  Shield,
  Palette,
  Code2,
  Workflow
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      category: "AI-Powered Generation",
      items: [
        {
          icon: Code2,
          title: "Smart Code Generation",
          description: "Advanced AI analyzes your input and generates optimized, production-ready code",
          badge: "GPT-4"
        },
        {
          icon: Palette,
          title: "Design System Auto-Creation",
          description: "Automatically generates consistent design tokens, components, and styling",
          badge: "New"
        },
        {
          icon: Workflow,
          title: "Architecture Planning",
          description: "AI suggests optimal tech stack and project structure based on requirements",
          badge: "Beta"
        }
      ]
    },
    {
      category: "Full-Stack Infrastructure",
      items: [
        {
          icon: Database,
          title: "Auto Database Design",
          description: "Generate optimized database schemas with relationships and migrations",
          badge: "SQL/NoSQL"
        },
        {
          icon: Lock,
          title: "Built-in Authentication",
          description: "Complete auth system with JWT, OAuth, and role-based access control",
          badge: "Secure"
        },
        {
          icon: Cloud,
          title: "Serverless Functions",
          description: "Auto-generated API endpoints with proper validation and error handling",
          badge: "Scalable"
        }
      ]
    },
    {
      category: "Developer Experience",
      items: [
        {
          icon: GitBranch,
          title: "Version Control Ready",
          description: "Git integration with proper branching strategy and CI/CD pipelines",
          badge: "DevOps"
        },
        {
          icon: Cpu,
          title: "Performance Optimized",
          description: "Built-in caching, lazy loading, and performance monitoring",
          badge: "Fast"
        },
        {
          icon: Shield,
          title: "Security First",
          description: "OWASP compliance, input validation, and vulnerability scanning",
          badge: "Hardened"
        }
      ]
    },
    {
      category: "Deployment & Scaling",
      items: [
        {
          icon: Globe,
          title: "Multi-Platform Deploy",
          description: "Deploy to Vercel, Netlify, AWS, or any cloud provider with one click",
          badge: "Global"
        },
        {
          icon: Smartphone,
          title: "Mobile Responsive",
          description: "Progressive Web App with mobile-first design and offline capabilities",
          badge: "PWA"
        },
        {
          icon: Zap,
          title: "Auto-Scaling",
          description: "Containerized deployment with automatic scaling and load balancing",
          badge: "Docker"
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything You Need to Ship Fast
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From idea to production in minutes. Our AI handles the complexity while you focus on what matters.
          </p>
        </div>

        <div className="space-y-12">
          {features.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.items.map((feature) => (
                  <Card key={feature.title} className="shadow-card hover:shadow-hover transition-smooth group">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <feature.icon className="h-5 w-5 text-primary" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {feature.badge}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;