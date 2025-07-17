import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Το μήνυμά σας στάλθηκε!",
      description: "Θα επικοινωνήσουμε μαζί σας σύντομα.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ας <span className="text-primary">Συνεργαστούμε</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Έτοιμοι να πάρετε το brand σας στο επόμενο level; Κλείστε ένα δωρεάν strategy call 
              και ας δούμε πώς μπορούμε να σας βοηθήσουμε.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div {...fadeInUp} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Στείλτε μας Μήνυμα</h2>
                <p className="text-muted-foreground">
                  Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Όνομα *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Το όνομά σας"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Τηλέφωνο</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+30 xxx xxx xxxx"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Εταιρεία</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Η εταιρεία σας"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Service που σας ενδιαφέρει</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 border border-border rounded-md bg-background"
                  >
                    <option value="">Επιλέξτε service...</option>
                    <option value="reels">Reels Creation</option>
                    <option value="social-media">Social Media Management</option>
                    <option value="video-editing">Video Editing</option>
                    <option value="tiktok">TikTok Strategy</option>
                    <option value="personal-branding">Personal Branding</option>
                    <option value="consulting">Strategy Consulting</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Μήνυμα *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Πείτε μας περισσότερα για το project σας..."
                    className="min-h-32"
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Αποστολή Μηνύματος
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
                <p className="text-muted-foreground">
                  Μπορείτε να επικοινωνήσετε μαζί μας και με τους παρακάτω τρόπους.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@verticalflow.gr</p>
                    <p className="text-muted-foreground">panagiotis@verticalflow.gr</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Τηλέφωνο</h3>
                    <p className="text-muted-foreground">+30 xxx xxx xxxx</p>
                    <p className="text-sm text-muted-foreground">Δευτέρα - Παρασκευή: 9:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Τοποθεσία</h3>
                    <p className="text-muted-foreground">Θεσσαλονίκη, Ελλάδα</p>
                    <p className="text-sm text-muted-foreground">Serving clients across Greece</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Ώρες Λειτουργίας</h3>
                    <p className="text-muted-foreground">Δευτέρα - Παρασκευή: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Σάββατο: 10:00 - 14:00</p>
                    <p className="text-sm text-muted-foreground">Κυριακή: Κλειστά</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Instagram className="w-6 h-6 text-primary" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Facebook className="w-6 h-6 text-primary" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Προτιμάτε ένα Strategy Call;
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Κλείστε ένα 30-λεπτο δωρεάν strategy call για να συζητήσουμε τους στόχους σας και πώς μπορούμε να σας βοηθήσουμε.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
            >
              Κλείστε Strategy Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;