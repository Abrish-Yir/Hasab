
export type Language = 'en' | 'am';
export type Theme = 'light' | 'dark';

export interface Translations {
  [key: string]: string;
}

export interface AppContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  t: (key: string) => string;
}
