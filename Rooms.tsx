import { useState } from 'react';
import { Users, Bed, Mountain, Wifi, Car, Flame, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface Room {
  id: number;
  name: string;
  description: string;
  image: string;
  guests: number;
  beds: string;
  features: string[];
  price: string;
}

const rooms: Room[] = [
  {
    id: 1,
    name: 'Кичера Еко',
    description: 'Чудовий вибір для усамітнення з природою. Екологічно чистий номер з натуральних матеріалів.',
    image: '/images/room-eco.jpg',
    guests: 2,
    beds: '1 двоспальне ліжко',
    features: ['Вид на гори', 'Wi-Fi', 'Опалення'],
    price: 'від 1500 грн/ніч',
  },
  {
    id: 2,
    name: 'Двокімнатний з видом на гори',
    description: 'Краєвиди, які вас зачарують. Просторий номер з окремою вітальнею та спальнею.',
    image: '/images/room-mountain-view.jpg',
    guests: 4,
    beds: '2 двоспальні ліжка',
    features: ['Панорамний вид', 'Камін', 'Wi-Fi', 'Телевізор'],
    price: 'від 2500 грн/ніч',
  },
  {
    id: 3,
    name: 'Апартаменти Делюкс',
    description: 'Гарно підходить для великої компанії. Розкішні апартаменти з усіма зручностями.',
    image: '/images/room-deluxe.jpg',
    guests: 6,
    beds: '3 двоспальні ліжка',
    features: ['Джакузі', 'Камін', 'Повна кухня', 'Wi-Fi', 'Тераса'],
    price: 'від 4000 грн/ніч',
  },
  {
    id: 4,
    name: 'Будиночок з двома спальнями',
    description: 'Затишний та світлий будиночок для спокійного відпочинку сімєю або компанією.',
    image: '/images/room-cottage.jpg',
    guests: 6,
    beds: '2 двоспальні + 2 односпальні',
    features: ['Окремий вхід', 'Кухня', 'Вітальня', 'Wi-Fi'],
    price: 'від 3500 грн/ніч',
  },
  {
    id: 5,
    name: 'Затишний номер для двох',
    description: 'Двомісний номер з неймовірними краєвидами. Ідеальний для романтичного відпочинку.',
    image: '/images/room-couple.jpg',
    guests: 2,
    beds: '1 двоспальне ліжко',
    features: ['Вид на гори', 'Камін', 'Wi-Fi'],
    price: 'від 1800 грн/ніч',
  },
];

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Наші номери
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Оберіть ідеальний номер для вашого відпочинку в Карпатах
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="room-card bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover img-zoom"
                />
                <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {room.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{room.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{room.description}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {room.guests} гостей
                  </div>
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    {room.beds}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {room.features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                  {room.features.length > 3 && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      +{room.features.length - 3}
                    </span>
                  )}
                </div>

                <Button
                  onClick={() => setSelectedRoom(room)}
                  className="w-full bg-green-700 hover:bg-green-800"
                >
                  Детальніше
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Details Dialog */}
      <Dialog open={!!selectedRoom} onOpenChange={() => setSelectedRoom(null)}>
        {selectedRoom && (
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedRoom.name}</DialogTitle>
              <DialogDescription>{selectedRoom.description}</DialogDescription>
            </DialogHeader>

            <div className="mt-4">
              <img
                src={selectedRoom.image}
                alt={selectedRoom.name}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 mr-2 text-green-700" />
                  <span>До {selectedRoom.guests} гостей</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Bed className="w-5 h-5 mr-2 text-green-700" />
                  <span>{selectedRoom.beds}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Зручності:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedRoom.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      {feature.includes('Wi-Fi') && <Wifi className="w-4 h-4 mr-2 text-green-600" />}
                      {feature.includes('Камін') && <Flame className="w-4 h-4 mr-2 text-green-600" />}
                      {feature.includes('вид') && <Mountain className="w-4 h-4 mr-2 text-green-600" />}
                      {feature.includes('Паркінг') && <Car className="w-4 h-4 mr-2 text-green-600" />}
                      {!['Wi-Fi', 'Камін', 'вид', 'Паркінг'].some(f => feature.includes(f)) && (
                        <div className="w-4 h-4 mr-2 rounded-full bg-green-600" />
                      )}
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <span className="text-gray-500">Ціна:</span>
                  <span className="text-2xl font-bold text-green-700 ml-2">
                    {selectedRoom.price}
                  </span>
                </div>
                <a href="tel:+380677659478">
                  <Button className="bg-green-700 hover:bg-green-800">
                    <Phone className="w-4 h-4 mr-2" />
                    Забронювати
                  </Button>
                </a>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Rooms;
