import { SectionContent, AppPermission, LgpdRight } from '../types';

export const APP_INFO = {
  name: 'Jarvis - Gestão de Obras',
  legalEntity: 'Jarvis Tecnologia da Construção Civil Ltda.',
  cnpj: '48.921.304/0001-82',
  address: 'Av. Brigadeiro Faria Lima, 3477, 14º Andar - Itaim Bibi, São Paulo - SP, CEP 04538-133',
  dpoName: 'Mariana Vasconcelos de Alencar',
  dpoEmail: 'dpo@jarvisobras.com.br',
  supportEmail: 'suporte@jarvisobras.com.br',
  lastUpdated: '15 de Janeiro de 2026',
  effectiveDate: '01 de Fevereiro de 2026',
  version: '2.4.0',
};

export const APP_PERMISSIONS: AppPermission[] = [
  {
    id: 'camera',
    name: 'Câmera Fotográfica',
    technicalName: 'android.permission.CAMERA / NSCameraUsageDescription',
    platform: 'Android / iOS',
    purpose: 'Registro em tempo real de fotos e vistorias para o Diário de Obra (RDO), registro de avanço físico, auditoria de segurança (EPIs) e conferência de notas fiscais de materiais entregues no canteiro.',
    mandatory: false,
    userControl: 'Pode ser concedida ou revogada a qualquer momento nas configurações do sistema operacional.',
    iconName: 'Camera',
  },
  {
    id: 'location',
    name: 'Geolocalização (GPS em Primeiro Plano)',
    technicalName: 'ACCESS_FINE_LOCATION / NSLocationWhenInUseUsageDescription',
    platform: 'Android / iOS',
    purpose: 'Autenticação de presença no canteiro de obras durante o preenchimento do Diário de Obra e aposição de carimbo georreferenciado (latitude/longitude) nas fotos probatórias de medição.',
    mandatory: false,
    userControl: 'Utilizada estritamente enquanto o aplicativo está em uso visível pelo usuário. Nunca realizamos rastreamento em segundo plano (background).',
    iconName: 'MapPin',
  },
  {
    id: 'storage',
    name: 'Armazenamento e Arquivos (Mídia)',
    technicalName: 'READ_MEDIA_IMAGES / NSPhotoLibraryUsageDescription',
    platform: 'Android / iOS',
    purpose: 'Carregamento de plantas arquitetônicas em PDF, visualização offline de projetos executivos, relatórios de não conformidade (RNC) e anexação de comprovantes de recebimento de suprimentos.',
    mandatory: false,
    userControl: 'O acesso limita-se exclusivamente aos arquivos e fotos explicitamente selecionados pelo usuário.',
    iconName: 'FolderArchive',
  },
  {
    id: 'notifications',
    name: 'Notificações Push',
    technicalName: 'POST_NOTIFICATIONS / UNUserNotificationCenter',
    platform: 'Android / iOS',
    purpose: 'Alertas críticos de canteiro: aprovações de medição pendentes, avisos de desvio de cronograma, previsão de intempéries meteorológicas que afetam concretagem e comunicados de segurança do trabalho.',
    mandatory: false,
    userControl: 'Pode ser desativada diretamente nas preferências do app ou nas configurações do aparelho.',
    iconName: 'Bell',
  },
  {
    id: 'microphone',
    name: 'Microfone (Opcional)',
    technicalName: 'RECORD_AUDIO / NSMicrophoneUsageDescription',
    platform: 'Android / iOS',
    purpose: 'Transcrição de áudio para texto de observações e anotações orais de vistoria pelo engenheiro ou mestre de obras enquanto caminha pelo canteiro.',
    mandatory: false,
    userControl: 'Ativado apenas durante o toque manual no botão de gravação de nota vocal.',
    iconName: 'Mic',
  },
];

