import { Car, Shield, Clock, DollarSign, Users, CheckCircle } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import CarCard from '../components/CarCard';
import Testimonial from '../components/Testimonial';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      icon: Car,
      title: 'Self-Drive & Chauffeur',
      description: 'Choose between self-drive freedom or professional chauffeur services for your comfort.',
    },
    {
      icon: Users,
      title: 'Weddings & Events',
      description: 'Make your special day memorable with our premium wedding and event car hire.',
    },
    {
      icon: Clock,
      title: 'Airport Transfers',
      description: '24/7 reliable airport pickup and drop-off services with professional drivers.',
    },
    {
      icon: DollarSign,
      title: 'Earn Monthly',
      description: 'List your car with us and earn consistent monthly income through professional management.',
    },
  ];

  const featuredCars = [
    {
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'Toyota Premio',
      category: 'Sedan',
      seats: 5,
      transmission: 'Auto',
      pricePerDay: 4500,
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
  ];

  const testimonials = [
    {
      name: 'James Mwangi',
      role: 'Business Executive',
      content: 'Exceptional service! The car was immaculate and the booking process was seamless. Highly recommended for corporate travel.',
      rating: 5,
    },
    {
      name: 'Sarah Kamau',
      role: 'Wedding Client',
      content: 'Petchola made our wedding day perfect with their beautiful cars and professional service. Thank you!',
      rating: 5,
    },
    {
      name: 'David Omondi',
      role: 'Car Owner',
      content: 'I have been earning consistent monthly income since I listed my car with Petchola. Great management!',
      rating: 5,
    },
  ];

  return (
    <div>
      <section
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Reliable Car Hire & Management in Kenya
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Self-drive, Chauffeur, Wedding & Corporate Hire
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://wa.me/254728112488"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-all transform hover:scale-105"
            >
              Book a Car
            </a>
            <button
              onClick={() => onNavigate('earn')}
              className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              List Your Car
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Petchola Ventures?</h2>
            <p className="text-gray-600 text-lg">Your trusted partner for car hire and management in Nairobi</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">We Manage, You Earn</h2>
              <p className="text-gray-700 text-lg mb-6">
                Petchola Ventures is your premier car hire and management company in Nairobi, Kenya.
                We offer professional services for both clients seeking reliable transportation and
                car owners looking to generate monthly income.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-primary">Professional Management</h4>
                    <p className="text-gray-600">Expert fleet management and maintenance services</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-primary">Reliable Service</h4>
                    <p className="text-gray-600">24/7 customer support and roadside assistance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-primary">Competitive Rates</h4>
                    <p className="text-gray-600">Affordable pricing with no hidden charges</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all"
              >
                Learn More
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Car fleet"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-primary p-6 rounded-lg shadow-lg">
                <Shield size={40} className="mb-2" />
                <p className="font-bold text-2xl">100%</p>
                <p className="text-sm">Insured Fleet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Featured Fleet</h2>
            <p className="text-gray-600 text-lg">Choose from our wide range of well-maintained vehicles</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <CarCard key={index} {...car} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('fleet')}
              className="bg-accent text-primary px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all"
            >
              View All Vehicles
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg">Trusted by hundreds of satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Petchola Ventures Today</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you need a car or want to earn from your vehicle, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://wa.me/254728112488"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-all transform hover:scale-105"
            >
              Contact Us on WhatsApp
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
