import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useSEO, generatePageSEO } from '@/hooks/useSEO';
import { generatePersonSchema, generateLocalBusinessSchema } from '@/utils/structuredData';
import { Award, Users, TrendingUp, Target, Star, ArrowRight, Play, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const seoData = generatePageSEO('about');
  
  useSEO({
    ...seoData,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        generatePersonSchema(),
        generateLocalBusinessSchema()
      ]
    }
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                <Star className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Personal Branding Expert</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Panagiotis
                <span className="block text-primary">Xorianopoulos</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Founder & Creative Director του VerticalFlow. Εξειδικευμένος στο digital marketing, 
                personal branding, και viral content creation για την ελληνική αγορά.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span>5+ χρόνια experience στο digital marketing</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>500M+ views generated για clients</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span>200+ successful brand transformations</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Συνεργασία
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  <Play className="w-4 h-4 mr-2" />
                  Δες το Portfolio
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Digital Marketing Expert</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Η Ιστορία μου στο Digital Marketing
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Ξεκίνησα το journey μου στο digital marketing το 2019, όταν συνειδητοποίησα τη δύναμη 
                  του social media marketing. Αρχικά δούλευα με local businesses στη Θεσσαλονίκη, 
                  βοηθώντας τους να αναπτύξουν την online presence τους.
                </p>
                <p>
                  Με την έλευση των short-form videos και ειδικά των Reels, είδα μια τεράστια ευκαιρία. 
                  Εξειδικεύτηκα στη δημιουργία viral content και στην κατανόηση του αλγορίθμου του Instagram και TikTok.
                </p>
                <p>
                  Σήμερα, το VerticalFlow είναι η #1 επιλογή για brands που θέλουν να κατακτήσουν 
                  το social media στην Ελλάδα. Έχουμε δημιουργήσει πάνω από 500 viral videos και βοηθήσει 
                  200+ brands να αυξήσουν τις πωλήσεις τους μέσω του digital marketing.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-card rounded-xl border text-center">
                  <div className="text-2xl font-bold text-primary">500M+</div>
                  <div className="text-sm text-muted-foreground">Total Views</div>
                </div>
                <div className="p-6 bg-card rounded-xl border text-center">
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Brands Helped</div>
                </div>
                <div className="p-6 bg-card rounded-xl border text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="p-6 bg-card rounded-xl border text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized knowledge που φέρνει real results
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Play className="w-8 h-8" />,
                title: "Viral Content Creation",
                description: "Expert στη δημιουργία content που γίνεται viral στο Instagram, TikTok, και YouTube."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Personal Branding Strategy",
                description: "Βοηθώ entrepreneurs και professionals να χτίσουν strong personal brands."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Growth Marketing",
                description: "Data-driven strategies που πραγματοποιούν sustainable growth για brands."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Social Media Management",
                description: "Complete social media management που μετατρέπει followers σε customers."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Content Strategy",
                description: "Strategic planning για content που resonates με το target audience."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Brand Development",
                description: "Comprehensive brand development από strategy μέχρι visual identity."
              }
            ].map((expertise, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-4">{expertise.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{expertise.title}</h3>
                <p className="text-muted-foreground">{expertise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Η Αποστολή μου
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Να βοηθήσω κάθε brand και professional στην Ελλάδα να αξιοποιήσει πλήρως τη δύναμη 
              του digital marketing. Πιστεύω ότι με τη σωστή στρατηγική και execution, κάθε business 
              μπορεί να πετύχει extraordinary results στο online space.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Results-Driven</h3>
                <p className="text-sm text-muted-foreground">Κάθε strategy στοχεύει σε measurable results και ROI.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Client-Focused</h3>
                <p className="text-sm text-muted-foreground">Η επιτυχία των clients μου είναι η δική μου επιτυχία.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">Πάντα ahead of trends και new technologies.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ας Συνεργαστούμε!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Είστε έτοιμοι να πάρετε το brand σας στο επόμενο level? Ας μιλήσουμε για το πώς μπορώ να σας βοηθήσω.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Κλείστε Συνάντηση
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Στείλτε Email
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;