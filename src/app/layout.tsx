import "../index.css";
import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Providers from "./providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://verticalflow.gr"),
    title: {
        default: "VerticalFlow - Digital Agency Θεσσαλονίκη | Reels & Social Media Marketing",
        template: "%s | VerticalFlow",
    },
    description:
        "Η κορυφαία Digital Agency στη Θεσσαλονίκη για Reels, Social Media Marketing, Video Editing και Personal Branding. Δημιουργούμε viral content που αυξάνει τις πωλήσεις σας.",
    keywords: [
        "digital agency Θεσσαλονίκη",
        "reels Θεσσαλονίκη",
        "social media Θεσσαλονίκη",
        "video editing Θεσσαλονίκη",
        "personal branding Θεσσαλονίκη",
    ],
    openGraph: {
        type: "website",
        siteName: "VerticalFlow",
        url: "https://verticalflow.gr/",
        title: "VerticalFlow - Digital Agency Θεσσαλονίκη | Reels & Social Media Marketing",
        description:
            "Η κορυφαία Digital Agency στη Θεσσαλονίκη για Reels, Social Media Marketing, Video Editing και Personal Branding.",
        images: [
            {
                url: "/hero-image.jpg",
                width: 1200,
                height: 630,
            },
        ],
    },
    alternates: {
        canonical: "/",
        languages: {
            el: "/",
            en: "/en/",
        },
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="el">
			<body>
				<Providers>
					<TooltipProvider>
						<Toaster />
						<Sonner />
						{children}
					</TooltipProvider>
				</Providers>
			</body>
		</html>
	);
}
