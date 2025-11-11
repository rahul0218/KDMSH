import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: "Why People Choose Us?",
      answer: "Lorem Ipsum has been standard daand scrambled. Rimply dummy text of the printing and typesetting industry"
    },
    {
      question: "What are the visiting Hour at the hospital?",
      answer: "Generally in the morning 10:00 am – 11:00 am and in evening 4.30 pm to 5.30 pm."
    },
    {
      question: "Accepting Insurance Cards?",
      answer: "We accept insurance. To know more click here."
    },
    {
      question: "Can I bring my own food to hospital?",
      answer: "No, in special cases under the guidance of consultants"
    },
    {
      question: "How do I pay for my hospital bills?",
      answer: "Hospital accepts a varieties of payment of methods, including CASH, UPI and NFT."
    },
    {
      question: "Can I bring my own medications to the hospital?",
      answer: "No"
    },
    {
      question: "How do I get a copy of my medical records?",
      answer: "Patients can request a copy of their medical records by contacting the hospital’s medical records department. Typically a signed authorization from is required and there is a fee for the copies."
    },
    {
      question: "How can I get a prescription refilled?",
      answer: "Prescription can typically be refilled by contacting the hospital pharmacy,In our pharmacy home delivery is available within 5 kilometres"
    }
    
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
            <button 
              className="w-full text-left font-medium py-4 px-4 bg-gray-100 rounded-t-lg focus:outline-none flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <span className="flex-1">{faq.question}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            <div className={`p-4 transition duration-300 ${openIndex === index ? 'block' : 'hidden'}`}>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;