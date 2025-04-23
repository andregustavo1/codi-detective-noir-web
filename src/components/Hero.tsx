
import React, { useEffect, useState } from 'react';
import { Fingerprint } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-detective-black opacity-85 z-0"></div>
      
      {/* Background image: updated to skull mask image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/lovable-uploads/97255ce7-2a7d-4192-b90b-b2db931d9eba.png')",
          filter: 'grayscale(70%) brightness(0.44)',
        }}
      ></div>
      
      {/* Noise/darkness texture */}
      <div className="absolute inset-0 bg-detective-black opacity-50 mix-blend-multiply"></div>

      {/* Content */}
      <div className="detective-container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="w-20 h-20 mx-auto mb-6 relative">
              <img 
                src="/lovable-uploads/cd50d9e9-5513-44e2-8ce2-3805d07a9a0e.png" 
                alt="CODI Brasil Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-special-elite text-white mb-6 leading-tight tracking-wide">
              Torne-se um Detetive Profissional
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-courier-prime">
              Curso completo com metodologia exclusiva e<br />
              <span className="redacted">experiência prática real</span>
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <a href="#inscreva-se" className="detective-button group">
                <span className="flex items-center">
                  Quero Ser Detetive
                  <Fingerprint className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </span>
              </a>
              <a href="#sobre-o-curso" className="text-white underline hover:text-detective-red transition-colors">
                Saiba mais sobre o curso
              </a>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <div className="flex justify-center animate-bounce">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-detective-red"
              >
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

