import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Développement Web Frontend',
      duration: '3 mois',
      level: 'Débutant',
      description: 'Apprenez HTML, CSS et JavaScript pour créer des sites web modernes',
      image: '🌐',
      price: '2500€',
    },
    {
      id: 2,
      title: 'Développement Backend Node.js',
      duration: '4 mois',
      level: 'Intermédiaire',
      description: 'Maîtrisez Node.js et créez des API REST performantes',
      image: '⚙️',
      price: '3000€',
    },
    {
      id: 3,
      title: 'Data Science & IA',
      duration: '6 mois',
      level: 'Avancé',
      description: 'Explorez le monde de la data science et de l&apos;intelligence artificielle',
      image: '🤖',
      price: '4500€',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
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
                  <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                  <button className="btn-primary">
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses; 