
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-hero-pattern py-24 md:py-32 mt-16">
      <div className="section-container">
        <div className="flex flex-col items-center lg:items-start">
          <div className="text-center lg:text-left max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Tecnologia que <span className="gradient-text">cuida</span> de quem você ama, mesmo à distância
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Monitoramento inteligente para prevenção de AVC em idosos
              através de análise de dados em tempo real.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#vitalsync" 
                className="px-6 py-3 bg-zonzzo-red text-white rounded-lg hover:bg-zonzzo-red-dark transition-colors flex items-center"
              >
                Conheça o VitalSync
                <ArrowDown size={18} className="ml-2" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white border border-zonzzo-red text-zonzzo-red rounded-lg hover:bg-gray-50 transition-colors"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
