import { useState } from 'react';

type FAQ = {
  question: string;
  answer: string;
};

const faqData: FAQ[] = [
  {
    question: "How does it work?",
    answer: "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
  },
  {
    question: "Why inhale melatonin?",
    answer: "Inhaling melatonin allows for faster absorption into the bloodstream, helping you fall asleep more quickly. The inhalation method bypasses the digestive system, meaning it starts working faster compared to traditional melatonin pills or gummies.",
  },
  {
    question: "How much melatonin is there per inhale?",
    answer: "Each inhale contains a carefully measured amount of melatonin, designed to promote relaxation and aid sleep. The exact dosage can vary depending on individual inhalation, but it's calibrated to be both effective and safe for regular use.",
  },
  {
    question: "Is it an e-cigarette or tobacco product?",
    answer: "No, this product is not an e-cigarette or tobacco product. It contains no nicotine, tobacco, or addictive substances. It is designed purely for wellness and relaxation, using ingredients like melatonin and calming essential oils.",
  },
  {
    question: "What's in it?",
    answer: "The main ingredients include melatonin, lavender, and chamomile, all known for their calming properties. These ingredients are vaporized into a light mist upon inhalation, providing both relaxation and aromatherapy benefits.",
  },
  {
    question: "What's not in it?",
    answer: "The product does not contain nicotine, tobacco, or any harmful or addictive chemicals. It is also free from artificial flavors, preservatives, and unnecessary additives, making it safe for regular use.",
  },
  {
    question: "How long does it last?",
    answer: "The effects of each inhalation can last between 15-30 minutes, depending on individual sensitivity. A single diffuser can typically last for multiple uses, though this depends on the frequency and depth of inhalation.",
  },
  {
    question: "How do I know it has run out/died?",
    answer: "You’ll notice it has run out when there’s a significant decrease in vapor production or the flavor becomes faint. Once this happens, it’s time to replace it with a new diffuser.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-16 py-16">
      {/* Sidebar */}
      <div className="lg:w-1/4">
        <h3 className="font-bold text-lg text-[#12305B]">Sleepsiq Product</h3>
        <ul className="mt-4 space-y-4 text-[#12305B]">
          <li className="font-semibold">Order</li>
          <li className="font-semibold">Melatonin</li>
        </ul>
      </div>

      {/* FAQ Content */}
      <div className="lg:w-3/4">
        <ul className="space-y-4">
          {faqData.map((faq, index) => (
            <li key={index} className="border-t border-gray-300 py-3 text-[#12305B] font-medium">
              <button
                onClick={() => toggleAnswer(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <span>Q{index + 1}: {faq.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQSection;
