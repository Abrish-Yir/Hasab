import type { Translations } from './types';

interface AllTranslations {
  en: Translations;
  am: Translations;
}

export const translations: AllTranslations = {
  en: {
    // Header
    appName: 'Hasab',
    toggleTheme: 'Toggle Theme',
    toggleLanguage: 'Switch to Amharic',

    // Hero
    heroTitle: 'Bringing Your Vision to Life, For Free.',
    heroSubtitle: 'We are a non-profit collective of designers and developers dedicated to helping other non-profits and startups by providing free, professional websites and logos.',
    heroCTA: 'Request a Project',

    // Services
    servicesTitle: 'What We Offer',
    websiteDesignTitle: 'Free Website Design',
    websiteDesignDesc: 'We build modern, responsive, and beautiful websites to help you establish a strong online presence.',
    logoDesignTitle: 'Free Logo Design',
    logoDesignDesc: 'Our talented designers will create a unique and memorable logo that represents your brand identity.',

    // Contact Form
    contactTitle: 'Start Your Project Today',
    contactSubtitle: 'Fill out the form below to tell us about your project. Our team will get back to you within a few days.',
    nameLabel: 'Your Name',
    namePlaceholder: 'e.g., Jane Doe',
    emailLabel: 'Your Email',
    emailPlaceholder: 'e.g., jane.doe@example.com',
    serviceLabel: 'Select a Service',
    serviceOptionWebsite: 'Website Design',
    serviceOptionLogo: 'Logo Design',
    detailsLabel: 'Project Details',
    detailsPlaceholder: 'Tell us about your organization and what you\'re looking for...',
    submitButton: 'Send Request',
    submittingButton: 'Submitting...',
    formSuccess: 'Thank you! Your request has been sent. We will contact you soon.',
    formError: 'An error occurred. Please try again.',
    
    // Footer
    footerText: '© 2024 Hasab. All Rights Reserved.',
  },
  am: {
    // Header
    appName: 'ሀሳብ',
    toggleTheme: 'ገጽታ ቀይር',
    toggleLanguage: 'ወደ እንግሊዝኛ ቀይር',

    // Hero
    heroTitle: 'ራዕይዎን በነጻ ወደ እውነታ እንቀይራለን።',
    heroSubtitle: 'እኛ ለትርፍ ያልተቋቋሙ ድርጅቶችን እና ጀማሪዎችን በነጻ ፕሮፌሽናል ድረ-ገጾች እና አርማዎች በመርዳት ላይ ያተኮረ የዲዛይነሮች እና የገንቢዎች ስብስብ ነን።',
    heroCTA: 'ፕሮጀክት ይጠይቁ',

    // Services
    servicesTitle: 'የምንሰጣቸው አገልግሎቶች',
    websiteDesignTitle: 'ነጻ የድረ-ገጽ ንድፍ',
    websiteDesignDesc: 'ጠንካራ የመስመር ላይ ተገኝነት እንዲኖርዎት የሚያግዙ ዘመናዊ፣ ምላሽ ሰጪ እና የሚያምሩ ድረ-ገጾችን እንገነባለን።',
    logoDesignTitle: 'ነጻ የአርማ ንድፍ',
    logoDesignDesc: 'የእኛ ጎበዝ ዲዛይነሮች የእርስዎን የምርት መለያ የሚወክል ልዩ እና የማይረሳ አርማ ይፈጥራሉ።',

    // Contact Form
    contactTitle: 'ፕሮጀክትዎን ዛሬ ይጀምሩ',
    contactSubtitle: 'ስለ ፕሮጀክትዎ ለመንገር ከታች ያለውን ቅጽ ይሙሉ። ቡድናችን በጥቂት ቀናት ውስጥ ያነጋግርዎታል።',
    nameLabel: 'ስምዎ',
    namePlaceholder: 'ለምሳሌ፣ አለሙ ከበደ',
    emailLabel: 'የእርስዎ ኢሜይል',
    emailPlaceholder: 'ለምሳሌ፣ alemu.kebede@example.com',
    serviceLabel: 'አገልግሎት ይምረጡ',
    serviceOptionWebsite: 'የድረ-ገጽ ንድፍ',
    serviceOptionLogo: 'የአርማ ንድፍ',
    detailsLabel: 'የፕሮጀክት ዝርዝሮች',
    detailsPlaceholder: 'ስለ ድርጅትዎ እና ስለሚፈልጉት ነገር ይንገሩን...',
    submitButton: 'ጥያቄ ላክ',
    submittingButton: 'በመላክ ላይ...',
    formSuccess: 'እናመሰግናለን! ጥያቄዎ ተልኳል። በቅርቡ እናገኝዎታለን።',
    formError: 'ስህተት ተከስቷል። እባክዎ እንደገና ይሞክሩ።',

    // Footer
    footerText: '© 2024 ሀሳብ። ሁሉም መብቶች የተጠበቁ ናቸው።',
  },
};