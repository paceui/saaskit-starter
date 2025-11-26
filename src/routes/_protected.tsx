import { Outlet, createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/layouts/Footer.tsx";
import { Sidebar } from "@/components/layouts/Sidebar.tsx";
import { Topbar } from "@/components/layouts/Topbar.tsx";
import { getSessionUserOrRedirect } from "@/features/auth/server.ts";

export const Route = createFileRoute("/_protected")({
    component: LayoutComponent,
    loader: async () => {
        const { user } = await getSessionUserOrRedirect();
        return user;
    },
});

function LayoutComponent() {
    const user = Route.useLoaderData();

    return (
        <div className="flex min-h-screen w-screen flex-row">
            <Sidebar />
            <div className="flex grow flex-col">
                <div className="border-base-300 bg-topbar-background h-15 min-h-15 w-full border-b px-4">
                    <Topbar user={user} />
                </div>
                <div className="grow p-6">
                    <Outlet />
                </div>
                <div className="h-15 min-h-15 w-full px-6">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
