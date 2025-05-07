
import React from 'react';
import { FileSearch, Shield, Camera, CheckCircle2, DollarSign, Award, GraduationCap, Briefcase, BadgeCheck, ScrollText, TestTube, Microscope, FileText, Brain } from 'lucide-react';
import Header from '../components/Header';
import { Button } from '../components/ui/button';

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
  checkoutLink: string;
}

const CourseCard = ({
  title,
  description,
  icon,
  instructors,
  curriculum,
  price,
  priceWithBadge,
  includes,
  checkoutLink
}: CourseInfo) => (
  <div className="bg-[#1A1A1A] p-12 rounded-xl border border-gray-800 hover:border-detective-red/50 transition-all shadow-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiMxQTFBMUEiLz48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] space-y-8">
    <div className="flex items-center gap-4">
      <div className="text-detective-red p-2 bg-detective-red/10 rounded-lg">{icon}</div>
      <h3 className="text-3xl font-montserrat font-extrabold">{title}</h3>
    </div>
    
    <div className="space-y-8">
      <p className="text-gray-400 leading-relaxed text-lg">{description}</p>

      {instructors && instructors.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-xl font-montserrat font-semibold flex items-center gap-2 text-gray-300">
            <GraduationCap className="text-detective-red" />
            Dos Instrutores:
          </h4>
          <ul className="list-none space-y-3">
            {instructors.map((instructor, index) => (
              <li key={index} className="text-gray-400 flex items-start gap-2 leading-relaxed text-base">
                <CheckCircle2 className="w-5 h-5 text-detective-red shrink-0 mt-1" />
                <span>{instructor.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {curriculum && curriculum.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-xl font-montserrat font-semibold flex items-center gap-2 text-gray-300">
            <Award className="text-detective-red" />
            Conteúdo Programático:
          </h4>
          <ul className="grid grid-cols-1 gap-3">
            {curriculum.map((item, index) => (
              <li key={index} className="text-gray-400 flex items-start gap-2 leading-relaxed text-base">
                <CheckCircle2 className="w-5 h-5 text-detective-red shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-4">
        <h4 className="text-xl font-montserrat font-semibold flex items-center gap-2 text-gray-300">
          <ScrollText className="text-detective-red" />
          O que está incluso:
        </h4>
        <ul className="list-none space-y-3">
          {includes.map((item, index) => (
            <li key={index} className="text-gray-400 flex items-start gap-2 leading-relaxed text-base">
              <CheckCircle2 className="w-5 h-5 text-detective-red shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-8 space-y-4 border-t border-gray-800">
        <div className="space-y-3">
          <a href={checkoutLink} target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="w-full group bg-detective-red hover:bg-detective-red/90 text-white transition-all duration-300 font-montserrat text-lg py-7 px-6">
              <DollarSign className="w-6 h-6" />
              Matricule-se agora
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Cursos = () => {
  const courses: CourseInfo[] = [
    {
      title: "INVESTIGADOR INTERNACIONAL",
      description: "Um curso voltado para a formação de profissionais especializados em investigação privada com atuação em âmbito global. Esse tipo de curso ensina técnicas de investigação que vão além das fronteiras nacionais, considerando diferenças legais, culturais e operacionais em diversos países.",
      icon: <Shield size={32} />,
      curriculum: ["Técnicas de investigação: vigilância, entrevistas e rastreamento", "Inteligência e contrainteligência", "Investigações digitais e cibersegurança", "Documentação internacional", "Aspectos legais internacionais", "Criminologia e psicologia criminal", "Linguagem e cultura"],
      price: "R$ 399,99",
      includes: ["Diploma internacional", "Credencial funcional", "Técnicas de investigação internacional", "Documentação completa"],
      checkoutLink: "https://pay.hotmart.com/A99437615Q?checkoutMode=10"
    },
    {
      title: "INVESTIGADOR PROFISSIONAL",
      description: "Curso focado na formação de profissionais que atuam na investigação de crimes e na identificação de pessoas, documentos ou situações suspeitas. Ideal para quem deseja seguir carreira na área de segurança e investigação particular.",
      icon: <FileSearch size={32} />,
      curriculum: ["Técnicas de investigação e coleta de dados", "Noções de criminalística", "Identificação humana e biometria", "Documentoscopia", "Legislação básica", "Relatórios e laudos", "Ética e conduta profissional"],
      price: "R$ 359,99",
      includes: ["Diploma de Agente de Investigação", "Credencial funcional", "Material didático completo", "Suporte técnico especializado"],
      checkoutLink: "https://pay.hotmart.com/E99411766W?checkoutMode=10"
    },
    {
      title: "PERÍCIA GRAFOTÉCNICA",
      description: "Um curso de Perícia Grafotécnica capacita profissionais para identificar a autenticidade de assinaturas e manuscritos, detectando fraudes, falsificações e adulterações em documentos. O perito grafotécnico atua principalmente em processos judiciais e administrativos, como assistente técnico ou perito judicial.",
      icon: <FileText size={32} />,
      curriculum: ["Fundamentos da grafoscopia: princípios da escrita manual e variações gráficas", "Identificação de assinaturas autênticas e falsas", "Técnicas de comparação grafotécnica", "Elementos gráficos analisáveis", "Exames em documentos suspeitos", "Elaboração de laudos periciais grafotécnicos", "Atuação judicial", "Legislação e ética profissional"],
      price: "R$ 399,99",
      includes: ["Diploma", "Credencial funcional", "Material didático especializado", "Certificação reconhecida"],
      checkoutLink: "https://pay.hotmart.com/O99441960U?checkoutMode=10"
    },
    {
      title: "PERITO CRIMINAL",
      description: "Um curso de Perito Criminal Particular forma profissionais capacitados a atuar de forma independente na análise de cenas de crime, documentos, objetos e evidências, produzindo laudos técnicos que podem ser usados em processos judiciais ou extrajudiciais. Ao contrário dos peritos oficiais (concursados), o perito particular pode ser contratado por advogados, empresas ou partes envolvidas em litígios.",
      icon: <Microscope size={32} />,
      curriculum: ["Criminalística: fundamentos da investigação científica de crimes", "Papiloscopia e balística", "Local de crime: preservação, coleta e interpretação de vestígios", "Documentoscopia", "Perícia em locais de acidente ou incêndio", "Perícia digital", "Legislação e atuação judicial", "Ética profissional e sigilo técnico"],
      price: "R$ 999,99",
      includes: ["Diploma de Perito Criminal", "Credencial profissional", "Material didático completo", "Aulas práticas e teóricas"],
      checkoutLink: "https://pay.hotmart.com/M99429408Y?checkoutMode=10"
    },
    {
      title: "PERITO FORENSE",
      description: "Um curso de Perícia Forense capacita profissionais a atuar na investigação e análise técnica de crimes, incidentes e disputas judiciais, utilizando métodos científicos para esclarecer fatos e produzir laudos periciais. É uma formação multidisciplinar, com aplicações nas áreas criminal, cível, trabalhista, ambiental, entre outras.",
      icon: <TestTube size={32} />,
      curriculum: ["Criminalística: princípios da investigação técnica e científica", "Análise de local de crime: coleta, preservação e interpretação de vestígios", "Papiloscopia: identificação por impressões digitais", "Balística forense: estudo de armas, munições e trajetórias de projéteis", "Documentoscopia e grafoscopia: verificação de documentos e assinaturas", "Perícia ambiental, contábil e digital", "Legislação aplicada à perícia: atuação judicial, elaboração de laudos e ética profissional", "Técnicas laboratoriais e uso de equipamentos periciais"],
      price: "R$ 439,99",
      includes: ["Diploma de Perito Forense", "Credencial funcional", "Material didático completo", "Suporte técnico especializado"],
      checkoutLink: "https://pay.hotmart.com/M99441795J?checkoutMode=10"
    },
    {
      title: "REPÓRTER INVESTIGATIVO",
      description: "Jornalismo investigativo refere-se à prática de reportagem especializada em desvendar mistérios e fatos ocultos do conhecimento público, especialmente crimes e casos de corrupção. Em muitos casos, os jornalistas investigativos são questionados sobre os métodos utilizados na prática profissional. Um exemplo é o uso de câmera oculta, embora na Europa e no Brasil seja uma prática assegurada por lei.",
      icon: <Camera size={32} />,
      instructors: [
        { text: "Policiais acostumados com a rotina do dia a dia das Reportagens Policiais" },
        { text: "Motolinks que hoje atuam nas maiores Redes de Televisão" },
        { text: "Jornalistas veteranos que passam no curso os limites, 'legalidade' e direitos da atuação" }
      ],
      curriculum: ["Investigando o conceito", "Ossos do ofício", "Jornalismo investigativo passo a passo", "Ética e circunstância", "Jornalismo policial sem violação dos direitos humanos", "Código de processo penal", "Atos infracionais", "Crimes", "Áreas de atuação"],
      price: "R$ 1.299,00",
      includes: ["Certificado e Credencial de Jornalista/Repórter Investigativo", "Credencial do Ministério do Trabalho", "MTB (Registro OFICIAL) como Jornalista - Não precisa de faculdade", "Credenciamento no Conselho DPCRIM", "Suporte técnico e orientações por 365 dias"],
      checkoutLink: "https://pay.hotmart.com/A99441605E?checkoutMode=10"
    }
  ];

  return (
    <div className="min-h-screen bg-detective-black">
      <Header />
      <div className="pt-32 pb-20">
        <div className="detective-container">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-16 text-white">
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
