
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPapersOpen, setIsPapersOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-sustainable-green font-inter font-bold text-xl">
              ICAISD-2025
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-slate-gray hover:text-sustainable-green transition-colors font-inter font-medium">
              Home
            </a>
            
            {/* Papers Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsPapersOpen(!isPapersOpen)}
                className="text-slate-gray hover:text-sustainable-green transition-colors font-inter font-medium flex items-center space-x-1"
              >
                <span>Papers</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isPapersOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isPapersOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <a
                    href="/call-for-papers"
                    className="block px-4 py-2 text-slate-gray hover:bg-soft-sand hover:text-sustainable-green transition-colors font-inter"
                  >
                    Call for Papers
                  </a>
                  <a
                    href="/paper-submission"
                    className="block px-4 py-2 text-slate-gray hover:bg-soft-sand hover:text-sustainable-green transition-colors font-inter"
                  >
                    Paper Submission
                  </a>
                </div>
              )}
            </div>

            <a href="/registration" className="text-slate-gray hover:text-sustainable-green transition-colors font-inter font-medium">
              Registration
            </a>
            <a href="/publications" className="text-slate-gray hover:text-sustainable-green transition-colors font-inter font-medium">
              Publications
            </a>
            <a href="/committee" className="text-slate-gray hover:text-sustainable-green transition-colors font-inter font-medium">
              Committee
            </a>
            <a href="/venue" className="text-slate-gray hover:text-sustainable-green transition-colors font-inter font-medium">
              Venue
            </a>
            <a href="/downloads" className="text-slate-gray hover:text-sustainable-green transition-colors font-inter font-medium">
              Downloads
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-gray hover:text-sustainable-green transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              <a href="/" className="text-slate-gray hover:text-sustainable-green transition-colors font-inter font-medium py-2">
                Home
              </a>
              <button
                onClick={() => setIsPapersOpen(!isPapersOpen)}
                className="text-slate-gray hover:text-sustainable-green transition-colors font-inter font-medium flex items-center justify-between py-2"
              >
                <span>Papers</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isPapersOpen ? 'rotate-180' : ''}`} />
              </button>
              {isPapersOpen && (
                <div className="pl-4 space-y-2">
                  <a href="/call-for-papers" className="block text-slate-gray hover:text-sustainable-green transition-colors font-inter py-1">
                    Call for Papers
                  </a>
                  <a href="/paper-submission" className="block text-slate-gray hover:text-sustainable-green transition-colors font-inter py-1">
                    Paper Submission
                  </a>
                </div>
              )}
              <a href="/registration" className="text-slate-gray hover:text-sustainable-green transition-colors font-inter font-medium py-2">
                Registration
              </a>
              <a href="/publications" className="text-slate-gray hover:text-sustainable-green transition-colors font-inter font-medium py-2">
                Publications
              </a>
              <a href="/committee" className="text-slate-gray hover:text-sustainable-green transition-colors font-inter font-medium py-2">
                Committee
              </a>
              <a href="/venue" className="text-slate-gray hover:text-sustainable-green transition-colors font-inter font-medium py-2">
                Venue
              </a>
              <a href="/downloads" className="text-slate-gray hover:text-sustainable-green transition-colors font-inter font-medium py-2">
                Downloads
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
