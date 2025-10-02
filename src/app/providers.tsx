"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/i18n";
import { AnalyticsSetup } from "./shared/AnalyticsSetup";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 5 * 60 * 1000,
			gcTime: 10 * 60 * 1000,
			retry: (failureCount, error: any) => {
				if (error instanceof Error && error.message.includes("4")) {
					return false;
				}
				return failureCount < 3;
			},
		},
	},
});

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<AnalyticsSetup />
			{children}
		</QueryClientProvider>
	);
}
