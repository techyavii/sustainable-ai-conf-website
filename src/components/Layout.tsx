
import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import ImportantDatesModal from './ImportantDatesModal';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Banner />
      <Navigation />
      <ImportantDatesModal />
      <main>{children}</main>
      <footer className="bg-sustainable-green text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Conference Info */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-inter font-bold mb-4">ICAISD-2025</h3>
              <p className="text-gray-200 mb-4 font-ibm-plex">
                International Conference on Artificial Intelligence for Sustainable Development
              </p>
              <p className="text-gray-200 mb-4 font-ibm-plex">
                October 25-26th, 2025 | Online Mode via ZOOM
              </p>
              <div className="flex items-center text-gray-200 mb-2 font-ibm-plex">
                <Mail className="h-4 w-4 mr-2" />
                <span>icaisd.conference@gmail.com</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-inter font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-200 font-ibm-plex">
                <li><a href="/call-for-papers" className="hover:text-accent-blue transition-colors">Call for Papers</a></li>
                <li><a href="/paper-submission" className="hover:text-accent-blue transition-colors">Paper Submission</a></li>
                <li><a href="/registration" className="hover:text-accent-blue transition-colors">Registration</a></li>
                <li><a href="/committee" className="hover:text-accent-blue transition-colors">Committee</a></li>
                <li><a href="/venue" className="hover:text-accent-blue transition-colors">Venue</a></li>
              </ul>
            </div>

            {/* Important Info */}
            <div>
              <h4 className="text-lg font-inter font-semibold mb-4">Publication</h4>
              <div className="text-gray-200 font-ibm-plex">
                <p className="mb-2">SCOPUS Indexed Proceedings</p>
                <p className="mb-2">SCI Journals</p>
                <p className="mb-4">INSPEC, Google Scholar</p>
                <a 
                  href="https://www.adroidcms.com/submit-paper/ICAISD2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent-blue hover:text-white transition-colors"
                >
                  Submit Paper <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-200 text-sm font-ibm-plex">
                © 2025 ICAISD-2025. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="/privacy-policy" className="text-gray-200 hover:text-accent-blue transition-colors text-sm font-ibm-plex">
                  Privacy Policy
                </a>
                <a href="/downloads" className="text-gray-200 hover:text-accent-blue transition-colors text-sm font-ibm-plex">
                  Downloads
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
