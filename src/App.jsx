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
import Register from './components/Register';
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
            {/* Routes publiques */}
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />

            {/* Routes protégées (temporairement accessibles) */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/announcements" element={<AnnouncementsPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </AnimatePresence>
      </MainLayout>
    </Router>
  );
};

export default App;