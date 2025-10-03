"use client";

import React from 'react';
import FAQ from '@/components/FAQ';
import { motion } from 'framer-motion';
import { Play, TrendingUp, Target, Users, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Page() {
	const fadeInUp = {
		initial: { opacity: 0, y: 30 },
		whileInView: { opacity: 1, y: 0 },
		transition: { duration: 0.6 }
	};

	const faqData = [
		{
			question: 'Τι είναι τα Reels και γιατί είναι σημαντικά για την επιχείρησή μου στη Θεσσαλονίκη;',
			answer:
				'Τα Reels είναι σύντομα video μέχρι 90 δευτερόλεπτα που έχουν τη μεγαλύτερη organic reach στο Instagram. Στη Θεσσαλονίκη, οι επιχειρήσεις που χρησιμοποιούν Reels βλέπουν 67% περισσότερο engagement και προσεγγίζουν νέο κοινό πιο αποτελεσματικά.'
		},
		{
			question: 'Πόσο κοστίζει η δημιουργία Reels στη Θεσσαλονίκη;',
			answer:
				'Οι τιμές ξεκινούν από €150/μήνα για 8 Reels και φτάνουν τα €800/μήνα για premium πακέτα με 30+ Reels, στρατηγική, και analytics. Κάθε πακέτο προσαρμόζεται στις ανάγκες της επιχείρησής σας.'
		},
		{
			question: 'Πόσος χρόνος χρειάζεται για να δω αποτελέσματα από τα Reels;',
			answer:
				'Τα πρώτα αποτελέσματα φαίνονται σε 2-4 εβδομάδες με αύξηση του engagement. Σημαντική αύξηση followers και leads συνήθως εμφανίζεται σε 2-3 μήνες συνεπούς δημοσίευσης ποιοτικών Reels.'
		},
		{
			question: 'Ποια trends λειτουργούν καλύτερα για Reels στην ελληνική αγορά;',
			answer:
				'Στην Ελλάδα λειτουργούν εξαιρετικά: behind-the-scenes content, tutorials με ελληνικούς υπότιτλους, local trends, συνεργασίες με Greek influencers, και content που σχετίζεται με ελληνική κουλτούρα και παραδόσεις.'
		},
		{
			question: 'Μπορώ να παρακολουθήσω τα analytics των Reels μου;',
			answer:
				'Ναι! Παρέχουμε λεπτομερή monthly reports με metrics όπως views, reach, engagement rate, saves, shares, και click-through rates. Επίσης, παρακολουθούμε ποια Reels αποδίδουν καλύτερα και γιατί.'
		}
	];

	return (
		<div className="min-h-screen bg-background">
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
				<div className="container mx-auto px-4 py-20">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<motion.div {...fadeInUp} className="space-y-8">
							<div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
								<Play className="w-4 h-4 text-primary mr-2" />
								<span className="text-sm font-medium text-primary">Reels Agency Θεσσαλονίκη</span>
							</div>

							<h1 className="text-4xl md:text-6xl font-bold leading-tight">
								Το #1 Reels Agency
								<span className="block text-primary">στη Θεσσαλονίκη</span>
							</h1>

							<p className="text-xl text-muted-foreground max-w-lg">
								Δημιουργούμε viral Reels που κατακτούν το Instagram και αυξάνουν τις πωλήσεις σας. Εξειδικευμένοι στο short-form content που αγαπά ο αλγόριθμος.
							</p>

							<div className="flex flex-col sm:flex-row gap-4">
								<Button size="lg" className="bg-primary hover:bg-primary/90">
									Δωρεάν Strategy Call
									<ArrowRight className="w-4 h-4 ml-2" />
								</Button>
								<Button variant="outline" size="lg">Δες τα Portfolio μας</Button>
							</div>

							<div className="flex items-center gap-8 pt-4">
								<div className="text-center">
									<div className="text-2xl font-bold text-primary">500M+</div>
									<div className="text-sm text-muted-foreground">Views Generated</div>
								</div>
								<div className="text-center">
									<div className="text-2xl font-bold text-primary">150+</div>
									<div className="text-sm text-muted-foreground">Happy Clients</div>
								</div>
								<div className="text-center">
									<div className="text-2xl font-bold text-primary">95%</div>
									<div className="text-sm text-muted-foreground">Success Rate</div>
								</div>
							</div>

						<motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative">
							<div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
								<Play className="w-24 h-24 text-primary" />
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<section className="py-20 bg-muted/50">
				<div className="container mx-auto px-4">
					<motion.div {...fadeInUp} className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Τα Reels Services μας</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">Comprehensive Reels strategy που φέρνει αποτελέσματα</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{ icon: <TrendingUp className="w-8 h-8" />, title: 'Viral Reels Creation', description: 'Δημιουργούμε Reels που γίνονται viral χρησιμοποιώντας τα latest trends και αλγόριθμους.' },
							{ icon: <Target className="w-8 h-8" />, title: 'Strategic Planning', description: 'Comprehensive content strategy που στοχεύει το σωστό audience και maximizes το ROI.' },
							{ icon: <Users className="w-8 h-8" />, title: 'Community Management', description: 'Διαχείριση comments, engagement και community building γύρω από τα Reels σας.' }
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

			<section className="py-20">
				<div className="container mx-auto px-4">
					<motion.div {...fadeInUp} className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Η Διαδικασία μας για Winning Reels</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">Από τη στρατηγική μέχρι το viral content</p>
					</motion.div>

					<div className="grid md:grid-cols-4 gap-8">
						{[
							{ step: '01', title: 'Strategy & Research', description: 'Αναλύουμε το brand σας, την competition και τα trends που λειτουργούν στη Θεσσαλονίκη.' },
							{ step: '02', title: 'Content Creation', description: 'Δημιουργούμε engaging Reels με professional editing και τα hottest trends.' },
							{ step: '03', title: 'Optimization', description: 'Κάνουμε A/B testing και optimizations για maximum reach και engagement.' },
							{ step: '04', title: 'Analytics & Scaling', description: 'Παρακολουθούμε performance και scaling successful content types.' }
						].map((item, index) => (
							<motion.div key={index} {...fadeInUp} transition={{ delay: index * 0.1 }} className="text-center">
								<div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
								<h3 className="text-xl font-semibold mb-2">{item.title}</h3>
								<p className="text-muted-foreground">{item.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<FAQ title="Συχνές Ερωτήσεις για Reels στη Θεσσαλονίκη" subtitle="Όλα όσα θέλετε να ξέρετε για τα Reels services μας" faqs={faqData} />

			<section className="py-20 bg-primary text-primary-foreground">
				<div className="container mx-auto px-4 text-center">
					<motion.div {...fadeInUp} className="max-w-2xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Έτοιμοι να κάνετε τα Reels σας Viral;</h2>
						<p className="text-xl mb-8 opacity-90">Κλείστε το δωρεάν strategy call σας και ας δούμε πώς μπορούμε να πολλαπλασιάσουμε το reach σας.</p>
						<Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
							Κλείστε Strategy Call Τώρα
							<ArrowRight className="w-4 h-4 ml-2" />
						</Button>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
