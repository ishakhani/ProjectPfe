import { useState } from 'react';
import PaymentCourse from '../../components/PaymentCourse';
import { useTheme } from '../../contexts/ThemeContext';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { darkMode } = useTheme();
  
  const courses = [
    {
      id: 1,
      title: 'Développement Web Frontend',
      duration: '3 mois',
      level: 'Débutant',
      description: 'Apprenez HTML, CSS et JavaScript pour créer des sites web modernes',
      image: '🌐',
      price: 2500,
    },
    {
      id: 2,
      title: 'Développement Backend Node.js',
      duration: '4 mois',
      level: 'Intermédiaire',
      description: 'Maîtrisez Node.js et créez des API REST performantes',
      image: '⚙️',
      price: 3000,
    },
    {
      id: 3,
      title: 'Data Science & IA',
      duration: '6 mois',
      level: 'Avancé',
      description: 'Explorez le monde de la data science et de l\'intelligence artificielle',
      image: '🤖',
      price: 4500,
    },
  ];

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Nos Formations</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-4 text-center">{course.image}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{course.title}</h3>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600 dark:text-gray-300">⏱ {course.duration}</span>
                  <span className="text-gray-600 dark:text-gray-300">📚 {course.level}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{course.price}€</span>
                  <button 
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                    onClick={() => handleCourseClick(course)}
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal de paiement */}
          {selectedCourse && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full relative">
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  ✕
                </button>
                <PaymentCourse 
                  courseId={selectedCourse.id.toString()}
                  courseTitle={selectedCourse.title}
                  price={selectedCourse.price}
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Courses;