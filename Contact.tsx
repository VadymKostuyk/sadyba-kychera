import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Зв'яжіться з нами
            </h2>
            <p className="text-green-100 text-lg mb-8">
              Ми завжди раді відповісти на ваші запитання та допомогти з бронюванням
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-800 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <p className="text-green-300 text-sm mb-1">Телефон для бронювання</p>
                  <a
                    href="tel:+380677659478"
                    className="text-xl font-semibold hover:text-green-300 transition-colors"
                  >
                    +38 067 765 94 78
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-800 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <p className="text-green-300 text-sm mb-1">Екскурсії</p>
                  <a
                    href="tel:+380981181150"
                    className="text-xl font-semibold hover:text-green-300 transition-colors"
                  >
                    +38 098 118 11 50
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-800 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <p className="text-green-300 text-sm mb-1">Email</p>
                  <a
                    href="mailto:wadim.r.k.36@gmail.com"
                    className="text-lg font-semibold hover:text-green-300 transition-colors"
                  >
                    wadim.r.k.36@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-800 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <p className="text-green-300 text-sm mb-1">Адреса</p>
                  <p className="text-lg font-semibold">
                    Закарпатська область, Міжгірський район
                  </p>
                  <p className="text-green-200">с. Кичера (вершина гори)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-800 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <p className="text-green-300 text-sm mb-1">Час заїзду/виїзду</p>
                  <p className="text-lg font-semibold">Заїзд: 14:00 | Виїзд: 12:00</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="text-green-300 text-sm mb-4">Ми у соціальних мережах</p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-800 rounded-xl flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-800 rounded-xl flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-800 rounded-xl flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-2xl h-96 md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10581.234567890123!2d23.5!3d48.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739e5e5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sKychera!5e0!3m2!1sen!2sua!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Садиба Кичера на карті"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
