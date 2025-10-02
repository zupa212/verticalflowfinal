import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Panagiotis Xorianopoulos - Digital Marketing Expert & Personal Branding",
	description:
		"Γνωρίστε τον Panagiotis Xorianopoulos, Digital Marketing Expert και founder του VerticalFlow.",
	alternates: { canonical: "/about" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return children as React.ReactElement;
}
