import React, { useState } from 'react';
import { 
  X, 
  Mail, 
  ShieldCheck, 
  Send, 
  CheckCircle, 
  Copy, 
  Check, 
  Clock, 
  Building2,
  FileCheck
} from 'lucide-react';
import { DpoInquiryData } from '../types';
import { APP_INFO } from '../data/privacyContent';

interface DpoContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DpoContactModal: React.FC<DpoContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<DpoInquiryData>({
    fullName: '',
    email: '',
    inquiryType: 'duvida',
    message: '',
  });
  const [submittedProtocol, setSubmittedProtocol] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const protocol = `JRV-DPO-${dateStr}-${randomCode}`;
    setSubmittedProtocol(protocol);
  };

  const handleCopyProtocol = () => {
    if (submittedProtocol) {
      navigator.clipboard.writeText(submittedProtocol);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setSubmittedProtocol(null);
    setFormData({
      fullName: '',
      email: '',
      inquiryType: 'duvida',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity" 
        onClick={handleReset}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-white">
                  Canal do Encarregado de Dados (DPO)
                </h3>
                <span className="text-[10px] font-mono uppercase bg-amber-950 text-amber-300 border border-amber-800 px-1.5 py-0.5 rounded">
                  Art. 41 LGPD
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Encarregada: {APP_INFO.dpoName}
              </p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submittedProtocol ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  Mensagem Enviada ao DPO!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1">
                  Sua requisição foi protocolada sob a supervisão direta de nossa Encarregada de Proteção de Dados.
                </p>
              </div>

              {/* Protocol Card */}
              <div className="bg-slate-100 p-4 rounded-xl max-w-sm mx-auto border border-slate-200">
                <div className="text-xs text-slate-500 font-semibold mb-1 uppercase tracking-wider">
                  Número de Protocolo
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="font-mono text-base font-bold text-slate-900">
                    {submittedProtocol}
                  </span>
                  <button
                    onClick={handleCopyProtocol}
                    className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-md transition-colors"
                    title="Copiar Protocolo"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="text-xs text-slate-500 max-w-sm mx-auto flex items-center justify-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>Previsão de retorno em <strong>{formData.email}</strong>: até 48h úteis.</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors"
                >
                  Concluir
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* DPO badge info */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-600" />
                  E-mail direto: <strong className="text-slate-900">{APP_INFO.dpoEmail}</strong>
                </span>
                <span className="text-[11px] text-slate-500 font-medium">Prazo legal: até 15 dias</span>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Nome Completo do Titular *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Seu nome completo"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  E-mail para Resposta *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seuemail@empresa.com.br"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Tipo de Manifestação LGPD *
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800"
                >
                  <option value="duvida">Dúvida Geral sobre Privacidade no Jarvis</option>
                  <option value="acesso_dados">Solicitar Acesso e Cópia dos Meus Dados (Art. 18, II)</option>
                  <option value="retificacao">Solicitar Retificação / Correção de Cadastro (Art. 18, III)</option>
                  <option value="revogacao">Revogação de Consentimento Opcional (Art. 18, IX)</option>
                  <option value="incidente">Notificação de Possível Vulnerabilidade ou Incidente</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Descrição Detalhada do Pedido *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Explique sua solicitação, mencionando se for o caso o nome da obra ou empresa na qual atuou..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Fechar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-xs transition-colors flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Enviar ao Encarregado
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