export const LGPD_RIGHTS: LgpdRight[] = [
  {
    article: 'Art. 18, I',
    title: 'Confirmação da Existência de Tratamento',
    description: 'Direito de saber de forma clara se tratamos dados pessoais vinculados à sua conta ou atividade profissional.',
    howToExercise: 'Consulta imediata pelo painel do perfil no app ou envio de solicitação ao DPO.',
  },
  {
    article: 'Art. 18, II',
    title: 'Acesso aos Dados Pessoais',
    description: 'Direito de receber uma cópia legível e estruturada dos dados pessoais cadastrados no sistema.',
    howToExercise: 'Disponível em "Configurações > Exportar Meus Dados" no aplicativo.',
  },
  {
    article: 'Art. 18, III',
    title: 'Correção de Dados Incompletos ou Inexatos',
    description: 'Direito de solicitar atualização de dados profissionais (ex: registro CREA/CAU, telefone, e-mail, cargo).',
    howToExercise: 'Edição direta no perfil do usuário ou solicitação via suporte ao cliente.',
  },
  {
    article: 'Art. 18, IV & VI',
    title: 'Anonimização, Bloqueio ou Eliminação',
    description: 'Exclusão de dados excessivos ou tratados sem amparo legal, resguardadas as retenções obrigatórias por lei.',
    howToExercise: 'Solicitação pelo botão de exclusão ou formalização perante o Encarregado de Dados.',
  },
  {
    article: 'Art. 18, V',
    title: 'Portabilidade dos Dados',
    description: 'Direito de transferir seus dados a outro fornecedor de serviços em formato aberto e interoperável (CSV/JSON).',
    howToExercise: 'Requerimento formal direcionado ao e-mail dpo@jarvisobras.com.br.',
  },
  {
    article: 'Art. 18, IX',
    title: 'Revogação do Consentimento',
    description: 'Possibilidade de retirar qualquer consentimento outorgado para funcionalidades facultativas (ex: envio de novidades e pesquisas).',
    howToExercise: 'Gerenciável a qualquer momento na aba de privacidade do app.',
  },
];

