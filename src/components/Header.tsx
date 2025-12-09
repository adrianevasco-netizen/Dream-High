import { Layers, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/f3ce49498134ab7d114c43224e1f1e3bfdd3d83d.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Name */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Dream High Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl text-gray-900">Dream High</h1>
              <p className="text-sm text-gray-600">Creative Digital Studio</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-teal-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-teal-600 transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-left text-gray-700 hover:text-teal-600 transition-colors py-2"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-gray-700 hover:text-teal-600 transition-colors py-2"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left text-gray-700 hover:text-teal-600 transition-colors py-2"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}