"use client";

import React from 'react';
import FAQ from '@/components/FAQ';
import { motion } from 'framer-motion';
import { Video, Scissors, Palette, Music, Zap, ArrowRight, Play, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Page() {
	const fadeInUp = {
		initial: { opacity: 0, y: 30 },
		whileInView: { opacity: 1, y: 0 },
		transition: { duration: 0.6 }
	};

	const faqData = [
		{ question: 'Τι είδους videos μπορείτε να επεξεργαστείτε στη Θεσσαλονίκη;', answer: 'Επεξεργαζόμαστε όλα τα είδη videos: promotional videos, social media content, corporate videos, event coverage, tutorials, testimonials, Reels, TikToks, YouTube videos, και documentaries. Εξειδικεύομαι σε short-form content για social media.' },
		{ question: 'Πόσος χρόνος χρειάζεται για το video editing;', answer: 'Ο χρόνος εξαρτάται από την πολυπλοκότητα: Simple cuts & color correction (1-2 ημέρες), Advanced editing με graphics (3-5 ημέρες), Complex projects με animation (1-2 εβδομάδες). Προσφέρουμε και express service για urgent projects.' },
		{ question: 'Σε ποια formats παραδίδετε τα edited videos;', answer: 'Παραδίδουμε σε όλα τα formats που χρειάζεστε: MP4 (1080p, 4K), MOV για professional use, optimized versions για κάθε social platform (Instagram, TikTok, YouTube, Facebook), και custom formats ανάλογα με τις ανάγκες σας.' },
		{ question: 'Μπορείτε να προσθέσετε graphics, text, και animations;', answer: 'Ναι! Προσφέρουμε full motion graphics services: animated logos, lower thirds, text animations, transitions, color grading, sound design, subtitles, και custom graphics που ταιριάζουν στο brand σας.' },
		{ question: 'Ποιες είναι οι τιμές για video editing στη Θεσσαλονίκη;', answer: 'Οι τιμές ξεκινούν από €50 για basic editing (μέχρι 2 λεπτά), €150 για advanced editing με graphics, και €300+ για complex projects. Προσφέρουμε και monthly packages για συνεχή collaboration.' }
	];

	return (
		<div className="min-h-screen bg-background">
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
				<div className="container mx-auto px-4 py-20">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<motion.div {...fadeInUp} className="space-y-8">
							<div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full"><Video className="w-4 h-4 text-primary mr-2" /><span className="text-sm font-medium text-primary">Video Editing Θεσσαλονίκη</span></div>
							<h1 className="text-4xl md:text-6xl font-bold leading-tight">Professional<span className="block text-primary">Video Editing</span></h1>
							<p className="text-xl text-muted-foreground max-w-lg">Transform your raw footage σε professional, engaging videos που κερδίζουν views και conversions. Specializing σε social media content και brand videos.</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button size="lg" className="bg-primary hover:bg-primary/90">Δωρεάν Video Sample<ArrowRight className="w-4 h-4 ml-2" /></Button>
								<Button variant="outline" size="lg"><Play className="w-4 h-4 mr-2" />Δες Portfolio</Button>
							</div>
							<div className="flex items-center gap-8 pt-4">
								<div className="text-center"><div className="text-2xl font-bold text-primary">1000+</div><div className="text-sm text-muted-foreground">Videos Edited</div></div>
								<div className="text-center"><div className="text-2xl font-bold text-primary">24h</div><div className="text-sm text-muted-foreground">Fast Turnaround</div></div>
								<div className="text-center"><div className="text-2xl font-bold text-primary">100%</div><div className="text-sm text-muted-foreground">Satisfaction Rate</div></div>
							</div>
						<motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative">
							<div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
								<div className="grid grid-cols-2 gap-4">
									<Scissors className="w-16 h-16 text-primary" />
									<Palette className="w-16 h-16 text-secondary" />
									<Music className="w-16 h-16 text-accent" />
									<Zap className="w-16 h-16 text-primary" />
								</div>
								<div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<section className="py-20 bg-muted/50">
				<div className="container mx-auto px-4">
					<motion.div {...fadeInUp} className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Video Editing Services</h2><p className="text-xl text-muted-foreground max-w-2xl mx-auto">Professional video editing που φέρνει τα videos σας στο επόμενο level</p></motion.div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{ icon: <Scissors className="w-8 h-8" />, title: 'Professional Editing', description: 'Cutting, trimming, transitions, και professional story flow που κρατά το audience engaged.' },
							{ icon: <Palette className="w-8 h-8" />, title: 'Color Grading & Correction', description: 'Professional color grading και correction για cinematic look που κάνει τα videos να ξεχωρίζουν.' },
							{ icon: <Music className="w-8 h-8" />, title: 'Sound Design & Mixing', description: 'Crystal clear audio, background music, sound effects, και professional audio mixing.' },
							{ icon: <Zap className="w-8 h-8" />, title: 'Motion Graphics', description: 'Animated logos, text animations, lower thirds, και custom graphics που enhance το video.' },
							{ icon: <Award className="w-8 h-8" />, title: 'Social Media Optimization', description: 'Videos optimized για κάθε platform - Instagram, TikTok, YouTube, Facebook με τα σωστά formats.' },
							{ icon: <Clock className="w-8 h-8" />, title: 'Fast Turnaround', description: 'Express editing services για urgent projects χωρίς compromise στην ποιότητα.' }
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

			<FAQ title="Συχνές Ερωτήσεις για Video Editing Θεσσαλονίκη" subtitle="Όλα όσα θέλετε να ξέρετε για τα video editing services μας" faqs={faqData} />
		</div>
	);
}
