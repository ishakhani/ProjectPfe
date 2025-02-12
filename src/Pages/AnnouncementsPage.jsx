import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcements from '../components/Announcements';

const AnnouncementsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <Announcements />
      </main>
      <Footer />
    </div>
  );
};

export default AnnouncementsPage;