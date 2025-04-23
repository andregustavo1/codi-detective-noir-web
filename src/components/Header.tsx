
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Início', 'Sobre', 'Metodologia', 'Diferenciais', 'Contato'];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-detective-black/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="detective-container flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/1bd30a81-d2c0-4644-9faa-cfcd8b8240a9.png" 
            alt="CODI Brasil Logo" 
            className="h-12 w-12 rounded-full"
          />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="text-white hover:text-detective-red transition-colors text-xs uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
        </nav>

        <a href="#inscreva-se" className="hidden md:block detective-button text-sm py-2 px-4">
          Inscreva-se
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-detective-red"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-detective-black/95 backdrop-blur-md border-t border-detective-mediumgray animate-fade-in">
          <div className="detective-container py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  className="text-white hover:text-detective-red transition-colors text-xs uppercase tracking-wider py-2 border-b border-detective-mediumgray"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="#inscreva-se" 
                className="detective-button w-full text-center mt-4 text-sm py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inscreva-se
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
