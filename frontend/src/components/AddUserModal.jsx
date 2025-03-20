import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

const AddUserModal = ({ onSubmit, onClose, newUser, onInputChange, userType = 'student' }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white rounded-lg p-6 w-full max-w-md relative"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        <FiX className="w-6 h-6" />
      </button>

      <h3 className="text-lg font-bold mb-6">
        {`Ajouter un ${userType === 'student' ? 'étudiant' : 'enseignant'}`}
      </h3>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nom complet
          </label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            value={newUser.name}
            onChange={(e) => onInputChange('name', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            value={newUser.email}
            onChange={(e) => onInputChange('email', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mot de passe
          </label>
          <input
            type="password"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            value={newUser.password}
            onChange={(e) => onInputChange('password', e.target.value)}
          />
        </div>

        {userType === 'student' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Niveau
              </label>
              <select
                name="level"
                value={newUser.level}
                onChange={(e) => onInputChange('level', e.target.value)}
                className="input-field"
                required
              >
                <option value="">Sélectionner un niveau</option>
                <option value="1">Première année</option>
                <option value="2">Deuxième année</option>
                <option value="3">Troisième année</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Programme
              </label>
              <select
                name="program"
                value={newUser.program}
                onChange={(e) => onInputChange('program', e.target.value)}
                className="input-field"
                required
              >
                <option value="">Sélectionner un programme</option>
                <option value="informatique">Informatique</option>
                <option value="gestion">Gestion</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>
          </>
        )}

        {userType === 'teacher' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Matière
              </label>
              <select
                name="subject"
                value={newUser.subject}
                onChange={(e) => onInputChange('subject', e.target.value)}
                className="input-field"
                required
              >
                <option value="">Sélectionner une matière</option>
                <option value="mathematiques">Mathématiques</option>
                <option value="informatique">Informatique</option>
                <option value="gestion">Gestion</option>
                <option value="langues">Langues</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Qualification
              </label>
              <select
                name="qualification"
                value={newUser.qualification}
                onChange={(e) => onInputChange('qualification', e.target.value)}
                className="input-field"
                required
              >
                <option value="">Sélectionner une qualification</option>
                <option value="doctorat">Doctorat</option>
                <option value="master">Master</option>
                <option value="licence">Licence</option>
              </select>
            </div>
          </>
        )}

        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
          >
            Ajouter
          </button>
        </div>
      </form>
    </motion.div>
  </div>
);

AddUserModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  userType: PropTypes.string,
  newUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    level: PropTypes.string,
    program: PropTypes.string,
    subject: PropTypes.string,
    qualification: PropTypes.string
  }).isRequired
};

export default AddUserModal;