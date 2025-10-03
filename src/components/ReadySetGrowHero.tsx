"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ReadySetGrowHero = () => {
	return (
		<section className="relative min-h-[92vh] flex items-end pb-10 overflow-hidden">
			<div className="absolute inset-0 -z-10">
				<Image src="/lovable-uploads/ELITE.png" alt="bg" fill className="object-cover opacity-30" />
				<div className="absolute inset-0 bg-black/55" />
			</div>

			<div className="container mx-auto px-4">
				<div className="max-w-2xl">
					<h1 className="text-white text-[56px] leading-[1.05] font-black tracking-tight">
						Ready.
						<br />
						<span className="text-white">Set.</span>
						<span className="text-red-500">Grow!</span>
					</h1>
					<p className="text-white/80 text-sm mt-4 font-semibold">360° DIGITAL AGENCY</p>

					<div className="mt-6 space-y-3">
						<Link href="#plans" className="block">
							<button className="w-full sm:w-auto inline-flex items-center justify-between gap-3 px-6 py-4 bg-red-600 text-white font-semibold rounded-md shadow-lg hover:bg-red-500 transition-colors">
								<span>360° Plans</span>
								<ArrowRight className="w-4 h-4" />
							</button>
						</Link>
						<Link href="#call" className="block">
							<button className="w-full sm:w-auto inline-flex items-center justify-between gap-3 px-6 py-4 bg-white text-gray-900 font-semibold rounded-md shadow-md hover:bg-white/90 transition-colors">
								<span>Discovery Call</span>
								<ArrowRight className="w-4 h-4" />
							</button>
						</Link>
					</div>

					<div className="mt-4 flex items-center gap-3">
						<div className="flex -space-x-2">
							{[1,2,3,4,5].map((i) => (
								<Image key={i} src={`https://images.unsplash.com/photo-15${i}00948767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face`} alt="avatar" width={36} height={36} className="rounded-full border-2 border-white/20" />
							))}
						</div>
						<div className="text-white text-xs">
							<span className="text-red-500 mr-1">★★★★★</span>
							<span>50/5</span>
						</div>
					</div>

					<div className="mt-6 flex items-center gap-10 opacity-90">
						<Image src="/assets/portfolio-1.jpg" alt="airbnb" width={96} height={32} className="rounded" />
						<Image src="/assets/portfolio-2.jpg" alt="sonax" width={96} height={32} className="rounded" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ReadySetGrowHero;
