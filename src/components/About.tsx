
import React from 'react';
import { Search, User, Skull } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre-o-curso" className="py-20 bg-detective-darkgray">
      <div className="detective-container">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-special-elite text-white mb-6 leading-tight tracking-wide">
            DIVISÃO DE TREINAMENTO CODI BRASIL
          </h2>
          <div className="w-20 h-1 bg-detective-red mx-auto mb-6"></div>
          <p className="text-gray-300 leading-relaxed">
            Uma empresa ganhadora de vários Prêmios de Qualidade ao Consumidor, especializada em 
            Treinamentos e Formação de Investigadores e Peritos a Nível Mundial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="detective-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-center w-12 h-12 bg-detective-red rounded-full mb-6 mx-auto">
              <Skull className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-special-elite text-white mb-4 text-center">Presença Nacional</h3>
            <p className="text-gray-300 text-center">
              Com sede em São Paulo, e representantes em mais de 16 Estados brasileiros, somos sem sombra de dúvidas a empresa com maior número de Agentes espalhados em todo mundo.
            </p>
          </div>

          <div className="detective-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center w-12 h-12 bg-detective-red rounded-full mb-6 mx-auto">
              <Search className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-special-elite text-white mb-4 text-center">Metodologia Exclusiva</h3>
            <p className="text-gray-300 text-center">
              Nossa metodologia única combina teoria e prática, permitindo que você aprenda com investigadores experientes e aplique técnicas profissionais em situações reais.
            </p>
          </div>

          <div className="detective-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center w-12 h-12 bg-detective-red rounded-full mb-6 mx-auto">
              <User className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-special-elite text-white mb-4 text-center">Crescimento Garantido</h3>
            <p className="text-gray-300 text-center">
              Faça seu Curso na Empresa que mais cresce no mercado. Tenha acesso a oportunidades exclusivas e faça parte de uma rede de profissionais de elite.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-special-elite text-white mb-2">
            Sejam todos Bem Vindos
          </p>
          <p className="text-detective-red italic">
            Diretoria CODI BRASIL
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
