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
        <AnimatePresence mode="wait">
          <Routes>
            {/* Route Dashboard - Sans Layout */}
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Route Login - Sans Layout */}
            <Route path="/login" element={<Login />} />

            {/* Routes publiques - Avec MainLayout */}
            <Route
              element={<MainLayout />}
            >
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/news" element={<News />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/announcements" element={<AnnouncementsPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Router>
    </AuthProvider>
  );
};

export default App;