import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FREQUENT_QUESTIONS } from '../data/privacyContent';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="duvidas-frequentes" className="scroll-mt-28 space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 md:p-8">
        <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
              Perguntas Frequentes (FAQ)
            </h2>
            <p className="text-xs md:text-sm text-slate-600">
              Dúvidas comuns sobre dados, fotos e privacidade na gestão de obras
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {FREQUENT_QUESTIONS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 md:p-5 text-left bg-slate-50/70 hover:bg-slate-100/80 transition-colors flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-slate-900 text-sm md:text-base">
                    {item.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-4 md:p-5 bg-white border-t border-slate-100 text-slate-700 text-xs md:text-sm leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
