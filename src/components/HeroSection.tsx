import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Code, Zap, Layers } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24 px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_25%_25%,_white_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>
      
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-8 bg-muted text-foreground border-border hover:bg-muted/80">
            <Sparkles className="mr-2 h-4 w-4" />
            AI-Powered Full-Stack Generation
          </Badge>

          {/* Main Heading */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Build Full-Stack Apps
            <br />
            <span className="text-foreground/80">
              From Any Input
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-10 max-w-3xl text-xl text-muted-foreground leading-relaxed">
            Transform prompts, designs, or code into production-ready full-stack applications. 
            Import from Figma, GitHub, or describe your vision - we'll generate the entire stack.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="default" size="xl" className="group">
              Start Building
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl">
              View Examples
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card border-border backdrop-blur-sm hover:bg-muted/50 transition-smooth group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Multi-Input Support</h3>
                <p className="text-muted-foreground">Text prompts, Figma designs, GitHub repos, or direct code uploads</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border backdrop-blur-sm hover:bg-muted/50 transition-smooth group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Instant Generation</h3>
                <p className="text-muted-foreground">Complete frontend, backend, and database in seconds</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border backdrop-blur-sm hover:bg-muted/50 transition-smooth group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Production Ready</h3>
                <p className="text-muted-foreground">Clean code, best practices, and deployment-ready structure</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;