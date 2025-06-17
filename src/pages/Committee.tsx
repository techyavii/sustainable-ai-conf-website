
import React from 'react';
import Layout from '../components/Layout';
import { Users, MapPin } from 'lucide-react';

const Committee = () => {
  const committeeMembers = [
    { name: "Suleyman EKEN", affiliation: "Kocaeli University, Turkey" },
    { name: "Zdzislaw Polokowski", affiliation: "The Karkonosze University of Applied Sciences in Jelenia Góra, Poland" },
    { name: "Sheng-Lung Peng", affiliation: "National Dong Swa University, Taiwan" },
    { name: "Jafar A. Alzubi", affiliation: "Al-Balqa Applied University, Salt - Jordan" },
    { name: "Utku Kose", affiliation: "Suleyman Demirel University, Isparta, Turkey" },
    { name: "Oana Geman", affiliation: "Chalmers University of Technology, University of Gothenburg, Romania" },
    { name: "Suresh Chavhan", affiliation: "Indian Institute of Information Technology Raichur, India" },
    { name: "Gulshan Shrivastava", affiliation: "Bennett University, Gr.Noida., India" },
    { name: "Aditya Khamparia", affiliation: "Babasaheb Bhimrao Ambedkar University, India" },
    { name: "Prajoy Podder", affiliation: "Institute of Information and Communication Technology, BUET, Dhaka" },
    { name: "M.Rubaiyat Hossain Mondal", affiliation: "Institute of Information and Communication Technology, BUET, Dhaka" },
    { name: "Sarada Prasad Gochhayat", affiliation: "IIT Jammu, India" },
    { name: "Lalit Garg", affiliation: "University of Malta, Msida, Malta" },
    { name: "Korhan Cengiz", affiliation: "Trakya University, Turkey" }
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-inter font-bold text-sustainable-green mb-4">Committee</h1>
          <p className="text-lg text-slate-gray font-ibm-plex">
            Meet our distinguished Advisory Committee and Technical Program Committee
          </p>
        </div>

        <div className="bg-gradient-to-br from-soft-sand to-white p-8 rounded-lg border border-gray-200 mb-12">
          <div className="text-center">
            <Users className="h-16 w-16 text-accent-blue mx-auto mb-6" />
            <h2 className="text-2xl font-inter font-bold text-sustainable-green mb-4">
              Advisory Committee and Technical Program Committee
            </h2>
            <p className="text-slate-gray font-ibm-plex max-w-3xl mx-auto">
              Our committee comprises renowned experts from leading universities and research institutions 
              worldwide, ensuring the highest standards of academic excellence and peer review.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-sustainable-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-inter font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                  </span>
                </div>
                <h3 className="text-lg font-inter font-semibold text-sustainable-green mb-2">
                  {member.name}
                </h3>
                <div className="flex items-start justify-center text-slate-gray font-ibm-plex text-sm">
                  <MapPin className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                  <span>{member.affiliation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-soft-sand p-8 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-inter font-bold text-sustainable-green mb-6 text-center">
            Committee Responsibilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-inter font-semibold text-slate-gray mb-4">Advisory Committee:</h3>
              <ul className="space-y-2 text-slate-gray font-ibm-plex">
                <li>• Strategic guidance and conference direction</li>
                <li>• Quality assurance and academic standards</li>
                <li>• International collaboration and networking</li>
                <li>• Review of conference policies and procedures</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-inter font-semibold text-slate-gray mb-4">Technical Program Committee:</h3>
              <ul className="space-y-2 text-slate-gray font-ibm-plex">
                <li>• Paper review and evaluation</li>
                <li>• Technical session organization</li>
                <li>• Track coordination and management</li>
                <li>• Ensuring research quality and innovation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Committee;
