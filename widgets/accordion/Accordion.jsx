import { useState } from 'react';

function Accordion({ label, data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">{label}</h2>
      <div className="space-y-4">
        {data?.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-lg ${activeIndex === index ? 'bg-gray5' : 'bg-white'}`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left"
            >
              <span
                className={`font-medium ${activeIndex === index ? 'font-semibold' : ''}`}
              >
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
