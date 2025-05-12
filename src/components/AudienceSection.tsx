
import { UserRound, Users, HeartPulse } from "lucide-react";

const AudienceSection = () => {
  return (
    <section id="audience" className="bg-white">
      <div className="section-container">
        <div className="flex items-center justify-center mb-10">
          <div className="h-16 w-16 bg-zonzzo-red bg-opacity-10 rounded-full flex items-center justify-center mr-4">
            <UserRound size={28} className="text-zonzzo-red" />
          </div>
          <h2 className="text-4xl font-bold">Para Quem É</h2>
        </div>
        
        <p className="section-subtitle text-center mx-auto">
          O VitalSync foi desenvolvido para atender às necessidades de todos os envolvidos no cuidado 
          com idosos, oferecendo recursos específicos para cada perfil.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="feature-card p-8 text-center">
            <div className="h-20 w-20 bg-zonzzo-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={32} className="text-zonzzo-red" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Familiares de Idosos</h3>
            <ul className="text-gray-600 text-left space-y-2">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-zonzzo-red-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Monitoramento à distância dos sinais vitais</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-zonzzo-red-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Alertas em tempo real sobre alterações importantes</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-zonzzo-red-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Relatórios periódicos sobre a saúde do familiar</span>
              </li>
            </ul>
          </div>
          
          <div className="feature-card p-8 text-center">
            <div className="h-20 w-20 bg-zonzzo-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserRound size={32} className="text-zonzzo-red" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Cuidadores Profissionais</h3>
            <ul className="text-gray-600 text-left space-y-2">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-zonzzo-red-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Painel de controle para múltiplos pacientes</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-zonzzo-red-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Priorização de atendimento baseada em dados</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-zonzzo-red-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Registro de intervenções e atendimentos</span>
              </li>
            </ul>
          </div>
          
          <div className="feature-card p-8 text-center">
            <div className="h-20 w-20 bg-zonzzo-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HeartPulse size={32} className="text-zonzzo-red" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Profissionais da Saúde</h3>
            <ul className="text-gray-600 text-left space-y-2">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-zonzzo-red-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Dados clínicos completos e histórico do paciente</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-zonzzo-red-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Análise de tendências para diagnóstico preventivo</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-zonzzo-red-light mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Integração com sistemas de prontuário eletrônico</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
