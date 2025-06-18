
import React from 'react';
import Layout from '../components/Layout';
import { Download, FileText } from 'lucide-react';

const handleDownload = (filePath) => {
  const link = document.createElement('a');
  link.href = filePath;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


const Downloads = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-inter font-bold text-sustainable-green mb-4">Downloads</h1>
          <p className="text-lg text-slate-gray font-ibm-plex">Download conference resources and paper templates</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-soft-sand p-8 rounded-lg border border-gray-200">
            <div className="text-center">
              <FileText className="h-16 w-16 text-accent-blue mx-auto mb-4" />
              <h3 className="text-xl font-inter font-semibold text-sustainable-green mb-4">Paper Template</h3>
              <p className="text-slate-gray mb-6 font-ibm-plex">
                Download the official paper template for ICAISD-2025. 
                Papers must follow this format (minimum 8 pages, maximum 12 pages).
              </p>
              <button onClick={() => handleDownload('/downloads/ACS_EST_Conf_Article_Template.docx')} className="bg-sustainable-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center mx-auto font-inter font-semibold">
                <Download className="h-5 w-5 mr-2" />
                Download Template
              </button>
            </div>
          </div>

          <div className="bg-soft-sand p-8 rounded-lg border border-gray-200">
            <div className="text-center">
              <FileText className="h-16 w-16 text-accent-blue mx-auto mb-4" />
              <h3 className="text-xl font-inter font-semibold text-sustainable-green mb-4">Conference Brochure</h3>
              <p className="text-slate-gray mb-6 font-ibm-plex">
                Download the complete conference brochure with detailed information 
                about tracks, speakers, and schedule.
              </p>
              <button className="bg-sustainable-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center mx-auto font-inter font-semibold">
                <Download className="h-5 w-5 mr-2" />
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-inter font-bold text-sustainable-green mb-6">Submission Guidelines</h2>
          <div className="space-y-4 text-slate-gray font-ibm-plex">
            <p>• All papers must be formatted according to Springer guidelines</p>
            <p>• Minimum length: 8 pages, Maximum length: 12 pages</p>
            <p>• Papers must be written in A4 size format</p>
            <p>• Use the provided template for proper formatting</p>
            <p>• Check for plagiarism - similarity should not exceed 15%</p>
            <p>• Submit through the official Adroid CMS portal</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Downloads;
