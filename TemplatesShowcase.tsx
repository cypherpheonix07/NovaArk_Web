import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { templates, templateCategories, templateComplexities } from "@/data/sample";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useState } from "react";

const TemplatesShowcase = () => {
  

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Beginner": return "bg-accent text-accent-foreground";
      case "Intermediate": return "bg-secondary text-secondary-foreground";
      case "Advanced": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedComplexity, setSelectedComplexity] = useState<string>("All");

  const filteredByCategory = (category: string) =>
    category === "All" ? templates : templates.filter((t) => t.category === category);

  const filteredByCategoryAndComplexity = (category: string, complexity: string) => {
    const base = filteredByCategory(category);
    return complexity === "All" ? base : base.filter((t) => t.complexity === complexity);
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

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
          <div className="flex flex-col md:flex-row gap-3 justify-center mb-6">
            <TabsList>
              {templateCategories.map((cat) => (
                <TabsTrigger key={cat} value={cat} className="text-xs">
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="w-48">
              <Select value={selectedComplexity} onValueChange={setSelectedComplexity}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {templateComplexities.map((cx) => (
                    <SelectItem key={cx} value={cx}>
                      {cx}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {templateCategories.map((cat) => (
            <TabsContent key={cat} value={cat}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredByCategoryAndComplexity(cat, selectedComplexity).map((template) => (
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
            </TabsContent>
          ))}
        </Tabs>

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
