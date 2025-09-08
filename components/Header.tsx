
import React from 'react';
import { useAppContext } from '../App';
import { SunIcon, MoonIcon, GlobeIcon, LogoIcon } from '../constants';

const Header: React.FC = () => {
  const { theme, setTheme, language, setLanguage, t } = useAppContext();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'am' : 'en');
  };

  return (
    <header className="sticky top-0 bg-brand-cream/80 dark:bg-brand-brown/80 backdrop-blur-lg shadow-sm z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
             <a href="#home" className="flex items-center space-x-3" aria-label={t('appName') + ' Homepage'}>
              <LogoIcon className="h-8 w-auto" />
              <span className="text-xl font-bold text-brand-rust dark:text-brand-yellow">{t('appName')}</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              title={t('toggleLanguage')}
              className="p-2 rounded-full text-brand-brown dark:text-brand-cream hover:bg-brand-rust/10 dark:hover:bg-brand-yellow/10 transition-colors"
            >
              <GlobeIcon className="w-6 h-6" />
            </button>
            <button
              onClick={toggleTheme}
              title={t('toggleTheme')}
              className="p-2 rounded-full text-brand-brown dark:text-brand-cream hover:bg-brand-rust/10 dark:hover:bg-brand-yellow/10 transition-colors"
            >
              {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
