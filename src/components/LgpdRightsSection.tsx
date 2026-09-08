import React from 'react';
import { 
  ShieldCheck, 
  FileCheck2, 
  ExternalLink, 
  Lock, 
  Clock, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { LGPD_RIGHTS } from '../data/privacyContent';

interface LgpdRightsSectionProps {
  onOpenDpoModal: () => void;
}

export const LgpdRightsSection: React.FC<LgpdRightsSectionProps> = ({ onOpenDpoModal }) => {
  return (
    <section id="direitos-titular" className="scroll-mt-28 space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                Seus Direitos como Titular (Art. 18 LGPD)
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Garantias fundamentais concedidas pela Lei Geral de Proteção de Dados Pessoais
              </p>
            </div>
          </div>

          <button
            onClick={onOpenDpoModal}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-2xs w-fit"
          >
            <span>Exercer Direitos com o DPO</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Intro */}
        <p className="text-slate-700 text-sm md:text-base leading-relaxed mt-4">
          Como usuário do <strong className="font-semibold text-slate-900">Jarvis - Gestão de Obras</strong>, você possui direitos assegurados pelo Artigo 18 da Lei nº 13.709/2018. Todas as requisições são atendidas de forma gratuita e transparente:
        </p>

        {/* Rights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {LGPD_RIGHTS.map((right, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-emerald-300 hover:bg-emerald-50/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                    {right.article}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5 leading-snug">
                  {right.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {right.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 text-xs text-slate-700">
                <span className="font-semibold text-slate-900 block text-[11px] uppercase tracking-wider mb-0.5">
                  Como exercer:
                </span>
                <span className="text-slate-600">{right.howToExercise}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Legal SLAs and Guarantee */}
        <div className="mt-6 p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="font-bold text-xs sm:text-sm text-slate-100">
                Prazos Oficiais de Atendimento (Art. 19 LGPD)
              </div>
              <div className="text-xs text-slate-400">
                Resposta simplificada imediata ou declaração completa e conclusiva em até 15 dias corridos.
              </div>
            </div>
          </div>

          <button
            onClick={onOpenDpoModal}
            className="text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 px-3.5 py-1.5 rounded-lg transition-colors whitespace-nowrap"
          >
            Abrir Requisição LGPD
          </button>
        </div>
      </div>
    </section>
  );
};
