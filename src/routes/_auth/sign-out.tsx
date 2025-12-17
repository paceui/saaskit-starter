import { createFileRoute } from "@tanstack/react-router";
import { redirect } from "@tanstack/router-core";

import { authClient } from "@/features/auth/client.ts";
import { Links } from "@/lib/links.ts";

export const Route = createFileRoute("/_auth/sign-out")({
    loader: async () => {
        await authClient.signOut();
        throw redirect({ to: Links.signIn, replace: true });
    },
});
