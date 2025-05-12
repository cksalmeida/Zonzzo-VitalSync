
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <div className="font-bold text-2xl flex items-center">
              <span className="text-zonzzo-red">Zon</span>
              <span className="text-zonzzo-red-dark">zzo</span>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-zonzzo-red transition-colors">Quem Somos</a>
            <a href="#vitalsync" className="text-gray-700 hover:text-zonzzo-red transition-colors">VitalSync</a>
            <a href="#benefits" className="text-gray-700 hover:text-zonzzo-red transition-colors">Benefícios</a>
            <a href="#audience" className="text-gray-700 hover:text-zonzzo-red transition-colors">Para Quem É</a>
            <a href="#tech" className="text-gray-700 hover:text-zonzzo-red transition-colors">Tecnologia</a>
            <a href="#contact" className="text-white bg-zonzzo-red hover:bg-zonzzo-red-dark px-4 py-2 rounded-md transition-colors">Contato</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-zonzzo-red focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a 
              href="#about" 
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-zonzzo-red rounded-md"
              onClick={toggleMenu}
            >
              Quem Somos
            </a>
            <a 
              href="#vitalsync" 
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-zonzzo-red rounded-md"
              onClick={toggleMenu}
            >
              VitalSync
            </a>
            <a 
              href="#benefits" 
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-zonzzo-red rounded-md"
              onClick={toggleMenu}
            >
              Benefícios
            </a>
            <a 
              href="#audience" 
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-zonzzo-red rounded-md"
              onClick={toggleMenu}
            >
              Para Quem É
            </a>
            <a 
              href="#tech" 
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-zonzzo-red rounded-md"
              onClick={toggleMenu}
            >
              Tecnologia
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 text-white bg-zonzzo-red hover:bg-zonzzo-red-dark rounded-md"
              onClick={toggleMenu}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
