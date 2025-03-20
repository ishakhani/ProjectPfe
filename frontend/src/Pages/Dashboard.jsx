import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import StudentList from '../components/students/StudentList';
import TeacherList from '../components/teachers/TeacherList';
import NotificationsActivity from '../components/dashboard/NotificationsActivity';
import DashboardStats from '../components/dashboard/DashboardStats';
import Sidebar from '../components/dashboard/Sidebar';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '../contexts/ThemeContext';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex pt-16">
          <Sidebar 
            isOpen={sidebarOpen} 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          
          <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300 ease-in-out overflow-hidden`}>
            <div className="h-full flex flex-col">
              {/* Header */}
              <header className="bg-white shadow-sm py-4 px-8 sticky top-0 z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                      className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none transition-all duration-300 ease-in-out"
                      aria-label="Toggle sidebar"
                    >
                      <FiMenu className="w-6 h-6 text-gray-600" />
                    </button>
                    <h1 className="text-2xl font-bold text-gray-900">
                      {activeTab === 'overview' ? 'Tableau de bord' :
                       activeTab === 'students' ? 'Gestion des étudiants' :
                       activeTab === 'teachers' ? 'Gestion des enseignants' :
                       activeTab === 'settings' ? 'Paramètres' : 'Tableau de bord'}
                    </h1>
                  </div>
                </div>
              </header>

              {/* Main Content */}
              <main className="flex-1 overflow-y-auto px-8 py-6">
                {error && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    {error}
                  </div>
                )}

                {loading ? (
                  <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mandarine-500"></div>
                  </div>
                ) : (
                  <>
                    {activeTab === 'overview' && (
                      <div className="space-y-8">
                        <div className="bg-white rounded-xl shadow-sm p-6">
                          <DashboardStats />
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-sm p-6">
                          <h2 className="text-xl font-semibold text-gray-800 mb-6">
                            Notifications & Activités
                          </h2>
                          <NotificationsActivity />
                        </div>
                      </div>
                    )}

                    {activeTab === 'students' && (
                      <div className="bg-white rounded-xl shadow-sm p-6">
                        <StudentList />
                      </div>
                    )}

                    {activeTab === 'teachers' && (
                      <div className="bg-white rounded-xl shadow-sm p-6">
                        <TeacherList />
                      </div>
                    )}

                    {activeTab === 'settings' && (
                      <div className="bg-white rounded-xl shadow-sm p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-6">
                          Paramètres du système
                        </h2>
                        <div className="space-y-4">
                          <p className="text-gray-600">
                            Configuration du système et paramètres généraux...
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </main>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;