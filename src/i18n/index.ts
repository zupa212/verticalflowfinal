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

      // Hero Section Enhanced
      'hero.badge': 'Διαθέσιμοι για Νέα Projects',
      'hero.title.main': 'ΜΙΑ ΑΦΟΣΙΩΜΕΝΗ ΟΜΑΔΑ ΣΧΕΔΙΑΣΜΟΥ',
      'hero.title.for': 'ΓΙΑ',
      'hero.title.phrases': ['STARTUPS', 'ΔΗΜΙΟΥΡΓΟΥΣ', 'BRANDS', 'ΟΡΑΜΑΤΙΣΤΕΣ', 'ΙΔΡΥΤΕΣ', 'ΚΑΙΝΟΤΟΜΟΥΣ'],
      'hero.description': 'Δεν απλά σχεδιάζουμε, λύνουμε τις μεγαλύτερες προκλήσεις του brand σας',
      'hero.cta.main': 'Δείτε Πακέτα και Τιμές',
      'hero.features.delivery': '48 Ώρες Παράδοση',
      'hero.features.portal': 'Πρόσβαση σε Private Design Portal',
      'hero.features.unlimited': 'Απεριόριστα Design Requests',

      // Achievements Section
      'achievements.title': 'Τα Επιτεύγματά μας',
      'achievements.subtitle': 'Περίεργοι για αυτό που έχουμε πετύχει; Ας μιλήσει το track record μας.',
      'achievements.video.button': 'και λένε αυτό που βλέπουν!',
      'achievements.brands.number': '95+',
      'achievements.brands.title': 'Brands που Εξυπηρετήσαμε',
      'achievements.brands.description': 'Βοηθώντας επιχειρήσεις σε διάφορους κλάδους να πετύχουν τους στόχους τους',
      'achievements.experience.number': '8',
      'achievements.experience.title': 'Χρόνια Εμπειρίας',
      'achievements.experience.description': 'Φέρνοντας έμπειρη τεχνογνωσία σε κάθε project',
      'achievements.savings.number': '$100,000+',
      'achievements.savings.title': 'Εξοικονομήσαμε για Brands',
      'achievements.savings.description': 'Ώστε να μπορούν να επανεπενδύσουν εκεί που έχει μεγαλύτερη σημασία',

      // Process Section
      'process.title': 'Πόσο απλό μπορεί να είναι να',
      'process.title.line2': 'ολοκληρώσετε τα Projects σας',
      'process.subtitle.line1': 'Απλά απομακρυνθείτε από αυτές τις παραδοσιακές παλιές μεθόδους',
      'process.subtitle.line2': 'πρόσληψης και διαχείρισης και δείτε μόνοι σας',
      'process.card.title': 'Έχετε κάνει',
      'process.card.subtitle': 'το μερίδιό σας',
      'process.card.footer': 'Τώρα είναι η σειρά μας',
      'process.badge.popular': 'Πιο δημοφιλές',
      'process.step1.number': 'Βήμα 1',
      'process.step1.title': 'Επιλέξτε το Πακέτο σας',
      'process.step1.description': 'Επιλέξτε το καλύτερο πακέτο που ταιριάζει στις απαιτήσεις σας',
      'process.step2.number': 'Βήμα 2',
      'process.step2.title': 'Υποβάλετε το Αίτημά σας',
      'process.step2.description': 'Χρησιμοποιήστε το private design portal μας για να υποβάλετε τις design ανάγκες σας.',
      'process.step3.number': 'Βήμα 3',
      'process.step3.title': 'Παραδίδουμε :)',
      'process.step3.description': 'Η ταλαντούχα ομάδα μας παραδίδει σε 2-3 μέρες',

      // Portfolio Section
      'portfolio.subtitle': 'Ακόμα μπερδεμένοι για εμάς',
      'portfolio.title': 'Δείτε τη δουλειά μας',
      'portfolio.project1.title': 'E-commerce Platform',
      'portfolio.project1.category': 'Web Development',
      'portfolio.project1.client': 'TechCorp Θεσσαλονίκη',
      'portfolio.project2.title': 'Brand Identity Design',
      'portfolio.project2.category': 'Design & Branding',
      'portfolio.project2.client': 'Creative Studio',
      'portfolio.project3.title': 'Mobile App Development',
      'portfolio.project3.category': 'App Development',
      'portfolio.project3.client': 'Local Business Hub',
      'portfolio.project4.title': 'Digital Marketing Campaign',
      'portfolio.project4.category': 'Marketing & Reels',
      'portfolio.project4.client': 'Fashion Brand Θεσσαλονίκη',
      'portfolio.view.project': 'Δείτε το Project',

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

      // Hero Section Enhanced
      'hero.badge': 'Available for New Projects',
      'hero.title.main': 'A DEDICATED DESIGN TEAM',
      'hero.title.for': 'FOR',
      'hero.title.phrases': ['STARTUPS', 'CREATORS', 'BRANDS', 'DREAMERS', 'FOUNDERS', 'INNOVATORS'],
      'hero.description': 'We don\'t just design, we solve your brand\'s biggest challenges',
      'hero.cta.main': 'View Plans and Pricing',
      'hero.features.delivery': '48 Hours Delivery',
      'hero.features.portal': 'Access to Private Design Portal',
      'hero.features.unlimited': 'Unlimited Design Requests',

      // Achievements Section
      'achievements.title': 'Our Achievements',
      'achievements.subtitle': 'Curious about what we\'ve accomplished? Let our track record speak for itself.',
      'achievements.video.button': 'and they say what they see!',
      'achievements.brands.number': '95+',
      'achievements.brands.title': 'Brands Served',
      'achievements.brands.description': 'Helping businesses across various industries achieve their goals',
      'achievements.experience.number': '8',
      'achievements.experience.title': 'Years of Experience',
      'achievements.experience.description': 'Bringing seasoned expertise to every project',
      'achievements.savings.number': '$100,000+',
      'achievements.savings.title': 'Saved for Brands',
      'achievements.savings.description': 'So they can reinvest where it matters the most',

      // Process Section
      'process.title': 'How simple it can be to get',
      'process.title.line2': 'your Projects Done',
      'process.subtitle.line1': 'Just step away from those traditional old methods of',
      'process.subtitle.line2': 'hiring plus managing and see for yourself',
      'process.card.title': 'You have done',
      'process.card.subtitle': 'your part',
      'process.card.footer': 'It\'s our turn now',
      'process.badge.popular': 'Most popular',
      'process.step1.number': 'Step 1',
      'process.step1.title': 'Choose Your Plan',
      'process.step1.description': 'Select the best plan that suits your requirement',
      'process.step2.number': 'Step 2',
      'process.step2.title': 'Submit Your Request',
      'process.step2.description': 'Use our private design portal to submit your design needs.',
      'process.step3.number': 'Step 3',
      'process.step3.title': 'We Deliver :)',
      'process.step3.description': 'Our talented team delivers in 2-3 days',

      // Portfolio Section
      'portfolio.subtitle': 'Still confused about us',
      'portfolio.title': 'See our work',
      'portfolio.project1.title': 'E-commerce Platform',
      'portfolio.project1.category': 'Web Development',
      'portfolio.project1.client': 'TechCorp Thessaloniki',
      'portfolio.project2.title': 'Brand Identity Design',
      'portfolio.project2.category': 'Design & Branding',
      'portfolio.project2.client': 'Creative Studio',
      'portfolio.project3.title': 'Mobile App Development',
      'portfolio.project3.category': 'App Development',
      'portfolio.project3.client': 'Local Business Hub',
      'portfolio.project4.title': 'Digital Marketing Campaign',
      'portfolio.project4.category': 'Marketing & Reels',
      'portfolio.project4.client': 'Fashion Brand Thessaloniki',
      'portfolio.view.project': 'View Project',

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