import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Schedule from '../components/Schedule';

const SchedulePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <main className="flex-grow p-4">
        <Schedule />
      </main>
      <Footer />
    </div>
  );
};

export default SchedulePage;