"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Target, Star, ArrowRight, Play, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Page() {
	const fadeInUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
	return (
		<div className="min-h-screen bg-background">
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
				<div className="container mx-auto px-4 py-20">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<motion.div {...fadeInUp} className="space-y-8">
							<div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full"><Star className="w-4 h-4 text-primary mr-2" /><span className="text-sm font-medium text-primary">Personal Branding Expert</span></div>
							<h1 className="text-4xl md:text-6xl font-bold leading-tight">Panagiotis<span className="block text-primary">Xorianopoulos</span></h1>
							<p className="text-xl text-muted-foreground max-w-lg">Founder & Creative Director του VerticalFlow. Εξειδικευμένος στο digital marketing, personal branding, και viral content creation για την ελληνική αγορά.</p>
							<div className="space-y-4">
								<div className="flex items-center gap-3"><Award className="w-5 h-5 text-primary" /><span>5+ χρόνια experience στο digital marketing</span></div>
								<div className="flex items-center gap-3"><TrendingUp className="w-5 h-5 text-primary" /><span>500M+ views generated για clients</span></div>
								<div className="flex items-center gap-3"><Users className="w-5 h-5 text-primary" /><span>200+ successful brand transformations</span></div>
							</div>
							<div className="flex flex-col sm:flex-row gap-4"><Button size="lg" className="bg-primary hover:bg-primary/90">Συνεργασία<ArrowRight className="w-4 h-4 ml-2" /></Button><Button variant="outline" size="lg"><Play className="w-4 h-4 mr-2" />Δες το Portfolio</Button></div>
						</motion.div>
						<motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative"><div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center"><div className="text-center"><div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center"><Users className="w-16 h-16 text-primary" /></div><h3 className="text-xl font-semibold">Digital Marketing Expert</h3></div></div></motion.div>
					</div>
				</div>
			</section>
		</div>
	);
}
