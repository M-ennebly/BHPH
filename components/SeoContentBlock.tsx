import React from 'react';

interface SeoContentBlockProps {
  title: string;
  paragraphs: string[];
}

const SeoContentBlock: React.FC<SeoContentBlockProps> = ({ title, paragraphs }) => {
  return (
    <section className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 my-12">
      <h2 className="text-2xl font-extrabold text-slate-900 mb-6">{title}</h2>
      <div className="prose prose-slate max-w-none text-slate-600">
        {paragraphs.map((p, i) => (
          <p key={i} className="mb-4 leading-relaxed">{p}</p>
        ))}
      </div>
    </section>
  );
};

export default SeoContentBlock;
