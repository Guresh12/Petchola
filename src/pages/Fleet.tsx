import { useState } from 'react';
import CarCard from '../components/CarCard';

export default function Fleet() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sedan', 'SUV', 'Luxury', 'Compact'];

  const cars = [
    {
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'Toyota Premio',
      category: 'Sedan',
      seats: 5,
      transmission: 'Auto',
      pricePerDay: 4500,
    },
    {
      image: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'Toyota Fielder',
      category: 'Compact',
      seats: 5,
      transmission: 'Auto',
      pricePerDay: 3500,
    },
    {
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'Nissan X-Trail',
      category: 'SUV',
      seats: 7,
      transmission: 'Auto',
      pricePerDay: 8000,
    },
    {
      image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'Toyota Prado',
      category: 'SUV',
      seats: 7,
      transmission: 'Auto',
      pricePerDay: 12000,
    },
    {
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'Mercedes E-Class',
      category: 'Luxury',
      seats: 5,
      transmission: 'Auto',
      pricePerDay: 15000,
    },
    {
      image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'BMW 5 Series',
      category: 'Luxury',
      seats: 5,
      transmission: 'Auto',
      pricePerDay: 16000,
    },
    {
      image: 'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'Toyota Vitz',
      category: 'Compact',
      seats: 5,
      transmission: 'Auto',
      pricePerDay: 3000,
    },
    {
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'Honda Civic',
      category: 'Sedan',
      seats: 5,
      transmission: 'Auto',
      pricePerDay: 5000,
    },
    {
      image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'Range Rover Sport',
      category: 'Luxury',
      seats: 7,
      transmission: 'Auto',
      pricePerDay: 20000,
    },
  ];

  const filteredCars = selectedCategory === 'All'
    ? cars
    : cars.filter(car => car.category === selectedCategory);

  return (
    <div className="pt-24">
      <section
        className="relative py-20 text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Fleet</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Choose from our diverse range of well-maintained, reliable vehicles
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-accent text-primary'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car, index) => (
              <CarCard key={index} {...car} />
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No vehicles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            We have more vehicles available. Contact us directly to discuss your specific requirements.
          </p>
          <a
            href="https://wa.me/254728112488"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-primary px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all transform hover:scale-105"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
