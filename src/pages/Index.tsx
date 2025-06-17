
import React from 'react';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel';
import Marquee from '../components/Marquee';
import { Calendar, Users, FileText } from 'lucide-react';

const Index = () => {
  const importantDates = [
    { event: "Paper Submission", date: "15th July 2025" },
    { event: "Notification of Acceptance", date: "15th August 2025" },
    { event: "Registration Due", date: "20th August 2025" },
    { event: "Camera Ready Submission", date: "30th August 2025" },
    { event: "Conference Date", date: "25th October 2025" }
  ];

  return (
    <Layout>
      <Carousel />
      <Marquee />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Conference Info Section */}
        <section className="mb-16">
          <div className="bg-neo-accent rounded-lg p-8">
            <h2 className="neo-h2 text-neo-primary mb-6 text-center">ICAISD-2025 will be organised in Online Mode</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-neo">
                <FileText className="h-12 w-12 text-neo-secondary mx-auto mb-4" />
                <h3 className="neo-h3 text-neo-primary mb-2">SCOPUS Publication</h3>
                <p className="neo-body text-neo-muted">All accepted papers will be published in SCOPUS proceeding, SCI journals and SCOPUS journals</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-neo">
                <Users className="h-12 w-12 text-neo-secondary mx-auto mb-4" />
                <h3 className="neo-h3 text-neo-primary mb-2">Expert Review</h3>
                <p className="neo-body text-neo-muted">Double blinded peer review process by international experts</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-neo">
                <Calendar className="h-12 w-12 text-neo-secondary mx-auto mb-4" />
                <h3 className="neo-h3 text-neo-primary mb-2">Online Mode</h3>
                <p className="neo-body text-neo-muted">Convenient online participation via ZOOM platform</p>
              </div>
            </div>
          </div>
        </section>

        {/* Indexing Details */}
        <section className="mb-16">
          <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-neo">
            <h2 className="neo-h2 text-neo-primary mb-4">Indexing Details</h2>
            <p className="neo-body text-neo-muted">
              <strong>INSPEC, Google Scholar</strong> and other leading databases with a <strong>DOI Number</strong>
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="neo-h2 text-neo-primary mb-6">About the Conference</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-neo">
            <p className="neo-body text-neo-muted leading-relaxed">
              ICAISD 2025 is organised with the objective of bringing together innovative scientists, professors, research scholars, students and industrial experts in the field of Sciences, Computational Methods and Techniques to a common platform. All the accepted papers (after double blinded peer review) will be published in Adroid Conference Series (Indexing: INSPEC, Google Scholar and other leading databases with a DOI Number); All books published in the series are submitted for consideration in SCOPUS) and some high-quality selected papers will be published in the SCOPUS indexed Proceedings.
            </p>
          </div>
        </section>

        {/* Important Dates */}
        <section className="mb-16">
          <h2 className="neo-h2 text-neo-primary mb-6 text-center">Important Dates</h2>
          <div className="bg-neo-accent p-8 rounded-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {importantDates.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-neo text-center">
                  <h3 className="neo-h3 text-neo-primary mb-2">{item.event}</h3>
                  <p className="neo-body text-neo-secondary font-semibold">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-neo-primary text-white p-8 rounded-lg">
            <h2 className="neo-h2 mb-4">Ready to Submit Your Paper?</h2>
            <p className="neo-body mb-6">Join researchers from around the world at ICAISD-2025</p>
            <a 
              href="https://www.adroidcms.com/submit-paper/ICAISD2025"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-neo-secondary text-white px-8 py-3 rounded-lg neo-button hover:bg-opacity-90 transition-colors"
            >
              Submit Your Paper
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
