import React, { useState, useEffect, createContext, useCallback, useContext } from 'react';
import { translations } from './localization';
import type { Language, Theme, AppContextType } from './types';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export const AppContext = createContext<AppContextType | null>(null);

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        return 'dark';
      }
    }
    return 'light';
  });

  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const t = useCallback((key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  const contextValue: AppContextType = {
    theme,
    setTheme,
    language,
    setLanguage,
    t,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className={`min-h-screen text-brand-brown dark:text-brand-cream ${language === 'am' ? 'font-amharic' : 'font-sans'}`}>
        <Header />
        <main>
          <Hero />
          <Services />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export default App;