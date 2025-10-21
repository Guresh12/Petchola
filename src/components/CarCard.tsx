import { Users, Briefcase } from 'lucide-react';

interface CarCardProps {
  image: string;
  name: string;
  category: string;
  seats: number;
  transmission: string;
  pricePerDay: number;
}

export default function CarCard({ image, name, category, seats, transmission, pricePerDay }: CarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs font-semibold text-accent uppercase">{category}</span>
        </div>
        <h3 className="text-xl font-bold text-primary mb-3">{name}</h3>
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-1">
            <Users size={16} />
            <span>{seats} Seats</span>
          </div>
          <div className="flex items-center space-x-1">
            <Briefcase size={16} />
            <span>{transmission}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">KSh {pricePerDay.toLocaleString()}</span>
            <span className="text-gray-500 text-sm">/day</span>
          </div>
          <a
            href="https://wa.me/254728112488"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-primary px-5 py-2 rounded-full font-semibold hover:bg-accent/90 transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
