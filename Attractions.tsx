import { MapPin, ExternalLink } from 'lucide-react';

interface Attraction {
  name: string;
  description: string;
  link?: string;
}

interface AttractionCategory {
  title: string;
  image?: string;
  attractions: Attraction[];
}

const attractionCategories: AttractionCategory[] = [
  {
    title: 'МІЖГІР\'Я',
    attractions: [
      { name: 'Канатна дорога в Міжгір\'ї', description: 'Оглядова канатна дорога на гору' },
      { name: 'Холодний гейзер', description: 'Унікальний гейзер посеред лісу' },
      { name: 'Мінеральне джерело', description: 'Вода, насичена сірководнем' },
      { name: 'ЕКО парк Келечин', description: 'Мінеральне джерело з водою, насиченою залізом' },
    ],
  },
  {
    title: 'СИНЕВИР',
    image: '/images/attraction-synevyr.jpg',
    attractions: [
      { name: 'Озеро Синевир', description: 'Найвідоміше озеро Карпат', link: 'https://maps.app.goo.gl/fVz4VoSvKxpsvc2R7' },
      { name: 'Смачна колиба', description: 'Колиба біля озера' },
      { name: 'Центр реабілітації бурих медведів', description: 'Притулок для ведмедів', link: 'https://maps.app.goo.gl/fVz4VoSvKxpsvc2R7' },
      { name: 'Екопарк долина вовків', description: 'Парк з вовками', link: 'https://maps.app.goo.gl/pDjw7kwKhtgjXJHKA' },
    ],
  },
  {
    title: 'КОЛОЧАВА',
    attractions: [
      { name: 'Сироварня', description: 'Найсмачніша бринза в районі', link: 'https://maps.app.goo.gl/xaL16WbhH12QALMFA' },
      { name: 'Форелеве господарство', description: 'Свіжа форель', link: 'https://maps.app.goo.gl/ohmTr34pN9o9EUXB7' },
      { name: 'Етномузей "Старе село"', description: 'Музей під відкритим небом', link: 'https://maps.app.goo.gl/w5Ntoypiq5TeG9Po6' },
      { name: 'Тереблеріцьке Водосховище', description: 'Гірське водосховище', link: 'https://maps.app.goo.gl/p6uEjUbRe3A7aZkX6' },
    ],
  },
  {
    title: 'ПИЛИПЕЦЬ',
    image: '/images/attraction-shypit.jpg',
    attractions: [
      { name: 'Водоспад Шипіт', description: 'Один з найвищих водоспадів України', link: 'https://maps.app.goo.gl/PMQL9bW9STD3XLza9' },
      { name: 'Рибний ресторан', description: 'Смачний ресторан біля водоспаду', link: 'https://maps.app.goo.gl/kJDE4A3KQe4gzxpZ8' },
      { name: 'Крісельна канатна дорога', description: 'Канатна дорога в Пилипці', link: 'https://maps.app.goo.gl/qYr2tdVbcKB8LRf87' },
    ],
  },
  {
    title: 'ХУСТ',
    attractions: [
      { name: 'Буйволина ферма', description: 'Ферма з буйволами', link: 'https://maps.app.goo.gl/cXzAMjmzfKEqamaR6' },
      { name: 'Равликова ферма', description: 'Екскурсія на равликову ферму', link: 'https://maps.app.goo.gl/f4jfuDiWKbcdgKYc7' },
      { name: 'Ранчо Хайленд', description: 'Конні прогулянки', link: 'https://maps.app.goo.gl/uehim4NMvUePVgoW7' },
      { name: 'Оленяча ферма', description: 'Ферма з оленями', link: 'https://maps.app.goo.gl/6o8aWeUKJrt4QqkT8' },
      { name: 'Хустський Замок', description: 'Історичний замок', link: 'https://maps.app.goo.gl/Zro4SMsMZnbMzPj7A' },
      { name: 'Rikka Khyst', description: 'Відпочинковий комплекс', link: 'https://maps.app.goo.gl/sYbe5mC4FMGGqkZK7' },
    ],
  },
  {
    title: 'ТЕРМАЛЬНІ ДЖЕРЕЛА',
    attractions: [
      { name: 'Термальні води Велятино', description: 'Гарячі джерела', link: 'https://maps.app.goo.gl/9vwGWcUL6dXPHDFT8' },
      { name: 'Термальні води Берегово', description: 'Басейни з термальною водою', link: 'https://maps.app.goo.gl/59CVZPJ3gHrEs2FNA' },
      { name: 'Термальні води Косино', description: 'Аквапарк з термальними джерелами', link: 'https://maps.app.goo.gl/cjFPtfCcsNR4FPG5A' },
    ],
  },
  {
    title: 'ЗАМКИ',
    attractions: [
      { name: 'Мукачівський замок "Паланок"', description: 'Середньовічний замок', link: 'https://maps.app.goo.gl/sYbe5mC4FMGGqkZK7' },
      { name: 'Чинадіївський замок "Сент Мікорш"', description: 'Руїни замку', link: 'https://maps.app.goo.gl/JJtqMBa1KKZ9jpZg6' },
      { name: 'Палац графів Шернборнів', description: 'Мисливський палац', link: 'https://maps.app.goo.gl/zJTPP5pkmaMCkJYh8' },
      { name: 'Ужгородський замок', description: 'Замок на замковій горі', link: 'https://maps.app.goo.gl/5NxiqBfYU6fMGEmo9' },
    ],
  },
];

const foodDelivery = [
  { name: 'Царська гора', link: '#' },
  { name: 'Mishelles Travel House', link: '#' },
  { name: 'Фортуна', link: 'https://www.instagram.com/fortuna_restaurant_and_hotel/' },
  { name: 'Доставка суші', link: 'https://www.instagram.com/sushi.vid.anet/' },
];

const Attractions = () => {
  return (
    <section id="attractions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Місця, які варто відвідати
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Навколо садиби розташовані найкращі туристичні локації Закарпаття
          </p>
        </div>

        {/* Featured Attractions with Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {attractionCategories
            .filter((cat) => cat.image)
            .map((category, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden shadow-xl h-80 group"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                  <div className="space-y-2">
                    {category.attractions.slice(0, 3).map((attr, i) => (
                      <div key={i} className="flex items-start">
                        <MapPin className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <span className="text-white font-medium">{attr.name}</span>
                          <span className="text-white/70 text-sm ml-2">
                            {attr.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {attractionCategories
            .filter((cat) => !cat.image)
            .map((category, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 text-green-700 mr-2" />
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.attractions.map((attr, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium">{attr.name}</p>
                        <p className="text-gray-500 text-sm">{attr.description}</p>
                      </div>
                      {attr.link && (
                        <a
                          href={attr.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-700 ml-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Food Delivery */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Їжа з доставкою
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {foodDelivery.map((place, idx) => (
              <a
                key={idx}
                href={place.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-50 text-green-800 px-6 py-3 rounded-full font-medium hover:bg-green-100 transition-colors flex items-center"
              >
                {place.name}
                {place.link !== '#' && (
                  <ExternalLink className="w-4 h-4 ml-2" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attractions;
