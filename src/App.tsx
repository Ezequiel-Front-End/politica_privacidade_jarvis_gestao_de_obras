import React from 'react';
import { 
  HardHat, 
  ShieldCheck, 
  Lock, 
  Trash2, 
  Globe, 
  Printer 
} from 'lucide-react';

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
      {/* Top Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-30 print:static print:border-none">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-xs">
              <HardHat className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-slate-900 block">
                Jarvis - Gestao de Obras
              </span>
              <span className="text-xs text-slate-500">Política de Privacidade</span>
            </div>
          </div>

          <div className="flex items-center gap-2 print:hidden">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Single-Column Document */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-xs space-y-8">
          
          {/* Header Title */}
          <div className="border-b border-slate-100 pb-6 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Documento Oficial</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Política de Privacidade
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed pt-1">
              Esta Política de Privacidade descreve de forma simples e direta como o aplicativo <strong className="text-slate-900">Jarvis - Gestao de Obras</strong> lida com as suas informações.
            </p>
          </div>

          {/* 1. Informações Coletadas */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Informações Coletadas
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              O aplicativo coleta apenas as informações estritamente necessárias para o seu funcionamento:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 pl-1">
              <li>
                <strong className="text-slate-900">Dados da Obra:</strong> Informações técnicas, anotações de diário de obra e fotos enviadas para compor os relatórios de acompanhamento.
              </li>
              <li>
                <strong className="text-slate-900">Acesso à Câmera e Galeria:</strong> Solicitado exclusivamente quando você desejar registrar fotos no canteiro ou anexar imagens aos relatórios da obra.
              </li>
            </ul>
          </section>

          {/* 2. Como Usamos as Informações */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Uso das Informações
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              As informações são utilizadas exclusivamente para o gerenciamento das obras e geração dos relatórios solicitados pelo usuário dentro do aplicativo.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Não vendemos, não alugamos e não compartilhamos</strong> seus dados com terceiros para fins de publicidade ou marketing.
            </p>
          </section>

          {/* 3. Segurança dos Dados */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-600" />
              <span>Segurança dos Dados</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Adotamos práticas adequadas de segurança para manter suas informações protegidas contra acessos não autorizados, perdas ou alterações indevidas.
            </p>
          </section>

          {/* 4. Exclusão de Conta e Dados */}
          <section className="space-y-3 p-5 rounded-xl bg-amber-50/70 border border-amber-200/80">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Trash2 className="w-4 h-4 text-amber-700" />
              <span>Exclusão de Conta e Dados</span>
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Você pode solicitar a exclusão da sua conta e de suas informações a qualquer momento:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-700 pl-1">
              <li>Diretamente pelo aplicativo, na tela de configurações da conta;</li>
              <li>Ou enviando uma solicitação através do nosso site oficial: <a href="https://abctechnology.com.br" target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-900 underline">abctechnology.com.br</a>.</li>
            </ul>
            <p className="text-xs text-slate-600">
              Após o pedido, seus registros serão excluídos de forma definitiva.
            </p>
          </section>

          {/* 5. Contato */}
          <section className="space-y-3 pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-4 h-4 text-slate-700" />
              <span>Contato e Suporte</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Para dúvidas sobre esta Política de Privacidade, suporte técnico ou solicitações de atendimento, o canal único de contato é realizado exclusivamente através do nosso site:
            </p>
            <div>
              <a 
                href="https://abctechnology.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm font-semibold"
              >
                <Globe className="w-4 h-4 text-amber-400" />
                <span>abctechnology.com.br</span>
              </a>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-slate-500 print:hidden">
        <p>Jarvis - Gestao de Obras • <a href="https://abctechnology.com.br" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">abctechnology.com.br</a></p>
      </footer>
    </div>
  );
}
