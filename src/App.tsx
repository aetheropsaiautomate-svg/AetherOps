import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    if (page === currentPage) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setShowMatrix(true);
    }, 100);

    setTimeout(() => {
      setCurrentPage(page);
    }, 400);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    setTimeout(() => {
      setShowMatrix(false);
    }, 900);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'portfolio':
        return <PortfolioPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  const generateMatrixColumns = () => {
    const columns = [];
    const columnCount = Math.min(Math.floor(window.innerWidth / 20), 60);

    for (let i = 0; i < columnCount; i++) {
      const characters = [];
      const charCount = Math.floor(Math.random() * 12) + 8;

      for (let j = 0; j < charCount; j++) {
        characters.push(Math.random() > 0.5 ? '1' : '0');
      }

      columns.push(
        <div
          key={i}
          className="matrix-column"
          style={{
            left: `${(i * 100) / columnCount}%`,
            animationDelay: `${Math.random() * 0.2}s`,
            animationDuration: `${0.4 + Math.random() * 0.3}s`
          }}
        >
          {characters.map((char, idx) => (
            <span
              key={idx}
              className="matrix-char"
              style={{
                animationDelay: `${idx * 0.02}s`
              }}
            >
              {char}
            </span>
          ))}
        </div>
      );
    }

    return columns;
  };

  return (
    <div className="min-h-screen relative">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="relative overflow-hidden">
        <div
          className={`transition-opacity duration-300 ease-in-out ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {renderPage()}
        </div>

        {showMatrix && (
          <div className="matrix-overlay transition-opacity duration-200">
            {generateMatrixColumns()}
            <div className="matrix-logo-container">
              <img
                src="/aetheropslogo.png"
                alt="AetherOps"
                className="matrix-logo"
              />
            </div>
          </div>
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
