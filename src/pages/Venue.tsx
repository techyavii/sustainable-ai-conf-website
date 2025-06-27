
import React from 'react';
import Layout from '../components/Layout';
import { Video, Wifi, Globe, Users, MapPin, Building } from 'lucide-react';

const Venue = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-inter font-bold text-sustainable-green mb-4">Conference Venue</h1>
          <p className="text-lg text-slate-gray font-ibm-plex">Join us in Hybrid Mode for ICAISD-2025</p>
        </div>

        <div className="bg-gradient-to-br from-soft-sand to-white p-8 rounded-lg border border-gray-200 mb-12">
          <div className="text-center">
            <div className="flex justify-center items-center gap-8 mb-6">
              <Video className="h-16 w-16 text-accent-blue" />
              <div className="text-2xl font-inter font-bold text-sustainable-green">+</div>
              <Building className="h-16 w-16 text-sustainable-green" />
            </div>
            <h2 className="text-3xl font-inter font-bold text-sustainable-green mb-4">HYBRID MODE</h2>
            <h3 className="text-2xl font-inter font-semibold text-accent-blue mb-6">Online via ZOOM + Physical Venue</h3>
            <p className="text-lg text-slate-gray font-ibm-plex max-w-3xl mx-auto">
              ICAISD-2025 will be conducted in hybrid mode, allowing participants to join either online via ZOOM 
              or attend physically at Jaypee University Anoopshahr, UP, India.
            </p>
          </div>
        </div>

        {/* Online and Physical Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Online Option */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="text-center mb-6">
              <Video className="h-16 w-16 text-accent-blue mx-auto mb-4" />
              <h3 className="text-2xl font-inter font-bold text-accent-blue mb-2">Online Participation</h3>
              <p className="text-slate-gray font-ibm-plex">Join from anywhere via ZOOM</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-sustainable-green mr-3" />
                <span className="text-slate-gray font-ibm-plex">Global access from any location</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-sustainable-green mr-3" />
                <span className="text-slate-gray font-ibm-plex">Interactive Q&A sessions</span>
              </div>
              <div className="flex items-center">
                <Wifi className="h-5 w-5 text-sustainable-green mr-3" />
                <span className="text-slate-gray font-ibm-plex">HD video and crystal-clear audio</span>
              </div>
            </div>
          </div>

          {/* Physical Option */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="text-center mb-6">
              <Building className="h-16 w-16 text-sustainable-green mx-auto mb-4" />
              <h3 className="text-2xl font-inter font-bold text-sustainable-green mb-2">Physical Attendance</h3>
              <p className="text-slate-gray font-ibm-plex">Join us at the university campus</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-accent-blue mr-3" />
                <span className="text-slate-gray font-ibm-plex">Jaypee University Anoopshahr</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-accent-blue mr-3" />
                <span className="text-slate-gray font-ibm-plex">Face-to-face networking</span>
              </div>
              <div className="flex items-center">
                <Building className="h-5 w-5 text-accent-blue mr-3" />
                <span className="text-slate-gray font-ibm-plex">Modern conference facilities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Physical Venue Details */}
        <div className="bg-soft-sand p-8 rounded-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-inter font-bold text-sustainable-green mb-6 text-center">Physical Venue Location</h2>
          <div className="text-center mb-6">
            <h3 className="text-xl font-inter font-semibold text-slate-gray mb-2">Jaypee University Anoopshahr</h3>
            <p className="text-slate-gray font-ibm-plex">Uttar Pradesh, India</p>
          </div>
          
          {/* Embedded Map */}
          <div className="flex justify-center mb-6">
            <div className="w-full max-w-4xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4320.971479376552!2d78.26226710000002!3d28.3392928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b48703a52c565%3A0xcdef6d1cc35b0542!2sJaypee%20University%20Anoopshahr%2C%20Bulandshahr!5e1!3m2!1sen!2sin!4v1750847143294!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Technical Requirements */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-inter font-bold text-sustainable-green mb-6">Technical Requirements for Online Participants</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-inter font-semibold text-slate-gray mb-4">Minimum Requirements:</h3>
              <ul className="space-y-2 text-slate-gray font-ibm-plex">
                <li>• Stable internet connection (minimum 1 Mbps)</li>
                <li>• Computer, tablet, or smartphone</li>
                <li>• ZOOM application (latest version)</li>
                <li>• Webcam and microphone for presentations</li>
                <li>• Updated web browser</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-inter font-semibold text-slate-gray mb-4">Recommended:</h3>
              <ul className="space-y-2 text-slate-gray font-ibm-plex">
                <li>• High-speed broadband connection</li>
                <li>• Desktop or laptop computer</li>
                <li>• External headphones/headset</li>
                <li>• Quiet environment for participation</li>
                <li>• Backup internet connection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Venue;
