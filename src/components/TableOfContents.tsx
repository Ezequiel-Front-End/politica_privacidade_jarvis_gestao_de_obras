import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Menu, 
  X, 
  ShieldCheck, 
  Smartphone, 
  HelpCircle,
  Download,
  AlertCircle
} from 'lucide-react';
import { POLICY_SECTIONS } from '../data/privacyContent';

interface TableOfContentsProps {
  activeSectionId: string;
  onSelectSection: (id: string) => void;
  filteredSectionIds?: string[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  activeSectionId,
  onSelectSection,
  filteredSectionIds,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onSelectSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Drawer Trigger Bar */}
      <div className="lg:hidden sticky top-[98px] z-30 bg-slate-100/90 backdrop-blur-md border-b border-slate-200 px-4 py-2.5 flex items-center justify-between text-xs print:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-2 font-semibold text-slate-800 hover:text-amber-600"
        >
          <Menu className="w-4 h-4" />
          <span>Índice do Documento ({POLICY_SECTIONS.length} Cláusulas)</span>
        </button>
        <span className="text-slate-600 font-mono text-[11px]">
          {Math.round(scrollProgress)}% lido
        </span>
      </div>

      {/* Mobile Backdrop & Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity" 
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl flex flex-col z-10">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <span className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                Sumário da Política
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1 rounded-lg text-slate-500 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-1">
              {POLICY_SECTIONS.map((sec) => {
                const isActive = activeSectionId === sec.id;
                const isMatch = !filteredSectionIds || filteredSectionIds.includes(sec.id);
                return (
                  <button
                    key={sec.id}
                    onClick={() => handleLinkClick(sec.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-amber-100 text-amber-950 font-semibold'
                        : isMatch
                        ? 'text-slate-700 hover:bg-slate-100'
                        : 'text-slate-300'
                    }`}
                  >
                    <span className="truncate">
                      <span className="text-amber-700 mr-2 font-mono font-bold">{sec.number}.</span>
                      {sec.title}
                    </span>
                    {isActive && <ChevronRight className="w-3.5 h-3.5 text-amber-700 shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0 print:hidden">
        <div className="sticky top-24 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-xs">
            {/* Reading progress header */}
            <div className="mb-3 pb-3 border-b border-slate-100">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Sumário da Política</span>
                <span className="font-mono text-[11px] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
                  {Math.round(scrollProgress)}%
                </span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-amber-500 h-full rounded-full transition-all duration-150"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
            </div>

            {/* Quick Filter Notification */}
            {filteredSectionIds && filteredSectionIds.length < POLICY_SECTIONS.length && (
              <div className="mb-2 p-2 bg-amber-50 rounded-lg text-[11px] text-amber-900 border border-amber-200/60 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                <span>Mostrando {filteredSectionIds.length} cláusulas encontradas</span>
              </div>
            )}

            {/* Nav Links */}
            <nav className="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
              {POLICY_SECTIONS.map((sec) => {
                const isActive = activeSectionId === sec.id;
                const isMatch = !filteredSectionIds || filteredSectionIds.includes(sec.id);
                return (
                  <button
                    key={sec.id}
                    onClick={() => onSelectSection(sec.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between group ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                        : isMatch
                        ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                        : 'text-slate-300 hover:text-slate-500'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className={`font-mono text-[11px] px-1.5 py-0.5 rounded ${
                        isActive ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                      }`}>
                        {sec.number}
                      </span>
                      <span className="truncate">{sec.title}</span>
                    </div>
                    {isActive && <ChevronRight className="w-3.5 h-3.5 shrink-0 ml-1" />}
                  </button>
                );
              })}
            </nav>

            {/* Quick Jump Auxiliary Sections */}
            <div className="mt-4 pt-3 border-t border-slate-100 space-y-1">
              <button
                onClick={() => onSelectSection('guia-permissoes')}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 ${
                  activeSectionId === 'guia-permissoes' 
                    ? 'bg-blue-50 text-blue-900 font-semibold' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5 text-blue-600" />
                <span>Permissões Mobile (GPS/Foto)</span>
              </button>
              <button
                onClick={() => onSelectSection('direitos-titular')}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 ${
                  activeSectionId === 'direitos-titular' 
                    ? 'bg-emerald-50 text-emerald-900 font-semibold' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Seus Direitos (Art. 18 LGPD)</span>
              </button>
              <button
                onClick={() => onSelectSection('duvidas-frequentes')}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 ${
                  activeSectionId === 'duvidas-frequentes' 
                    ? 'bg-purple-50 text-purple-900 font-semibold' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5 text-purple-600" />
                <span>Perguntas Frequentes (FAQ)</span>
              </button>
            </div>
          </div>

          {/* Quick Help Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-4 text-white shadow-xs">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              Canal do Titular
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Deseja retificar dados ou entender a retenção de seus relatórios de obra? Fale diretamente com nossa DPO.
            </p>
            <a
              href="mailto:dpo@jarvisobras.com.br"
              className="inline-flex items-center justify-center w-full px-3 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-colors shadow-xs"
            >
              dpo@jarvisobras.com.br
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
