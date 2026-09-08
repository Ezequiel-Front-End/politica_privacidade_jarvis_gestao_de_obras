import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Info, 
  CheckCircle2, 
  ShieldCheck, 
  Link2, 
  Check, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SectionContent } from '../types';

interface PolicySectionCardProps {
  section: SectionContent;
  simpleMode: boolean;
  highlightQuery?: string;
}

export const PolicySectionCard: React.FC<PolicySectionCardProps> = ({
  section,
  simpleMode,
  highlightQuery,
}) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(!simpleMode);

  // Sync expanded state if simpleMode changes
  React.useEffect(() => {
    setExpanded(!simpleMode);
  }, [simpleMode]);

  const copySectionLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${section.id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderHighlighted = (text: string) => {
    if (!highlightQuery || highlightQuery.trim().length < 2) return text;
    const regex = new RegExp(`(${highlightQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-amber-200 text-amber-950 px-1 py-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <article
      id={section.id}
      className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 md:p-8 scroll-mt-28 transition-all hover:border-slate-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold px-2.5 py-1 rounded-lg bg-slate-900 text-amber-400">
            {section.number}
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            {renderHighlighted(section.title)}
          </h2>
        </div>

        <div className="flex items-center gap-2 shrink-0 print:hidden">
          <button
            onClick={copySectionLink}
            title="Copiar link direto para esta cláusula"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Link2 className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 p-1.5 rounded-md hover:bg-slate-100 transition-colors flex items-center gap-1"
          >
            {expanded ? (
              <>
                <span className="hidden sm:inline">Recolher</span>
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                <span className="hidden sm:inline">Expandir</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Summary Box (Always visible as executive TL;DR for quick reading) */}
      <div className="mt-4 p-4 rounded-xl bg-amber-50/80 border border-amber-200/60 text-amber-950 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-0.5">
            Resumo Prático (Linguagem Clara)
          </div>
          <p className="text-sm font-medium leading-relaxed">
            {renderHighlighted(section.summary)}
          </p>
        </div>
      </div>

      {/* Full Content (Collapsible or visible) */}
      {(expanded || !simpleMode) && (
        <div className="mt-6 space-y-6 text-slate-700 text-sm md:text-base leading-relaxed">
          {/* Main paragraphs */}
          <div className="space-y-3">
            {section.content.map((p, idx) => (
              <p key={idx} className="leading-relaxed">
                {renderHighlighted(p)}
              </p>
            ))}
          </div>

          {/* Subsections if any */}
          {section.subsections && section.subsections.length > 0 && (
            <div className="space-y-5 pt-2 border-t border-slate-100">
              {section.subsections.map((sub, sIdx) => (
                <div key={sIdx} className="bg-slate-50/70 p-4 md:p-5 rounded-xl border border-slate-200/60">
                  <h3 className="font-semibold text-slate-900 text-base mb-2">
                    {renderHighlighted(sub.subtitle)}
                  </h3>
                  {Array.isArray(sub.text) ? (
                    sub.text.map((t, tIdx) => (
                      <p key={tIdx} className="mb-2 text-slate-700 text-sm">
                        {renderHighlighted(t)}
                      </p>
                    ))
                  ) : (
                    <p className="mb-3 text-slate-700 text-sm">
                      {renderHighlighted(sub.text)}
                    </p>
                  )}

                  {sub.bullets && sub.bullets.length > 0 && (
                    <ul className="space-y-2 mt-2">
                      {sub.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{renderHighlighted(b)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Callout Box if defined */}
          {section.callout && (
            <div
              className={`p-4 rounded-xl border flex items-start gap-3.5 ${
                section.callout.type === 'warning'
                  ? 'bg-rose-50/80 border-rose-200 text-rose-950'
                  : section.callout.type === 'shield'
                  ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                  : 'bg-blue-50/80 border-blue-200 text-blue-950'
              }`}
            >
              {section.callout.type === 'warning' && (
                <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              )}
              {section.callout.type === 'shield' && (
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              )}
              {section.callout.type === 'info' && (
                <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              )}
              <div>
                <h4 className="font-bold text-sm mb-1">{section.callout.title}</h4>
                <p className="text-xs md:text-sm leading-relaxed">
                  {section.callout.message}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
};
