import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Constellation", path: "/constellation" },
        { name: "Timeline", path: "/timeline" },
        { name: "Letter", path: "/letter" },
        { name: "Stars", path: "/stars" },
        { name: "Gallery", path: "/gallery" },
        { name: "Forever", path: "/forever" },
        { name: "Nicknames", path: "/nicknames" },
    ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled 
        ? "bg-midnight-blue/90 backdrop-blur-md shadow-lg border-b border-starlight-purple/20" 
        : "bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="text-gold-accent text-2xl font-bold text-glow hover:scale-105 transition-transform whitespace-nowrap">
            <Sparkles className="w-4 h-4 inline mr-1" /> To Srinithi
          </Link>

          {/* Navigation Links (desktop) */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative px-3 py-2 text-moon-glow font-medium transition-all duration-300 hover:text-gold-accent hover:scale-105",
                  location.pathname === item.path 
                    ? "text-gold-accent text-glow" 
                    : "hover:text-star-glow"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-accent rounded-full shadow-gold" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold-accent hover:text-starlight-purple transition-colors"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Open navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-midnight-blue/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "block w-full text-center py-4 text-2xl font-romantic text-gold-accent hover:text-cloud-pink transition-colors duration-300",
                  location.pathname === item.path ? "text-cloud-pink" : ""
                )}
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;