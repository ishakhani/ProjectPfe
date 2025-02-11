export const roleAccess = {
  admin: {
    name: 'Administrateur',
    permissions: [
      'Gestion complète des utilisateurs',
      'Création/modification des cours',
      'Gestion des inscriptions',
      'Accès aux statistiques globales',
      'Gestion des rôles',
      'Configuration système'
    ]
  },
  teacher: {
    name: 'Enseignant',
    permissions: [
      'Création de contenu de cours',
      'Notation des étudiants',
      'Gestion des devoirs',
      'Suivi des présences',
      'Communication avec les étudiants',
      'Accès aux ressources pédagogiques'
    ]
  },
  student: {
    name: 'Étudiant',
    permissions: [
      'Consultation des cours',
      'Soumission des devoirs',
      'Consultation des notes',
      'Accès aux ressources',
      'Communication avec les enseignants',
      'Consultation de l\'emploi du temps'
    ]
  },
  employee: {
    name: 'Employé',
    permissions: [
      'Gestion administrative',
      'Consultation des emplois du temps',
      'Gestion des inscriptions',
      'Support aux étudiants',
      'Accès limité aux ressources'
    ]
  }
}; 