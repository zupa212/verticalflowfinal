"use client";

import { useEffect } from "react";
import { analytics, performanceObserver } from "@/utils/analytics";
import { preloadCriticalImages, optimizeAnimations } from "@/utils/performance";

export const AnalyticsSetup = () => {
	useEffect(() => {
		analytics.init();
		performanceObserver();
		preloadCriticalImages();
		optimizeAnimations();
		analytics.pageView();

		let maxScroll = 0;
		let ticking = false;
		const trackScrollDepth = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					const scrollPercent = Math.round(
						(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
					);
					if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
						maxScroll = scrollPercent;
						analytics.scrollDepth(scrollPercent);
					}
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", trackScrollDepth, { passive: true });
		return () => {
			window.removeEventListener("scroll", trackScrollDepth);
		};
	}, []);
	return null;
};
