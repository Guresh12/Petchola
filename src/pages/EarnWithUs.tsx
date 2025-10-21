import { DollarSign, Shield, Clock, TrendingUp, CheckCircle, Phone } from 'lucide-react';

export default function EarnWithUs() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Consistent Monthly Income',
      description: 'Receive guaranteed monthly payments directly to your account. No hassle, no delays.',
    },
    {
      icon: Shield,
      title: 'Full Insurance Coverage',
      description: 'Your vehicle is fully insured while in our fleet. Complete protection and peace of mind.',
    },
    {
      icon: Clock,
      title: 'Professional Maintenance',
      description: 'We handle all servicing, repairs, and maintenance. Your car stays in excellent condition.',
    },
    {
      icon: TrendingUp,
      title: 'Maximize Your Asset',
      description: 'Turn your idle vehicle into a profitable asset. Earn while your car works for you.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Contact Us',
      description: 'Reach out via WhatsApp or phone to express your interest in listing your vehicle.',
    },
    {
      number: '02',
      title: 'Vehicle Inspection',
      description: 'We conduct a thorough inspection to ensure your car meets our quality standards.',
    },
    {
      number: '03',
      title: 'Agreement & Documentation',
      description: 'Sign a transparent agreement outlining terms, rates, and responsibilities.',
    },
    {
      number: '04',
      title: 'Start Earning',
      description: 'Your car joins our fleet and you start receiving monthly payments immediately.',
    },
  ];

  const requirements = [
    'Vehicle must be in good working condition',
    'Valid registration and insurance documents',
    'Vehicle age: preferably under 10 years',
    'Clean interior and exterior',
    'All necessary documentation in order',
    'Regular service records available',
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
        <div className="absolute inset-0 bg-primary/85"></div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Earn Monthly Income from Your Car</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Join our fleet and let your vehicle generate consistent income while we handle everything
          </p>
          <a
            href="https://wa.me/254728112488"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-all transform hover:scale-105"
          >
            <Phone size={20} />
            <span>Join Our Fleet</span>
          </a>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Why List Your Car With Us?</h2>
            <p className="text-gray-600 text-lg">Experience hassle-free vehicle management and guaranteed returns</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg">Simple steps to start earning from your vehicle</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-accent/10 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-accent/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Vehicle Requirements</h2>
              <p className="text-gray-700 mb-6">
                To ensure the best experience for our clients and protect your investment,
                we have specific requirements for vehicles joining our fleet.
              </p>
              <div className="space-y-3">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Earnings Potential</h3>
              <div className="space-y-6">
                <div className="border-b border-white/20 pb-4">
                  <p className="text-gray-300 mb-2">Compact Cars</p>
                  <p className="text-3xl font-bold text-accent">KSh 40,000 - 60,000</p>
                  <p className="text-sm text-gray-400">per month</p>
                </div>
                <div className="border-b border-white/20 pb-4">
                  <p className="text-gray-300 mb-2">Sedans</p>
                  <p className="text-3xl font-bold text-accent">KSh 60,000 - 90,000</p>
                  <p className="text-sm text-gray-400">per month</p>
                </div>
                <div className="border-b border-white/20 pb-4">
                  <p className="text-gray-300 mb-2">SUVs</p>
                  <p className="text-3xl font-bold text-accent">KSh 100,000 - 150,000</p>
                  <p className="text-sm text-gray-400">per month</p>
                </div>
                <div>
                  <p className="text-gray-300 mb-2">Luxury Vehicles</p>
                  <p className="text-3xl font-bold text-accent">KSh 150,000+</p>
                  <p className="text-sm text-gray-400">per month</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-6">
                * Earnings vary based on vehicle condition, model, and market demand
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Earning?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of car owners who trust us to manage their vehicles and generate monthly income.
          </p>
          <a
            href="https://wa.me/254728112488"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-all transform hover:scale-105"
          >
            <Phone size={20} />
            <span>List Your Car Today</span>
          </a>
        </div>
      </section>
    </div>
  );
}
