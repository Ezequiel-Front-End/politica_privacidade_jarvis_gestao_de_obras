import React from 'react';
import { 
  HardHat, 
  ShieldCheck, 
  Mail, 
  MapPin, 
  Printer, 
  ExternalLink,
  Lock,
  Building2
} from 'lucide-react';
import { APP_INFO } from '../data/privacyContent';

interface FooterProps {
  onOpenDeletionModal: () => void;
  onOpenDpoModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDeletionModal,
  onOpenDpoModal,
}) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 mt-20 print:mt-8 print:bg-white print:text-slate-700 print:border-t-2 print:border-slate-300">
      {/* Top Banner with trust pillars */}
      <div className="border-b border-slate-800/80 py-8 px-4 sm:px-6 print:hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-slate-800 text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Privacidade por Design</h4>
              <p className="text-slate-400 mt-0.5 leading-relaxed">
                Minimização estrita de dados no canteiro de obras. Sem rastreamento invasivo ou venda de relatórios.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-slate-800 text-blue-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Criptografia em Repouso e Trânsito</h4>
              <p className="text-slate-400 mt-0.5 leading-relaxed">
                Padrão TLS 1.3 e AES-256 em banco de dados para proteger o acervo técnico e as medições de sua edificação.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-slate-800 text-emerald-400">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Conformidade com a Engenharia</h4>
              <p className="text-slate-400 mt-0.5 leading-relaxed">
                Atendimento conjugado à LGPD, Código Civil (Art. 618) e às Normas Regulamentadoras da Construção Civil.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <HardHat className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">
                  JARVIS - Gestão de Obras
                </span>
                <span className="block text-xs text-slate-400">
                  Tecnologia para canteiros de alta performance
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              O aplicativo Jarvis simplifica a rotina de engenheiros, mestres de obras e gestores da construção civil, assegurando conformidade jurídica, segurança do trabalho e proteção total dos dados pessoais.
            </p>

            <div className="space-y-1.5 text-[11px] text-slate-400 pt-2 border-t border-slate-800">
              <div className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{APP_INFO.legalEntity} • CNPJ: {APP_INFO.cnpj}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{APP_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Legal Channels */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Canais Oficiais LGPD
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenDpoModal}
                  className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-500" />
                  <span>Falar com o DPO ({APP_INFO.dpoEmail})</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDeletionModal}
                  className="text-slate-300 hover:text-rose-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-rose-500" />
                  <span>Solicitar Exclusão de Conta / Dados</span>
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${APP_INFO.supportEmail}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Suporte Técnico: {APP_INFO.supportEmail}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Compliance Badges */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Conformidade Regulatória
            </h4>
            <div className="space-y-2 text-[11px]">
              <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300">
                <span className="font-semibold text-emerald-400 block mb-0.5">LGPD (Lei 13.709/18)</span>
                Tratamento legítimo e canal direto com o titular e com a ANPD.
              </div>
              <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300">
                <span className="font-semibold text-blue-400 block mb-0.5">Lojas Oficiais</span>
                Conforme com Google Play Data Safety & Apple App Privacy Nutrition.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {APP_INFO.legalEntity} Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-slate-400 hover:text-amber-400 transition-colors"
            >
              Voltar ao topo ↑
            </button>
            <span>•</span>
            <button
              onClick={() => window.print()}
              className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1"
            >
              <Printer className="w-3.5 h-3.5" />
              Imprimir documento
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
