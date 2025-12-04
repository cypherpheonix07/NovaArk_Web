import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TemplatesShowcase from "@/components/TemplatesShowcase";
import ProjectCreator from "@/components/ProjectCreator";
import AdvancedSettings from "@/components/AdvancedSettings";
import IntegrationsHub from "@/components/IntegrationsHub";
import ProjectDashboard from "@/components/ProjectDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <FeaturesSection />
        <TemplatesShowcase />
        <ProjectCreator />
        <AdvancedSettings />
        <IntegrationsHub />
        <ProjectDashboard />
      </main>
    </div>
  );
};

export default Index;
