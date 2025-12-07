import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import MatrixRain from './MatrixRain';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 animate-gradient bg-[length:200%_auto]"></div>
      <MatrixRain />
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-0 group">
            <img
              src="/aetheropslogo.png"
              alt="AetherOps"
              className="h-36 w-auto cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-6 mt-4 animate-pulse"
              onClick={() => onNavigate('home')}
            />
            <div className="flex flex-col items-start animate-fadeIn">
              <h1
                className="text-2xl font-bold text-white tracking-wide cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => onNavigate('home')}
              >
                AetherOps
              </h1>
              <p className="text-white text-xs tracking-wider mt-1 transition-all duration-300 group-hover:text-white/80">
                Automating Tomorrow's Infrastructure
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  currentPage === item.id
                    ? 'text-cyan-400'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
                {currentPage === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 shadow-neon"></span>
                )}
                <span className="absolute inset-0 rounded transition-all duration-300 hover:shadow-neon-hover"></span>
              </button>
            ))}
            <button
              onClick={() => onNavigate('contact')}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={18} />
            </button>
          </nav>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 border-t border-white/10 relative z-10">
          <nav className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400'
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('contact');
                setIsMenuOpen(false);
              }}
              className="w-full px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight size={18} />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
