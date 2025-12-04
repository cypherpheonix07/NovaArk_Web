import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  FileText, 
  Github, 
  Figma, 
  Wand2, 
  Rocket,
  Database,
  Code2,
  Palette
} from "lucide-react";

const ProjectCreator = () => {
  const [prompt, setPrompt] = useState("");
  const [projectName, setProjectName] = useState("");
  const [techStack, setTechStack] = useState<string[]>([]);

  const techOptions = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Express", icon: "🚀" },
    { name: "Next.js", icon: "▲" },
  ];

  const toggleTech = (tech: string) => {
    setTechStack(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Create Your Project
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your input method and let AI generate your complete full-stack application
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Methods */}
          <div className="lg:col-span-2">
            <Card className="shadow-card hover:shadow-hover transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="h-5 w-5 text-primary" />
                  Input Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="prompt" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="prompt" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Prompt
                    </TabsTrigger>
                    <TabsTrigger value="upload" className="flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      Upload
                    </TabsTrigger>
                    <TabsTrigger value="figma" className="flex items-center gap-2">
                      <Figma className="h-4 w-4" />
                      Figma
                    </TabsTrigger>
                    <TabsTrigger value="github" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      GitHub
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="prompt" className="mt-6">
                    <div className="space-y-4">
                      <Label htmlFor="project-name">Project Name</Label>
                      <Input
                        id="project-name"
                        placeholder="My Awesome App"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        className="shadow-card"
                      />
                      
                      <Label htmlFor="prompt">Describe Your App</Label>
                      <Textarea
                        id="prompt"
                        placeholder="Create a task management app with user authentication, real-time collaboration, and drag-and-drop functionality. Include a modern dashboard with analytics..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        rows={6}
                        className="shadow-card"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="upload" className="mt-6">
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-muted/50">
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Drop files here</h3>
                      <p className="text-muted-foreground mb-4">
                        Support for images, mockups, code files, and design exports
                      </p>
                      <Button variant="outline">Browse Files</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="figma" className="mt-6">
                    <div className="space-y-4">
                      <Label htmlFor="figma-url">Figma File URL</Label>
                      <Input
                        id="figma-url"
                        placeholder="https://www.figma.com/file/..."
                        className="shadow-card"
                      />
                      <p className="text-sm text-muted-foreground">
                        Paste your Figma file URL and we'll automatically extract components and layouts
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="github" className="mt-6">
                    <div className="space-y-4">
                      <Label htmlFor="github-url">GitHub Repository URL</Label>
                      <Input
                        id="github-url"
                        placeholder="https://github.com/username/repo"
                        className="shadow-card"
                      />
                      <p className="text-sm text-muted-foreground">
                        Import an existing repository to enhance or rebuild with our platform
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Configuration Panel */}
          <div className="space-y-6">
            {/* Tech Stack Selection */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  Tech Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {techOptions.map((tech) => (
                    <Button
                      key={tech.name}
                      variant={techStack.includes(tech.name) ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleTech(tech.name)}
                      className="justify-start"
                    >
                      <span className="mr-2">{tech.icon}</span>
                      {tech.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features Panel */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Authentication</span>
                  <Badge variant="secondary">Auto</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Database Setup</span>
                  <Badge variant="secondary">Auto</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">API Generation</span>
                  <Badge variant="secondary">Auto</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Deployment Config</span>
                  <Badge variant="secondary">Auto</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Generate Button */}
            <Button variant="hero" size="lg" className="w-full group">
              <Rocket className="mr-2 h-5 w-5" />
              Generate Full-Stack App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCreator;