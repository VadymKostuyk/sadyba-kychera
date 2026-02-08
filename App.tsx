import './App.css';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Rooms from './sections/Rooms';
import Services from './sections/Services';
import Attractions from './sections/Attractions';
import Reviews from './sections/Reviews';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Rooms />
        <Services />
        <Attractions />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
