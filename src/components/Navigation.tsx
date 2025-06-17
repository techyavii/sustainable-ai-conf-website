
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPapersDropdownOpen, setIsPapersDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Papers', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Call for Papers', path: '/call-for-papers' },
        { name: 'Paper Submission', path: '/paper-submission' }
      ]
    },
    { name: 'Registration', path: '/registration' },
    { name: 'Publications', path: '/publications' },
    { name: 'Committee', path: '/committee' },
    { name: 'Venue', path: '/venue' },
    { name: 'Downloads', path: '/downloads' }
  ];

  return (
    <nav className="bg-sustainable-green text-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-inter font-bold text-white hover:text-accent-blue transition-colors">
            ICAISD-2025
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsPapersDropdownOpen(true)}
                    onMouseLeave={() => setIsPapersDropdownOpen(false)}
                  >
                    <button className="text-sm font-inter font-medium text-white hover:text-accent-blue transition-colors flex items-center">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {isPapersDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-sustainable-green hover:bg-soft-sand transition-colors font-inter"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm font-inter font-medium transition-colors ${
                      isActive(item.path) 
                        ? 'text-accent-blue' 
                        : 'text-white hover:text-accent-blue'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-accent-blue transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-sustainable-green border-t border-gray-600">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button 
                        onClick={() => setIsPapersDropdownOpen(!isPapersDropdownOpen)}
                        className="w-full text-left text-sm font-inter font-medium text-white hover:text-accent-blue transition-colors flex items-center justify-between px-3 py-2"
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transform transition-transform ${isPapersDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isPapersDropdownOpen && (
                        <div className="pl-6 space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className="block px-3 py-2 text-sm text-white hover:text-accent-blue transition-colors font-inter"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-3 py-2 text-sm font-inter font-medium transition-colors ${
                        isActive(item.path) 
                          ? 'text-accent-blue' 
                          : 'text-white hover:text-accent-blue'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
