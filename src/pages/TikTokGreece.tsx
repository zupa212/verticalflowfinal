import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { motion } from 'framer-motion';
import { Music, TrendingUp, Target, Users, Video, ArrowRight, Zap, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TikTokGreece = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const faqData = [
    {
      question: "Γιατί είναι σημαντικό το TikTok για τις επιχειρήσεις στην Ελλάδα;",
      answer: "Το TikTok έχει πάνω από 2.5 εκατομμύρια active users στην Ελλάδα, με 70% να είναι κάτω των 34 ετών. Οι επιχειρήσεις που είναι active στο TikTok βλέπουν 400% περισσότερο engagement από άλλες πλατφόρμες και προσεγγίζουν younger demographics."
    },
    {
      question: "Πώς λειτουργεί ο αλγόριθμος του TikTok στην Ελλάδα;",
      answer: "Ο TikTok algorithm στην Ελλάδα δίνει προτεραιότητα σε: completion rate (πόσοι βλέπουν το video μέχρι το τέλος), engagement (likes, comments, shares), trending sounds και hashtags, και user interactions. Δημιουργούμε content που optimizes όλα αυτά τα factors."
    },
    {
      question: "Τι είδους TikTok videos δουλεύουν καλύτερα στην ελληνική αγορά;",
      answer: "Στην Ελλάδα λειτουργούν εξαιρετικά: educational content (how-to tutorials), behind-the-scenes videos, Greek comedy/memes, local trends και challenges, food content, lifestyle videos, και authentic personal stories που συνδέονται με την ελληνική κουλτούρα."
    },
    {
      question: "Πόσο συχνά πρέπει να ποστάρω στο TikTok;",
      answer: "Για optimal results στο TikTok, προτείνουμε 3-5 videos την εβδομάδα minimum, με consistency να είναι key. Τα brands που ποστάρουν καθημερινά βλέπουν 2x περισσότερο growth. Δημιουργούμε content calendars που maintain την consistency."
    },
    {
      question: "Μπορείτε να με βοηθήσετε να γίνω viral στο TikTok;",
      answer: "Ενώ δεν μπορούμε να εγγυηθούμε viral content, χρησιμοποιούμε data-driven strategies που αυξάνουν σημαντικά τις πιθανότητες: trending audio analysis, optimal posting times, hashtag research, και viral content patterns analysis. Οι clients μας έχουν 85% success rate σε views πάνω από 10K."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                <Music className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">TikTok Agency Greece</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                TikTok Videos
                <span className="block text-primary">που γίνονται Viral</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Δημιουργούμε TikTok content που κατακτά το For You Page και φέρνει millions of views. 
                Εξειδικευμένοι στον ελληνικό TikTok algorithm και τα local trends.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Δωρεάν TikTok Strategy
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  <Video className="w-4 h-4 mr-2" />
                  Viral Examples
                </Button>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100M+</div>
                  <div className="text-sm text-muted-foreground">Views Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Viral Videos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">85%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="w-16 h-20 bg-gradient-to-b from-primary to-primary/50 rounded-lg flex items-center justify-center">
                      <Music className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-16 h-20 bg-gradient-to-b from-secondary to-secondary/50 rounded-lg flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="w-16 h-20 bg-gradient-to-b from-accent to-accent/50 rounded-lg flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-16 h-20 bg-gradient-to-b from-primary/80 to-primary/30 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              TikTok Services Greece
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete TikTok strategy που κάνει το brand σας να ξεχωρίσει στο For You Page
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Video className="w-8 h-8" />,
                title: "Viral Video Creation",
                description: "Δημιουργούμε TikTok videos που leverage τα latest trends και optimize για maximum reach."
              },
              {
                icon: <Music className="w-8 h-8" />,
                title: "Trend Research & Analysis",
                description: "Daily monitoring των Greek TikTok trends και viral sounds για να είστε πάντα ahead."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Algorithm Optimization",
                description: "Στρατηγικές που εκμεταλλεύονται τον TikTok algorithm για organic growth."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Influencer Partnerships",
                description: "Συνεργασίες με top Greek TikTokers για αυθεντικό content και wider reach."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Hashtag Strategy",
                description: "Research και optimization των hashtags που δουλεύουν στην ελληνική αγορά."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Performance Analytics",
                description: "Detailed analytics και insights για continuous optimization της TikTok strategy σας."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Greek TikTok Trends Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Greek TikTok Trends που Δουλεύουν
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Τα trends και strategies που κάνουν τη διαφορά στην ελληνική TikTok community
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                trend: "Greek Comedy",
                description: "Humorous content που σχετίζεται με ελληνικές καταστάσεις και cultural references.",
                engagement: "+320%"
              },
              {
                trend: "Local Food Content",
                description: "Traditional Greek recipes, street food, και food challenges που γίνονται viral.",
                engagement: "+280%"
              },
              {
                trend: "Dance Challenges",
                description: "Greek adaptations των international dance trends και original Greek choreographies.",
                engagement: "+350%"
              },
              {
                trend: "Educational Content",
                description: "Quick tutorials, life hacks, και educational videos στα ελληνικά.",
                engagement: "+250%"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-xl border"
              >
                <div className="text-2xl font-bold text-primary mb-2">{item.engagement}</div>
                <h3 className="text-lg font-semibold mb-2">{item.trend}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Greek TikTok Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results από brands που εμπιστεύτηκαν τη TikTok strategy μας
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                brand: "Local Restaurant Chain",
                results: "5M views σε 1 μήνα",
                description: "Food challenge video που έγινε viral και αύξησε τις πωλήσεις κατά 150%.",
                metric: "150% Sales Increase"
              },
              {
                brand: "Fashion Brand",
                results: "50K followers σε 3 εβδομάδες",
                description: "Styling videos με Greek influencers που πραγματοποίησαν massive growth.",
                metric: "+2M Total Views"
              },
              {
                brand: "Tech Startup",
                results: "200K video views average",
                description: "Educational content για tech tips που έκανε το brand authority στην Ελλάδα.",
                metric: "85% Engagement Rate"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border"
              >
                <div className="text-sm text-primary font-medium mb-2">{story.brand}</div>
                <h3 className="text-xl font-bold mb-2">{story.results}</h3>
                <p className="text-muted-foreground mb-4">{story.description}</p>
                <div className="text-lg font-semibold text-primary">{story.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        title="Συχνές Ερωτήσεις για TikTok Greece"
        subtitle="Όλα όσα θέλετε να ξέρετε για τα TikTok services μας στην Ελλάδα"
        faqs={faqData}
      />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready να Κατακτήσετε το Greek TikTok;
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ας δημιουργήσουμε viral TikTok content που θα κάνει το brand σας famous στην Ελλάδα.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
            >
              Δωρεάν TikTok Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TikTokGreece;