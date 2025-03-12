import { useState, useEffect } from 'react';
import AddUserModal from '../components/AddUserModal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { authService } from '../services/auth.service';
import { FiUsers, FiUserPlus, FiBook, FiClipboard, FiHome, FiSettings, FiLogOut, FiMenu, FiX } from 'react-icons/fi';

const Dashboard = () => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState('student');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [newUser, setNewUser] = useState({
    email: '',
    name: '',
    role: 'student',
    password: ''
  });
  const [users, setUsers] = useState({
    students: [],
    teachers: [],
    admins: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [activeTab, setActiveTab] = useState('students');

  // Fonction pour charger les utilisateurs
  const loadUsers = async () => {
    try {
      setLoading(true);
      const response = await authService.getAllUsers();
      const groupedUsers = {
        students: response.data.filter(user => user.role === 'student'),
        teachers: response.data.filter(user => user.role === 'teacher'),
        admins: response.data.filter(user => user.role === 'admin')
      };
      setUsers(groupedUsers);
    } catch (err) {
      setError('Erreur lors du chargement des utilisateurs');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleAddUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const userTypeEndpoint = selectedUserType === 'admin' ? 'admins' : 
                              selectedUserType === 'teacher' ? 'teachers' : 'students';
      
      // S'assurer que le token est dans le header pour l'authentification
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Vous devez être connecté pour effectuer cette action');
      }

      await authService.register({
        ...newUser,
        role: selectedUserType
      }, userTypeEndpoint);

      setSuccess(`${selectedUserType === 'student' ? 'Étudiant' : selectedUserType === 'teacher' ? 'Enseignant' : 'Administrateur'} ajouté avec succès`);
      setShowAddUserModal(false);
      setNewUser({ email: '', name: '', role: selectedUserType, password: '' });
      await loadUsers();
    } catch (err) {
      setError(err.message || `Erreur lors de l'ajout de l'utilisateur`);
      console.error('Erreur détaillée:', err);
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ title, value, icon: Icon, color = "blue" }) => (
    <div className={`bg-white rounded-lg p-6 shadow-lg border-l-4 border-${color}-500`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
        </div>
        <div className={`bg-${color}-100 p-3 rounded-full`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
      </div>
    </div>
  );

  const Sidebar = () => (
    <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 text-white transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>
        <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
          <FiX className="w-6 h-6" />
        </button>
      </div>
      <nav className="mt-6">
        <div className="px-4 py-3">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
              <span className="text-sm font-medium">
                {authService.getUserName()?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium">{authService.getUserName()}</p>
              <p className="text-xs text-gray-400">Administrateur</p>
            </div>
          </div>
        </div>
        <div className="px-2 mt-6">
          <button onClick={() => setActiveTab('overview')} 
                  className={`flex items-center w-full px-4 py-2 rounded-lg ${activeTab === 'overview' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
            <FiHome className="w-5 h-5 mr-3" />
            Vue d'ensemble
          </button>
          <button onClick={() => setActiveTab('students')}
                  className={`flex items-center w-full px-4 py-2 mt-2 rounded-lg ${activeTab === 'students' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
            <FiUsers className="w-5 h-5 mr-3" />
            Étudiants
          </button>
          <button onClick={() => setActiveTab('teachers')}
                  className={`flex items-center w-full px-4 py-2 mt-2 rounded-lg ${activeTab === 'teachers' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
            <FiBook className="w-5 h-5 mr-3" />
            Enseignants
          </button>
          <button onClick={() => setActiveTab('admins')}
                  className={`flex items-center w-full px-4 py-2 mt-2 rounded-lg ${activeTab === 'admins' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
            <FiClipboard className="w-5 h-5 mr-3" />
            Administrateurs
          </button>
          <button onClick={() => setActiveTab('settings')}
                  className={`flex items-center w-full px-4 py-2 mt-2 rounded-lg ${activeTab === 'settings' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
            <FiSettings className="w-5 h-5 mr-3" />
            Paramètres
          </button>
          <button onClick={() => authService.logout()}
                  className="flex items-center w-full px-4 py-2 mt-2 text-red-400 hover:bg-gray-800 rounded-lg">
            <FiLogOut className="w-5 h-5 mr-3" />
            Déconnexion
          </button>
        </div>
      </nav>
    </div>
  );

  const UserTable = ({ users, type }) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            {type === 'student' ? 'Liste des étudiants' : 
             type === 'teacher' ? 'Liste des enseignants' : 'Liste des administrateurs'}
          </h2>
          <button
            onClick={() => {
              setSelectedUserType(type);
              setShowAddUserModal(true);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <FiUserPlus className="w-5 h-5" />
            Ajouter
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Utilisateur
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date d'inscription
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-medium">
                          {user.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{type}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {new Date(user.createdAt || Date.now()).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.isBlocked ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {user.isBlocked ? 'Bloqué' : 'Actif'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    Modifier
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    {user.isBlocked ? 'Débloquer' : 'Bloquer'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : ''} transition-margin duration-300 ease-in-out`}>
        <div className="py-6 px-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="mr-4 lg:hidden">
                <FiMenu className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-bold text-gray-900">
                {activeTab === 'students' ? 'Gestion des étudiants' :
                 activeTab === 'teachers' ? 'Gestion des enseignants' :
                 activeTab === 'admins' ? 'Gestion des administrateurs' :
                 activeTab === 'settings' ? 'Paramètres' : 'Tableau de bord'}
              </h1>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              {success}
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard 
                title="Total Étudiants" 
                value={users.students.length} 
                icon={FiUsers}
                color="blue"
              />
              <StatCard 
                title="Total Enseignants" 
                value={users.teachers.length} 
                icon={FiBook}
                color="green"
              />
              <StatCard 
                title="Total Administrateurs" 
                value={users.admins.length} 
                icon={FiClipboard}
                color="purple"
              />
            </div>
          )}

          {activeTab === 'students' && <UserTable users={users.students} type="student" />}
          {activeTab === 'teachers' && <UserTable users={users.teachers} type="teacher" />}
          {activeTab === 'admins' && <UserTable users={users.admins} type="admin" />}
          {activeTab === 'settings' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Paramètres</h2>
              {/* Ajoutez ici les paramètres */}
            </div>
          )}
        </div>
      </div>

      {showAddUserModal && (
        <AddUserModal
          onSubmit={handleAddUser}
          onClose={() => setShowAddUserModal(false)}
          newUser={newUser}
          onInputChange={(field, value) => setNewUser(prev => ({...prev, [field]: value}))}
          adminOnly={false}
        />
      )}
    </div>
  );
};

export default Dashboard;