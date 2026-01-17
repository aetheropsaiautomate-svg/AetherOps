import { Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10 mt-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/aetheropslogo copy.png"
              alt="AetherOps"
              className="h-36 w-auto mb-4"
            />
            <p className="text-white/60 text-sm">
              Building systems that help businesses operate at the speed of automation.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-white/60 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-cyan-400 hover:bg-cyan-500/10 hover:shadow-neon-sm transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <div className="space-y-2 text-sm">
              <a href="mailto:hello@aetherops.com" className="flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors duration-300">
                <Mail size={16} />
                hello@aetherops.com
              </a>
              <a href="tel:+17252791465" className="flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors duration-300">
                <Phone size={16} />
                +1 (725) 279-1465
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © 2025 AetherOps — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
