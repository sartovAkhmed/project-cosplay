import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Главная" },
    { path: "/gallery", label: "Галерея" },
    { path: "/resources", label: "Ресурсы" },
    { path: "/events", label: "События" },
    { path: "/blog", label: "Блог" },
    { path: "/about", label: "О нас" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            {/* <Mask className="text-purple-600 w-8 h-8" /> */}
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              КосплейКультура
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-colors duration-200 hover:text-purple-600 ${
                    location.pathname === link.path
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Поиск"
            >
              <Search className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
            onClick={toggleMenu}
            aria-label="Открыть меню"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <div
        className={`md:hidden fixed inset-0 z-30 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-20 p-6">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium transition-colors duration-200 hover:text-purple-600 ${
                  location.pathname === link.path
                    ? "text-purple-600 dark:text-purple-400"
                    : "text-gray-700 dark:text-gray-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                setSearchOpen(!searchOpen);
                closeMenu();
              }}
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <Search className="w-5 h-5" />
              <span>Поиск</span>
            </button>
          </div>
        </div>
      </div>

      {/* Поисковая панель */}
      <div
        className={`fixed inset-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm flex items-start justify-center pt-32 transition-opacity duration-300 ${
          searchOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full max-w-2xl px-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Поиск косплеев, статей, событий..."
              className="w-full p-4 pl-12 text-lg border-b-2 border-purple-600 bg-transparent text-gray-900 dark:text-white focus:outline-none"
              autoFocus={searchOpen}
            />
            <Search className="absolute left-1 top-1/2 transform -translate-y-1/2 w-6 h-6 text-purple-600" />
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            >
              <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
