import { createFileRoute } from "@tanstack/react-router";

import { PageTitle } from "@/components/layouts/PageTitle.tsx";

export const Route = createFileRoute("/_protected/page/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div>
            <PageTitle title="Page" />
        </div>
    );
}
