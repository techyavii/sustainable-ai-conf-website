
import React from 'react';
import Layout from '../components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="neo-h1 text-neo-primary mb-4">Privacy Policy</h1>
          <div className="w-24 h-1 bg-neo-secondary mx-auto mb-6"></div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-neo mb-8">
          <h2 className="neo-h2 text-neo-primary mb-6">Plagiarism Policy</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="neo-h3 text-neo-primary mb-3">1. Pre-Submission Requirements</h3>
              <p className="neo-body text-neo-muted leading-relaxed">
                The paper prior to submission should be checked for plagiarism from licensed plagiarism software like Turnitin / iAuthenticate etc. The similarity content should not exceed 15% (in any case either self contents or others). Further, you have to strictly implement the following ethical guidelines for publication:
              </p>
            </div>

            <div>
              <h3 className="neo-h3 text-neo-primary mb-3">2. Plagiarism Guidelines</h3>
              <p className="neo-body text-neo-muted leading-relaxed mb-4">
                Any form of self-plagiarism or plagiarism from others' work(s) should not be there in an article.
              </p>
            </div>

            <div>
              <h3 className="neo-h3 text-neo-primary mb-3">3. Citation Requirements</h3>
              <p className="neo-body text-neo-muted leading-relaxed mb-4">
                If any model / concept / figure / table / data / conclusive comment by any previously published work is used in your article, you should properly cite a reference to the original work.
              </p>
            </div>

            <div>
              <h3 className="neo-h3 text-neo-primary mb-3">4. Language and Expression</h3>
              <p className="neo-body text-neo-muted leading-relaxed mb-4">
                Language of explaining it should not be same as language of the work from which you have adopted it.
              </p>
            </div>

            <div>
              <h3 className="neo-h3 text-neo-primary mb-3">5. Copyright Compliance</h3>
              <p className="neo-body text-neo-muted leading-relaxed">
                If you are using any copyrighted material, you should acquire prior permission from the copyright holder.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-neo-primary text-white p-8 rounded-lg mb-8">
          <h2 className="neo-h2 mb-6">Data Protection Policy</h2>
          <div className="space-y-4">
            <p className="neo-body leading-relaxed">
              ICAISD-2025 is committed to protecting the privacy and security of all participants' personal information. We collect and process personal data only for legitimate conference purposes including registration, paper submission, review process, and communication.
            </p>
            <p className="neo-body leading-relaxed">
              All submitted papers and personal information are kept confidential and used solely for conference proceedings and related academic purposes. We do not share personal data with third parties without explicit consent.
            </p>
          </div>
        </div>

        <div className="bg-neo-accent p-8 rounded-lg">
          <h2 className="neo-h2 text-neo-primary mb-6">Contact Information</h2>
          <p className="neo-body text-neo-muted leading-relaxed mb-4">
            For any questions regarding our privacy policy or plagiarism guidelines, please contact us at:
          </p>
          <p className="neo-body text-neo-secondary font-semibold">
            Email: icaisd.conference@gmail.com
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
