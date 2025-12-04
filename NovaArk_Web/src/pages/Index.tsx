import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TemplatesShowcase from "@/components/TemplatesShowcase";
import ProjectCreator from "@/components/ProjectCreator";
import AdvancedSettings from "@/components/AdvancedSettings";
import IntegrationsHub from "@/components/IntegrationsHub";
import ProjectDashboard from "@/components/ProjectDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TemplatesShowcase />
        <ProjectCreator />
        <AdvancedSettings />
        <IntegrationsHub />
        <ProjectDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
