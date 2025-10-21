import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Fleet', path: 'fleet' },
    { name: 'Earn With Us', path: 'earn' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg py-3' : 'bg-primary/95 py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-xl">P</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl leading-tight">Petchola Ventures</h1>
              <p className="text-accent text-xs">Nairobi Car Hire Experts</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => onNavigate(link.path)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === link.path
                    ? 'text-accent'
                    : 'text-white hover:text-accent'
                }`}
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://wa.me/254728112488"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-primary px-6 py-2 rounded-full font-semibold hover:bg-accent/90 transition-all flex items-center space-x-2"
            >
              <Phone size={16} />
              <span>Book Now</span>
            </a>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  onNavigate(link.path);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 transition-colors ${
                  currentPage === link.path
                    ? 'text-accent bg-white/10'
                    : 'text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://wa.me/254728112488"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-accent text-primary px-6 py-3 rounded-full font-semibold text-center"
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
