"use client";

import React from "react";
import BlogManager from "@/components/BlogManager";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Page() {
	return (
		<div className="min-h-screen bg-background">
			<Navigation />
			<main className="container mx-auto px-4 py-20">
				<h1 className="text-4xl font-bold mb-8">Admin Panel</h1>
				<BlogManager />
			</main>
			<Footer />
		</div>
	);
}