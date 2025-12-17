import { redirect } from "@tanstack/react-router";
import { createMiddleware } from "@tanstack/react-start";
import { getRequest, getRequestHeader } from "@tanstack/react-start/server";

import { Links } from "@/lib/links";

export const isAuthenticated = createMiddleware({ type: "function" }).server(async ({ next }) => {
    const cookie = getRequestHeader("cookie") ?? getRequest()?.headers.get("cookie") ?? "";

    const session = await (await import("@/features/auth/auth")).auth.api.getSession({ headers: { cookie } });

    if (!session?.user || !session?.session.token) {
        throw redirect({ to: Links.signIn, replace: true });
    }

    return next({
        context: {
            user: session.user,
            token: session.session.token,
        },
    });
});
