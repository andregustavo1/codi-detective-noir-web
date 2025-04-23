
import React from 'react';
import { Phone, Instagram, MapPin, Skull } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-detective-black py-16 border-t border-detective-mediumgray">
      <div className="detective-container">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <Skull className="h-8 w-8 text-detective-red mr-2" />
              <h3 className="text-xl font-special-elite text-white">CODI BRASIL</h3>
            </div>
            
            <p className="text-gray-400 mb-6">
              Divisão de Treinamento CODI BRASIL - Empresa especializada em Treinamentos e Formação de Investigadores e Peritos a Nível Mundial.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/codibrasil_oficial/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-detective-mediumgray rounded-full flex items-center justify-center text-white hover:bg-detective-red transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-special-elite text-white mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {['Início', 'Sobre o Curso', 'Metodologia', 'Diferenciais', 'Depoimentos', 'Investimento', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-gray-400 hover:text-detective-red transition-colors flex items-center"
                  >
                    <span className="mr-2">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-special-elite text-white mb-6">Contato</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-detective-red mr-3 mt-1" />
                <div>
                  <p className="text-white">Telefone/WhatsApp</p>
                  <a href="tel:+5511956005408" className="text-gray-400 hover:text-detective-red transition-colors">
                    (11) 95600-5408
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Instagram className="h-5 w-5 text-detective-red mr-3 mt-1" />
                <div>
                  <p className="text-white">Instagram</p>
                  <a href="https://www.instagram.com/codibrasil_oficial/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-detective-red transition-colors">
                    @codibrasil_oficial
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-detective-red mr-3 mt-1" />
                <div>
                  <p className="text-white">Endereço</p>
                  <a href="https://maps.google.com/?q=Avenida+Angélica+2223,+São+Paulo,+Brazil+01227-200" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-detective-red transition-colors">
                    Avenida Angélica 2223, São Paulo, Brazil 01227-200
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-detective-mediumgray text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} CODI BRASIL - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
