import { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/auth.service';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Vérifier l'authentification au chargement
        const checkAuth = async () => {
            try {
                if (authService.isAuthenticated()) {
                    const userType = authService.getUserType();
                    const response = await authService.getProfile(userType);
                    setUser(response.data);
                }
            } catch (error) {
                console.error('Erreur de vérification d\'authentification:', error);
                authService.logout();
            } finally {
                setLoading(false);
            }
        };

        checkAuth();

        // Vérifier l'expiration du token toutes les minutes
        const tokenCheckInterval = setInterval(() => {
            const token = localStorage.getItem('token');
            if (token) {
                const tokenData = JSON.parse(atob(token.split('.')[1]));
                if (tokenData.exp * 1000 < Date.now()) {
                    authService.logout();
                    setUser(null);
                    window.location.href = '/login';
                }
            }
        }, 60000);

        return () => clearInterval(tokenCheckInterval);
    }, []);

    const login = async (email, password, userType) => {
        const response = await authService.login(email, password, userType);
        if (response.data) {
            const profileResponse = await authService.getProfile(userType);
            setUser(profileResponse.data);
        }
        return response;
    };

    const logout = () => {
        authService.logout();
        setUser(null);
    };

    const value = {
        user,
        loading,
        login,
        logout,
        isAuthenticated: authService.isAuthenticated,
        userType: authService.getUserType
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth doit être utilisé à l\'intérieur d\'un AuthProvider');
    }
    return context;
}; 