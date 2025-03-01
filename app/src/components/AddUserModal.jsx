import { motion } from 'framer-motion';

const AddUserModal = ({ onSubmit, onClose, newUser, onInputChange }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-lg p-6 w-full max-w-md"
      >
        <h3 className="text-lg font-bold mb-4">Ajouter un nouvel utilisateur</h3>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom complet</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={newUser.name}
              onChange={(e) => onInputChange('name', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={newUser.email}
              onChange={(e) => onInputChange('email', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mot de passe temporaire</label>
            <input
              type="password"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={newUser.password}
              onChange={(e) => onInputChange('password', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Rôle</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={newUser.role}
              onChange={(e) => onInputChange('role', e.target.value)}
            >
              <option value="student">Étudiant</option>
              <option value="teacher">Professeur</option>
              <option value="admin">Administrateur</option>
            </select>
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Ajouter
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );

export default AddUserModal;