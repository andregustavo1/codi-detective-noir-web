import React from 'react';
import { Skull } from 'lucide-react';
const Testimonial = ({
  quote,
  author,
  position,
  delay = 0
}) => {
  return <div className="detective-card animate-fade-in" style={{
    animationDelay: `${delay}s`
  }}>
      <div className="mb-4 text-detective-red">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 11L8 17H11L9 22H4L6 16H3L4 11H10Z" fill="currentColor" />
          <path d="M21 11L19 17H22L20 22H15L17 16H14L15 11H21Z" fill="currentColor" />
        </svg>
      </div>
      <p className="text-gray-300 italic mb-4">{quote}</p>
      <div className="mt-4 flex items-center hidden">
        <div className="w-10 h-10 bg-detective-mediumgray rounded-full flex items-center justify-center mr-3">
          <span className="text-white text-lg font-bold">{author.charAt(0)}</span>
        </div>
        <div>
          <p className="text-white font-bold">{author}</p>
          <p className="text-gray-400 text-sm">{position}</p>
        </div>
      </div>
    </div>;
};
const Testimonials = () => {
  const testimonials = [{
    quote: "O curso superou todas as minhas expectativas. A metodologia prática me deu confiança para atuar como detetive profissional logo após a formação.",
    author: "Carlos Mendes",
    position: "Detetive Particular, São Paulo"
  }, {
    quote: "Os instrutores compartilham experiências reais que nenhum livro poderia ensinar. Foi um divisor de águas na minha carreira.",
    author: "Fernanda Lima",
    position: "Investigadora Corporativa, Rio de Janeiro"
  }, {
    quote: "Investir neste curso foi a melhor decisão para minha carreira. Em menos de 6 meses, já estava atuando em casos reais com total segurança.",
    author: "Roberto Santos",
    position: "Proprietário de Agência de Investigação, Belo Horizonte"
  }];
  return <section id="depoimentos" className="py-20 bg-detective-darkgray">
      <div className="detective-container">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <Skull className="h-10 w-10 text-detective-red mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-special-elite text-white mb-6 leading-tight tracking-wide">
            O QUE DIZEM NOSSOS ALUNOS
          </h2>
          <div className="w-20 h-1 bg-detective-red mx-auto mb-6"></div>
          <p className="text-gray-300 leading-relaxed">Histórias de alunos que transformaram suas carreiras depois de concluir o curso.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <Testimonial key={index} quote={testimonial.quote} author={testimonial.author} position={testimonial.position} delay={index * 0.2} />)}
        </div>
      </div>
    </section>;
};
export default Testimonials;