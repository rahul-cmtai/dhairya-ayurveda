import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "/public/images/logoayurveda.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-4"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Dhairya Ayurveda"
            className="h-16 w-30 object-contain transform scale-125"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-ayurveda-dark focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/shop" label="Shop" />
          <NavItem to="/contact" label="Contact" />
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col py-4">
            <MobileNavItem to="/" label="Home" onClick={() => setIsMenuOpen(false)} />
            <MobileNavItem to="/about" label="About" onClick={() => setIsMenuOpen(false)} />
            <MobileNavItem to="/shop" label="Shop" onClick={() => setIsMenuOpen(false)} />
            <MobileNavItem to="/contact" label="Contact" onClick={() => setIsMenuOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ to, label }: { to: string; label: string }) => {
  return (
    <Link
      to={to}
      className="text-ayurveda-dark font-bold text-lg relative transition duration-300 hover:text-ayurveda group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ayurveda transition-all duration-300 group-hover:w-full" />
    </Link>
  );
};

const MobileNavItem = ({ to, label, onClick }: { to: string; label: string; onClick: () => void }) => {
  return (
    <Link
      to={to}
      className="text-ayurveda-dark font-bold text-lg py-3 px-6 border-b border-gray-100 hover:bg-gray-50"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Navbar;
