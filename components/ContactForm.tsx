import React, { useState } from 'react';
import { useAppContext } from '../App';

type Status = 'idle' | 'loading' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const { t, language } = useAppContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('website');
  const [details, setDetails] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const formData = {
      name,
      email,
      service,
      details,
    };

    try {
      const response = await fetch('https://formspree.io/f/mzzadrbw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setService('website');
        setDetails('');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Formspree submission error:', error);
      setStatus('error');
    }
    
    // Reset the status message after 5 seconds so the user can try again
    setTimeout(() => setStatus('idle'), 5000);
  };
  
  const formClasses = `block w-full px-4 py-3 bg-white dark:bg-brand-brown-light border border-brand-rust/20 dark:border-brand-yellow/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-rust dark:focus:ring-brand-yellow transition duration-200 text-brand-brown dark:text-brand-cream placeholder-brand-brown/50 dark:placeholder-brand-cream/50 ${language === 'am' ? 'text-lg' : ''}`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-brand-cream dark:bg-brand-brown">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-brown dark:text-brand-cream">{t('contactTitle')}</h2>
          <p className={`mt-4 text-lg text-brand-brown/90 dark:text-brand-cream/90 ${language === 'am' ? 'text-xl' : ''}`}>
            {t('contactSubtitle')}
          </p>
        </div>
        <div className="mt-12 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-brown dark:text-brand-cream mb-1">{t('nameLabel')}</label>
              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder={t('namePlaceholder')} required className={formClasses} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-brown dark:text-brand-cream mb-1">{t('emailLabel')}</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('emailPlaceholder')} required className={formClasses} />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-brand-brown dark:text-brand-cream mb-1">{t('serviceLabel')}</label>
              <select id="service" name="service" value={service} onChange={(e) => setService(e.target.value)} required className={formClasses}>
                <option value="website">{t('serviceOptionWebsite')}</option>
                <option value="logo">{t('serviceOptionLogo')}</option>
              </select>
            </div>
            <div>
              <label htmlFor="details" className="block text-sm font-medium text-brand-brown dark:text-brand-cream mb-1">{t('detailsLabel')}</label>
              <textarea id="details" name="details" value={details} onChange={(e) => setDetails(e.target.value)} rows={5} placeholder={t('detailsPlaceholder')} required className={formClasses}></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-brand-rust text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-brand-rust/90 focus:outline-none focus:ring-2 focus:ring-brand-rust focus:ring-offset-2 dark:bg-brand-yellow dark:text-brand-brown dark:hover:bg-brand-yellow/90 dark:focus:ring-offset-brand-brown disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
              >
                {status === 'loading' ? t('submittingButton') : t('submitButton')}
              </button>
            </div>
          </form>
          {status === 'success' && (
            <div className="mt-6 p-4 text-center text-green-800 bg-green-100 dark:text-green-200 dark:bg-green-900/50 rounded-md">
              {t('formSuccess')}
            </div>
          )}
          {status === 'error' && (
            <div className="mt-6 p-4 text-center text-red-800 bg-red-100 dark:text-red-200 dark:bg-red-900/50 rounded-md">
              {t('formError')}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;