
import { Link } from 'react-router-dom';
import { Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'B1-38/1 New Santoshpur, P.O, Bolck B, Santoshpur, Maheshtala, West Bengal 700142' },
    { icon: Phone, text: '6289473636' },
    { icon: Mail, text: 'dhp.kolkata1@gmail.com' },
  ];

  return (
    <footer className="bg-footer-bg text-footer-text-light">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <Logo />
              <span className="text-lg font-bold text-white">KDMSH Hospital</span>
            </Link>
            <p className="text-sm text-footer-text">
              Your health is our priority. Providing excellent care since 2019.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <item.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-footer-text hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-footer-text hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-footer-text">&copy; {new Date().getFullYear()} KDMSH Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
