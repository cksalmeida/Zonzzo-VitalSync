
import { Monitor, Clock } from "lucide-react";

const VitalSyncSection = () => {
  return (
    <section id="vitalsync" className="bg-white">
      <div className="section-container">
        <div className="flex items-center justify-center mb-10">
          <div className="h-16 w-16 bg-zonzzo-red bg-opacity-10 rounded-full flex items-center justify-center mr-4">
            <Monitor size={28} className="text-zonzzo-red" />
          </div>
          <h2 className="font-bold text-4xl">O que é o VitalSync</h2>
        </div>
        
        <p className="section-subtitle text-center mx-auto">
          O VitalSync é um aplicativo voltado para o monitoramento de sono de idosos, 
          com o objetivo de realizar pré-diagnósticos de possíveis Acidentes Vasculares 
          Cerebrais (AVCs) por meio de inteligência artificial.
        </p>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 mt-12">
          <div className="relative">
            <div className="aspect-video bg-zonzzo-red rounded-xl overflow-hidden shadow-lg">
              <div className="h-full w-full bg-gradient-to-br from-zonzzo-red to-zonzzo-red-dark p-8 flex items-center justify-center">
                <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-6 w-full">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-white font-medium">
                      <span className="text-xs opacity-70">MONITORANDO</span>
                      <h4 className="text-xl">Maria Silva</h4>
                    </div>
                    <Clock size={24} className="text-white opacity-80" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white bg-opacity-10 rounded-md p-3 flex justify-between items-center">
                      <span className="text-white text-sm">Oxigenação</span>
                      <span className="text-white font-semibold">97% SpO2</span>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-md p-3 flex justify-between items-center">
                      <span className="text-white text-sm">Pressão Arterial</span>
                      <span className="text-white font-semibold">130/85 mmHg</span>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-md p-3 flex justify-between items-center">
                      <span className="text-white text-sm">Batimentos Cardíacos</span>
                      <span className="text-white font-semibold">75 bpm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Como funciona</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-8 w-8 bg-zonzzo-red bg-opacity-10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-zonzzo-red font-semibold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Sensor no dedo</h4>
                  <p className="text-gray-600">O idoso utiliza um sensor confortável no dedo durante o sono, que coleta dados vitais como pressão arterial, nível de oxigênio no sangue e batimentos cardíacos.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-8 w-8 bg-zonzzo-red bg-opacity-10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-zonzzo-red font-semibold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Análise de IA</h4>
                  <p className="text-gray-600">Com base nos dados coletados e no histórico médico preenchido previamente, nossa inteligência artificial identifica padrões que podem indicar o risco de um AVC.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-8 w-8 bg-zonzzo-red bg-opacity-10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-zonzzo-red font-semibold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Monitoramento em tempo real</h4>
                  <p className="text-gray-600">Os resultados são enviados em tempo real para cuidadores e familiares, permitindo um acompanhamento à distância e intervenção rápida quando necessário.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Adicionando a visualização do aplicativo que foi movida da Hero Section */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 max-w-lg w-full">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 bg-zonzzo-red-light bg-opacity-20 rounded-full flex items-center justify-center">
                <div className="h-12 w-12 bg-zonzzo-red rounded-full animate-pulse-subtle"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Oxigenação:</span>
                <span className="text-zonzzo-red font-semibold">98% SpO2</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Pressão Arterial:</span>
                <span className="text-zonzzo-red font-semibold">120/80 mmHg</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Batimento Cardíaco:</span>
                <span className="text-zonzzo-red font-semibold">72 bpm</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Status:</span>
                <span className="text-zonzzo-red font-semibold">Estável</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitalSyncSection;
