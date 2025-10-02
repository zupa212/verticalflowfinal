"use client";

import React from "react";
import About from "@/pages/About";
// The protected layout already wraps with Navigation and Footer
// The About page includes its own Navigation/Footer, so we rely on layout
// by rendering only the inner content if necessary later.

export default function Page() {
	return <About />;
}
