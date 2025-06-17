
import React from 'react';
import Layout from '../components/Layout';
import { FileText, ExternalLink } from 'lucide-react';

const PaperSubmission = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="neo-h1 text-sustainable-green mb-4">Paper Submission</h1>
          <div className="w-24 h-1 bg-accent-blue mx-auto mb-6"></div>
          <p className="neo-h3 text-slate-gray font-normal">PAPER SUBMISSION (SPRINGER)</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
          <p className="neo-body text-slate-gray leading-relaxed mb-6">
            The Original unpublished Research Papers, Articles & Working papers having minimum length of 8 pages on the topics related to the theme are invited for presentation/publication in the conference proceedings.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 mb-8">
          <div className="bg-soft-sand p-8 rounded-lg">
            <h2 className="neo-h2 text-sustainable-green mb-6">Submission Guidelines</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-accent-blue mr-3 mt-1">1.</span>
                <p className="neo-body text-slate-gray">
                  Kindly ensure that your paper is formatted as per Springer Guidelines (not exceeding 12 pages written in A4 size). Please refer the attached springer template for preparation of your paper.
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-accent-blue mr-3 mt-1">2.</span>
                <p className="neo-body text-slate-gray">
                  All papers must be submitted online via Adroid CMS
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-accent-blue mr-3 mt-1">3.</span>
                <p className="neo-body text-slate-gray">
                  All submissions will be thoroughly peer-reviewed by experts based on originality, significance, and clarity.
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-accent-blue mr-3 mt-1">4.</span>
                <p className="neo-body text-slate-gray">
                  Only papers presenting original content with novel research results or successful innovative applications will be considered for publication in the conference proceedings.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <a 
            href="https://www.adroidcms.com/submit-paper/ICAISD2025"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-accent-blue text-white px-8 py-4 rounded-lg neo-button hover:bg-blue-600 transition-colors"
          >
            <FileText className="mr-2 h-5 w-5" />
            Submit Your Paper
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="bg-sustainable-green text-white p-8 rounded-lg">
          <h2 className="neo-h2 mb-6 text-center text-white">Plagiarism Policy</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-accent-blue mr-3 mt-1">1.</span>
              <p className="neo-body text-white">
                The paper prior to submission should be checked for plagiarism from licensed plagiarism software like Turnitin / iAuthenticate etc. The similarity content should not exceed 15% (in any case either self contents or others).
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-accent-blue mr-3 mt-1">2.</span>
              <p className="neo-body text-white">
                Any form of self-plagiarism or plagiarism from others' work(s) should not be there in an article.
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-accent-blue mr-3 mt-1">3.</span>
              <p className="neo-body text-white">
                If any model / concept / figure / table / data / conclusive comment by any previously published work is used in your article, you should properly cite a reference to the original work.
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-accent-blue mr-3 mt-1">4.</span>
              <p className="neo-body text-white">
                Language of explaining it should not be same as language of the work from which you have adopted it.
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-accent-blue mr-3 mt-1">5.</span>
              <p className="neo-body text-white">
                If you are using any copyrighted material, you should acquire prior permission from the copyright holder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaperSubmission;
