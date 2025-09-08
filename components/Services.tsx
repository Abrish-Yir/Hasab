import React from 'react';
import { useAppContext } from '../App';

const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="bg-brand-cream dark:bg-brand-brown p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-rust/10 dark:bg-brand-yellow/10 text-brand-rust dark:text-brand-yellow mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-brand-brown dark:text-brand-cream mb-3">{title}</h3>
    <p className="text-brand-brown/90 dark:text-brand-cream/90 leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const { t } = useAppContext();
  
  const WebIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>
  );

  const PenToolIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
  );


  return (
    <section id="services" className="py-20 sm:py-28 bg-white dark:bg-brand-brown-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-brown dark:text-brand-cream">{t('servicesTitle')}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ServiceCard 
            title={t('websiteDesignTitle')} 
            description={t('websiteDesignDesc')}
            icon={<WebIcon />}
          />
          <ServiceCard 
            title={t('logoDesignTitle')} 
            description={t('logoDesignDesc')}
            icon={<PenToolIcon />}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;