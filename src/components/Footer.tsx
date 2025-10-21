import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Petchola Ventures</h3>
                <p className="text-accent text-xs">Nairobi Car Hire Experts</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Reliable car hire and management services in Kenya. Your journey, our priority.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Fleet', 'Earn With Us', 'Contact'].map((link, index) => (
                <li key={link}>
                  <button
                    onClick={() => onNavigate(['home', 'about', 'services', 'fleet', 'earn', 'contact'][index])}
                    className="text-gray-300 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-accent">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Self-Drive Car Hire</li>
              <li>Chauffeur Services</li>
              <li>Wedding Car Hire</li>
              <li>Airport Transfers</li>
              <li>Corporate Hire</li>
              <li>Fleet Management</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-accent">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+254728112488" className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors">
                <Phone size={16} />
                <span>+254 728 112 488</span>
              </a>
              <a href="mailto:info@petcholaventures.co.ke" className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors">
                <Mail size={16} />
                <span>info@petcholaventures.co.ke</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin size={16} />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Petchola Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
