import { ThemeProvider } from '../../contexts/ThemeContext';
import Navbar from '../Navbar';
import Footer from '../Footer';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;