export const POLICY_SECTIONS: SectionContent[] = [
  {
    id: 'introducao',
    number: '01',
    title: 'Apresentação e Finalidade do Jarvis',
    summary: 'Visão geral do aplicativo Jarvis - Gestão de Obras, público-alvo e compromisso com a privacidade segundo a LGPD (Lei 13.709/2018).',
    content: [
      'A presente Política de Privacidade descreve com transparência e clareza como a Jarvis Tecnologia da Construção Civil Ltda. ("Jarvis", "nós" ou "nosso") coleta, utiliza, armazena, compartilha e protege os dados pessoais de usuários do aplicativo móvel Jarvis - Gestão de Obras e suas plataformas web integradas.',
      'O aplicativo Jarvis foi desenvolvido para otimizar o acompanhamento técnico de canteiros de obras, incluindo elaboração do Diário de Obra (RDO - Relatório Diário de Obra), controle de avanço físico-financeiro, fiscalização de segurança e qualidade, gestão de mão de obra e comunicação entre engenheiros, mestres de obras, subempreiteiros e contratantes.',
      'Ao utilizar o Jarvis, você declara ciência dos termos desta política, regida pelas leis brasileiras, em especial a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD) e o Marco Civil da Internet (Lei nº 12.965/2014).'
    ],
    callout: {
      type: 'shield',
      title: 'Privacidade no Canteiro de Obras',
      message: 'Coletamos apenas as informações estritamente necessárias para a operação técnica, segurança do trabalho e cumprimento das normas da construção civil (como NR-18 e Código Civil).'
    }
  },
  {
    id: 'controlador-dpo',
    number: '02',
    title: 'Identificação do Controlador e Encarregado (DPO)',
    summary: 'Dados societários da empresa responsável pelo tratamento e canal oficial do Encarregado de Proteção de Dados.',
    content: [
      'Para os fins da legislação de privacidade, a entidade controladora dos dados pessoais tratados no âmbito da contratação da plataforma Jarvis é:',
      '• Razão Social: Jarvis Tecnologia da Construção Civil Ltda.',
      '• CNPJ: 48.921.304/0001-82',
      '• Sede: Av. Brigadeiro Faria Lima, 3477, 14º Andar, Itaim Bibi, São Paulo - SP, CEP 04538-133',
      'Em casos nos quais a sua empresa empregadora ou construtora contrata a plataforma corporativa do Jarvis, esta atuará como Controladora dos dados da equipe e a Jarvis atuará como Operadora nos termos do Art. 39 da LGPD.'
    ],
    subsections: [
      {
        subtitle: 'Canal Oficial do Encarregado pelo Tratamento de Dados Pessoais (DPO)',
        text: 'Em atenção ao Artigo 41 da LGPD, designamos um Encarregado de Dados para atender todas as requisições de titulares e interlocuções com a Autoridade Nacional de Proteção de Dados (ANPD):',
        bullets: [
          'Encarregada: Mariana Vasconcelos de Alencar (Certificação CIPM / IAPP)',
          'E-mail Exclusivo para LGPD: dpo@jarvisobras.com.br',
          'Prazo padrão de resposta inicial: até 48 horas úteis',
          'Prazo legal para resposta conclusiva: até 15 dias corridos (Art. 19, II, LGPD)'
        ]
      }
    ]
  },
  {
    id: 'dados-coletados',
    number: '03',
    title: 'Dados Pessoais Coletados',
    summary: 'Relação discriminada dos dados cadastrais, técnicos, fotográficos e geográficos coletados durante o uso do app.',
    content: [
      'A coleta de dados pelo Jarvis é orientada pelo princípio da necessidade (minimização de dados). Coletamos os seguintes tipos de informações:'
    ],
    subsections: [
      {
        subtitle: 'A. Dados Cadastrais e Profissionais',
        text: 'Fornecidos pelo próprio usuário ou pelo administrador da empresa contratante:',
        bullets: [
          'Nome completo, endereço de e-mail corporativo ou pessoal e número de telefone celular;',
          'Cargo/Função (ex: Engenheiro Civil, Arquiteto, Mestre de Obras, Técnico de Segurança do Trabalho, Almoxarife);',
          'Registro em conselho profissional de classe (CREA / CAU / CFT), quando aplicável para aposição em ART/RRT e RDOs;',
          'Foto de perfil (opcional, para identificação visual nas listas de equipe da obra).'
        ]
      },
      {
        subtitle: 'B. Dados Técnicos de Canteiro e Diário de Obras (RDO)',
        text: 'Registrados pelos usuários no exercício de suas atividades na construção:',
        bullets: [
          'Registros de presença de frentes de trabalho e equipes próprias ou terceirizadas (quantitativo por função);',
          'Fotografias de vistorias técnicas, testes de materiais (ex: rompimento de corpo de prova de concreto) e conferência de etapas;',
          'Assinatura digital ou aceite eletrônico em relatórios técnicos de fiscalização e termos de entrega de chaves;',
          'Apontamento de ocorrências de segurança, condições climáticas e paralisações de obra.'
        ]
      },
      {
        subtitle: 'C. Dados de Dispositivo e Metadados Técnicos',
        text: 'Coletados automaticamente para garantir integridade, prevenção a fraudes e estabilidade do aplicativo:',
        bullets: [
          'Modelo do smartphone ou tablet, versão do sistema operacional (Android ou iOS) e identificador único de instalação;',
          'Endereço IP, data e hora exata de sincronização offline/online e relatórios de falhas (crash logs);',
          'Coordenadas de geolocalização (latitude e longitude) capturadas exclusivamente no momento do envio do RDO ou check-in em canteiro.'
        ]
      }
    ]
  },
  {
    id: 'finalidades-bases',
    number: '04',
    title: 'Finalidades e Bases Legais de Tratamento (LGPD)',
    summary: 'Justificativas jurídicas e propósitos operacionais para cada operação de tratamento realizada no aplicativo.',
    content: [
      'Tratamos dados pessoais estritamente respaldados nas hipóteses autorizativas do Artigo 7º da LGPD. Abaixo relacionamos as finalidades correspondentes:'
    ],
    subsections: [
      {
        subtitle: '1. Execução de Contrato de Prestação de Serviços (Art. 7º, V)',
        text: 'Operacionalização das funções do app: emissão de relatórios diários de obra, controle de cronograma, atribuição de tarefas e disponibilização de projetos aos profissionais de campo.'
      },
      {
        subtitle: '2. Cumprimento de Obrigação Legal e Regulatória (Art. 7º, II)',
        text: 'Atendimento a normas regulamentadoras do Ministério do Trabalho e Emprego (como NR-18 - Condições de Segurança e Saúde no Trabalho na Indústria da Construção), arquivamento de vistorias técnicas e comprovação de prazos e solidez da obra (Artigo 618 do Código Civil Brasileiro).'
      },
      {
        subtitle: '3. Legítimo Interesse do Controlador ou Terceiros (Art. 7º, IX)',
        text: 'Garantia da integridade pericial de vistorias, auditoria de medições físicas para liberação de pagamentos, aprimoramento da performance do aplicativo e prevenção a fraudes cadastrais.'
      },
      {
        subtitle: '4. Consentimento Específico (Art. 7º, I)',
        text: 'Utilizado para finalidades acessórias e revogáveis, tais como recebimento de informativos sobre novas ferramentas do Jarvis, eventos de engenharia e pesquisas de satisfação.'
      }
    ]
  },
  {
    id: 'permissoes-dispositivo',
    number: '05',
    title: 'Permissões Específicas do Dispositivo Móvel',
    summary: 'Detalhamento do uso de câmera, localização por GPS, arquivos e notificações em conformidade com Google Play e Apple.',
    content: [
      'O aplicativo Jarvis - Gestão de Obras solicita apenas as permissões de hardware e software do dispositivo que são essenciais para as funcionalidades em campo:',
      '• Uso da Câmera: Utilizada exclusivamente quando o usuário aciona o botão de captura de fotos dentro do fluxo de criação do RDO, vistoria de qualidade ou escaneamento de código de barras/QR Code de insumos.',
      '• Geolocalização (GPS em primeiro plano): Utilizada somente quando o usuário solicita o registro de presença na obra ou quando autoriza a marcação de coordenadas geográficas no relatório fotográfico. Não rastreamos o deslocamento contínuo nem coletamos dados em segundo plano (background).',
      '• Acesso ao Armazenamento/Biblioteca de Fotos: O Jarvis não vasculha sua galeria pessoal; tem acesso apenas aos arquivos que você seleciona ativamente para anexar à obra.',
      'Todas essas permissões podem ser gerenciadas e revogadas pelo usuário a qualquer instante no menu de configurações do Android ou iOS.'
    ],
    callout: {
      type: 'info',
      title: 'Transparência nas Lojas de Aplicativos',
      message: 'Nossas declarações no Google Play Data Safety e no Apple Privacy Nutrition Labels refletem fidedignamente os padrões descritos neste documento.'
    }
  },
  {
    id: 'compartilhamento',
    number: '06',
    title: 'Compartilhamento de Dados com Terceiros',
    summary: 'Casos em que os dados são compartilhados com clientes, fornecedores de infraestrutura em nuvem e órgãos públicos.',
    content: [
      'Não comercializamos, não alugamos e não monetizamos dados pessoais sob qualquer hipótese.',
      'O compartilhamento de informações ocorre estritamente nas seguintes situações operacionais:'
    ],
    subsections: [
      {
        subtitle: 'A. Entre Participantes Autorizados da Mesma Obra',
        text: 'Os dados inseridos no Diário de Obra (nome do técnico, fotos da vistoria, anotações de campo) ficam visíveis aos demais membros autorizados daquela obra específica (como a construtora, o cliente final investidor e a fiscalização contratada).'
      },
      {
        subtitle: 'B. Prestadores de Serviços de Infraestrutura de Nuvem',
        text: 'Utilizamos provedores de computação em nuvem líderes de mercado que garantem conformidade com a ISO/IEC 27001, SOC 2 e LGPD (ex: armazenamento de dados criptografados, servidores de banco de dados e serviços de envio de notificações transacionais).'
      },
      {
        subtitle: 'C. Determinação Legal ou Judicial',
        text: 'Mediante ordem formal de autoridade judicial competente, requisição do Ministério Público do Trabalho (MPT), auditoria do CREA/CAU ou da Autoridade Nacional de Proteção de Dados (ANPD).'
      }
    ]
  },
  {
    id: 'seguranca-retencao',
    number: '07',
    title: 'Segurança da Informação e Prazos de Retenção',
    summary: 'Mecanismos de proteção contra acessos não autorizados e prazos de guarda dos arquivos probatórios de engenharia.',
    content: [
      'Adotamos rigorosas medidas técnicas e administrativas de segurança cibernética para proteger seus dados contra acessos não autorizados, perdas, adulterações ou qualquer forma de tratamento ilícito:'
    ],
    subsections: [
      {
        subtitle: 'Medidas Técnicas de Proteção',
        text: 'Nossos protocolos incluem:',
        bullets: [
          'Criptografia de ponta a ponta em trânsito via protocolo TLS 1.3 com certificados SSL seguros;',
          'Criptografia de dados sensíveis em repouso nos bancos de dados utilizando o padrão AES-256;',
          'Controle de Acesso Baseado em Funções (RBAC), assegurando que cada profissional acesse apenas as obras e módulos atribuídos pelo gestor;',
          'Trilha de auditoria digital (logs) que registra o autor, data e hora de qualquer alteração ou inserção em relatórios de obra;',
          'Rotinas diárias de backup automatizado com testes periódicos de integridade e recuperação de desastres.'
        ]
      },
      {
        subtitle: 'Prazos de Retenção e Guarda dos Dados',
        text: 'Os dados pessoais serão conservados enquanto durar o vínculo contratual ativo e, após seu término, pelos prazos legalmente estabelecidos:',
        bullets: [
          '5 (cinco) anos: Prazo decadencial e prescricional de responsabilidade pela solidez e segurança de edifícios e construções (Artigo 618 do Código Civil Brasileiro);',
          '5 (cinco) anos: Prazos de guarda de documentação trabalhista e fiscal de frentes de obra;',
          '6 (seis) meses: Dados de conexão e registros de acesso à aplicação, conforme exigência do Artigo 15 do Marco Civil da Internet (Lei 12.965/2014);',
          'Findos os prazos legais, os dados serão permanentemente excluídos ou submetidos a processo irreversível de anonimização para estudos estatísticos internos de produtividade.'
        ]
      }
    ]
  },
  {
    id: 'exclusao-conta',
    number: '08',
    title: 'Exclusão de Conta e Eliminação de Dados (Google Play & App Store)',
    summary: 'Instruções passo a passo para encerramento de conta e requerimento de eliminação total de dados pessoais.',
    content: [
      'Em total conformidade com as diretrizes da Google Play Store, da Apple App Store e com o Artigo 18, VI da LGPD, o Jarvis disponibiliza mecanismos simplificados para exclusão de conta e eliminação de dados:'
    ],
    subsections: [
      {
        subtitle: 'Opção 1: Exclusão Direta Dentro do Aplicativo',
        text: 'Você pode solicitar a exclusão a qualquer momento seguindo este caminho no app:',
        bullets: [
          '1. Abra o aplicativo Jarvis - Gestão de Obras;',
          '2. Toque no ícone de "Perfil" ou "Menu" no canto inferior da tela;',
          '3. Selecione "Configurações e Segurança" e em seguida "Privacidade da Conta";',
          '4. Toque no botão vermelho "Excluir Minha Conta e Dados";',
          '5. Confirme sua senha e valide a solicitação com o código enviado por e-mail.'
        ]
      },
      {
        subtitle: 'Opção 2: Solicitação Via Canal Web de Privacidade',
        text: 'Caso não tenha mais o aplicativo instalado em seu dispositivo, utilize o botão "Solicitar Exclusão de Dados" localizado no cabeçalho deste site ou envie um e-mail para dpo@jarvisobras.com.br informando seu e-mail cadastrado.',
        bullets: [
          'Tempo de processamento: Nossa equipe confirma o recebimento em até 48 horas úteis e conclui a desativação e expurgo dos dados em até 15 dias;',
          'Ressalva legal: Documentos técnicos emitidos (ex: RDOs já assinados que compõem o prontuário pericial da edificação) terão os dados do autor preservados em arquivo morto exclusivamente para cumprimento do Art. 618 do Código Civil e normas do CREA/CAU, sendo bloqueados para novos tratamentos.'
        ]
      }
    ],
    callout: {
      type: 'warning',
      title: 'Importante sobre Relatórios Homologados',
      message: 'A exclusão de sua conta revoga imediatamente seu acesso ao sistema. Contudo, relatórios técnicos já homologados e protocolados junto ao cliente da obra constituem acervo probatório da engenharia e não podem ser apagados retroativamente em razão de obrigação legal de guarda.'
    }
  },
  {
    id: 'direitos-lgpd',
    number: '09',
    title: 'Seus Direitos como Titular de Dados (Art. 18 LGPD)',
    summary: 'Catálogo de prerrogativas garantidas por lei e canal expedito para exercício de direitos perante o Jarvis.',
    content: [
      'A Lei Geral de Proteção de Dados (Lei 13.709/2018) confere a você, na qualidade de titular dos dados pessoais, amplo controle sobre as suas informações.',
      'Você pode solicitar confirmação da existência de tratamento, acesso facilitado às suas informações, retificação de dados incorretos, portabilidade para outro sistema de gestão de obras, anonimização de informações excessivas e revogação de consentimentos concedidos anteriormente.',
      'Nenhum valor ou taxa é cobrado para o atendimento a requisições de titulares de dados.'
    ]
  },
  {
    id: 'transferencia-internacional',
    number: '10',
    title: 'Transferência Internacional de Dados',
    summary: 'Condições de segurança na utilização de servidores em nuvem de padrão global.',
    content: [
      'Embora a base principal de operações da Jarvis esteja situada no Brasil, determinados serviços de processamento e redundância em nuvem (ex: servidores da Google Cloud Platform e Amazon Web Services) podem envolver armazenamento em data centers localizados nos Estados Unidos ou na União Europeia.',
      'Nesses casos, a Jarvis assegura que a transferência internacional observe o Artigo 33 da LGPD, contratando apenas fornecedores que adotem Cláusulas-Padrão Contratuais rigorosas, criptografia robusta e padrões de governança de privacidade equivalentes aos da legislação brasileira.'
    ]
  },
  {
    id: 'menores',
    number: '11',
    title: 'Uso por Crianças e Adolescentes',
    summary: 'Restrição etária para operação profissional do software.',
    content: [
      'O aplicativo Jarvis - Gestão de Obras é uma ferramenta exclusivamente voltada ao ambiente profissional da indústria da construção civil.',
      'Não coletamos intencionalmente dados de crianças ou adolescentes menores de 18 anos. Caso seja constatado o cadastro inadvertido de dados de menores sem a devida representação legal e vínculo de jovem aprendiz previsto na legislação trabalhista, tais registros serão prontamente excluídos de nossos servidores.'
    ]
  },
  {
    id: 'alteracoes-contato',
    number: '12',
    title: 'Alterações desta Política e Canais de Contato',
    summary: 'Periodicidade de revisões e meios de contato direto com o suporte e o DPO.',
    content: [
      'Buscando aprimoramento contínuo e em virtude de novas regulamentações expedidas pela ANPD ou novas funcionalidades no aplicativo, esta Política de Privacidade poderá ser atualizada a qualquer tempo.',
      'Sempre que ocorrer uma alteração relevante que impacte a forma como tratamos seus dados, emitiremos um aviso em destaque dentro do aplicativo móvel ou enviaremos um comunicado pelo e-mail cadastrado.',
      'Recomendamos a consulta periódica deste documento para manter-se informado sobre nossas práticas de proteção de dados.'
    ],
    subsections: [
      {
        subtitle: 'Canais Oficiais de Atendimento',
        text: 'Caso tenha qualquer dúvida, sugestão ou reclamação sobre nossa política de proteção de dados:',
        bullets: [
          'Encarregado pelo Tratamento de Dados (DPO): dpo@jarvisobras.com.br',
          'Suporte Técnico e Operacional: suporte@jarvisobras.com.br',
          'Horário de Atendimento: Segunda a Sexta-feira, das 08h00 às 18h00 (Horário de Brasília)',
          'Endereço Postal: Av. Brigadeiro Faria Lima, 3477, 14º Andar - Itaim Bibi, São Paulo - SP, CEP 04538-133'
        ]
      }
    ]
  }
];

