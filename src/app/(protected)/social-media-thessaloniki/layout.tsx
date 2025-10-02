import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Social Media Marketing Θεσσαλονίκη - Διαχείριση & Στρατηγική | VerticalFlow",
	description:
		"Ολοκληρωμένες υπηρεσίες Social Media Marketing στη Θεσσαλονίκη. Διαχείριση λογαριασμών, content creation και paid advertising που φέρνουν αποτελέσματα.",
	alternates: { canonical: "/social-media-thessaloniki" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return children as React.ReactElement;
}
