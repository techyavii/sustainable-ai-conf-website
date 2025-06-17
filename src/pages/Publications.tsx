
import React from 'react';
import Layout from '../components/Layout';
import { FileText, Award } from 'lucide-react';

const Publications = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="neo-h1 text-neo-primary mb-4">Publications</h1>
          <div className="w-24 h-1 bg-neo-secondary mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-neo-accent p-8 rounded-lg">
            <div className="text-center mb-6">
              <FileText className="h-16 w-16 text-neo-secondary mx-auto mb-4" />
              <h2 className="neo-h2 text-neo-primary">Conference Proceedings</h2>
            </div>
            <p className="neo-body text-neo-muted leading-relaxed">
              All the accepted papers will be published in the proceedings of ICAISD 2025 by <strong>Adroid Conference Series</strong> indexed in reputed databases like <strong>INSPEC, Google Scholar</strong> and other leading databases with a <strong>DOI Number</strong>.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-neo">
            <div className="text-center mb-6">
              <Award className="h-16 w-16 text-neo-secondary mx-auto mb-4" />
              <h2 className="neo-h2 text-neo-primary">SCOPUS Publication</h2>
            </div>
            <p className="neo-body text-neo-muted leading-relaxed">
              Some high-quality selected papers will be published in the <strong>SCOPUS indexed Proceedings</strong>. All books published in the series are submitted for consideration in SCOPUS.
            </p>
          </div>
        </div>

        <div className="bg-neo-primary text-white p-8 rounded-lg mb-8">
          <h2 className="neo-h2 mb-6 text-center">Publication Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="neo-h3 mb-4 text-neo-secondary">Indexing Details</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-neo-secondary mr-2">•</span>
                  <span className="neo-body">INSPEC Indexing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neo-secondary mr-2">•</span>
                  <span className="neo-body">Google Scholar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neo-secondary mr-2">•</span>
                  <span className="neo-body">DOI Number Assignment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neo-secondary mr-2">•</span>
                  <span className="neo-body">SCOPUS Consideration</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="neo-h3 mb-4 text-neo-secondary">Quality Assurance</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-neo-secondary mr-2">•</span>
                  <span className="neo-body">Double Blind Peer Review</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neo-secondary mr-2">•</span>
                  <span className="neo-body">International Expert Panel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neo-secondary mr-2">•</span>
                  <span className="neo-body">High Publication Standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neo-secondary mr-2">•</span>
                  <span className="neo-body">Global Visibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-neo-accent p-8 rounded-lg">
          <h2 className="neo-h2 text-neo-primary mb-4">Publication Timeline</h2>
          <p className="neo-body text-neo-muted leading-relaxed">
            All accepted papers will be published within 3-4 months after the conference. Authors will receive publication certificates and details about the indexing status of their papers.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Publications;
