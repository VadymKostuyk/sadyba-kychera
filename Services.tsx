import {
  Droplets,
  MapPinned,
  Car,
  Wifi,
  ParkingSquare,
  Flame,
  Bike,
  Fish,
  Trees,
  Phone,
} from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Чан із джакузі',
    description: 'Гарячий чан з джакузі - 3000 грн. Бронювання мінімум за 4-5 годин наперед.',
    image: '/images/service-hot-tub.jpg',
    featured: true,
  },
  {
    icon: MapPinned,
    title: 'Екскурсії',
    description: 'Екскурсії по Закарпаттю: Буйволина ферма, Водоспад Шипіт, озеро Синевир та багато іншого. Скажіть, що з Садиби Кичера - отримаєте знижку!',
    contact: '+380981181150',
  },
  {
    icon: Car,
    title: 'Трансфер',
    description: 'Трансфер до садиби з автовокзалу або залізничного вокзалу.',
    contact: '+380677659478',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi',
    description: 'Безкоштовний високошвидкісний Wi-Fi на всій території садиби.',
  },
  {
    icon: ParkingSquare,
    title: 'Паркінг',
    description: 'Безкоштовна парковка для всіх гостей садиби.',
  },
  {
    icon: Flame,
    title: 'Мангал',
    description: 'Мангал з усім необхідним для приготування смачного шашлику.',
  },
];

const activities = [
  {
    icon: Bike,
    title: 'Катання на квадроциклах',
    description: 'Екстремальні прогулянки гірськими стежками',
    image: '/images/service-atv.jpg',
  },
  {
    icon: Trees,
    title: 'Піші прогулянки',
    description: 'Мальовничі маршрути Карпатами',
  },
  {
    icon: Fish,
    title: 'Риболовля',
    description: 'Ловля форелі в гірських річках',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Наші послуги
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Все для вашого комфортного відпочинку в Карпатах
          </p>
        </div>

        {/* Featured Service - Hot Tub */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-green-800 to-green-700 rounded-3xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <Droplets className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Чан із джакузі</h3>
                </div>
                <p className="text-white/90 text-lg mb-6">
                  Відпочиньте в гарячому чані з неймовірним видом на гори. Ідеально для
                  релаксації після активного дня.
                </p>
                <div className="bg-white/10 rounded-lg p-4 mb-6">
                  <p className="text-white font-semibold">3000 грн за сеанс</p>
                  <p className="text-white/80 text-sm">
                    Бронювання мінімум за 4-5 годин наперед
                  </p>
                </div>
                <a href="tel:+380677659478">
                  <button className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Забронювати чан
                  </button>
                </a>
              </div>
              <div className="h-64 md:h-auto">
                <img
                  src="/images/service-hot-tub.jpg"
                  alt="Чан із джакузі"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.slice(1).map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {service.contact && (
                <a
                  href={`tel:${service.contact}`}
                  className="inline-flex items-center text-green-700 hover:text-green-800 font-medium"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {service.contact}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Activities Section */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Додаткові розваги
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((activity, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden shadow-lg h-72"
            >
              {activity.image && (
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              )}
              <div
                className={`absolute inset-0 ${
                  activity.image
                    ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'
                    : 'bg-green-700'
                }`}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center mb-2">
                  <activity.icon
                    className={`w-6 h-6 mr-2 ${activity.image ? 'text-white' : 'text-white'}`}
                  />
                  <h4
                    className={`text-xl font-bold ${
                      activity.image ? 'text-white' : 'text-white'
                    }`}
                  >
                    {activity.title}
                  </h4>
                </div>
                <p
                  className={`text-sm ${
                    activity.image ? 'text-white/80' : 'text-white/80'
                  }`}
                >
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