export const FREQUENT_QUESTIONS = [
  {
    q: 'O aplicativo Jarvis monitora minha localização quando estou fora da obra?',
    a: 'Não. O Jarvis utiliza o GPS exclusivamente em primeiro plano e apenas no momento em que você clica para realizar uma ação de georreferenciamento (como anexar coordenadas ao Diário de Obra ou fazer check-in de chegada no canteiro). O app não monitora nem grava rotas ou deslocamentos fora do horário de uso ativo.'
  },
  {
    q: 'O que acontece com as fotos tiradas dentro do aplicativo?',
    a: 'As fotos tiradas na função de vistoria e Diário de Obra são compactadas e enviadas de forma criptografada para o servidor da respectiva obra. Elas passam a fazer parte do acervo técnico do projeto e não são compartilhadas com anunciantes ou terceiros desvinculados da obra.'
  },
  {
    q: 'Posso apagar minha conta mesmo se já tiver assinado relatórios técnicos?',
    a: 'Sim, você pode solicitar a exclusão da sua conta de usuário a qualquer instante. Seus dados de acesso, senhas e perfil pessoal serão removidos do sistema. No entanto, sua assinatura e nome que já constem em relatórios diários de obras previamente homologados serão mantidos exclusivamente em arquivo histórico de auditoria por 5 anos, em observância ao Código Civil Brasileiro (Art. 618) e normas do CREA/CAU.'
  },
  {
    q: 'Como solicito uma cópia completa de todos os meus dados?',
    a: 'Basta acessar as Configurações do seu aplicativo móvel Jarvis e clicar em "Exportar Meus Dados" ou abrir um chamado direto com nossa Encarregada de Dados (DPO) através do e-mail dpo@jarvisobras.com.br.'
  }
];
