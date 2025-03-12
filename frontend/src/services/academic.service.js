import api from '../config/axios.config';

export const academicService = {
    // Années académiques
    async getAcademicYears() {
        const response = await api.get('/academic-years');
        return response.data;
    },

    async createAcademicYear(data) {
        const response = await api.post('/academic-years', data);
        return response.data;
    },

    // Semestres/Trimestres
    async getAcademicTerms() {
        const response = await api.get('/academic-terms');
        return response.data;
    },

    async createAcademicTerm(data) {
        const response = await api.post('/academic-terms', data);
        return response.data;
    },

    // Classes
    async getClassLevels() {
        const response = await api.get('/class-levels');
        return response.data;
    },

    async createClassLevel(data) {
        const response = await api.post('/class-levels', data);
        return response.data;
    },

    // Programmes
    async getPrograms() {
        const response = await api.get('/programs');
        return response.data;
    },

    async createProgram(data) {
        const response = await api.post('/programs', data);
        return response.data;
    },

    // Matières
    async getSubjects() {
        const response = await api.get('/subjects');
        return response.data;
    },

    async createSubject(data) {
        const response = await api.post('/subjects', data);
        return response.data;
    },

    // Examens
    async getExams() {
        const response = await api.get('/exams');
        return response.data;
    },

    async createExam(data) {
        const response = await api.post('/exams', data);
        return response.data;
    },

    // Résultats d'examens
    async getExamResults() {
        const response = await api.get('/exam-results');
        return response.data;
    },

    async createExamResult(data) {
        const response = await api.post('/exam-results', data);
        return response.data;
    }
}; 