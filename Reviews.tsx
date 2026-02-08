import { Star, Quote } from 'lucide-react';

interface Review {
  text: string;
  author: string;
  rating: number;
}

const reviews: Review[] = [
  {
    text: 'Дуже затишно і неймовірна природа! Господарі дуже привітні, все чисто і комфортно. Обов\'язково повернемось ще!',
    author: 'Олена К.',
    rating: 5,
  },
  {
    text: 'Чисто, привітні господарі, повернемось ще. Вид з вікна просто захоплює дух!',
    author: 'Іван М.',
    rating: 5,
  },
  {
    text: 'Неймовірні краєвиди і затишні умови, обов\'язково повернемось ще! Чан із джакузі - це щось неймовірне.',
    author: 'Марія П.',
    rating: 5,
  },
  {
    text: 'Відпочинок на вищому рівні! Прекрасна локація, зручні номери, привітні господарі. Рекомендую всім!',
    author: 'Андрій С.',
    rating: 5,
  },
  {
    text: 'Чудове місце для відпочинку з родиною. Діти були в захваті від природи та квадроциклів.',
    author: 'Наталія В.',
    rating: 5,
  },
  {
    text: 'Найкраще місце в Карпатах! Затишно, тепло, смачно. Дякуємо за незабутній відпочинок!',
    author: 'Петро І.',
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Відгуки наших гостей
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Що кажуть про нас ті, хто вже відпочив у садибі "Кичера"
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-green-600 mr-2" />
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>
              <p className="text-gray-900 font-semibold">{review.author}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://g.page/r/Cb1KcCz-mV6OEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition-colors"
          >
            <Star className="w-5 h-5 mr-2" />
            Залишити відгук
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
