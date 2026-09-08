import React from 'react';
import { 
  HardHat, 
  ShieldCheck, 
  Camera, 
  MapPin, 
  FolderArchive, 
  Bell, 
  Mail, 
  Trash2, 
  Printer, 
  CheckCircle2, 
  Building2, 
  Calendar,
  Lock
} from 'lucide-react';

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
      {/* Top Simple Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-30 print:static print:border-none">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-xs">
              <HardHat className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-slate-900 block">
                JARVIS - Gestão de Obras
              </span>
              <span className="text-xs text-slate-500">Política de Privacidade</span>
            </div>
          </div>

          <div className="flex items-center gap-3 print:hidden">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Single-Column Document */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Document Title Header */}
        <div className="border-b border-slate-200 pb-6 mb-8 space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
            <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              Conforme LGPD (Lei 13.709/2018)
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              Última atualização: 15 de janeiro de 2026
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Política de Privacidade
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed">
            Esta Política de Privacidade descreve de forma simples e transparente como o aplicativo móvel <strong className="text-slate-900 font-semibold">Jarvis - Gestão de Obras</strong> coleta, utiliza, armazena e protege os seus dados pessoais em conformidade com a legislação brasileira de proteção de dados (LGPD) e com as diretrizes das lojas Google Play Store e Apple App Store.
          </p>
        </div>

        {/* Document Sections */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-700">
          {/* 1. Apresentação */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">01</span>
              Apresentação e Finalidade do Aplicativo
            </h2>
            <p>
              O aplicativo <strong>Jarvis - Gestão de Obras</strong> é uma ferramenta profissional de engenharia desenvolvida para o acompanhamento diário de canteiros de obras. O software permite a elaboração de Diários de Obra (RDO), registro de avanço físico de serviços, relatórios fotográficos de vistorias técnicas, controle de equipes e comunicação entre engenheiros, mestres de obras e contratantes.
            </p>
          </section>

          {/* 2. Controlador e Encarregado */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">02</span>
              Identificação do Controlador e Encarregado (DPO)
            </h2>
            <p>
              O serviço é prestado pela <strong>Jarvis Tecnologia da Construção Civil Ltda.</strong> (CNPJ: 48.921.304/0001-82), sediada em São Paulo - SP.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-1">
              <p><strong>Encarregado de Proteção de Dados (DPO):</strong> Mariana Vasconcelos de Alencar</p>
              <p><strong>Canal Direto de Atendimento ao Titular:</strong>{' '}
                <a href="mailto:dpo@jarvisobras.com.br" className="text-amber-700 hover:underline font-semibold">
                  dpo@jarvisobras.com.br
                </a>
              </p>
              <p className="text-slate-500 text-xs mt-1">Prazo de resposta inicial em até 48 horas úteis.</p>
            </div>
          </section>

          {/* 3. Dados Coletados */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">03</span>
              Dados Pessoais Coletados
            </h2>
            <p>
              Coletamos estritamente os dados necessários para o funcionamento técnico do canteiro de obras:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-700">
              <li><strong>Dados de cadastro e acesso:</strong> Nome completo, e-mail corporativo ou pessoal, telefone de contato e cargo/função técnica (ex: engenheiro, mestre de obras, fiscal);</li>
              <li><strong>Dados de conselho de classe (opcional):</strong> Número de registro CREA ou CAU para aposição em relatórios de responsabilidade técnica;</li>
              <li><strong>Registros de vistoria de obra:</strong> Fotografias tiradas no canteiro para comprovação de serviços executados no Diário de Obra;</li>
              <li><strong>Dados de dispositivo:</strong> Modelo do aparelho, versão do sistema operacional e relatórios técnicos de erro (crash logs) para garantir o funcionamento do app.</li>
            </ul>
          </section>

          {/* 4. Permissões Mobile */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">04</span>
              Permissões Solicitadas no Aplicativo Mobile
            </h2>
            <p>
              Para operar as ferramentas de campo, o aplicativo pode solicitar autorização para os seguintes recursos do seu smartphone:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 text-xs sm:text-sm">
                <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                  <Camera className="w-4 h-4 text-amber-600" />
                  Câmera
                </div>
                <p className="text-slate-600 text-xs">
                  Utilizada para capturar fotos de vistorias técnicas, avanço físico e recibos de materiais no Diário de Obra.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 text-xs sm:text-sm">
                <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  Geolocalização (GPS em 1º Plano)
                </div>
                <p className="text-slate-600 text-xs">
                  Utilizada exclusivamente no momento do envio do relatório para atestar presença no canteiro. <strong>Não realizamos rastreamento em segundo plano.</strong>
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 text-xs sm:text-sm">
                <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                  <FolderArchive className="w-4 h-4 text-blue-600" />
                  Armazenamento / Arquivos
                </div>
                <p className="text-slate-600 text-xs">
                  Permite anexar arquivos selecionados por você (como projetos executivos em PDF e plantas baixas).
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 text-xs sm:text-sm">
                <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                  <Bell className="w-4 h-4 text-purple-600" />
                  Notificações Push
                </div>
                <p className="text-slate-600 text-xs">
                  Alertas operacionais sobre aprovações pendentes de medições e avisos de prazos de etapas da obra.
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              Você pode ativar ou desativar qualquer uma dessas permissões a qualquer momento através das Configurações do seu Android ou iPhone.
            </p>
          </section>

          {/* 5. Bases Legais e Finalidades */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">05</span>
              Finalidades e Bases Legais (Art. 7º da LGPD)
            </h2>
            <p>Tratamos seus dados com respaldo nas hipóteses da LGPD:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-700 text-xs sm:text-sm">
              <li><strong>Execução de Contrato (Art. 7º, V):</strong> Disponibilização do software, emissão de relatórios de obra e controle de cronograma;</li>
              <li><strong>Cumprimento de Obrigação Legal (Art. 7º, II):</strong> Cumprimento de normas regulamentadoras da construção civil (NR-18) e comprovação de segurança e solidez predial perante o Artigo 618 do Código Civil Brasileiro;</li>
              <li><strong>Legítimo Interesse (Art. 7º, IX):</strong> Segurança patrimonial da obra, prevenção a inconsistências técnicas e melhoria da estabilidade do aplicativo.</li>
            </ul>
          </section>

          {/* 6. Compartilhamento */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">06</span>
              Compartilhamento de Informações
            </h2>
            <p>
              <strong>Não vendemos nem comercializamos seus dados.</strong> O compartilhamento restringe-se a:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-700 text-xs sm:text-sm">
              <li>Membros autorizados e contratantes da mesma obra (engenheiro-chefe, fiscal e construtora);</li>
              <li>Provedores de infraestrutura em nuvem segura para hospedagem de banco de dados e envio de notificações;</li>
              <li>Atendimento a ordens judiciais ou exigências de órgãos de fiscalização do trabalho e engenharia (CREA/CAU).</li>
            </ul>
          </section>

          {/* 7. Segurança e Retenção */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">07</span>
              Segurança e Prazo de Guarda dos Dados
            </h2>
            <p>
              Adotamos criptografia TLS 1.3 em todas as comunicações e criptografia AES-256 no armazenamento em servidores.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              Conforme o <strong>Art. 618 do Código Civil Brasileiro</strong>, relatórios técnicos e registros de vistorias de obras civis devem ser mantidos em arquivo seguro pelo prazo legal de 5 (cinco) anos para fins de garantia e segurança da edificação. Findo o prazo legal, os registros são eliminados ou anonimizados.
            </p>
          </section>

          {/* 8. Exclusão de Conta e Dados (Google Play / App Store) */}
          <section className="space-y-3 bg-amber-50/60 p-5 rounded-2xl border border-amber-200/80">
            <div className="flex items-center gap-2">
              <Trash2 className="w-5 h-5 text-amber-700 shrink-0" />
              <h2 className="text-lg font-bold text-slate-900">
                Exclusão de Conta e Dados (Diretriz Google Play & Apple)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700">
              Você pode encerrar sua conta e solicitar a exclusão de seus dados pessoais a qualquer momento:
            </p>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="bg-white p-3 rounded-xl border border-amber-200 text-slate-800">
                <strong className="block font-semibold mb-1 text-slate-900">1. Pelo Aplicativo Móvel:</strong>
                Acesse o aplicativo &gt; <em>Menu / Perfil</em> &gt; <em>Configurações e Segurança</em> &gt; Toque em <strong>"Excluir Minha Conta e Dados"</strong> e confirme. A desativação é imediata.
              </div>
              <div className="bg-white p-3 rounded-xl border border-amber-200 text-slate-800">
                <strong className="block font-semibold mb-1 text-slate-900">2. Por E-mail (Caso não tenha o app instalado):</strong>
                Envie um e-mail para <a href="mailto:dpo@jarvisobras.com.br?subject=Solicitacao%20de%20Exclusao%20de%20Conta%20-%20Jarvis" className="text-amber-800 font-semibold underline">dpo@jarvisobras.com.br</a> com o assunto <em>"Exclusão de Conta - Jarvis"</em> informando seu e-mail cadastrado. O atendimento é concluído em até 15 dias.
              </div>
            </div>
            <p className="text-[11px] text-slate-500">
              * Relatórios técnicos previamente homologados com assinaturas de responsabilidade técnica têm seus dados preservados em arquivo histórico exclusivamente para cumprimento de obrigação legal de guarda perante o Código Civil.
            </p>
          </section>

          {/* 9. Direitos do Titular */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">08</span>
              Seus Direitos como Titular (Art. 18 da LGPD)
            </h2>
            <p>Você pode a qualquer momento requerer de forma gratuita:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 pt-1">
              <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Confirmação da existência e acesso aos dados</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Correção de dados incompletos ou inexatos</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Portabilidade dos dados para outro fornecedor</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Revogação de consentimentos opcionais</span>
              </li>
            </ul>
          </section>

          {/* 10. Contato */}
          <section className="space-y-3 pt-4 border-t border-slate-200">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">09</span>
              Contato e Dúvidas sobre Privacidade
            </h2>
            <p>
              Para qualquer solicitação, exercício de direitos ou esclarecimentos sobre esta política, entre em contato com nosso time de privacidade:
            </p>
            <div className="bg-slate-900 text-white p-5 rounded-xl space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Mail className="w-4 h-4" />
                <span>Encarregada de Proteção de Dados (DPO)</span>
              </div>
              <p className="text-slate-300">
                E-mail:{' '}
                <a href="mailto:dpo@jarvisobras.com.br" className="text-white font-semibold underline">
                  dpo@jarvisobras.com.br
                </a>
              </p>
              <p className="text-slate-300">
                Suporte Geral:{' '}
                <a href="mailto:suporte@jarvisobras.com.br" className="text-white underline">
                  suporte@jarvisobras.com.br
                </a>
              </p>
              <p className="text-slate-400 text-xs pt-1">
                Jarvis Tecnologia da Construção Civil Ltda. • CNPJ 48.921.304/0001-82 • São Paulo - SP
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-6 text-center text-xs text-slate-500">
        <div className="max-w-3xl mx-auto px-4 space-y-1">
          <p>© {new Date().getFullYear()} Jarvis - Gestão de Obras. Todos os direitos reservados.</p>
          <p>Documento oficial para publicação na Google Play Store e Apple App Store.</p>
        </div>
      </footer>
    </div>
  );
}
