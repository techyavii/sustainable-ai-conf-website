import React from 'react';
import Layout from '../components/Layout';

const Registration = () => {
  const registrationFees = [
    {
      category: "Research Scholar/Student from INDIA",
      early: "INR 4000",
      late: "INR 5000"
    },
    {
      category: "Academician from INDIA",
      early: "INR 5000",
      late: "INR 6000"
    },
    {
      category: "Industrial Participants from INDIA",
      early: "INR 6000",
      late: "INR 7000"
    },
    {
      category: "Foreigner Research Scholar/Student (Outside India)",
      early: "USD 100",
      late: "USD 120"
    },
    {
      category: "Foreigner Academician (Outside India)",
      early: "USD 120",
      late: "USD 150"
    },
    {
      category: "Foreigner Industrial Participant (Outside India)",
      early: "USD 150",
      late: "USD 180"
    }
  ];

  const benefits = [
    "Access to Keynote talks",
    "Access to paper presentation sessions",
    "Networking Sessions",
    "Conference lunch and refreshment*",
    "Tea and Coffee Breaks*",
    "Conference Kit*",
    "Pre-Proceeding (collection of Abstracts only)*",
    "Participation Certificate"
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="neo-h1 text-sustainable-green mb-4">Registration</h1>
          <div className="w-24 h-1 bg-accent-blue mx-auto mb-6"></div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="neo-h2 text-sustainable-green mb-6">Registration Process</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="neo-body text-slate-gray leading-relaxed mb-4">
                <strong>Step 1 – Registration Fee:</strong> It is mandatory for at least one author of an accepted paper to register in order for the paper to appear in the proceedings and included in the Technical Program. Fee includes listing the papers online in the International Journal/Conference Proceedings.
              </p>
              <p className="neo-body text-slate-gray leading-relaxed">
                Kindly pay the registration fees through online transaction only and mail us the receipt/transaction number along with your paper id and registered author id card.
              </p>
            </div>
            <div className="text-center">
              <h3 className="neo-h3 text-sustainable-green mb-4">Quick Registration</h3>
              <img 
                src="/lovable-uploads/007f3735-c7aa-4913-93fa-08c32237041d.png" 
                alt="Registration QR Code" 
                className="w-48 h-48 mx-auto mb-4 border-2 border-gray-200 rounded-lg p-2"
              />
              <p className="neo-caption text-slate-gray">Scan QR code for quick registration</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-soft-sand p-8 rounded-lg">
            <h2 className="neo-h2 text-sustainable-green mb-6">Registration Benefits</h2>
            <p className="neo-body text-slate-gray mb-4">
              <strong>Author/Co-Author Registration Fee Includes:</strong>
            </p>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent-blue mr-2">•</span>
                  <span className="neo-body text-slate-gray">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-sustainable-green text-white p-8 rounded-lg">
            <h2 className="neo-h2 mb-6 text-white">Important Note</h2>
            <p className="neo-body mb-4 text-white">
              **The Conference will be in Hybrid mode
            </p>
            <p className="neo-body text-white">
              <strong>Conference Venue:</strong> ONLINE MODE via ZOOM Platform
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="bg-sustainable-green text-white p-6">
            <h2 className="neo-h2 text-center text-white">Registration Fee For ICAISD-2025</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-soft-sand">
                <tr>
                  <th className="px-6 py-4 text-left neo-h3 text-sustainable-green">Category</th>
                  <th className="px-6 py-4 text-center neo-h3 text-sustainable-green">Early Registration<br/>(Before 30th August 2025)</th>
                  <th className="px-6 py-4 text-center neo-h3 text-sustainable-green">Late Registration<br/>(After 30th August 2025)</th>
                </tr>
              </thead>
              <tbody>
                {registrationFees.map((fee, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 neo-body text-slate-gray">{fee.category}</td>
                    <td className="px-6 py-4 text-center neo-body font-semibold text-accent-blue">{fee.early}</td>
                    <td className="px-6 py-4 text-center neo-body font-semibold text-accent-blue">{fee.late}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center bg-soft-sand p-8 rounded-lg">
          <h2 className="neo-h2 text-sustainable-green mb-4">Ready to Register?</h2>
          <p className="neo-body text-slate-gray mb-6">
            Contact us for payment details and registration process
          </p>
          <a 
            href="mailto:icaisd.conference@gmail.com"
            className="inline-block bg-accent-blue text-white px-8 py-3 rounded-lg neo-button hover:bg-blue-600 transition-colors"
          >
            Contact for Registration
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;
