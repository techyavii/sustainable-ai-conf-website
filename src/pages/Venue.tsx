
import React from 'react';
import Layout from '../components/Layout';
import { Video, Wifi, Globe, Users } from 'lucide-react';

const Venue = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-inter font-bold text-sustainable-green mb-4">Conference Venue</h1>
          <p className="text-lg text-slate-gray font-ibm-plex">Join us online for ICAISD-2025</p>
        </div>

        <div className="bg-gradient-to-br from-soft-sand to-white p-8 rounded-lg border border-gray-200 mb-12">
          <div className="text-center">
            <Video className="h-20 w-20 text-accent-blue mx-auto mb-6" />
            <h2 className="text-3xl font-inter font-bold text-sustainable-green mb-4">ONLINE MODE</h2>
            <h3 className="text-2xl font-inter font-semibold text-accent-blue mb-6">via ZOOM Platform</h3>
            <p className="text-lg text-slate-gray font-ibm-plex max-w-2xl mx-auto">
              ICAISD-2025 will be conducted entirely online using the ZOOM platform, 
              allowing participants from around the world to join seamlessly.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <Globe className="h-12 w-12 text-sustainable-green mx-auto mb-4" />
            <h3 className="text-xl font-inter font-semibold text-sustainable-green mb-3">Global Access</h3>
            <p className="text-slate-gray font-ibm-plex">
              Participate from anywhere in the world with just an internet connection
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <Users className="h-12 w-12 text-sustainable-green mx-auto mb-4" />
            <h3 className="text-xl font-inter font-semibold text-sustainable-green mb-3">Interactive Sessions</h3>
            <p className="text-slate-gray font-ibm-plex">
              Engage with speakers and attendees through Q&A and networking sessions
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <Wifi className="h-12 w-12 text-sustainable-green mx-auto mb-4" />
            <h3 className="text-xl font-inter font-semibold text-sustainable-green mb-3">High Quality</h3>
            <p className="text-slate-gray font-ibm-plex">
              Professional streaming with HD video and crystal-clear audio
            </p>
          </div>
        </div>

        <div className="bg-soft-sand p-8 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-inter font-bold text-sustainable-green mb-6">Technical Requirements</h2>
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
