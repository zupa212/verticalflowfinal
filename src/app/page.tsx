"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ReelsSection from "@/components/ReelsSection";
import StartupTeamSection from "@/components/StartupTeamSection";
import Achievements from "@/components/Achievements";
import BrandCarousel from "@/components/BrandCarousel";
import ComparisonSection from "@/components/ComparisonSection";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import TechStackSection from "@/components/TechStackSection";
import BlogSection from "@/components/BlogSection";
import BrandsSlider from "@/components/BrandsSlider";
import LevelUpCTA from "@/components/LevelUpCTA";
import Footer from "@/components/Footer";
import { generateOrganizationSchema, generateLocalBusinessSchema } from "@/utils/structuredData";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "VerticalFlow - Digital Agency Θεσσαλονίκη | Reels & Social Media Marketing",
    description:
        "Η κορυφαία Digital Agency στη Θεσσαλονίκη για Reels, Social Media Marketing, Video Editing και Personal Branding.",
    alternates: { canonical: "/" },
};

export default function HomePage() {
    // Structured data can be injected via a client component if needed

	return (
		<div className="min-h-screen bg-background">
			<Navigation />
			<main>
				<Hero />
				<ReelsSection />
				<StartupTeamSection />
				<BrandCarousel />
				<Achievements />
				<Testimonials />
				<Process />
				<Portfolio />
				<BlogSection />
				<BrandsSlider />
				<LevelUpCTA />
				<ComparisonSection />
			</main>
			<Footer />
		</div>
	);
}
