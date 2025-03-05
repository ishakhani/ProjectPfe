import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const News = () => {
  const { darkMode } = useTheme();

  const news = [
    {
      id: 1,
      title: 'Nouvelle formation en Intelligence Artificielle',
      date: '2024-03-15',
      category: 'Formation',
      image: '🤖',
      excerpt: 'Découvrez notre nouveau programme de formation en IA, conçu en partenariat avec des experts du domaine.',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Journée Portes Ouvertes',
      date: '2024-03-20',
      category: 'Événement',
      image: '🎉',
      excerpt: 'Venez découvrir notre école et rencontrer nos formateurs lors de notre prochaine journée portes ouvertes.',
      readTime: '3 min'
    },
    {
      id: 3,
      title: 'Succès de nos diplômés',
      date: '2024-03-12',
      category: 'Success Story',
      image: '🎓',
      excerpt: '95% de nos diplômés ont trouvé un emploi dans les 6 mois suivant leur formation.',
      readTime: '4 min'
    },
    {
      id: 4,
      title: 'Partenariat avec Tech Leaders',
      date: '2024-03-10',
      category: 'Partenariat',
      image: '🤝',
      excerpt: 'Nouveau partenariat signé avec les leaders de la tech pour des stages garantis.',
      readTime: '6 min'
    }
  ];

  const categories = [
    'Tous', 'Formation', 'Événement', 'Success Story', 'Partenariat'
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <motion.div className="container mx-auto px-4">
          <motion.h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Actualités
          </motion.h1>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md 
                         transition-all duration-200 text-gray-700 dark:text-gray-200 
                         hover:text-blue-600 dark:hover:text-blue-400"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grille d'actualités */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <motion.article
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg 
                         transition-all duration-200"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl">{item.image}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(item.date).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h2>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 
                                 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.readTime} de lecture
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {item.excerpt}
                  </p>
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 
                                 dark:hover:text-blue-300 font-semibold flex items-center">
                    Lire la suite
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default News;