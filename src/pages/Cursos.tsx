import React from 'react';
import { FileSearch, Shield, Camera, CheckCircle2, DollarSign, Award, GraduationCap, Briefcase, BadgeCheck, ScrollText } from 'lucide-react';
import Header from '../components/Header';

interface InstructorInfo {
  text: string;
}

interface CourseInfo {
  title: string;
  description: string;
  icon: React.ReactNode;
  instructors?: InstructorInfo[];
  curriculum?: string[];
  price: string;
  priceWithBadge?: string;
  includes: string[];
}

const CourseCard = ({ 
  title, 
  description, 
  icon, 
  instructors, 
  curriculum, 
  price, 
  priceWithBadge, 
  includes 
}: CourseInfo) => (
  <div className="bg-detective-black/30 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-detective-red/50 transition-all">
    <div className="flex items-center gap-3 mb-6">
      <div className="text-detective-red">{icon}</div>
      <h3 className="text-2xl font-special-elite">{title}</h3>
    </div>
    
    <div className="space-y-6">
      <div>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>

      {instructors && instructors.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-special-elite text-lg flex items-center gap-2">
            <GraduationCap className="text-detective-red" />
            Dos Instrutores:
          </h4>
          <ul className="list-none space-y-2">
            {instructors.map((instructor, index) => (
              <li key={index} className="text-gray-300 flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-detective-red shrink-0 mt-1" />
                <span>{instructor.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {curriculum && curriculum.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-special-elite text-lg flex items-center gap-2">
            <Award className="text-detective-red" />
            Conteúdo Programático:
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {curriculum.map((item, index) => (
              <li key={index} className="text-gray-300 flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-detective-red shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-3">
        <h4 className="font-special-elite text-lg flex items-center gap-2">
          <ScrollText className="text-detective-red" />
          O que está incluso:
        </h4>
        <ul className="list-none space-y-2">
          {includes.map((item, index) => (
            <li key={index} className="text-gray-300 flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-detective-red shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6 border-t border-white/10">
        <div className="flex items-center gap-2">
          <DollarSign className="text-detective-red" />
          <span className="text-2xl font-special-elite text-detective-red">{price}</span>
        </div>
        {priceWithBadge && (
          <div className="mt-2 text-sm text-gray-400 flex items-center gap-2">
            <BadgeCheck className="w-4 h-4" />
            Com distintivo: {priceWithBadge}
          </div>
        )}
      </div>
    </div>
  </div>
);

const Cursos = () => {
  const courses: CourseInfo[] = [
    {
      title: "Repórter Investigativo",
      description: "Jornalismo investigativo refere-se à prática de reportagem especializada em desvendar mistérios e fatos ocultos do conhecimento público, especialmente crimes e casos de corrupção. Em muitos casos, os jornalistas investigativos são questionados sobre os métodos utilizados na prática profissional. Um exemplo é o uso de câmera oculta, embora na Europa e no Brasil seja uma prática assegurada por lei.",
      icon: <Camera size={32} />,
      instructors: [
        { text: "Policiais acostumados com a rotina do dia a dia das Reportagens Policiais" },
        { text: "Motolinks que hoje atuam nas maiores Redes de Televisão" },
        { text: "Jornalistas veteranos que passam no curso os limites, 'legalidade' e direitos da atuação" }
      ],
      curriculum: [
        "Investigando o conceito",
        "Ossos do ofício",
        "Jornalismo investigativo passo a passo",
        "Ética e circunstância",
        "Jornalismo policial sem violação dos direitos humanos",
        "Código de processo penal",
        "Atos infracionais",
        "Crimes",
        "Áreas de atuação"
      ],
      price: "R$ 1.299,00",
      includes: [
        "Certificado e Credencial de Jornalista/Repórter Investigativo",
        "Credencial do Ministério do Trabalho",
        "MTB (Registro OFICIAL) como Jornalista - Não precisa de faculdade",
        "Credenciamento no Conselho DPCRIM",
        "Suporte técnico e orientações por 365 dias"
      ]
    },
    {
      title: "Detetive Internacional",
      description: "Um curso voltado para a formação de profissionais especializados em investigação privada com atuação em âmbito global. Esse tipo de curso ensina técnicas de investigação que vão além das fronteiras nacionais, considerando diferenças legais, culturais e operacionais em diversos países.",
      icon: <Shield size={32} />,
      curriculum: [
        "Técnicas de investigação: vigilância, entrevistas e rastreamento",
        "Inteligência e contrainteligência",
        "Investigações digitais e cibersegurança",
        "Documentação internacional",
        "Aspectos legais internacionais",
        "Criminologia e psicologia criminal",
        "Linguagem e cultura"
      ],
      price: "R$ 399,99",
      priceWithBadge: "R$ 699,99",
      includes: [
        "Diploma internacional",
        "Credencial funcional",
        "Técnicas de investigação internacional",
        "Documentação completa"
      ]
    },
    {
      title: "Agente de Investigação",
      description: "Curso focado na formação de profissionais que atuam na investigação de crimes e na identificação de pessoas, documentos ou situações suspeitas. Ideal para quem deseja seguir carreira na área de segurança e investigação particular.",
      icon: <FileSearch size={32} />,
      curriculum: [
        "Técnicas de investigação e coleta de dados",
        "Noções de criminalística",
        "Identificação humana e biometria",
        "Documentoscopia",
        "Legislação básica",
        "Relatórios e laudos",
        "Ética e conduta profissional"
      ],
      price: "R$ 359,99",
      priceWithBadge: "R$ 559,99",
      includes: [
        "Diploma de Agente de Investigação",
        "Credencial funcional",
        "Material didático completo",
        "Suporte técnico especializado"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-detective-black">
      <Header />
      <div className="pt-32 pb-20">
        <div className="detective-container">
          <h1 className="text-4xl md:text-5xl font-special-elite text-center mb-16 text-white">
            Nossos Cursos
          </h1>
          
          <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
