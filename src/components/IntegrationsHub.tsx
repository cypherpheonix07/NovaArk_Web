import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Zap, Code } from "lucide-react";
import { integrations, integrationCategories } from "@/data/sample";
import { useState } from "react";

const IntegrationsHub = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  
  const categories = [...integrationCategories];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Popular": return "bg-accent text-accent-foreground";
      case "Verified": return "bg-primary text-primary-foreground";
      case "Essential": return "bg-secondary text-secondary-foreground";
      case "New": return "bg-gradient-to-r from-primary to-accent text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Integrations Hub
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect your favorite tools and services. One-click setup with automatic configuration and best practices.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search integrations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 shadow-card"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-xs"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIntegrations.map((integration) => (
            <Card key={integration.id} className="shadow-card hover:shadow-hover transition-smooth group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <integration.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <Badge className={`text-xs ${getStatusColor(integration.status)}`}>
                      {integration.status}
                    </Badge>
                    {integration.connected && (
                      <Badge variant="outline" className="text-xs text-accent border-accent">
                        Connected
                      </Badge>
                    )}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {integration.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {integration.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Setup Time */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Setup time:</span>
                  <Badge variant="secondary" className="text-xs">
                    {integration.setupTime}
                  </Badge>
                </div>

                {/* Features */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">KEY FEATURES</p>
                  <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                    {integration.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    {integration.connected ? "Configure" : "Learn More"}
                  </Button>
                  <Button 
                    variant={integration.connected ? "secondary" : "default"} 
                    size="sm" 
                    className="flex-1"
                  >
                    {integration.connected ? "Disconnect" : "Connect"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Integration CTA */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto shadow-card bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <Code className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Need a Custom Integration?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our AI can generate custom integrations for any API or service. Just provide the documentation or describe your needs.
              </p>
              <div className="flex gap-3 justify-center">
                <Button variant="outline">
                  Browse API Directory
                </Button>
                <Button variant="hero">
                  Request Integration
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsHub;
