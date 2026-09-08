import React, { useState } from 'react';
import { 
  X, 
  UserX, 
  AlertTriangle, 
  CheckCircle, 
  Smartphone, 
  Send, 
  FileText,
  ShieldCheck,
  Copy,
  Check
} from 'lucide-react';
import { DeletionRequestData } from '../types';
import { APP_INFO } from '../data/privacyContent';

interface DataDeletionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DataDeletionModal: React.FC<DataDeletionModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<DeletionRequestData>({
    fullName: '',
    email: '',
    companyOrProject: '',
    phone: '',
    reason: '',
    deleteOption: 'account_only',
  });
  const [submittedProtocol, setSubmittedProtocol] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'form' | 'inapp'>('inapp');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate an official protocol number: JRV-DEL-YYYYMMDD-XXXX
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const protocol = `JRV-DEL-${dateStr}-${randomCode}`;
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
      companyOrProject: '',
      phone: '',
      reason: '',
      deleteOption: 'account_only',
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
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center shrink-0">
              <UserX className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-white">
                  Exclusão de Conta e Eliminação de Dados
                </h3>
                <span className="text-[10px] font-mono uppercase bg-rose-950 text-rose-300 border border-rose-800 px-1.5 py-0.5 rounded">
                  Google Play & App Store
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Canal oficial de atendimento ao Artigo 18, VI da LGPD (Lei 13.709/2018)
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

        {/* Tab switch */}
        <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('inapp')}
            className={`flex-1 py-3 px-4 text-center border-b-2 transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'inapp'
                ? 'border-amber-500 text-amber-950 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            Como excluir pelo App Móvel
          </button>
          <button
            onClick={() => setActiveTab('form')}
            className={`flex-1 py-3 px-4 text-center border-b-2 transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'form'
                ? 'border-amber-500 text-amber-950 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Send className="w-4 h-4" />
            Solicitar Exclusão Web (Sem o App)
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {activeTab === 'inapp' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/60 text-xs text-amber-950 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold mb-0.5">Método Instantâneo Recomendado:</strong>
                  Se você possui o aplicativo Jarvis instalado, a exclusão por dentro do aplicativo é processada imediatamente após a confirmação por senha.
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-3">
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-amber-600" />
                  Passo a passo no aplicativo Jarvis - Gestão de Obras:
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-slate-700 pl-1">
                  <li>Abra o aplicativo Jarvis em seu smartphone (Android ou iPhone);</li>
                  <li>Acesse o menu inferior e toque na aba <strong className="font-semibold text-slate-900">"Perfil / Ajustes"</strong>;</li>
                  <li>Role até a seção <strong className="font-semibold text-slate-900">"Segurança e Privacidade"</strong>;</li>
                  <li>Toque em <strong className="font-semibold text-rose-700">"Excluir Minha Conta e Dados"</strong>;</li>
                  <li>Digite sua senha atual para confirmar sua identidade e clique em "Confirmar Exclusão Definitiva".</li>
                </ol>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="font-semibold text-slate-800">O que acontece em seguida?</div>
                <p>
                  Sua sessão é encerrada em todos os aparelhos e suas credenciais de login são revogadas. Dados pessoais são expurgados no prazo de até 15 dias, salvo documentos probatórios já assinados da obra (Código Civil Art. 618).
                </p>
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveTab('form')}
                  className="text-xs text-amber-700 hover:text-amber-800 font-semibold underline"
                >
                  Não tem mais o aplicativo instalado? Clique aqui para solicitar via formulário web &rarr;
                </button>
              </div>
            </div>
          )}

          {activeTab === 'form' && (
            <div>
              {submittedProtocol ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">
                      Solicitação Registrada com Sucesso!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1">
                      Seu pedido de exclusão foi encaminhado para a equipe do Encarregado de Dados (DPO) da Jarvis.
                    </p>
                  </div>

                  {/* Protocol Box */}
                  <div className="bg-slate-100 p-4 rounded-xl max-w-md mx-auto border border-slate-200">
                    <div className="text-xs text-slate-500 font-semibold mb-1 uppercase tracking-wider">
                      Protocolo de Atendimento LGPD
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-mono text-base sm:text-lg font-bold text-slate-900">
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

                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Um e-mail de confirmação foi disparado para <strong>{formData.email}</strong>. Prazo máximo para conclusão: até 15 dias corridos.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors"
                    >
                      Fechar Janela
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-800 mb-1">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ex: Carlos Eduardo de Souza"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-800 mb-1">
                        E-mail Cadastrado no App *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="engenheiro@construtora.com.br"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-800 mb-1">
                        Telefone Celular com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(11) 99999-9999"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-800 mb-1">
                        Nome da Construtora ou Obra (opcional)
                      </label>
                      <input
                        type="text"
                        value={formData.companyOrProject}
                        onChange={(e) => setFormData({ ...formData, companyOrProject: e.target.value })}
                        placeholder="Ex: Construtora Alfa / Edifício Horizon"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">
                      Opção de Exclusão Desejada *
                    </label>
                    <select
                      value={formData.deleteOption}
                      onChange={(e) => setFormData({ ...formData, deleteOption: e.target.value as any })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800"
                    >
                      <option value="account_only">Excluir Minha Conta de Acesso e Perfil Pessoal</option>
                      <option value="all_data">Exclusão Total de Dados Pessoais (com expurgo após prazos de lei)</option>
                      <option value="revoke_consent">Revogação de Consentimentos e Desativação de Notificações</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">
                      Motivo da Solicitação (opcional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      placeholder="Não trabalho mais nesta obra / Troca de software / Outro motivo..."
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800"
                    />
                  </div>

                  {/* Legal Notice */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-600 text-xs">
                    Ao enviar esta solicitação, confirmo ser o titular legítimo do e-mail informado. Declaro ciência de que relatórios técnicos homologados nos quais atuei como responsável técnico (CREA/CAU) permanecem arquivados para atendimento à legislação civil e de segurança do trabalho.
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-xl shadow-xs transition-colors flex items-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Enviar Solicitação de Exclusão
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
