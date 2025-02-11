import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  // const { user } = useAuth();

  // Commenté temporairement pour accéder aux pages protégées
  /*
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }
  */

  // Retourne directement le contenu sans vérification
  return children;
};

export default ProtectedRoute;