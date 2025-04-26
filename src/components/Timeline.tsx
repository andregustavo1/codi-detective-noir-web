
import React from 'react';
import { Check } from 'lucide-react';

const TimelineStep = ({ title, isLast = false }: { title: string; isLast?: boolean }) => (
  <div className="flex items-start">
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 bg-detective-red rounded-full flex items-center justify-center">
        <Check className="w-5 h-5 text-white" />
      </div>
      {!isLast && <div className="w-px h-16 bg-detective-red/30"></div>}
    </div>
    <div className="ml-4 -mt-1">
      <h3 className="text-xl font-montserrat font-semibold text-white">{title}</h3>
    </div>
  </div>
);

const Timeline = () => {
  return (
    <section className="py-20 bg-detective-darkgray">
      <div className="detective-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6 leading-tight tracking-wide">
            Como Funciona o Curso?
          </h2>
          <div className="w-20 h-1 bg-detective-red mx-auto mb-6"></div>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          <TimelineStep title="Inscrição" />
          <TimelineStep title="Acesso à Plataforma" />
          <TimelineStep title="Aulas" />
          <TimelineStep title="Exercícios práticos" />
          <TimelineStep title="Certificação" isLast />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
