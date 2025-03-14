import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './components/Layout/MainLayout';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
// Import des pages
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import AnnouncementsPage from './Pages/AnnouncementsPage';
import SchedulePage from './Pages/SchedulePage';
import ResourcesPage from './Pages/ResourcesPage';
import Login from './components/Login';
import Courses from './Pages/Public/Courses';
import About from './Pages/Public/About';
import News from './Pages/Public/News';
import FAQ from './Pages/Public/FAQ';
import Contact from './Pages/Public/Contact';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <MainLayout>
          <AnimatePresence mode="wait">
            <Routes>
              {/* Routes publiques */}
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/news" element={<News />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contact" element={<Contact />} />

              {/* Routes protégées pour les admins */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute requiredRole="admins">
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/schedule"
                element={
                  <ProtectedRoute requiredRole="admins">
                    <SchedulePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/resources"
                element={
                  <ProtectedRoute requiredRole="admins">
                    <ResourcesPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/announcements"
                element={
                  <ProtectedRoute requiredRole="admins">
                    <AnnouncementsPage />
                  </ProtectedRoute>
                }
              />

              {/* Route par défaut pour les URLs non trouvées */}
              <Route path="*" element={<div>Page non trouvée</div>} />
            </Routes>
          </AnimatePresence>
        </MainLayout>
      </Router>
    </AuthProvider>
  );
};

export default App;