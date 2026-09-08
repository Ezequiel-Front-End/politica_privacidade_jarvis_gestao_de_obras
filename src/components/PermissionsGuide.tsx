import React from 'react';
import { 
  Camera, 
  MapPin, 
  FolderArchive, 
  Bell, 
  Mic, 
  Smartphone, 
  Check, 
  SlidersHorizontal,
  ShieldCheck
} from 'lucide-react';
import { APP_PERMISSIONS } from '../data/privacyContent';

const ICON_MAP: Record<string, React.ReactNode> = {
  Camera: <Camera className="w-5 h-5 text-amber-600" />,
  MapPin: <MapPin className="w-5 h-5 text-emerald-600" />,
  FolderArchive: <FolderArchive className="w-5 h-5 text-blue-600" />,
  Bell: <Bell className="w-5 h-5 text-purple-600" />,
  Mic: <Mic className="w-5 h-5 text-rose-600" />,
};

export const PermissionsGuide: React.FC = () => {
  return (
    <section id="guia-permissoes" className="scroll-mt-28 space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 md:p-8">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                Permissões do Aplicativo Mobile
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Transparência sobre os recursos de hardware requisitados no Android e iOS
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 w-fit">
            <ShieldCheck className="w-3.5 h-3.5" />
            Nenhum rastreamento em 2º plano
          </span>
        </div>

        {/* Intro */}
        <p className="text-slate-700 text-sm md:text-base leading-relaxed mt-4">
          O aplicativo <strong className="font-semibold text-slate-900">Jarvis - Gestão de Obras</strong> foi arquitetado com estrita observância ao princípio da minimização. Abaixo discriminamos cada permissão solicitada em seu dispositivo móvel, as razões técnicas de engenharia que justificam seu uso e como você mantém total controle:
        </p>

        {/* Permissions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {APP_PERMISSIONS.map((perm) => (
            <div
              key={perm.id}
              className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white border border-slate-200/60 shadow-2xs">
                      {ICON_MAP[perm.iconName] || <Smartphone className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm md:text-base">
                        {perm.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500 block">
                        {perm.platform}
                      </span>
                    </div>
                  </div>

                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                    perm.mandatory 
                      ? 'bg-amber-100 text-amber-900' 
                      : 'bg-slate-200/70 text-slate-700'
                  }`}>
                    {perm.mandatory ? 'Obrigatória' : 'Opcional'}
                  </span>
                </div>

                <div className="space-y-2 text-xs md:text-sm text-slate-700">
                  <p className="leading-relaxed">
                    <strong className="text-slate-900 font-semibold">Finalidade na Obra: </strong>
                    {perm.purpose}
                  </p>
                  <p className="text-slate-500 font-mono text-[11px] bg-slate-100/90 p-1.5 rounded border border-slate-200/40">
                    {perm.technicalName}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs text-slate-600 flex items-start gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-800 font-medium">Controle: </strong>
                  {perm.userControl}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* OS Revocation Instructions */}
        <div className="mt-6 p-4 rounded-xl bg-blue-50/60 border border-blue-200/60 text-blue-950 text-xs md:text-sm">
          <h4 className="font-bold mb-1.5 flex items-center gap-2 text-blue-900">
            <SlidersHorizontal className="w-4 h-4 text-blue-700" />
            Como revogar ou gerenciar permissões no seu aparelho:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 text-blue-900/90">
            <div>
              <strong className="block text-blue-950 font-semibold mb-0.5">No Android:</strong>
              Configurações &gt; Aplicativos &gt; Jarvis - Gestão de Obras &gt; Permissões &gt; Selecione o recurso (Câmera, Localização, etc.) e ajuste para "Permitir apenas durante o uso" ou "Não permitir".
            </div>
            <div>
              <strong className="block text-blue-950 font-semibold mb-0.5">No iOS (iPhone/iPad):</strong>
              Ajustes &gt; Jarvis Obras &gt; Ative ou desative as chaves para Câmera, Fotos, Localização ("Durante o Uso") ou Notificações.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
