import { Outlet, createFileRoute } from "@tanstack/react-router";

import { Logo } from "@/components/Logo.tsx";
import { ThemeToggle } from "@/components/ThemeToggle.tsx";
import { Links } from "@/lib/links.ts";

export const Route = createFileRoute("/_auth")({
    component: LayoutComponent,
});

function LayoutComponent() {
    return (
        <div className="bg-base-200/5 flex h-screen items-center justify-center gap-6">
            <div className="w-sm space-y-4">
                <div className="flex items-center justify-between gap-4">
                    <Logo />
                    <ThemeToggle />
                </div>
                <Outlet />
                <p className="text-base-content/70 text-center text-sm">
                    Powered by{" "}
                    <a
                        className="hover:text-base-content hover:underline"
                        href={Links.external.betterAuth}
                        target="_blank">
                        Better Auth
                    </a>
                </p>
            </div>
        </div>
    );
}
