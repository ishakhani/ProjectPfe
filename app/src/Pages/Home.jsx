import Navbar from '../components/Navbar';

const Home = () => {
  const features = [
    { title: 'Formation', description: 'Accédez à nos programmes de formation', icon: '🎓', link: '/courses' },
    { title: 'Resources', description: 'Bibliothèque de ressources pédagogiques', icon: '📚', link: '/resources' },
    { title: 'Planning', description: 'Consultez votre emploi du temps', icon: '📅', link: '/schedule' },
    { title: 'Actualités', description: 'Restez informé des dernières nouvelles', icon: '📢', link: '/News' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
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
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <a 
                href={feature.link} 
                key={index} 
                className="card hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;