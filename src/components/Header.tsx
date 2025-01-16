import { useState, useEffect } from 'react';
import { Container } from "./Container";
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import Button from "./Button";
import FadeIn from './FadeIn';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to ensure scroll is restored when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Store', href: '/store' },
    { id: 'mac', label: 'Mac', href: '/mac' },
    { id: 'ipad', label: 'iPad', href: '/ipad' },
    { id: 'iphone', label: 'iPhone', href: '/iphone' },
    { id: 'watch', label: 'Watch', href: '/watch' },
    { id: 'airpods', label: 'AirPods', href: '/airpods' },
    { id: 'tv', label: 'TV & Home', href: '/tv-home' },
    { id: 'entertainment', label: 'Entertainment', href: '/entertainment' },
    { id: 'accessories', label: 'Accessories', href: '/accessories' },
    { id: 'support', label: 'Support', href: '/support' }
  ];

  return (
    <>
      <header className="bg-backgoundContrast relative z-20 text-white">
        <Container className="flex items-center min-h-[--header-row-height] justify-between py-2">
          {/* Logo */}
          <a href="/" className="hover:opacity-80 transition-opacity">
            🍎 <span className="sr-only">Back to home page</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm hover:opacity-80 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="text-sm hover:opacity-80 transition-opacity">
              <Search className="w-5 h-5" />.
            </button>
            <button className="text-sm hover:opacity-80 transition-opacity">
              <ShoppingBag className="w-5 h-5" />.
            </button>
            <button 
              className="text-sm md:hidden hover:opacity-80 transition-opacity"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />.
            </button>
          </div>
        </Container>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-backgoundContrast z-50">
            <Container>
              <div className="flex justify-between items-center py-4">
                <a href="/" className="hover:opacity-80 transition-opacity">
                  🍎
                </a>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:opacity-80 transition-opacity"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-6 pt-4">
                {navLinks.map((link) => (
                  <FadeIn>
                    <a
                    key={link.id}
                    href={link.href}
                    className="text-2xl hover:opacity-80 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                  </FadeIn>
                ))}
              </nav>
            </Container>
          </div>
        )}
      </header>

      {/* Secondary Header - Hidden when mobile menu is open */}
      {!isMenuOpen && (
        <div className="bg-backgoundContrast z-20 sticky top-0 text-white text-xl">
          <Container className="flex items-center justify-between min-h-[--header-row-height]">
            <p className="text-xl font-medium">Apple TV+</p>
            <Button size="small" className="font-semibold">
              Stream Now
            </Button>
          </Container>
        </div>
      )}
    </>
  );
};

export default Header;