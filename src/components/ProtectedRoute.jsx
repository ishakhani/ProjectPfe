import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { user } = useAuth();

  // Commenté temporairement pour accéder aux pages protégées
  
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }
  

  // Retourne directement le contenu sans vérification
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string)
};

export default ProtectedRoute;