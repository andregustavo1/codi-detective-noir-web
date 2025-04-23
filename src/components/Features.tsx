
import React from 'react';
import { FileText, Users, Award, Clock, Shield, BookOpen, Skull } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex space-x-4 p-5 hover:bg-detective-darkgray transition-colors rounded-sm">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-10 h-10 text-detective-red">
          <Icon size={24} />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-special-elite text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "Material Exclusivo",
      description: "Apostilas, guias e recursos digitais criados por profissionais experientes."
    },
    {
      icon: Users,
      title: "Rede de Contatos",
      description: "Acesso a uma comunidade exclusiva de detetives profissionais e oportunidades de networking."
    },
    {
      icon: Award,
      title: "Certificação Reconhecida",
      description: "Receba um certificado reconhecido nacionalmente que abrirá portas no mercado de trabalho."
    },
    {
      icon: Clock,
      title: "Flexibilidade de Horários",
      description: "Estude no seu próprio ritmo e concilie os estudos com sua rotina atual."
    },
    {
      icon: Shield,
      title: "Ética Profissional",
      description: "Formação com forte ênfase em conduta ética e responsabilidade profissional."
    },
    {
      icon: BookOpen,
      title: "Conteúdo Atualizado",
      description: "Técnicas e métodos constantemente atualizados com as últimas tendências do mercado."
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-detective-black bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=1000')] bg-cover bg-fixed bg-center relative">
      <div className="absolute inset-0 bg-detective-black opacity-90"></div>
      
      <div className="detective-container relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <Skull className="h-10 w-10 text-detective-red mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-special-elite text-white mb-6 leading-tight tracking-wide">
            DIFERENCIAIS DO TREINAMENTO
          </h2>
          <div className="w-20 h-1 bg-detective-red mx-auto mb-6"></div>
          <p className="text-gray-300 leading-relaxed">
            O curso Detetive Codi Brasil oferece uma experiência única de aprendizado com benefícios exclusivos para sua formação profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureItem 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#inscreva-se" className="detective-button inline-block">
            Quero Conhecer Todos os Benefícios
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
