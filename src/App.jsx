import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import PageTransition from './components/PageTransition';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import AnnouncementsPage from './Pages/AnnouncementsPage';
import SchedulePage from './Pages/SchedulePage';
import ResourcesPage from './Pages/ResourcesPage';
import Login from './components/Login';
import Register from './components/Register';
// Nouvelles pages publiques
import Courses from './Pages/Public/Courses';
import About from './Pages/Public/About';
import Contact from './Pages/Public/Contact';
import FAQ from './Pages/Public/FAQ';
import News from './Pages/Public/News';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Routes publiques */}
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/login" element={
          <PageTransition>
            <Login />
          </PageTransition>
        } />
        <Route path="/register" element={
          <PageTransition>
            <Register />
          </PageTransition>
        } />
        <Route path="/courses" element={
          <PageTransition>
            <Courses />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <About />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <Contact />
          </PageTransition>
        } />
        <Route path="/faq" element={
          <PageTransition>
            <FAQ />
          </PageTransition>
        } />
        
        {/* Routes protégées */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <PageTransition>
              <Dashboard />
            </PageTransition>
          </ProtectedRoute>
        } />
        
        <Route path="/announcements" element={
          <ProtectedRoute>
            <PageTransition>
              <AnnouncementsPage />
            </PageTransition>
          </ProtectedRoute>
        } />
        
        <Route path="/schedule" element={
          <ProtectedRoute>
            <PageTransition>
              <SchedulePage />
            </PageTransition>
          </ProtectedRoute>
        } />
        
        <Route path="/resources" element={
          <ProtectedRoute allowedRoles={['admin', 'teacher', 'student']}>
            <PageTransition>
              <ResourcesPage />
            </PageTransition>
          </ProtectedRoute>
        } />
        
        <Route path="/news" element={
          <PageTransition>
            <News />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;