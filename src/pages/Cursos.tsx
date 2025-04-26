
import React from 'react';
import { FileSearch, Shield, Camera } from 'lucide-react';
import Header from '../components/Header';

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  price: string;
  priceWithBadge?: string;
  includes: string[];
}

const CourseCard = ({ title, description, icon, price, priceWithBadge, includes }: CourseCardProps) => (
  <div className="bg-detective-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-detective-red/50 transition-all">
    <div className="flex items-center gap-3 mb-4">
      <div className="text-detective-red">{icon}</div>
      <h3 className="text-2xl font-special-elite">{title}</h3>
    </div>
    <p className="text-gray-300 mb-6">{description}</p>
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="font-special-elite text-lg">Inclui:</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {includes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="pt-4 border-t border-white/10">
        <div className="text-2xl font-special-elite text-detective-red">{price}</div>
        {priceWithBadge && (
          <div className="mt-2 text-sm text-gray-400">
            Com distintivo: {priceWithBadge}
          </div>
        )}
      </div>
    </div>
  </div>
);

const Cursos = () => {
  return (
    <div className="min-h-screen bg-detective-black">
      <Header />
      <div className="pt-32 pb-20">
        <div className="detective-container">
          <h1 className="text-4xl md:text-5xl font-special-elite text-center mb-16 text-white">
            Nossos Cursos
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="Repórter Investigativo"
              description="Curso completo de jornalismo investigativo com foco em reportagem policial e investigação. Aprenda com profissionais experientes as técnicas e práticas do jornalismo investigativo."
              icon={<Camera size={32} />}
              price="R$ 1.299,00"
              includes={[
                "Certificado e Credencial",
                "Credencial do Ministério do Trabalho",
                "MTB (Registro OFICIAL)",
                "Credenciamento DPCRIM"
              ]}
            />
            
            <CourseCard
              title="Detetive Internacional"
              description="Formação completa em investigação privada com atuação internacional. Aprenda técnicas avançadas de investigação, inteligência e contrainteligência."
              icon={<Shield size={32} />}
              price="R$ 399,99"
              priceWithBadge="R$ 699,99"
              includes={[
                "Diploma",
                "Funcional",
                "Técnicas de investigação internacional",
                "Documentação internacional"
              ]}
            />
            
            <CourseCard
              title="Agente de Investigação"
              description="Curso focado em técnicas de investigação criminal e civil, análise de documentos e identificação pessoal. Ideal para quem busca carreira em segurança."
              icon={<FileSearch size={32} />}
              price="R$ 359,99"
              priceWithBadge="R$ 559,99"
              includes={[
                "Diploma",
                "Funcional",
                "Técnicas de investigação",
                "Documentoscopia"
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
