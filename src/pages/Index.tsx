
import React from 'react';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel';
import Marquee from '../components/Marquee';
import { Calendar, Users, FileText } from 'lucide-react';

const Index = () => {
  const importantDates = [
    { event: "Paper Submission Deadline", date: "25th September 2025" },
    { event: "Acceptance Notification Due", date: "10th October 2025" },
    { event: "Registration Due", date: "30th September 2025" },
    { event: "Camera Ready Submission", date: "20th October 2025" },
    { event: "Conference Date", date: "25th October 2025" }
  ];

  return (
    <Layout>
      <div className="mb-8">
        <Carousel />
      </div>
      <Marquee />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Conference Info Section */}
        <section className="mb-16">
          <div className="bg-soft-sand rounded-lg p-8">
            <h2 className="text-3xl font-inter font-bold text-sustainable-green mb-4 text-center">ICAISD-2025 will be organised in Hybrid Mode</h2>
            <p className="text-2xl text-slate-gray font-ibm-plex text-center">
              Organized by Jaypee University Anoopshahr, UP, India in association with SAGE University, Indore, India
            </p>
          </div>
        </section>

        {/* About Section - Centered */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-inter font-bold text-sustainable-green mb-6">About the Conference</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 max-w-5xl mx-auto">
            <p className="text-lg text-slate-gray font-ibm-plex leading-relaxed text-left">
              ICAISD 2025 is organised by Jaypee University Anoopshahr, UP, India in association with SAGE University, Indore, India with the objective of bringing together innovative scientists, professors, research scholars, students and industrial experts in the field of Sciences, Computational Methods and Techniques to a common platform. All the accepted papers (after double blinded peer review) will be published in{' '}
              <a 
                href="https://conferenceseries.adroidjournals.com/index.php/ACSET" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-accent-blue hover:underline"
              >
                Adroid Conference Series
              </a>{' '}
              (Indexing: INSPEC, Google Scholar and other leading databases with a DOI Number); All books published in the series are submitted for consideration in SCOPUS) and some high-quality selected papers will be published in the SCOPUS indexed Proceedings.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="bg-sustainable-green text-white p-8 rounded-lg">
            <h2 className="text-3xl font-inter font-bold mb-4 text-white">Ready to Submit Your Paper?</h2>
            <p className="text-lg mb-6 font-ibm-plex text-white">Join researchers from around the world at ICAISD-2025</p>
            <a 
              href="https://www.adroidcms.com/submit-paper/ICAISD2025"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent-blue text-white px-8 py-3 rounded-lg font-inter font-semibold hover:bg-blue-600 transition-colors"
            >
              Submit Your Paper
            </a>
          </div>
        </section>

        {/* Important Dates */}
        <section className="">
          <h2 className="text-3xl font-inter font-bold text-sustainable-green mb-6 text-center">Important Dates</h2>
          <div className="bg-soft-sand p-8 rounded-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {importantDates.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                  <h3 className="text-lg font-inter font-semibold text-sustainable-green mb-2">{item.event}</h3>
                  <p className="text-accent-blue font-ibm-plex font-semibold">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
