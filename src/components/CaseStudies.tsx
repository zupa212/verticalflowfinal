"use client";

import React from "react";
import Image from "next/image";

const items = [
	{
		badge: "Photography & Videography",
		title: "Αισθητική νέας γενιάς.",
		year: "2025",
		image: "/assets/portfolio-4.jpg",
	},
	{
		badge: "360 Starter & Growth",
		title: "Από το Μηδέν… στην Κορυφή.",
		year: "2025",
		image: "/assets/portfolio-3.jpg",
	},
	{
		badge: "Social Media Campaign",
		title: "Storytelling που πουλά.",
		year: "2025",
		image: "/assets/portfolio-2.jpg",
	},
];

const CaseStudies = () => {
	return (
		<section className="bg-[#0f0f0f] py-10">
			<div className="max-w-[1024px] mx-auto space-y-6">
				{items.map((item, idx) => (
					<article key={idx} className="relative rounded-md overflow-hidden">
						<div className="absolute left-3 top-3 z-10">
							<span className="text-xs font-semibold bg-red-600 text-white px-3 py-1 rounded">
								{item.badge}
							</span>
						</div>
						<div className="absolute right-3 bottom-3 z-10 text-white/80 text-xs">/{item.year}</div>
						<div className="absolute left-4 bottom-4 z-10 text-white font-semibold text-sm drop-shadow-md">
							{item.title}
						</div>
						<div className="relative w-full h-[260px] sm:h-[360px]">
							<Image src={item.image} alt={item.title} fill className="object-cover" />
							<div className="absolute inset-0 bg-black/25" />
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default CaseStudies;
