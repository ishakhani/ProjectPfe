import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  const location = useLocation();
  
  // Pages où nous ne voulons pas afficher la navbar
  const noNavbarRoutes = ['/login', '/register'];
  
  const shouldShowNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {shouldShowNavbar && <Navbar />}
      <main className={`flex-grow ${shouldShowNavbar ? 'pt-16' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout; 