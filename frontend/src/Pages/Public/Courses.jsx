// import Footer from '../../components/Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentCourse from '../../components/PaymentCourse';
import { useAuth } from '../../contexts/AuthContext';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  
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
    if (!user) {
      navigate('/login', { state: { from: '/courses', courseId: course.id } });
      return;
    }
    setSelectedCourse(course);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Nos Formations</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="card hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl mb-4 text-center">{course.image}</div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">⏱ {course.duration}</span>
                  <span className="text-gray-600">📚 {course.level}</span>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{course.price}€</span>
                  <button 
                    className="btn-primary"
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
              <div className="bg-white rounded-lg p-6 max-w-2xl w-full relative">
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
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