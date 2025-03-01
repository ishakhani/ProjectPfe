import { useState } from 'react';
import AddUserModal from '../components/AddUserModal';

const Dashboard = () => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUser, setNewUser] = useState({
    email: '',
    name: '',
    role: 'student',
    password: ''
  });
  const [users, setUsers] = useState([
    { id: 1, name: 'Jean Dupont', email: 'jean@efgb.com', role: 'student', status: 'actif' },
    { id: 2, name: 'Marie Martin', email: 'marie@efgb.com', role: 'teacher', status: 'actif' },
  ]);
  const [editingUser, setEditingUser] = useState(null);

  const handleAddUser = (e) => {
    e.preventDefault();
    if (editingUser) {
      setUsers(users.map(user => user.id === editingUser.id ? { ...newUser, id: editingUser.id, status: editingUser.status } : user));
      setEditingUser(null);
    } else {
      const id = users.length + 1;
      setUsers([...users, { ...newUser, id, status: 'actif' }]);
    }
    setShowAddUserModal(false);
    setNewUser({ email: '', name: '', role: 'student', password: '' });
  };

  const handleInputChange = (field, value) => {
    setNewUser(prev => ({...prev, [field]: value}));
  };

  const handleEditUser = (user) => {
    setNewUser(user);
    setEditingUser(user);
    setShowAddUserModal(true);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Administration</h1>
        <button
          onClick={() => setShowAddUserModal(true)}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
        >
          Ajouter un utilisateur
        </button>
      </div>

      {/* Tableau des utilisateurs */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap capitalize">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.status === 'actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button onClick={() => handleEditUser(user)} className="text-blue-600 hover:text-blue-900 mr-3">Modifier</button>
                  <button onClick={() => handleDeleteUser(user.id)} className="text-red-600 hover:text-red-900">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showAddUserModal && (
        <AddUserModal
          onSubmit={handleAddUser}
          onClose={() => setShowAddUserModal(false)}
          newUser={newUser}
          onInputChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default Dashboard;
