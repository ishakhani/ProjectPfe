import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Écouter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Accueil', icon: '🏠' },
    { path: '/courses', label: 'Formations', icon: '📚' },
    { path: '/news', label: 'Actualités', icon: '📰' },
    { path: '/about', label: 'À propos', icon: 'ℹ️' },
    { path: '/faq', label: 'FAQ', icon: '❓' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav 
      className={`
        ${isScrolled ? 'bg-gradient-to-r from-yellow-100 to-blue-600 backdrop-blur-md shadow-lg' : 'bg-gradient-to-r from-yellow-100 to-blue-600'}
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
      `}
    >
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors pl-4"
          >
            EFGB Portal
          </Link>

          {/* Menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-lg"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex md:items-center md:space-x-6 pr-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center px-3 py-2 rounded-lg transition-all duration-200
                  ${isActive(item.path)
                    ? 'bg-blue-100 text-blue-600 transform scale-105'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                  }
                `}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}
            {/* Bouton Login */}
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Connexion
            </Link>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        <div
          className={`
            md:hidden absolute left-0 right-0 bg-white border-b border-gray-200
            ${isOpen ? 'block' : 'hidden'}
          `}
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center px-4 py-3 rounded-lg transition-all duration-200
                  ${isActive(item.path)
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                  }
                `}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}
            {/* Bouton Login mobile */}
            <Link
              to="/login"
              className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Connexion
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;