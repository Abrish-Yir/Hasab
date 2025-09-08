import React from 'react';
import { useAppContext } from '../App';

const Footer: React.FC = () => {
  const { t } = useAppContext();

  return (
    <footer className="bg-brand-cream dark:bg-brand-brown border-t border-brand-rust/20 dark:border-brand-yellow/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-sm text-brand-brown/70 dark:text-brand-cream/70">
          {t('footerText')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;