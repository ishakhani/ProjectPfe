import { FiHome, FiUsers, FiBook, FiSettings, FiLogOut } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { authService } from '../../services/auth.service';

const Sidebar = ({ isOpen, activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'overview', icon: FiHome, label: "Vue d'ensemble" },
    { id: 'students', icon: FiUsers, label: 'Étudiants' },
    { id: 'teachers', icon: FiBook, label: 'Enseignants' },
    { id: 'settings', icon: FiSettings, label: 'Paramètres' }
  ];

  return (
    <div 
      className={`
        fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform z-20
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        transition-transform duration-300 ease-in-out pt-16
      `}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 py-4 overflow-y-auto">
          <nav className="px-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`
                  w-full flex items-center px-4 py-3 rounded-lg transition-colors
                  ${activeTab === item.id
                    ? 'bg-mandarine-50 text-mandarine-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-mandarine-600'
                  }
                `}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="mb-4">
            <div className="flex items-center px-4 py-2">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-mandarine-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-mandarine-600">
                    {authService.getUserName()?.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {authService.getUserName()}
                </p>
                <p className="text-xs text-gray-500">
                  Administrateur
                </p>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => authService.logout()}
            className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <FiLogOut className="w-5 h-5 mr-3" />
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default Sidebar;