import api from '../config/axios.config';

export const authService = {
    // Login pour différents types d'utilisateurs
    async login(email, password, userType) {
        try {
            const response = await api.post(`/${userType}/login`, { email, password });
            if (response.data.data) {
                localStorage.setItem('token', response.data.data);
                localStorage.setItem('userType', userType);
            }
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    // Inscription pour différents types d'utilisateurs
    async register(userData, userType) {
        try {
            const response = await api.post(`/${userType}/register`, userData);
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    // Récupérer le profil de l'utilisateur connecté
    async getProfile(userType) {
        try {
            const response = await api.get(`/${userType}/profile`);
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    // Déconnexion
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userType');
    },

    // Vérifier si l'utilisateur est connecté
    isAuthenticated() {
        return !!localStorage.getItem('token');
    },

    // Récupérer le type d'utilisateur
    getUserType() {
        return localStorage.getItem('userType');
    }
}; 