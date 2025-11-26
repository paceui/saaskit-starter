import { createFileRoute } from "@tanstack/react-router";

import { auth } from "@/features/auth/auth.ts";

export const Route = createFileRoute("/api/auth/$")({
    server: {
        handlers: {
            GET: ({ request }) => {
                return auth.handler(request);
            },
            POST: ({ request }) => {
                return auth.handler(request);
            },
        },
    },
});
