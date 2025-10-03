"use client";

import React from 'react';
import FAQ from '@/components/FAQ';
import { motion } from 'framer-motion';
import { Smartphone, TrendingUp, Users, BarChart3, Star, ArrowRight, Instagram, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Page() {
	const fadeInUp = {
		initial: { opacity: 0, y: 30 },
		whileInView: { opacity: 1, y: 0 },
		transition: { duration: 0.6 }
	};

	const faqData = [
		{ question: 'Τι περιλαμβάνει το Social Media Management στη Θεσσαλονίκη;', answer: 'Περιλαμβάνει strategy & planning, content creation (posts, stories, reels), community management, διαφημίσεις Facebook/Instagram, analytics & reporting, και influencer collaborations. Όλα προσαρμοσμένα στην ελληνική αγορά.' },
		{ question: 'Ποια social media platforms διαχειριζόμαστε;', answer: 'Instagram, Facebook, TikTok, LinkedIn, YouTube, Twitter. Επικεντρωνόμαστε στα platforms που έχουν τη μεγαλύτερη αποδοτικότητα για την επιχείρησή σας στην ελληνική αγορά.' },
		{ question: 'Πόσο συχνά δημοσιεύετε content;', answer: 'Ανάλογα με το πακέτο: Basic (3-5 posts/εβδομάδα), Professional (1 post/ημέρα + stories), Premium (2+ posts/ημέρα + stories + reels). Κάθε πρόγραμμα προσαρμόζεται στις ανάγκες σας.' },
		{ question: 'Πώς μετράτε την επιτυχία των social media campaigns;', answer: 'Παρακολουθούμε KPIs όπως engagement rate, reach, impressions, website traffic, leads generated, sales attribution, και brand awareness. Λαμβάνετε λεπτομερή monthly reports.' },
		{ question: 'Μπορείτε να διαχειριστείτε διαφημίσεις στο Facebook και Instagram;', answer: 'Ναι! Δημιουργούμε και optimizing Facebook & Instagram ads campaigns με focus στο ROI. Από brand awareness μέχρι conversion campaigns για την ελληνική αγορά.' }
	];

	return (
		<div className="min-h-screen bg-background">
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
				<div className="container mx-auto px-4 py-20">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<motion.div {...fadeInUp} className="space-y-8">
							<div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
								<Smartphone className="w-4 h-4 text-primary mr-2" />
								<span className="text-sm font-medium text-primary">Social Media Agency Θεσσαλονίκη</span>
							</div>
							<h1 className="text-4xl md:text-6xl font-bold leading-tight">Social Media<span className="block text-primary">που Πουλάει</span></h1>
							<p className="text-xl text-muted-foreground max-w-lg">Comprehensive social media management που μετατρέπει followers σε customers. Εξειδικευμένοι στην ελληνική αγορά και τους local trends.</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button size="lg" className="bg-primary hover:bg-primary/90">Δωρεάν Social Media Audit<ArrowRight className="w-4 h-4 ml-2" /></Button>
								<Button variant="outline" size="lg">Δες Success Stories</Button>
							</div>
							<div className="flex items-center gap-8 pt-4">
								<div className="text-center"><div className="text-2xl font-bold text-primary">200+</div><div className="text-sm text-muted-foreground">Brands Managed</div></div>
								<div className="text-center"><div className="text-2xl font-bold text-primary">50M+</div><div className="text-sm text-muted-foreground">Impressions/Month</div></div>
								<div className="text-center"><div className="text-2xl font-bold text-primary">300%</div><div className="text-sm text-muted-foreground">Avg. Growth</div></div>
							</div>
						</motion.div>
						<motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative">
							<div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
								<div className="grid grid-cols-2 gap-4">
									<Instagram className="w-16 h-16 text-primary" />
									<MessageCircle className="w-16 h-16 text-secondary" />
									<TrendingUp className="w-16 h-16 text-accent" />
									<BarChart3 className="w-16 h-16 text-primary" />
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<section className="py-20 bg-muted/50">
				<div className="container mx-auto px-4">
					<motion.div {...fadeInUp} className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Social Media Solutions</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">Από strategy μέχρι execution - όλα όσα χρειάζεστε για επιτυχή social media presence</p>
					</motion.div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{ icon: <Calendar className="w-8 h-8" />, title: 'Content Strategy & Planning', description: 'Comprehensive content calendar με strategic planning που αντανακλά τους στόχους σας.' },
							{ icon: <Users className="w-8 h-8" />, title: 'Community Management', description: '24/7 community management με γρήγορες απαντήσεις και professional interaction.' },
							{ icon: <BarChart3 className="w-8 h-8" />, title: 'Social Media Advertising', description: 'Performance-driven διαφημίσεις με measurable ROI και detailed targeting.' },
							{ icon: <TrendingUp className="w-8 h-8" />, title: 'Analytics & Reporting', description: 'Detailed monthly reports με actionable insights και growth recommendations.' },
							{ icon: <Star className="w-8 h-8" />, title: 'Influencer Partnerships', description: 'Strategic collaborations με top Greek influencers για maximum brand exposure.' },
							{ icon: <Smartphone className="w-8 h-8" />, title: 'Multi-Platform Management', description: 'Comprehensive management σε όλα τα major social platforms με unified strategy.' }
						].map((service, index) => (
							<motion.div key={index} {...fadeInUp} transition={{ delay: index * 0.1 }} className="p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow">
								<div className="text-primary mb-4">{service.icon}</div>
								<h3 className="text-xl font-semibold mb-2">{service.title}</h3>
								<p className="text-muted-foreground">{service.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<FAQ title="Συχνές Ερωτήσεις για Social Media Θεσσαλονίκη" subtitle="Όλα όσα θέλετε να ξέρετε για τα social media services μας" faqs={faqData} />
		</div>
	);
}
