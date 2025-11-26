import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "../components/landing/Footer.tsx";
import { Hero } from "../components/landing/Hero.tsx";
import { Pricing } from "../components/landing/Pricing.tsx";
import { Topbar } from "../components/landing/Topbar.tsx";

export const Route = createFileRoute("/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="bg-base-100">
            <div className="bg-base-100/90 border-base-300 sticky top-0 z-10 border-b border-dashed backdrop-blur-md">
                <div className="container h-16">
                    <Topbar />
                </div>
            </div>
            <Hero />
            <Pricing />
            <div className="border-base-300 border-t border-dashed">
                <div className="container my-6">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
