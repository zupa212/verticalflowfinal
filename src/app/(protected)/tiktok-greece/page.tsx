"use client";

import React from 'react';
import FAQ from '@/components/FAQ';
import { motion } from 'framer-motion';
import { Music, TrendingUp, Target, Users, Video, ArrowRight, Zap, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Page() {
	const fadeInUp = {
		initial: { opacity: 0, y: 30 },
		whileInView: { opacity: 1, y: 0 },
		transition: { duration: 0.6 }
	};

	const faqData = [
		{ question: 'Γιατί είναι σημαντικό το TikTok για τις επιχειρήσεις στην Ελλάδα;', answer: 'Το TikTok έχει πάνω από 2.5 εκατομμύρια active users στην Ελλάδα, με 70% να είναι κάτω των 34 ετών. Οι επιχειρήσεις που είναι active στο TikTok βλέπουν 400% περισσότερο engagement από άλλες πλατφόρμες και προσεγγίζουν younger demographics.' },
		{ question: 'Πώς λειτουργεί ο αλγόριθμος του TikTok στην Ελλάδα;', answer: 'Ο TikTok algorithm στην Ελλάδα δίνει προτεραιότητα σε: completion rate, engagement, trending sounds και hashtags, και user interactions. Δημιουργούμε content που optimizes όλα αυτά τα factors.' },
		{ question: 'Τι είδους TikTok videos δουλεύουν καλύτερα στην ελληνική αγορά;', answer: 'Εξαιρετικά: educational content, behind-the-scenes, Greek comedy/memes, local trends και challenges, food, lifestyle, authentic personal stories.' },
		{ question: 'Πόσο συχνά πρέπει να ποστάρω στο TikTok;', answer: 'Για optimal results προτείνουμε 3-5 videos την εβδομάδα minimum, με consistency να είναι key. Δημιουργούμε content calendars που maintain την consistency.' },
		{ question: 'Μπορείτε να με βοηθήσετε να γίνω viral στο TikTok;', answer: 'Δεν εγγυόμαστε viral, αλλά χρησιμοποιούμε data-driven strategies: trending audio analysis, optimal posting times, hashtag research, viral patterns. Clients μας έχουν 85% success rate σε views > 10K.' }
	];

	return (
		<div className="min-h-screen bg-background">
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
				<div className="container mx-auto px-4 py-20">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<motion.div {...fadeInUp} className="space-y-8">
							<div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full"><Music className="w-4 h-4 text-primary mr-2" /><span className="text-sm font-medium text-primary">TikTok Agency Greece</span></div>
							<h1 className="text-4xl md:text-6xl font-bold leading-tight">TikTok Videos<span className="block text-primary">που γίνονται Viral</span></h1>
							<p className="text-xl text-muted-foreground max-w-lg">Δημιουργούμε TikTok content που κατακτά το For You Page και φέρνει millions of views. Εξειδικευμένοι στον ελληνικό TikTok algorithm και τα local trends.</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button size="lg" className="bg-primary hover:bg-primary/90">Δωρεάν TikTok Strategy<ArrowRight className="w-4 h-4 ml-2" /></Button>
								<Button variant="outline" size="lg"><Video className="w-4 h-4 mr-2" />Viral Examples</Button>
							</div>
							<div className="flex items-center gap-8 pt-4">
								<div className="text-center"><div className="text-2xl font-bold text-primary">100M+</div><div className="text-sm text-muted-foreground">Views Generated</div></div>
								<div className="text-center"><div className="text-2xl font-bold text-primary">500+</div><div className="text-sm text-muted-foreground">Viral Videos</div></div>
								<div className="text-center"><div className="text-2xl font-bold text-primary">85%</div><div className="text-sm text-muted-foreground">Success Rate</div></div>
							</div>
						<motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative">
							<div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
								<div className="grid grid-cols-2 gap-6">
									<div className="space-y-4">
										<div className="w-16 h-20 bg-gradient-to-b from-primary to-primary/50 rounded-lg flex items-center justify-center"><Music className="w-8 h-8 text-white" /></div>
										<div className="w-16 h-20 bg-gradient-to-b from-secondary to-secondary/50 rounded-lg flex items-center justify-center"><Heart className="w-8 h-8 text-white" /></div>
									</div>
									<div className="space-y-4 mt-8">
										<div className="w-16 h-20 bg-gradient-to-b from-accent to-accent/50 rounded-lg flex items-center justify-center"><Eye className="w-8 h-8 text-white" /></div>
										<div className="w-16 h-20 bg-gradient-to-b from-primary/80 to-primary/30 rounded-lg flex items-center justify-center"><TrendingUp className="w-8 h-8 text-white" /></div>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<section className="py-20 bg-muted/50">
				<div className="container mx-auto px-4">
					<motion.div {...fadeInUp} className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">TikTok Services Greece</h2><p className="text-xl text-muted-foreground max-w-2xl mx-auto">Complete TikTok strategy που κάνει το brand σας να ξεχωρίσει στο For You Page</p></motion.div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{ icon: <Video className="w-8 h-8" />, title: 'Viral Video Creation', description: 'Δημιουργούμε TikTok videos που leverage τα latest trends και optimize για maximum reach.' },
							{ icon: <Music className="w-8 h-8" />, title: 'Trend Research & Analysis', description: 'Daily monitoring των Greek TikTok trends και viral sounds για να είστε πάντα ahead.' },
							{ icon: <Target className="w-8 h-8" />, title: 'Algorithm Optimization', description: 'Στρατηγικές που εκμεταλλεύονται τον TikTok algorithm για organic growth.' },
							{ icon: <Users className="w-8 h-8" />, title: 'Influencer Partnerships', description: 'Συνεργασίες με top Greek TikTokers για αυθεντικό content και wider reach.' },
							{ icon: <Zap className="w-8 h-8" />, title: 'Hashtag Strategy', description: 'Research και optimization των hashtags που δουλεύουν στην ελληνική αγορά.' },
							{ icon: <TrendingUp className="w-8 h-8" />, title: 'Performance Analytics', description: 'Detailed analytics και insights για continuous optimization της TikTok strategy σας.' }
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

			<FAQ title="Συχνές Ερωτήσεις για TikTok Greece" subtitle="Όλα όσα θέλετε να ξέρετε για τα TikTok services μας στην Ελλάδα" faqs={faqData} />

			<section className="py-20 bg-primary text-primary-foreground">
				<div className="container mx-auto px-4 text-center">
					<motion.div {...fadeInUp} className="max-w-2xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Ready να Κατακτήσετε το Greek TikTok;</h2>
						<p className="text-xl mb-8 opacity-90">Ας δημιουργήσουμε viral TikTok content που θα κάνει το brand σας famous στην Ελλάδα.</p>
						<Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">Δωρεάν TikTok Consultation<ArrowRight className="w-4 h-4 ml-2" /></Button>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
