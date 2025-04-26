
import React from 'react';
import { BookOpen, GraduationCap, ScrollText, UserCircle2 } from 'lucide-react';

interface TimelineStepProps {
  title: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const TimelineStep = ({ title, icon, isLast = false }: TimelineStepProps) => (
  <div className="flex-1 relative">
    <div className="flex items-center">
      {/* Arrow and line */}
      <div className="w-full flex items-center">
        <div className="h-14 bg-gradient-to-r from-detective-red/20 to-detective-red/10 relative">
          <div className="absolute inset-y-0 right-0 w-8 h-14 bg-gradient-to-l from-detective-darkgray to-transparent" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[20px] border-l-detective-red/20" />
        </div>
      </div>
      
      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-detective-red flex items-center justify-center shrink-0 z-10">
        {icon}
      </div>
    </div>
    
    <div className="mt-4 text-center">
      <h3 className="text-xl font-montserrat font-semibold text-white">{title}</h3>
    </div>
  </div>
);

const Timeline = () => {
  const steps = [
    { title: "Inscrição", icon: <UserCircle2 className="w-8 h-8 text-white" /> },
    { title: "Acesso à Plataforma", icon: <ScrollText className="w-8 h-8 text-white" /> },
    { title: "Aulas", icon: <BookOpen className="w-8 h-8 text-white" /> },
    { title: "Certificação", icon: <GraduationCap className="w-8 h-8 text-white" />, isLast: true }
  ];

  return (
    <section className="py-20 bg-detective-darkgray">
      <div className="detective-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6 leading-tight tracking-wide">
            Como Funciona o Curso?
          </h2>
          <div className="w-20 h-1 bg-detective-red mx-auto mb-6"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <TimelineStep
                key={index}
                title={step.title}
                icon={step.icon}
                isLast={step.isLast}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
