import { MapPin, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToRooms = () => {
    const element = document.querySelector('#rooms');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero.jpg)' }}
      >
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="fade-in">
          <div className="flex items-center justify-center mb-4 text-white/90">
            <MapPin className="w-5 h-5 mr-2" />
            <span className="text-sm sm:text-base">Закарпаття, Україна</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Садиба "Кичера"
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Відпочинок у серці Карпат з неймовірними краєвидами, затишними номерами та
            гостинністю
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+380677659478">
              <Button
                size="lg"
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Забронювати зараз
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToRooms}
              className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-6 text-lg rounded-full transition-all"
            >
              Переглянути номери
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToRooms}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
