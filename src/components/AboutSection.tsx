
import { Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-zonzzo-gray">
      <div className="section-container">
        <div className="flex items-center justify-center mb-10">
          <div className="h-16 w-16 bg-zonzzo-red bg-opacity-10 rounded-full flex items-center justify-center mr-4">
            <Users size={28} className="text-zonzzo-red" />
          </div>
          <h2 className="font-bold text-4xl">Quem Somos</h2>
        </div>
        
        <p className="section-subtitle text-center mx-auto">
          A Zonzzo é uma healthtech focada em criar soluções tecnológicas acessíveis e inteligentes para o cuidado preventivo de idosos, 
          combinando o melhor da tecnologia com as necessidades reais de saúde da população sênior.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="feature-card">
            <h3 className="text-xl font-semibold mb-3 text-zonzzo-red">Nossa Missão</h3>
            <p className="text-gray-600">
              Promover soluções acessíveis e inteligentes para o cuidado preventivo de idosos, permitindo mais autonomia e qualidade de vida.
            </p>
          </div>
          
          <div className="feature-card">
            <h3 className="text-xl font-semibold mb-3 text-zonzzo-red">Nossa Visão</h3>
            <p className="text-gray-600">
              Ser referência em tecnologia aplicada ao cuidado de idosos, criando um mundo onde o envelhecimento é acompanhado com dignidade e segurança.
            </p>
          </div>
          
          <div className="feature-card">
            <h3 className="text-xl font-semibold mb-3 text-zonzzo-red">Nossos Valores</h3>
            <p className="text-gray-600">
              Empatia, inovação responsável, confiabilidade e compromisso com o bem-estar dos idosos e a tranquilidade de suas famílias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
