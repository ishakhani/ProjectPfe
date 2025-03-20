import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useTheme();

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

  // Tous les liens de navigation
  const navItems = [
    { path: '/', label: 'Accueil', icon: '🏠' },
    { path: '/courses', label: 'Formations', icon: '📚' },
    { path: '/news', label: 'Actualités', icon: '📰' },
    { path: '/schedule', label: 'Planning', icon: '📅' },
    { path: '/announcements', label: 'Annonces', icon: '📢' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav 
      className={`
        ${isScrolled 
          ? 'bg-gradient-to-r from-mandarine-100 to-mandarine-500 dark:from-gray-800 dark:to-gray-900 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-r from-mandarine-100 to-mandarine-500 dark:from-gray-800 dark:to-gray-900'
        }
        fixed top-0 left-0 right-0 z-30 transition-all duration-300
      `}
    >
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between items-center h-16 pl-4">
          {/* Logo modifié */}
          <Link to="/" className="pl-2">
            <img 
              src="/logo.png" 
              alt="EFGB Portal Logo" 
              className="h-12 w-auto object-contain bg-gradient-to-r from-orange-100 to-blue-600 rounded-lg mr-2 transform transition-all duration-300 hover:scale-105"
            />
          </Link>

          {/* Menu desktop avec dark mode */}
          <div className="flex items-center space-x-6 pr-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center px-3 py-2 rounded-lg transition-all duration-200
                  ${isActive(item.path)
                    ? 'bg-mandarine-100 dark:bg-mandarine-600 text-mandarine-600 dark:text-white transform scale-105'
                    : 'text-gray-600 dark:text-gray-200 hover:bg-mandarine-50 dark:hover:bg-mandarine-600/50 hover:text-mandarine-600 dark:hover:text-white'
                  }
                `}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}
            {/* Bouton Dark Mode */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-mandarine-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            {/* Bouton Login */}
            <Link
              to="/login"
              className="bg-mandarine-600 text-white px-4 py-2 rounded-lg hover:bg-mandarine-700 transition-colors"
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