
import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-neo-background">
      <Banner />
      <Navigation />
      <main>{children}</main>
      <footer className="bg-neo-primary text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="neo-h3 mb-4">Contact Information</div>
          <p className="neo-body mb-2">Email: icaisd.conference@gmail.com</p>
          <p className="neo-caption">
            © 2025 ICAISD-2025. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
