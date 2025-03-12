import api from '../config/axios.config';

export const authService = {
    // Login pour différents types d'utilisateurs
    async login(email, password, userType) {
        try {
            const response = await api.post(`/${userType}/login`, { email, password });
            
            if (response.data.status === 'error') {
                throw new Error(response.data.message);
            }

            if (response.data.status === 'success' && response.data.data) {
                // Vérifier que le token est valide
                const token = response.data.data;
                const tokenData = JSON.parse(atob(token.split('.')[1]));
                
                // Stocker les informations de l'utilisateur
                localStorage.setItem('token', token);
                localStorage.setItem('userType', userType);
                localStorage.setItem('userName', tokenData.name || '');
                return response.data;
            }

            throw new Error('Erreur de connexion');
        } catch (error) {
            if (error.response) {
                throw new Error(error.response.data.message || 'Erreur de connexion');
            }
            throw error;
        }
    },

    // Inscription pour différents types d'utilisateurs
    async register(userData, userType) {
        try {
            let endpoint;
            switch (userType) {
                case 'students':
                    endpoint = '/students/admin/register';
                    break;
                case 'teachers':
                    endpoint = '/teachers/admin/register';
                    break;
                case 'admins':
                    endpoint = '/admins/register';
                    break;
                default:
                    throw new Error('Type d\'utilisateur non valide');
            }
            
            const response = await api.post(endpoint, userData);
            if (response.data.status === 'error') {
                throw new Error(response.data.message);
            }
            return response.data;
        } catch (error) {
            if (error.response?.data?.message) {
                throw new Error(error.response.data.message);
            }
            throw new Error('Erreur lors de la création de l\'utilisateur. Veuillez vérifier les informations saisies.');
        }
    },

    // Récupérer tous les utilisateurs
    async getAllUsers() {
        try {
            const response = await api.get('/admins/all-users');
            if (response.data.status === 'error') {
                throw new Error(response.data.message);
            }
            return response.data;
        } catch (error) {
            throw error.response?.data?.message || error.message;
        }
    },

    // Récupérer le profil de l'utilisateur connecté
    async getProfile(userType) {
        try {
            const response = await api.get(`/${userType}/profile`);
            if (response.data.status === 'error') {
                throw new Error(response.data.message);
            }
            return response.data;
        } catch (error) {
            throw error.response?.data?.message || error.message;
        }
    },

    // Déconnexion
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userType');
        localStorage.removeItem('userName');
    },

    // Vérifier si l'utilisateur est connecté
    isAuthenticated() {
        const token = localStorage.getItem('token');
        if (!token) return false;

        try {
            // Vérifier si le token est expiré
            const tokenData = JSON.parse(atob(token.split('.')[1]));
            if (tokenData.exp * 1000 < Date.now()) {
                this.logout();
                return false;
            }
            return true;
        } catch {
            this.logout();
            return false;
        }
    },

    // Récupérer le type d'utilisateur
    getUserType() {
        return localStorage.getItem('userType');
    },

    // Récupérer le nom de l'utilisateur
    getUserName() {
        return localStorage.getItem('userName');
    }
}; 