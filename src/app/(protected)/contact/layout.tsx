import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Επικοινωνία - VerticalFlow Digital Agency Θεσσαλονίκη",
	description:
		"Επικοινωνήστε με το VerticalFlow για συνεργασία σε Digital Marketing, Reels, Social Media και Video Editing.",
	alternates: { canonical: "/contact" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return children as React.ReactElement;
}
