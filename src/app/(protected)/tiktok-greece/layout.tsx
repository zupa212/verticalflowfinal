import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "TikTok Marketing Greece - Viral Content Strategy | VerticalFlow",
	description:
		"Εξειδικευμένη στρατηγική TikTok Marketing για την ελληνική αγορά. Δημιουργία viral TikTok videos και content που φέρνει followers και engagement.",
	alternates: { canonical: "/tiktok-greece" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return children as React.ReactElement;
}
