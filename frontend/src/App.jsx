import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './components/Layout/MainLayout';
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
    <Router>
      <MainLayout>
        <AnimatePresence mode="wait">
          <Routes>
            {/* Toutes les routes */}
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/announcements" element={<AnnouncementsPage />} />

            {/* Route par défaut pour les URLs non trouvées */}
            <Route path="*" element={<div>Page non trouvée</div>} />
          </Routes>
        </AnimatePresence>
      </MainLayout>
    </Router>
  );
};

export default App;