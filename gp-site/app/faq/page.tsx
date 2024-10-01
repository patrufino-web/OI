import React, { useState } from 'react';

const FAQPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer installation and maintenance of gas systems, repair and maintenance of stoves, and cutlery services.',
    },
    {
      question: 'How can I request a quote?',
      answer: 'You can request a quote through our website by filling out the form on the "Quote" page.',
    },
    {
      question: 'What products do you sell?',
      answer: 'We sell a variety of kitchen products including pots, pans, and gas installation kits.',
    },
    {
      question: 'Do you offer installation services?',
      answer: 'Yes, we offer installation services for both residential and commercial gas systems.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              className="w-full text-left text-lg font-medium text-gray-800 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;

