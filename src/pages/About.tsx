import { Target, Heart, Award, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize customer satisfaction in every interaction and service delivery.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in vehicle quality and service delivery.',
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'Transparent operations and honest communication with all our stakeholders.',
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'Consistent, dependable service that our clients can trust every time.',
    },
  ];

  return (
    <div className="pt-24">
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl font-bold text-primary mb-6">About Petchola Ventures</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Nairobi's trusted car hire experts, providing exceptional service since our inception
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Petchola"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Petchola Ventures was founded with a simple mission: to provide reliable,
                professional car hire services while helping car owners generate consistent income
                through expert fleet management.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Based in Nairobi, Kenya, we have grown to become one of the most trusted names in
                the car hire industry. Our commitment to quality, transparency, and customer
                satisfaction sets us apart.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we serve hundreds of satisfied clients ranging from corporate organizations
                to individuals, while managing a diverse fleet of well-maintained vehicles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-background p-8 rounded-lg">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Target className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional car hire and management services that exceed customer
                expectations while creating sustainable income opportunities for car owners through
                professional fleet management and transparent operations.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Award className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be East Africa's leading car hire and fleet management company, recognized for
                innovation, reliability, and creating mutual value for both clients and vehicle
                owners through cutting-edge technology and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">
              Why Choose Petchola Ventures?
            </h2>
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Professional Fleet Management</h3>
                <p className="text-gray-700">
                  Our experienced team ensures every vehicle in our fleet is maintained to the
                  highest standards, providing you with safe, reliable transportation every time.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Comprehensive Insurance Coverage</h3>
                <p className="text-gray-700">
                  All our vehicles are fully insured, giving you peace of mind whether you're
                  renting a car or listing your vehicle with us.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">24/7 Customer Support</h3>
                <p className="text-gray-700">
                  Our dedicated support team is available round the clock to assist you with
                  bookings, inquiries, or any roadside assistance you may need.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Transparent Pricing</h3>
                <p className="text-gray-700">
                  No hidden charges, no surprises. We believe in honest, transparent pricing that
                  gives you the best value for your money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
