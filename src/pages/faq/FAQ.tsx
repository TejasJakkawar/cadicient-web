import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Heading from "../../components/Heading/Heading";
import data from "../../constants/constants.json";
import "./faq.css";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0); 

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div id="faqs" className="faq-component">
      <div className="p-5 md:p-10 lg:p-20 flex flex-col items-center">
        <Heading heading={data?.faq?.heading} />
        
        <div className="w-full max-w-7xl mt-16 flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side - Description */}
          <div className="lg:w-[42%] flex flex-col faq-left-content">
            <div className="text-4xl md:text-5xl font-bold mb-10 text-white leading-tight">
              {data?.faq?.subheading}
            </div>
            <div className="text-zinc-300 text-lg leading-relaxed font-normal">
              {data?.faq?.description}
            </div>
          </div>

          {/* Right Side - FAQ Sections */}
          <div className="lg:w-[58%] space-y-12 faq-right-content">
            {/* Common Questions */}
            <div>
              <h3 className="faq-section-title">Common Question</h3>
              <div className="space-y-0">
                {data?.faq?.commonQuestions?.map((faq: FAQItem, index: number) => (
                  <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
                    <button
                      className="faq-question-button"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="faq-question-text">
                        {faq.question}
                      </span>
                      <ChevronDown 
                        className={`faq-icon ${openIndex === index ? 'rotated' : ''}`} 
                        size={24} 
                      />
                    </button>
                    <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                      <div className="faq-answer-content">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Questions */}
            <div>
              <h3 className="faq-section-title">Projects Question</h3>
              <div className="space-y-0">
                {data?.faq?.projectQuestions?.map((faq: FAQItem, index: number) => {
                  const projectIndex = index + (data?.faq?.commonQuestions?.length || 0);
                  return (
                    <div key={projectIndex} className={`faq-item ${openIndex === projectIndex ? 'active' : ''}`}>
                      <button
                        className="faq-question-button"
                        onClick={() => toggleFAQ(projectIndex)}
                      >
                        <span className="faq-question-text">
                          {faq.question}
                        </span>
                        <ChevronDown 
                          className={`faq-icon ${openIndex === projectIndex ? 'rotated' : ''}`} 
                          size={24} 
                        />
                      </button>
                      <div className={`faq-answer ${openIndex === projectIndex ? 'open' : ''}`}>
                        <div className="faq-answer-content">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;