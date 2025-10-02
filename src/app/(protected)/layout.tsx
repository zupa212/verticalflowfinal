"use client";

import React from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
    return (
        <ProtectedRoute>
            <Navigation />
            {children}
            <Footer />
        </ProtectedRoute>
    );
}
