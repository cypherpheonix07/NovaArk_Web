import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  Settings, 
  Database, 
  Shield, 
  Cpu, 
  Globe,
  Code,
  Palette,
  Zap,
  GitBranch,
  Cloud
} from "lucide-react";

const AdvancedSettings = () => {
  const [settings, setSettings] = useState({
    deployment: {
      autoSSL: true,
      customDomain: "",
      environment: "production",
      scaling: [3]
    },
    database: {
      type: "postgresql",
      poolSize: [20],
      backupEnabled: true,
      replication: false
    },
    security: {
      twoFactor: true,
      rateLimiting: true,
      cors: true,
      apiKeys: true
    },
    performance: {
      caching: true,
      compression: true,
      lazyLoading: true,
      optimization: [85]
    }
  });

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Advanced Configuration
          </h2>
          <p className="text-xl text-muted-foreground">
            Fine-tune every aspect of your generated application
          </p>
        </div>

        <Tabs defaultValue="deployment" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="deployment" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Deploy
            </TabsTrigger>
            <TabsTrigger value="database" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Database
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="performance" className="flex items-center gap-2">
              <Cpu className="h-4 w-4" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="integrations" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Integrations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="deployment" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cloud className="h-5 w-5 text-primary" />
                    Hosting Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="environment">Environment</Label>
                    <Select value={settings.deployment.environment}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="staging">Staging</SelectItem>
                        <SelectItem value="production">Production</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="custom-domain">Custom Domain</Label>
                    <Input
                      id="custom-domain"
                      placeholder="your-app.com"
                      value={settings.deployment.customDomain}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label>Auto SSL Certificate</Label>
                    <Switch checked={settings.deployment.autoSSL} />
                  </div>

                  <div className="space-y-2">
                    <Label>Auto-scaling Threshold (CPU %)</Label>
                    <Slider
                      value={settings.deployment.scaling}
                      onValueChange={(value) => setSettings(prev => ({
                        ...prev,
                        deployment: { ...prev.deployment, scaling: value }
                      }))}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                    <div className="text-sm text-muted-foreground">
                      Scale at {settings.deployment.scaling[0]}% CPU usage
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="h-5 w-5 text-primary" />
                    CI/CD Pipeline
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Automatic Testing</Label>
                      <Badge variant="secondary">Enabled</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Code Quality Checks</Label>
                      <Badge variant="secondary">ESLint + Prettier</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Security Scanning</Label>
                      <Badge variant="secondary">OWASP</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Performance Testing</Label>
                      <Badge variant="secondary">Lighthouse</Badge>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    Configure GitHub Actions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="database" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Database Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Database Type</Label>
                    <Select value={settings.database.type}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="postgresql">PostgreSQL</SelectItem>
                        <SelectItem value="mysql">MySQL</SelectItem>
                        <SelectItem value="mongodb">MongoDB</SelectItem>
                        <SelectItem value="redis">Redis</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Connection Pool Size</Label>
                    <Slider
                      value={settings.database.poolSize}
                      onValueChange={(value) => setSettings(prev => ({
                        ...prev,
                        database: { ...prev.database, poolSize: value }
                      }))}
                      max={100}
                      min={5}
                      step={5}
                    />
                    <div className="text-sm text-muted-foreground">
                      {settings.database.poolSize[0]} connections
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Label>Automated Backups</Label>
                    <Switch checked={settings.database.backupEnabled} />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label>Read Replicas</Label>
                    <Switch checked={settings.database.replication} />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Schema Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Auto Migrations</Label>
                      <Badge variant="outline">Enabled</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Seed Data</Label>
                      <Badge variant="outline">Custom</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Indexing Strategy</Label>
                      <Badge variant="outline">Optimized</Badge>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Generate Schema Docs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="security" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Authentication & Authorization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Two-Factor Authentication</Label>
                    <Switch checked={settings.security.twoFactor} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label>API Rate Limiting</Label>
                    <Switch checked={settings.security.rateLimiting} />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label>CORS Protection</Label>
                    <Switch checked={settings.security.cors} />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label>API Key Management</Label>
                    <Switch checked={settings.security.apiKeys} />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Data Protection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Encryption at Rest</Label>
                      <Badge variant="secondary">AES-256</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>GDPR Compliance</Label>
                      <Badge variant="secondary">Enabled</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Audit Logging</Label>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Optimization Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Redis Caching</Label>
                    <Switch checked={settings.performance.caching} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label>Gzip Compression</Label>
                    <Switch checked={settings.performance.compression} />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label>Lazy Loading</Label>
                    <Switch checked={settings.performance.lazyLoading} />
                  </div>

                  <div className="space-y-2">
                    <Label>Optimization Level</Label>
                    <Slider
                      value={settings.performance.optimization}
                      onValueChange={(value) => setSettings(prev => ({
                        ...prev,
                        performance: { ...prev.performance, optimization: value }
                      }))}
                      max={100}
                      step={5}
                    />
                    <div className="text-sm text-muted-foreground">
                      {settings.performance.optimization[0]}% optimization
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Monitoring & Analytics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Performance Monitoring</Label>
                      <Badge variant="secondary">Real-time</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Error Tracking</Label>
                      <Badge variant="secondary">Sentry</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>User Analytics</Label>
                      <Badge variant="secondary">Privacy-first</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="integrations" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Stripe", description: "Payment processing", status: "Available" },
                { name: "SendGrid", description: "Email service", status: "Available" },
                { name: "Cloudinary", description: "Image management", status: "Available" },
                { name: "Auth0", description: "Authentication", status: "Available" },
                { name: "Slack", description: "Team notifications", status: "Coming Soon" },
                { name: "Webhooks", description: "Custom integrations", status: "Available" }
              ].map((integration) => (
                <Card key={integration.name} className="shadow-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{integration.name}</CardTitle>
                      <Badge variant={integration.status === "Available" ? "secondary" : "outline"}>
                        {integration.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      {integration.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      disabled={integration.status === "Coming Soon"}
                    >
                      Configure
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AdvancedSettings;