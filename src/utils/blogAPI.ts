import { BlogPost } from '@/types/blog';

// Local storage keys
const BLOG_POSTS_KEY = 'blog_posts';
const BLOG_CATEGORIES_KEY = 'blog_categories';

// Initialize with default data if empty
const initializeBlogData = () => {
  if (typeof window === 'undefined') return;

  const existingPosts = localStorage.getItem(BLOG_POSTS_KEY);
  if (!existingPosts) {
    const defaultPosts = [
      {
        id: '1',
        title: 'Πώς να Δημιουργήσετε Viral Reels στη Θεσσαλονίκη το 2025',
        slug: 'viral-reels-thessaloniki-2025',
        excerpt: 'Ανακαλύψτε τα μυστικά για να δημιουργήσετε viral Instagram Reels που θα αυξήσουν την επισκεψιμότητα της επιχείρησής σας στη Θεσσαλονίκη.',
        content: `# Πώς να Δημιουργήσετε Viral Reels στη Θεσσαλονίκη το 2025

Στη σημερινή ψηφιακή εποχή, τα **Instagram Reels** έχουν γίνει το πιο ισχυρό εργαλείο για digital marketing στη Θεσσαλονίκη. Ως leading digital agency, έχουμε βοηθήσει δεκάδες τοπικές επιχειρήσεις να αυξήσουν την online παρουσία τους μέσω strategically crafted Reels.

## Γιατί τα Reels είναι Κρίσιμα για την Επιχείρησή σας

Τα Instagram Reels έχουν **500% περισσότερο engagement** από τις κλασικές φωτογραφίες. Στη Θεσσαλονίκη, βλέπουμε συνεχώς local businesses να διπλασιάζουν τους followers τους σε λιγότερο από έναν μήνα.

### Τα 5 Βασικά Στοιχεία ενός Viral Reel

1. **Hook που Σε Κολλάει**: Τα πρώτα 3 δευτερόλεπτα καθορίζουν τα πάντα
2. **Trend Integration**: Χρησιμοποιούμε trending sounds και effects
3. **Local Connection**: Αναφορές στη Θεσσαλονίκη και τοπικές αναφορές
4. **Quality Production**: Professional lighting και editing
5. **Strategic Hashtags**: Mix από popular και niche hashtags

## Case Study: Local Restaurant Success

Πρόσφατα δουλέψαμε με ένα εστιατόριο στο κέντρο της Θεσσαλονίκης που είδε **300% αύξηση** στις κρατήσεις μετά από μια strategic Reel campaign που δημιουργήσαμε.

*Θέλετε να μάθετε περισσότερα για το πώς μπορούμε να βοηθήσουμε την επιχείρησή σας; Επικοινωνήστε μαζί μας σήμερα!*`,
        featuredImage: '/assets/portfolio-1.jpg',
        author: {
          name: 'Digital Marketing Team',
          avatar: '/assets/portfolio-1.jpg'
        },
        category: 'Digital Marketing',
        tags: ['Reels Θεσσαλονίκη', 'Instagram Marketing', 'Social Media', 'Viral Content'],
        publishedAt: '2025-01-15',
        readingTime: 5,
        seo: {
          metaTitle: 'Viral Reels Θεσσαλονίκη 2025 | Οδηγός Digital Marketing',
          metaDescription: 'Μάθετε πώς να δημιουργήσετε viral Instagram Reels στη Θεσσαλονίκη. Proven στρατηγικές από το leading digital agency της πόλης.',
          keywords: ['Reel Θεσσαλονίκη', 'viral reels', 'Instagram marketing Thessaloniki', 'social media marketing']
        }
      },
      {
        id: '2',
        title: 'Insights & Tips: Οδηγός για Digital Success το 2025',
        slug: 'insights-tips-digital-success-2025',
        excerpt: 'Εξερευνήστε τα τελευταία trends και insights για digital marketing success το 2025. Proven strategies από το VerticalFlow team.',
        content: `# Insights & Tips: Οδηγός για Digital Success το 2025

Καλώς ήρθατε στο **Insights & Tips**, το νέο μας blog section όπου μοιραζόμαστε τα πιο valuable insights και strategies για digital success το 2025.

## Τα Πιο Σημαντικά Trends το 2025

### 1. AI-Powered Marketing
Η Artificial Intelligence έχει γίνει το game-changer στο digital marketing. Χρησιμοποιούμε AI για:
- **Personalized Content Creation**
- **Predictive Analytics**
- **Automated Customer Service**
- **Smart Ad Targeting**

### 2. Video-First Strategy
Το video content κυριαρχεί πλέον:
- **Short-form videos** (Reels, TikTok)
- **Live streaming** για engagement
- **Interactive videos** με polls και Q&A
- **360° experiences** για immersive content

### 3. Voice Search Optimization
Με την αύξηση των smart speakers, το voice search είναι κρίσιμο:
- **Long-tail keywords** optimization
- **Local SEO** για voice queries
- **Featured snippets** targeting
- **Conversational content** creation

## Proven Strategies από το VerticalFlow

### Content Strategy Framework
1. **Research Phase**: Market analysis και competitor research
2. **Creation Phase**: High-quality, valuable content
3. **Distribution Phase**: Multi-channel promotion
4. **Analysis Phase**: Performance tracking και optimization

### Social Media Mastery
- **Platform-specific content** για κάθε social network
- **Consistent posting schedule** με optimal timing
- **Community engagement** και user-generated content
- **Influencer partnerships** για authentic reach

## Tools & Resources

### Essential Tools το 2025
- **Canva Pro** για professional design
- **Hootsuite** για social media management
- **Google Analytics 4** για advanced insights
- **ChatGPT** για content ideation
- **Trello** για project management

### Free Resources
- **Google Trends** για keyword research
- **Answer the Public** για content ideas
- **Unsplash** για high-quality images
- **Grammarly** για content quality

## Success Metrics το 2025

### Key Performance Indicators
- **Engagement Rate**: Comments, shares, saves
- **Conversion Rate**: Click-throughs και sales
- **Brand Awareness**: Reach και impressions
- **Customer Lifetime Value**: Repeat purchases
- **ROI**: Return on marketing investment

## Weekly Tips

### This Week's Tip: Optimize for Mobile-First
Με το 70% του web traffic να έρχεται από mobile devices, το mobile-first design είναι must-have:
- **Fast loading times** (under 3 seconds)
- **Touch-friendly interfaces**
- **Responsive design** για όλα τα screen sizes
- **Mobile-optimized content** με readable fonts

*Μείνετε tuned για περισσότερα insights και tips κάθε εβδομάδα!*

---

**Επικοινωνήστε μαζί μας** για personalized digital strategy consultation.`,
        featuredImage: '/assets/portfolio-3.jpg',
        author: {
          name: 'VerticalFlow Team',
          avatar: '/assets/portfolio-1.jpg'
        },
        category: 'Insights & Tips',
        tags: ['Digital Marketing 2025', 'AI Marketing', 'Video Strategy', 'Mobile Optimization', 'Social Media'],
        publishedAt: new Date().toISOString().split('T')[0], // Today's date
        readingTime: 8,
        seo: {
          metaTitle: 'Insights & Tips: Digital Success Guide 2025 | VerticalFlow',
          metaDescription: 'Εξερευνήστε τα τελευταία digital marketing trends και strategies για 2025. Proven insights από το VerticalFlow team.',
          keywords: ['Digital Marketing 2025', 'AI Marketing', 'Video Strategy', 'Social Media Tips', 'Digital Success']
        }
      }
    ];
    localStorage.setItem(BLOG_POSTS_KEY, JSON.stringify(defaultPosts));
  }

  const existingCategories = localStorage.getItem(BLOG_CATEGORIES_KEY);
  if (!existingCategories) {
    const defaultCategories = [
      {
        id: '1',
        name: 'Digital Marketing',
        slug: 'digital-marketing',
        description: 'Στρατηγικές και τακτικές για online marketing success',
        count: 12
      },
      {
        id: '2', 
        name: 'Web Development',
        slug: 'web-development',
        description: 'Modern web development techniques και best practices',
        count: 8
      },
      {
        id: '3',
        name: 'Business Strategy',
        slug: 'business-strategy', 
        description: 'Επιχειρηματικές στρατηγικές για digital transformation',
        count: 6
      },
      {
        id: '4',
        name: 'Insights & Tips',
        slug: 'insights-tips',
        description: 'Weekly insights και practical tips για digital success',
        count: 1
      }
    ];
    localStorage.setItem(BLOG_CATEGORIES_KEY, JSON.stringify(defaultCategories));
  }
};

