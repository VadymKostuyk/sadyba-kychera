import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Садиба "Кичера"</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Відпочинок у серці Карпат з неймовірними краєвидами, затишними номерами та
              гостинністю. Ідеальне місце для релаксації та активного відпочинку.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Навігація</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#rooms')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Номери
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Послуги
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#attractions')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Локація
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#reviews')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Відгуки
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Контакти</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+380677659478"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +38 067 765 94 78
                </a>
              </li>
              <li>
                <a
                  href="mailto:wadim.r.k.36@gmail.com"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  wadim.r.k.36@gmail.com
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>Закарпаття, Міжгірський район, с. Кичера</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Садиба "Кичера". Усі права захищено.
          </p>
          <a
            href="https://g.page/r/Cb1KcCz-mV6OEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-400 text-sm transition-colors"
          >
            Залишити відгук на Google
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
