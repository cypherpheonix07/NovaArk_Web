import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import TemplatesShowcase from "@/components/TemplatesShowcase";
import IntegrationsHub from "@/components/IntegrationsHub";
import ProjectDashboard from "@/components/ProjectDashboard";
import AdvancedSettings from "@/components/AdvancedSettings";
import ProjectCreator from "@/components/ProjectCreator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pages, sectionRoutes } from "@/data/sample";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          {sectionRoutes.map((r) => {
            const map: Record<string, React.ComponentType> = {
              features: FeaturesSection,
              templates: TemplatesShowcase,
              integrations: IntegrationsHub,
              projects: ProjectDashboard,
              settings: AdvancedSettings,
              create: ProjectCreator,
            };
            const Comp = map[r.key];
            return <Route key={r.path} path={r.path} element={<Comp />} />;
          })}
          {Object.keys(pages).map((p) => (
            <Route
              key={p}
              path={p}
              element={(
                <section className="py-16 px-6">
                  <div className="mx-auto max-w-5xl">
                    <Card className="shadow-card">
                      <CardHeader>
                        <CardTitle className="text-2xl">{pages[p].title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground">{pages[p].description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {pages[p].sections.map((s) => (
                            <div key={s.heading} className="border rounded-md p-4">
                              <h3 className="font-semibold mb-2">{s.heading}</h3>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                {s.bullets.map((b) => (
                                  <li key={b} className="flex items-center">
                                    <span className="inline-block w-1 h-1 bg-primary rounded-full mr-2" />
                                    {b}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>
              )}
            />
          ))}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
