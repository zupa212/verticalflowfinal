import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Reels Θεσσαλονίκη - Δημιουργία Viral Short-Form Videos | VerticalFlow",
	description:
		"Εξειδικευμένη υπηρεσία Reels στη Θεσσαλονίκη. Δημιουργούμε viral Instagram Reels και TikTok videos που αυξάνουν τους followers και τις πωλήσεις σας.",
	alternates: { canonical: "/reels-thessaloniki" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return children as React.ReactElement;
}
