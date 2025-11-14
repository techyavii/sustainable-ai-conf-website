
import React from 'react';
import Layout from '../components/Layout';
import { Users, Crown, UserCheck, Settings, BookOpen, Calendar, UserRoundCheck } from 'lucide-react';

const Committee = () => {
  const committeeData = {
    patron: [
      {
        name: "Prof. Rajiv Saxena",
        title: "Vice-Chancellor",
        affiliation: "JU Anoopshahr, India"
      }
    ],
    generalChairs: [
      {
        name: "Prof. Nishant Shrivastava",
        affiliation: "JU Anoopshahr, India"
      },
    ],
    publicationChairs:[
      {
        name:"Nishant Shrivastava",
        affiliation:"JU Anoopshahr, India"
      },
      {
        name: "Jitendra Saxena",
        affiliation: "SAGE University, India"
      },
      {
        name: "Aditya Khamparia",
        affiliation: "Babasaheb Bhimrao Ambedkar University, India"
      },
      {
        name: "Mahmood Afzal Hussain",
        affiliation: "University of the Cumberlands, USA"
      },
      {
        name: "Anand Kadukuntla",
        affiliation: "University of the Cumberlands, USA"
      }
    ],
    coChairs: [
      {
        name: "Prof. Praveen Kumar Bhanodia",
        affiliation: "Acropolis Institute of Technology and Research"
      }
    ],
    steeringCommittee: [
      {
        name: "Prof. Nitin Sharma",
        affiliation: "JU Anoopshahr, India"
      },
      {
        name: "Dr. Kapil Sharma",
        affiliation: "JU Anoopshahr, India"
      },
      {
        name: "Dr. Rahul Kumar",
        affiliation: "JU Anoopshahr, India"
      },
      {
        name: "Dr. Mohit Sharma",
        affiliation: "JU Anoopshahr, India"
      },
      {
        name: "Dr. Hemang Shrivastava",
        affiliation: "SAGE University, India"
      },
      {
        name: "Dr. Deepak Yadav",
        affiliation: "SAGE University, India"
      },
      {
        name: "Dr. Jitendra Saxena",
        affiliation: "SAGE University, India"
      }
    ],
    publicationCoChairs: [
      {
        name: "Dr. Suman Saha",
        affiliation: "JU Anoopshahr, India"
      },
      {
        name: "Dr. Priyanka Jha",
        affiliation: "JU Anoopshahr, India"
      },
      {
        name: "Dr. Jitendra Saxena",
        affiliation: "SAGE University Indore, India"
      },
      {
        name: "Dr. Kuntal Barua",
        affiliation: "SAGE University Indore, India"
      }
    ],
    organisingCommittee: [
      {
        name: "Dr. Shailendra Tripathi",
        affiliation: "JU Anoopshahr, India"
      },
      {
        name: "Dr. Varun Singhal",
        affiliation: "JU Anoopshahr, India"
      },
      {
        name: "Dr. Ritu Bansal",
        affiliation: "SAGE University, India"
      },
      {
        name: "Dr. Ati Jain",
        affiliation: "SAGE University, India"
      },
      {
        name: "Dr. Sapna Dabade",
        affiliation: "SAGE University, India"
      }
    ],
    advisoryCommittee: [
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
    ]
  };

  const CommitteeSection = ({ title, members, icon: Icon, bgColor = "bg-soft-sand" }) => (
    <div className={`${bgColor} rounded-lg p-6 mb-8`}>
      <div className="flex items-center mb-6">
        <Icon className="h-6 w-6 text-accent-blue mr-3" />
        <h2 className="text-2xl font-inter font-bold text-sustainable-green">{title}</h2>
      </div>
      <div className="space-y-4">
        {members.map((member, index) => (
          <div key={index} className="border-l-4 border-accent-blue pl-6 py-3 bg-white rounded-r-lg">
            <h3 className="text-lg font-inter font-semibold text-sustainable-green mb-1">
              {member.name}
              {member.title && <span className="text-sm font-normal text-slate-gray ml-2">({member.title})</span>}
            </h3>
            <p className="text-slate-gray font-ibm-plex">
              {member.affiliation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-inter font-bold text-sustainable-green mb-4">Committee</h1>
          <p className="text-lg text-slate-gray font-ibm-plex">ICAISD-2025 Conference Committee</p>
        </div>

        {/* Patron */}
        <CommitteeSection 
          title="Patron" 
          members={committeeData.patron} 
          icon={Crown}
          bgColor="bg-gradient-to-r from-soft-sand to-amber-50"
        />

        {/* General Chairs */}
        <CommitteeSection 
          title="General Chairs" 
          members={committeeData.generalChairs} 
          icon={UserCheck}
        />

        {/* Publication Chairs */}
        <CommitteeSection 
          title="Publication Chairs" 
          members={committeeData.publicationChairs} 
          icon={UserRoundCheck}
        />

        {/* Co-Chairs */}
        <CommitteeSection 
          title="Co-Chairs" 
          members={committeeData.coChairs} 
          icon={Users}
        />

        {/* Steering Committee */}
        <CommitteeSection 
          title="Steering Committee" 
          members={committeeData.steeringCommittee} 
          icon={Settings}
        />

        {/* Publication Co-Chairs */}
        <CommitteeSection 
          title="Publication Co-Chairs" 
          members={committeeData.publicationCoChairs} 
          icon={BookOpen}
        />

        {/* Organising Committee */}
        <CommitteeSection 
          title="Organising Committee" 
          members={committeeData.organisingCommittee} 
          icon={Calendar}
        />

        {/* Advisory Committee */}
        <CommitteeSection 
          title="Advisory Committee" 
          members={committeeData.advisoryCommittee} 
          icon={Users}
        />

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
