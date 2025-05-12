
import { Heart } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="bg-zonzzo-gray">
      <div className="section-container">
        <div className="flex items-center justify-center mb-10">
          <div className="h-16 w-16 bg-zonzzo-red bg-opacity-10 rounded-full flex items-center justify-center mr-4">
            <Heart size={28} className="text-zonzzo-red" />
          </div>
          <h2 className="text-4xl font-bold">Benefícios</h2>
        </div>
        
        <p className="section-subtitle text-center mx-auto">
          O VitalSync foi desenvolvido para oferecer tranquilidade, segurança e praticidade 
          para idosos e seus cuidadores, com foco na prevenção e detecção precoce.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="feature-card text-center p-8">
            <div className="h-16 w-16 bg-zonzzo-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-zonzzo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Prevenção</h3>
            <p className="text-gray-600">
              Detecção precoce de sinais que podem indicar risco de AVC, permitindo intervenção médica antes de complicações graves.
            </p>
          </div>
          
          <div className="feature-card text-center p-8">
            <div className="h-16 w-16 bg-zonzzo-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-zonzzo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Autonomia</h3>
            <p className="text-gray-600">
              Proporciona maior independência aos idosos, permitindo que vivam em suas casas com mais segurança e confiança.
            </p>
          </div>
          
          <div className="feature-card text-center p-8">
            <div className="h-16 w-16 bg-zonzzo-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-zonzzo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Monitoramento Remoto</h3>
            <p className="text-gray-600">
              Acompanhamento à distância, permitindo que familiares e cuidadores monitorem a saúde do idoso sem invasão de privacidade.
            </p>
          </div>
          
          <div className="feature-card text-center p-8">
            <div className="h-16 w-16 bg-zonzzo-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-zonzzo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Histórico Detalhado</h3>
            <p className="text-gray-600">
              Registro completo de dados vitais durante o sono, auxiliando profissionais de saúde no diagnóstico e no acompanhamento do tratamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
