import { createMiddleware } from "@tanstack/react-start";
import { redirect } from "@tanstack/router-core";

import { Links } from "@/lib/links.ts";
import { useAppSession } from "@/lib/session.ts";

export const authMiddleware = createMiddleware({ type: "function" }).server(async ({ next }) => {
    const session = await useAppSession();
    const data = session.data;

    if (!data.user || !data.token) {
        throw redirect({ to: Links.signIn, replace: true });
    }

    return next({
        context: {
            user: data.user,
            token: data.token,
        },
    });
});
