import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, 
  Settings, 
  Download, 
  ExternalLink, 
  Clock,
  Database,
  Globe,
  GitBranch
} from "lucide-react";
import { projects } from "@/data/sample";

const ProjectDashboard = () => {

  const getStatusColor = (status: string) => {
    switch (status) {
      case "deployed": return "bg-accent text-accent-foreground";
      case "building": return "bg-secondary text-secondary-foreground";
      case "ready": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "deployed": return "Live";
      case "building": return "Building";
      case "ready": return "Ready";
      default: return "Unknown";
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Your Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Manage and deploy your generated full-stack applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="shadow-card hover:shadow-hover transition-smooth group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.description}
                    </p>
                  </div>
                  <Badge className={getStatusColor(project.status)}>
                    {getStatusText(project.status)}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tech Stack */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">TECH STACK</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Last Modified */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  Updated {project.lastModified}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  {project.preview && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                  )}
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                  {project.preview && (
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <Card className="text-center shadow-card">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <p className="text-sm text-muted-foreground">Total Projects</p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-card">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-accent mb-2">8</div>
              <p className="text-sm text-muted-foreground">Deployed Apps</p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-card">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-secondary mb-2">156</div>
              <p className="text-sm text-muted-foreground">Components Generated</p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-card">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-foreground mb-2">24h</div>
              <p className="text-sm text-muted-foreground">Avg. Build Time</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectDashboard;
