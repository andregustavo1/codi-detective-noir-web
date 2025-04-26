import React from 'react';
import { Check, Skull } from 'lucide-react';
const SignUp = () => {
  return <section id="inscreva-se" className="py-20 bg-detective-black bg-[url('https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=1000')] bg-cover bg-fixed bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-t from-detective-black via-detective-black/90 to-detective-black/80"></div>
      
      <div className="detective-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 items-center">
            <div className="mx-auto">
              <Skull className="h-10 w-10 text-detective-red mb-4" />
              <h2 className="text-3xl md:text-4xl font-special-elite text-white mb-6 leading-tight tracking-wide">
                COMECE AGORA SUA CARREIRA COMO DETETIVE
              </h2>
              <div className="w-20 h-1 bg-detective-red mb-6"></div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-detective-red mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Acesso imediato a todo o conteúdo do curso</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-detective-red mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Suporte de instrutores experientes</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-detective-red mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Certificado reconhecido nacionalmente</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-detective-red mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Material didático exclusivo e atualizado</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-detective-red mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Aulas práticas com exercícios reais</p>
                </div>
              </div>
              
              
              
              
              <p className="text-sm text-gray-400 italic mb-6">* Vagas limitadas para a próxima turma</p>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default SignUp;