import { Car, User, Heart, Plane, Briefcase, Shield } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const services = [
    {
      icon: Car,
      title: 'Self-Drive Car Hire',
      description: 'Enjoy the freedom of driving yourself with our well-maintained fleet. Perfect for travelers and locals who prefer independence.',
    },
    {
      icon: User,
      title: 'Chauffeur Services',
      description: 'Professional drivers at your service. Sit back, relax, and let our experienced chauffeurs handle your transportation needs.',
    },
    {
      icon: Heart,
      title: 'Wedding Car Hire',
      description: 'Make your special day unforgettable with our premium wedding cars. Elegant vehicles for the most important day of your life.',
    },
    {
      icon: Plane,
      title: 'Airport Transfers',
      description: '24/7 reliable airport pickup and drop-off services. Punctual, comfortable, and stress-free travel to and from the airport.',
    },
    {
      icon: Briefcase,
      title: 'Corporate Hire',
      description: 'Professional transportation solutions for businesses. Fleet options for executives, events, and long-term corporate needs.',
    },
    {
      icon: Shield,
      title: 'Fleet Management',
      description: 'Let us manage your vehicle and earn monthly income. Professional maintenance, insurance, and reliable returns guaranteed.',
    },
  ];

  return (
    <div className="pt-24">
      <section
        className="relative py-20 text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive car hire and management solutions tailored to your needs
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg border-2 border-gray-200 hover:border-accent transition-colors">
              <h3 className="text-2xl font-bold text-primary mb-2">Daily Hire</h3>
              <p className="text-accent font-semibold text-xl mb-4">From KSh 3,500/day</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>24-hour rental period</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Comprehensive insurance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>24/7 roadside assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Free delivery within Nairobi</span>
                </li>
              </ul>
              <a
                href="https://wa.me/254728112488"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-accent text-primary px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors"
              >
                Book Now
              </a>
            </div>

            <div className="bg-primary p-8 rounded-lg border-2 border-accent transform lg:scale-105 shadow-xl">
              <div className="bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Weekly Hire</h3>
              <p className="text-accent font-semibold text-xl mb-4">From KSh 22,000/week</p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>7-day rental period</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Comprehensive insurance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>24/7 roadside assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Free delivery & pickup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Save up to 20%</span>
                </li>
              </ul>
              <a
                href="https://wa.me/254728112488"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-accent text-primary px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors"
              >
                Book Now
              </a>
            </div>

            <div className="bg-background p-8 rounded-lg border-2 border-gray-200 hover:border-accent transition-colors">
              <h3 className="text-2xl font-bold text-primary mb-2">Monthly Hire</h3>
              <p className="text-accent font-semibold text-xl mb-4">From KSh 80,000/month</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>30-day rental period</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Comprehensive insurance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>24/7 roadside assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Free delivery & pickup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Save up to 35%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
              <a
                href="https://wa.me/254728112488"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-accent text-primary px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="flex items-start space-x-3 bg-white p-4 rounded-lg">
              <Shield className="text-accent flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-primary mb-1">Full Insurance</h4>
                <p className="text-sm text-gray-600">Comprehensive coverage for peace of mind</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white p-4 rounded-lg">
              <Car className="text-accent flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-primary mb-1">Well-Maintained Vehicles</h4>
                <p className="text-sm text-gray-600">Regular servicing and quality checks</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white p-4 rounded-lg">
              <User className="text-accent flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-primary mb-1">Professional Staff</h4>
                <p className="text-sm text-gray-600">Experienced and courteous service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
