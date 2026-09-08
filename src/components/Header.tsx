import React from 'react';
import { 
  ShieldCheck, 
  HardHat, 
  Search, 
  Printer, 
  UserX, 
  Mail, 
  Sparkles, 
  FileText,
  Calendar,
  Layers
} from 'lucide-react';
import { APP_INFO } from '../data/privacyContent';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  simpleMode: boolean;
  setSimpleMode: (val: boolean) => void;
  onOpenDeletionModal: () => void;
  onOpenDpoModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  simpleMode,
  setSimpleMode,
  onOpenDeletionModal,
  onOpenDpoModal,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs print:static print:border-none">
      {/* Top Compliance Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6 print:hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
              Conforme LGPD (Lei 13.709/2018)
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-300">
              Diretrizes Google Play Data Safety & Apple Privacy
            </span>
          </div>

          <div className="flex items-center space-x-3 text-slate-400 text-xs">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              Última atualização: {APP_INFO.lastUpdated}
            </span>
            <span className="hidden md:inline bg-slate-800 text-amber-400 px-2 py-0.5 rounded font-mono text-[11px]">
              v{APP_INFO.version}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Logo & Brand Identity */}
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
                <HardHat className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-extrabold tracking-tight text-slate-900 font-sans">
                    JARVIS
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-200">
                    Obras
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  Política de Privacidade & Proteção de Dados
                </p>
              </div>
            </a>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                id="btn-print-mobile"
                onClick={handlePrint}
                title="Imprimir Política"
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              >
                <Printer className="w-5 h-5" />
              </button>
              <button
                id="btn-deletion-mobile"
                onClick={onOpenDeletionModal}
                title="Exclusão de Dados"
                className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg"
              >
                <UserX className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md print:hidden">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="privacy-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar nesta política (ex: GPS, fotos, exclusão, DPO)..."
                className="w-full pl-10 pr-9 py-2 text-sm bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-slate-800 placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-medium px-1"
                >
                  Limpar
                </button>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5 print:hidden">
            {/* View Mode Toggle: Legal Completo vs Resumo Prático */}
            <button
              id="toggle-summary-mode"
              onClick={() => setSimpleMode(!simpleMode)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all border ${
                simpleMode
                  ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
              title="Alternar entre visualização completa e resumos rápidos"
            >
              <Sparkles className="w-3.5 h-3.5" />
              {simpleMode ? 'Modo: Resumos Rápidos' : 'Modo: Jurídico Completo'}
            </button>

            {/* Print / Save as PDF */}
            <button
              id="btn-print-desktop"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              PDF / Imprimir
            </button>

            {/* Exclusão de Dados (Requisito Google Play) */}
            <button
              id="btn-open-deletion-modal"
              onClick={onOpenDeletionModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-700 hover:text-rose-800 bg-rose-50 hover:bg-rose-100/80 border border-rose-200 rounded-lg transition-colors"
            >
              <UserX className="w-3.5 h-3.5" />
              Exclusão de Dados
            </button>

            {/* Falar com DPO */}
            <button
              id="btn-open-dpo-modal"
              onClick={onOpenDpoModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Canal do DPO
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
