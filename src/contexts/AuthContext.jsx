import { createContext, useContext, useState } from 'react';
import { checkCredentials } from '../config/tempUsers';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    try {
      // Simulation d'un délai réseau
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const authenticatedUser = checkCredentials(email, password);
      
      if (authenticatedUser) {
        setUser(authenticatedUser);
        return authenticatedUser;
      } else {
        throw new Error('Identifiants invalides');
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      // Simulation d'un délai réseau
      await new Promise(resolve => setTimeout(resolve, 300));
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}; 