
import React from 'react';
import { Check, Skull } from 'lucide-react';

const SignUp = () => {
  return (
    <section id="inscreva-se" className="py-20 bg-detective-black bg-[url('https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=1000')] bg-cover bg-fixed bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-t from-detective-black via-detective-black/90 to-detective-black/80"></div>
      
      <div className="detective-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
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
              
              <p className="text-white mb-4 font-special-elite text-lg">Investimento:</p>
              <div className="mb-4">
                <span className="text-gray-400 line-through">De R$ 2.997,00</span>
                <div className="text-white text-3xl font-bold mt-1">Por apenas R$ 1.497,00</div>
                <p className="text-detective-red text-sm mt-1">ou em até 12x de R$ 137,00</p>
              </div>
              
              <p className="text-sm text-gray-400 italic mb-6">* Vagas limitadas para a próxima turma</p>
            </div>
            
            <div className="bg-detective-darkgray p-6 rounded-sm border border-detective-mediumgray shadow-xl animate-fade-in">
              <h3 className="text-2xl font-special-elite text-white mb-6 text-center">
                INSCREVA-SE AGORA
              </h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-gray-300 text-sm mb-1 block">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-detective-black border border-detective-mediumgray rounded-sm focus:outline-none focus:ring-1 focus:ring-detective-red text-white"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="text-gray-300 text-sm mb-1 block">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-detective-black border border-detective-mediumgray rounded-sm focus:outline-none focus:ring-1 focus:ring-detective-red text-white"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="text-gray-300 text-sm mb-1 block">Telefone/WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 bg-detective-black border border-detective-mediumgray rounded-sm focus:outline-none focus:ring-1 focus:ring-detective-red text-white"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="city" className="text-gray-300 text-sm mb-1 block">Cidade/Estado</label>
                  <input 
                    type="text" 
                    id="city" 
                    className="w-full px-4 py-3 bg-detective-black border border-detective-mediumgray rounded-sm focus:outline-none focus:ring-1 focus:ring-detective-red text-white"
                    placeholder="Sua cidade/estado"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full detective-button py-4 text-lg font-bold mt-2"
                >
                  GARANTIR MINHA VAGA
                </button>
                
                <p className="text-center text-sm text-gray-400 mt-4">
                  Ao enviar, você concorda com nossa política de privacidade e termos de uso.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
