
import React from 'react';
import Layout from '../components/Layout';

const CallForPapers = () => {
  const tracks = [
    {
      title: "TRACK 1: INTELLIGENT SYSTEMS",
      topics: [
        "Multidimensional artificial intelligence",
        "Machine vision and information exchange",
        "Robotics Engineering",
        "Applied ambient intelligence",
        "Soft computing and applications",
        "Cognitive computing and theory",
        "Deep learning perspectives",
        "Crowd sourcing and collective intelligence",
        "Pattern recognition and Language processing",
        "Optimization approaches"
      ]
    },
    {
      title: "TRACK 2: DATA SCIENCE AND ENGINEERING",
      topics: [
        "Data Integration, Interoperability and Metadata for Cross-media data analytics",
        "Ubiquitous Data Management and Mobile Databases",
        "Query processing, query optimization, and data structures",
        "Semi-structured data and XML databases",
        "Distributed, parallel and Peer to Peer databases",
        "Web Data Management and Deep Web",
        "Scientific and Biological Databases and Bioinformatics",
        "Data Grids, Data Warehousing, OLAP",
        "Temporal, Spatial, and Multimedia databases",
        "Mathematical, probabilistic and statistical models and theories",
        "Architecture, management and process for data science",
        "Big data visualization, modeling and analytics",
        "Web/online/social/network mining and learning"
      ]
    },
    {
      title: "TRACK 3: NETWORKS AND DATA COMMUNICATION",
      topics: [
        "Wireless access and routing protocols",
        "Mobile social and ambient networks",
        "Delay tolerant networks",
        "Mobile and wireless broadband access networks",
        "Advanced and multidimensional networks (including WSNs, MANETs, VANETs, P2P)",
        "Optical Networking and Applications",
        "Network Applications and Management Processes",
        "Datacenter networks and Cloud Computing",
        "Future Internet Technologies",
        "Telematics and its future",
        "Mobility Management in Next Generation Networks",
        "Optical networking and applications"
      ]
    },
    {
      title: "TRACK 4: INTERNET OF THINGS",
      topics: [
        "Smart City Opportunities using Green Technology",
        "User Centric Smart Cities Services",
        "Industrial Internet of Things",
        "Semantic Interoperability in the IoT, WoT and Open-Source Solutions",
        "IoT Enabling Technologies and its Applications",
        "IoT Multimedia, Societal Impacts and Sustainable Development",
        "IoT Experimental Results and Deployment Scenarios",
        "Social Implications for IoT",
        "Blockchains and applications",
        "Future of IoT and Big Data",
        "Security and Privacy concerns in IoT"
      ]
    },
    {
      title: "TRACK 5: CYBER SECURITY AND DATA PRIVACY",
      topics: [
        "Cyber-physical systems",
        "Applied Cryptography",
        "Security Technology and Information Assurance",
        "Trusted computing and management",
        "Intrusion detection and prevention",
        "Key distribution and management",
        "Large scale attacks and defense",
        "Security and privacy in wireless networks",
        "Network security policy, theory and tools",
        "Secure Mobile Agents and Mobile Code",
        "Trusted computing and management",
        "Network resiliency and network security",
        "Database, applications and web security"
      ]
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="neo-h1 text-neo-primary mb-4">Call for Papers</h1>
          <div className="w-24 h-1 bg-neo-secondary mx-auto mb-6"></div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-neo mb-8">
          <p className="neo-body text-neo-muted leading-relaxed mb-6">
            The scope of this conference is to provide a platform for researchers, engineers, academicians as well as industrial professionals from all over the world to present their research results and development activities in various topics of Engineering and Technology, Sciences and Social-Sciences, Software Engineering and Automation, Data-Driven Intelligent Systems, Networks and Data Communication, Internet Of Things, Engineering Sciences.
          </p>
          <p className="neo-body text-neo-muted leading-relaxed">
            It allows participants an opportunity to discuss the recent developments in the field of solidification computer science and management and review challenges faced by the community in the 21st century. The conference consists of different tracks which are listed below:
          </p>
        </div>

        {tracks.map((track, index) => (
          <div key={index} className="mb-8 bg-neo-accent p-8 rounded-lg">
            <h2 className="neo-h2 text-neo-primary mb-6">{track.title}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {track.topics.map((topic, topicIndex) => (
                <div key={topicIndex} className="flex items-start">
                  <span className="text-neo-secondary mr-2">•</span>
                  <span className="neo-body text-neo-muted">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-neo-primary text-white p-8 rounded-lg">
          <p className="neo-body leading-relaxed">
            All papers will undergo a blind peer-review process and all accepted papers will be published in the conference proceedings. The conference organizer encourages submissions of academic and research papers that consider the multidisciplinary/interdisciplinary themes covering the Management, Science and Social Studies, through one of the following sub-themes, although submissions of other topics for consideration are also welcome.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default CallForPapers;
