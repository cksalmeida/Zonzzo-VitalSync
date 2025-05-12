
import { Shield, Monitor } from "lucide-react";

const TechSection = () => {
  return (
    <section id="tech" className="bg-zonzzo-gray">
      <div className="section-container">
        <div className="flex items-center justify-center mb-10">
          <div className="h-16 w-16 bg-zonzzo-red bg-opacity-10 rounded-full flex items-center justify-center mr-4">
            <Shield size={28} className="text-zonzzo-red" />
          </div>
          <h2 className="font-bold text-4xl">Tecnologia e Segurança</h2>
        </div>
        
        <p className="section-subtitle text-center mx-auto">
          O VitalSync utiliza tecnologia de ponta para garantir o monitoramento preciso e seguro, 
          sempre respeitando a privacidade e os dados pessoais dos usuários.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Monitor size={24} className="text-zonzzo-red mr-2" />
              <span>Tecnologia Avançada</span>
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-lg font-medium mb-2 text-zonzzo-red">Inteligência Artificial</h4>
                <p className="text-gray-600">
                  Utilizamos algoritmos de aprendizado de máquina treinados com milhares de casos reais para identificar padrões 
                  sutis que podem indicar riscos de AVC, com precisão de até 93% nos alertas emitidos.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-lg font-medium mb-2 text-zonzzo-red">Sensores Não-Invasivos</h4>
                <p className="text-gray-600">
                  Nosso sensor de dedo é confortável, leve e não interfere no sono. Utiliza tecnologia 
                  de fotopletismografia e pressão para coleta de dados precisos sem incomodar o usuário.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-lg font-medium mb-2 text-zonzzo-red">Processamento em Tempo Real</h4>
                <p className="text-gray-600">
                  Toda análise é feita instantaneamente, permitindo alertas imediatos em caso de alterações 
                  significativas nos parâmetros monitorados, reduzindo o tempo de resposta a emergências.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Shield size={24} className="text-zonzzo-red mr-2" />
              <span>Segurança e Privacidade</span>
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-lg font-medium mb-2 text-zonzzo-red">Criptografia de Dados</h4>
                <p className="text-gray-600">
                  Todos os dados pessoais e médicos são protegidos com criptografia de ponta a ponta, 
                  garantindo que apenas pessoas autorizadas possam acessar as informações.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-lg font-medium mb-2 text-zonzzo-red">Conformidade com LGPD</h4>
                <p className="text-gray-600">
                  O VitalSync segue rigorosamente a Lei Geral de Proteção de Dados, garantindo transparência 
                  e controle total do usuário sobre seus dados pessoais e de saúde.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-lg font-medium mb-2 text-zonzzo-red">Servidores Certificados</h4>
                <p className="text-gray-600">
                  Nossa infraestrutura utiliza servidores com certificação para dados de saúde, 
                  com backups redundantes e monitoramento constante contra ameaças cibernéticas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
