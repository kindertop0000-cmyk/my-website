export type Language = 'de' | 'en' | 'ar' | 'tr';
export interface Content {
  nav: {
    home: string;
    services: string;
    about: string;
    projects: string;
    testimonials: string;
    contact: string;
    automation: string;
    getQuote: string;
  };
  hero: any;
  strategy: {
    title: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
  };
  about: any;
  services: any;
  projects: any;
  testimonials: any;
  core: {
    title: string;
    subtitle: string;
    features: {
      id: string;
      title: string;
      desc: string;
      icon: string;
    }[];
  };
  contact: any;
  footer: any;
  automation: {
    title: string;
    subtitle: string;
    description: string;
    features: { title: string; desc: string }[];
    cta: string;
  };
}
