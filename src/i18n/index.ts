import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  el: {
    translation: {
      // Navigation
      'nav.home': 'Αρχική',
      'nav.about': 'Σχετικά',
      'nav.services': 'Υπηρεσίες',
      'nav.blog': 'Blog',
      'nav.contact': 'Επικοινωνία',
      'nav.reels': 'Reels Θεσσαλονίκη',
      'nav.social-media': 'Social Media',
      'nav.video-editing': 'Video Editing',
      'nav.tiktok': 'TikTok Marketing',

      // Hero Section
      'hero.title': 'Δημιουργούμε Viral Content που Πουλάει',
      'hero.subtitle': 'Η κορυφαία Digital Agency στη Θεσσαλονίκη για Reels, Social Media Marketing και Personal Branding',
      'hero.cta': 'Ξεκινάμε τώρα',
      'hero.cta.secondary': 'Δείτε Portfolio',

      // Services
      'services.title': 'Οι Υπηρεσίες μας',
      'services.reels.title': 'Reels & Short-Form Videos',
      'services.reels.description': 'Δημιουργία viral Instagram Reels και TikTok videos που αυξάνουν το engagement',
      'services.social-media.title': 'Social Media Management',
      'services.social-media.description': 'Ολοκληρωμένη διαχείριση και στρατηγική για όλα τα social media',
      'services.video-editing.title': 'Video Editing & Production',
      'services.video-editing.description': 'Επαγγελματικό μοντάζ για όλους τους τύπους video content',
      'services.personal-branding.title': 'Personal Branding',
      'services.personal-branding.description': 'Δημιουργία ισχυρής προσωπικής εικόνας στα social media',

      // About
      'about.title': 'Panagiotis Xorianopoulos',
      'about.subtitle': 'Digital Marketing Expert & CEO',
      'about.description': 'Με πάνω από 5 χρόνια εμπειρίας στο Digital Marketing, εξειδικεύομαι στη δημιουργία viral content που φέρνει πραγματικά αποτελέσματα.',

      // Contact
      'contact.title': 'Ας Συνεργαστούμε',
      'contact.subtitle': 'Έτοιμοι να πάρετε το brand σας στο επόμενο επίπεδο;',
      'contact.form.name': 'Όνομα',
      'contact.form.email': 'Email',
      'contact.form.message': 'Μήνυμα',
      'contact.form.submit': 'Αποστολή',

      // Common
      'common.learn-more': 'Μάθετε περισσότερα',
      'common.get-started': 'Ξεκινήστε τώρα',
      'common.view-all': 'Δείτε όλα',
      'common.read-more': 'Διαβάστε περισσότερα',

      // Keywords for SEO
      'keywords.primary': 'digital agency Θεσσαλονίκη, reels Θεσσαλονίκη, social media Θεσσαλονίκη',
      'keywords.secondary': 'video editing Θεσσαλονίκη, personal branding, TikTok Greece, viral videos',
      'keywords.location': 'Θεσσαλονίκη, Ελλάδα, Κεντρική Μακεδονία',
    }
  },
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.blog': 'Blog',
      'nav.contact': 'Contact',
      'nav.reels': 'Reels Thessaloniki',
      'nav.social-media': 'Social Media',
      'nav.video-editing': 'Video Editing',
      'nav.tiktok': 'TikTok Marketing',

      // Hero Section
      'hero.title': 'We Create Viral Content That Sells',
      'hero.subtitle': 'Top Digital Agency in Thessaloniki for Reels, Social Media Marketing & Personal Branding',
      'hero.cta': 'Get Started',
      'hero.cta.secondary': 'View Portfolio',

      // Services
      'services.title': 'Our Services',
      'services.reels.title': 'Reels & Short-Form Videos',
      'services.reels.description': 'Creating viral Instagram Reels and TikTok videos that boost engagement',
      'services.social-media.title': 'Social Media Management',
      'services.social-media.description': 'Complete social media management and strategy for all platforms',
      'services.video-editing.title': 'Video Editing & Production',
      'services.video-editing.description': 'Professional video editing for all types of video content',
      'services.personal-branding.title': 'Personal Branding',
      'services.personal-branding.description': 'Building a strong personal brand presence on social media',

      // About
      'about.title': 'Panagiotis Xorianopoulos',
      'about.subtitle': 'Digital Marketing Expert & CEO',
      'about.description': 'With over 5 years of experience in Digital Marketing, I specialize in creating viral content that delivers real results.',

      // Contact
      'contact.title': 'Let\'s Work Together',
      'contact.subtitle': 'Ready to take your brand to the next level?',
      'contact.form.name': 'Name',
      'contact.form.email': 'Email',
      'contact.form.message': 'Message',
      'contact.form.submit': 'Send Message',

      // Common
      'common.learn-more': 'Learn More',
      'common.get-started': 'Get Started',
      'common.view-all': 'View All',
      'common.read-more': 'Read More',

      // Keywords for SEO
      'keywords.primary': 'digital agency Thessaloniki, reels Thessaloniki, social media Thessaloniki',
      'keywords.secondary': 'video editing Thessaloniki, personal branding, TikTok Greece, viral videos',
      'keywords.location': 'Thessaloniki, Greece, Central Macedonia',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'el', // Default language (Greek)
    fallbackLng: 'el',
    
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;