import React from 'react';
import { useAppContext } from '../App';

const Hero: React.FC = () => {
  const { t, language } = useAppContext();

  return (
    <section id="home" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`text-4xl md:text-6xl font-extrabold text-brand-brown dark:text-white mb-4 leading-tight ${language === 'am' ? 'leading-normal' : ''}`}>
          {t('heroTitle')}
        </h1>
        <p className={`mt-4 max-w-3xl mx-auto text-lg md:text-xl text-brand-brown/90 dark:text-brand-cream/90 ${language === 'am' ? 'text-2xl leading-relaxed' : ''}`}>
          {t('heroSubtitle')}
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block bg-brand-rust text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-brand-rust/90 focus:outline-none focus:ring-2 focus:ring-brand-rust focus:ring-offset-2 dark:bg-brand-yellow dark:text-brand-brown dark:hover:bg-brand-yellow/90 dark:focus:ring-offset-brand-brown transition-transform transform hover:scale-105"
          >
            {t('heroCTA')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;