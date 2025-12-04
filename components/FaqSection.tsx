import React from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  items: FaqItem[];
}

const FaqSection: React.FC<FaqSectionProps> = ({ title, items }) => {
  return (
    <section className="my-16">
      <h2 className="text-2xl font-extrabold text-slate-900 mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/30 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-bold text-slate-900 mb-3">{item.question}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
