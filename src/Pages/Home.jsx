import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const features = [
    { title: 'Formation', description: 'Accédez à nos programmes de formation', icon: '🎓' },
    { title: 'Resources', description: 'Bibliothèque de ressources pédagogiques', icon: '📚' },
    { title: 'Planning', description: 'Consultez votre emploi du temps', icon: '📅' },
    { title: 'Actualités', description: 'Restez informé des dernières nouvelles', icon: '📢' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Bienvenue sur EFGB Portal
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Votre plateforme d&apos;apprentissage personnalisée
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
              Commencer
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover:scale-105 transition-transform duration-200">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;