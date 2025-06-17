
import React, { useState } from 'react';
import { Calendar, X } from 'lucide-react';

const ImportantDatesModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const importantDates = [
    { event: "Paper Submission", date: "15th July 2025" },
    { event: "Notification of Acceptance", date: "15th August 2025" },
    { event: "Registration Due", date: "20th August 2025" },
    { event: "Camera Ready Submission", date: "30th August 2025" },
    { event: "Conference Date", date: "25th October 2025" }
  ];

  return (
    <>
      {/* Fixed Vertical Button on Left Border */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-sustainable-green text-white p-2 rounded-r-lg shadow-lg hover:bg-opacity-90 transition-all z-40 font-inter font-semibold"
        style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
      >
        <div className="flex flex-col items-center space-y-2">
          <Calendar className="h-5 w-5" />
          <span className="text-sm whitespace-nowrap">Important Dates</span>
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            
            <h2 className="text-2xl font-inter font-bold text-sustainable-green mb-6">Important Dates</h2>
            
            <div className="grid md:grid-cols-5 gap-4">
              {importantDates.map((item, index) => (
                <div key={index} className="border-l-4 border-accent-blue pl-4 py-2 bg-soft-sand rounded-r-lg">
                  <h3 className="font-inter font-semibold text-slate-gray text-sm mb-2">{item.event}</h3>
                  <p className="text-accent-blue font-medium text-sm">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImportantDatesModal;
