import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ReadySetGrowHero from "@/components/ReadySetGrowHero";
import CaseStudies from "@/components/CaseStudies";
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
				<ReadySetGrowHero />
				<CaseStudies />
			</main>
			<Footer />
		</div>
	);
}