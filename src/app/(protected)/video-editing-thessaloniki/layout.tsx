import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Video Editing Θεσσαλονίκη - Επαγγελματικό Μοντάζ | VerticalFlow",
	description:
		"Επαγγελματικές υπηρεσίες Video Editing στη Θεσσαλονίκη. Μοντάζ για Reels, YouTube, εταιρικά videos και personal branding content.",
	alternates: { canonical: "/video-editing-thessaloniki" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return children as React.ReactElement;
}
