export interface SectionContent {
  id: string;
  number: string;
  title: string;
  summary: string;
  content: string[];
  subsections?: {
    subtitle: string;
    text: string | string[];
    bullets?: string[];
  }[];
  callout?: {
    type: 'info' | 'warning' | 'tip' | 'shield';
    title: string;
    message: string;
  };
}

export interface AppPermission {
  id: string;
  name: string;
  technicalName: string;
  platform: 'Android / iOS' | 'Android' | 'iOS';
  purpose: string;
  mandatory: boolean;
  userControl: string;
  iconName: string;
}

export interface LgpdRight {
  article: string;
  title: string;
  description: string;
  howToExercise: string;
}

export interface DeletionRequestData {
  fullName: string;
  email: string;
  companyOrProject: string;
  phone: string;
  reason: string;
  deleteOption: 'all_data' | 'account_only' | 'revoke_consent';
}

export interface DpoInquiryData {
  fullName: string;
  email: string;
  inquiryType: 'duvida' | 'acesso_dados' | 'retificacao' | 'revogacao' | 'incidente';
  message: string;
}
