import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
  const stats = [
    { label: 'Cours complétés', value: '12', icon: '📚' },
    { label: 'Heures d\'apprentissage', value: '48', icon: '⏰' },
    { label: 'Certifications', value: '3', icon: '🏆' },
    { label: 'Projets en cours', value: '2', icon: '🎯' },
  ];

  const upcomingEvents = [
    { title: 'Cours de React', date: '14:00 - 16:00', type: 'cours' },
    { title: 'Atelier JavaScript', date: 'Demain, 10:00', type: 'atelier' },
    { title: 'Examen Final', date: '25 Mars, 09:00', type: 'examen' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Statistiques */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Vue d&apos;ensemble</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="card text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Progression */}
            <div className="card mt-8">
              <h3 className="text-xl font-semibold mb-4">Progression globale</h3>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-blue-600 rounded-full h-4 w-2/3 transition-all duration-500"></div>
              </div>
              <div className="text-right text-gray-600 mt-2">66% complété</div>
            </div>
          </div>

          {/* Événements à venir */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Événements à venir</h2>
            <div className="card space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    {event.type === 'cours' ? '📚' : event.type === 'atelier' ? '🛠️' : '📝'}
                  </div>
                  <div>
                    <h4 className="font-semibold">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;