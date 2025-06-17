
import React from 'react';
import Layout from '../components/Layout';
import { Users } from 'lucide-react';

const Committee = () => {
  const committeeMembers = [
    {
      name: "Suleyman EKEN",
      affiliation: "Kocaeli University, Turkey"
    },
    {
      name: "Zdzislaw Polokowski",
      affiliation: "The Karkonosze University of Applied Sciences in Jelenia Góra, Poland"
    },
    {
      name: "Sheng-Lung Peng",
      affiliation: "National Dong Swa University, Taiwan"
    },
    {
      name: "Jafar A. Alzubi",
      affiliation: "Al-Balqa Applied University, Salt - Jordan"
    },
    {
      name: "Utku Kose",
      affiliation: "Suleyman Demirel University, Isparta, Turkey"
    },
    {
      name: "Oana Geman",
      affiliation: "Chalmers University of Technology, University of Gothenburg, Romania"
    },
    {
      name: "Suresh Chavhan",
      affiliation: "Indian Institute of Information Technology Raichur, India"
    },
    {
      name: "Gulshan Shrivastava",
      affiliation: "Bennett University, Gr.Noida., India"
    },
    {
      name: "Aditya Khamparia",
      affiliation: "Babasaheb Bhimrao Ambedkar University, India"
    },
    {
      name: "Prajoy Podder",
      affiliation: "Institute of Information and Communication Technology, BUET, Dhaka"
    },
    {
      name: "M.Rubaiyat Hossain Mondal",
      affiliation: "Institute of Information and Communication Technology, BUET, Dhaka"
    },
    {
      name: "Sarada Prasad Gochhayat",
      affiliation: "IIT Jammu, India"
    },
    {
      name: "Lalit Garg",
      affiliation: "University of Malta, Msida, Malta"
    },
    {
      name: "Korhan Cengiz",
      affiliation: "Trakya University, Turkey"
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-inter font-bold text-sustainable-green mb-4">Committee</h1>
          <p className="text-lg text-slate-gray font-ibm-plex">Advisory Committee and Technical Program Committee</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="flex items-center mb-8">
            <Users className="h-8 w-8 text-accent-blue mr-3" />
            <h2 className="text-2xl font-inter font-bold text-sustainable-green">Committee Members</h2>
          </div>
          
          <div className="space-y-6">
            {committeeMembers.map((member, index) => (
              <div key={index} className="border-l-4 border-accent-blue pl-6 py-4 bg-soft-sand rounded-r-lg">
                <h3 className="text-lg font-inter font-semibold text-sustainable-green mb-2">
                  {member.name}
                </h3>
                <p className="text-slate-gray font-ibm-plex">
                  {member.affiliation}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-soft-sand p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-inter font-semibold text-sustainable-green mb-4">Contact Information</h3>
          <p className="text-slate-gray font-ibm-plex">
            For committee-related inquiries, please contact us at: 
            <a href="mailto:icaisd.conference@gmail.com" className="text-accent-blue hover:underline ml-1">
              icaisd.conference@gmail.com
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Committee;