// Blog API functions
export const blogAPI = {
  // Get all blog posts
  getAllPosts: (): BlogPost[] => {
    if (typeof window === 'undefined') return [];
    initializeBlogData();
    const posts = localStorage.getItem(BLOG_POSTS_KEY);
    return posts ? JSON.parse(posts) : [];
  },

  // Get post by slug
  getPostBySlug: (slug: string): BlogPost | null => {
    const posts = blogAPI.getAllPosts();
    return posts.find(post => post.slug === slug) || null;
  },

  // Get latest posts
  getLatestPosts: (limit: number = 3): BlogPost[] => {
    const posts = blogAPI.getAllPosts();
    return posts
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, limit);
  },

  // Create new post
  createPost: (post: Omit<BlogPost, 'id' | 'publishedAt'>): BlogPost => {
    const posts = blogAPI.getAllPosts();
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString(),
      publishedAt: new Date().toISOString().split('T')[0]
    };
    
    posts.unshift(newPost); // Add to beginning (latest first)
    localStorage.setItem(BLOG_POSTS_KEY, JSON.stringify(posts));
    return newPost;
  },

  // Update post
  updatePost: (id: string, updates: Partial<BlogPost>): BlogPost | null => {
    const posts = blogAPI.getAllPosts();
    const index = posts.findIndex(post => post.id === id);
    
    if (index === -1) return null;
    
    posts[index] = { ...posts[index], ...updates };
    localStorage.setItem(BLOG_POSTS_KEY, JSON.stringify(posts));
    return posts[index];
  },

  // Delete post
  deletePost: (id: string): boolean => {
    const posts = blogAPI.getAllPosts();
    const filteredPosts = posts.filter(post => post.id !== id);
    
    if (filteredPosts.length === posts.length) return false;
    
    localStorage.setItem(BLOG_POSTS_KEY, JSON.stringify(filteredPosts));
    return true;
  },

  // Get categories
  getCategories: () => {
    if (typeof window === 'undefined') return [];
    initializeBlogData();
    const categories = localStorage.getItem(BLOG_CATEGORIES_KEY);
    return categories ? JSON.parse(categories) : [];
  },

  // Search posts
  searchPosts: (query: string): BlogPost[] => {
    const posts = blogAPI.getAllPosts();
    const lowercaseQuery = query.toLowerCase();
    
    return posts.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }
};

// Initialize data on client side
if (typeof window !== 'undefined') {
  initializeBlogData();
}
