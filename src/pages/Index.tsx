
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import VitalSyncSection from "../components/VitalSyncSection";
import BenefitsSection from "../components/BenefitsSection";
import AudienceSection from "../components/AudienceSection";
import TechSection from "../components/TechSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VitalSyncSection />
      <BenefitsSection />
      <AudienceSection />
      <TechSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
