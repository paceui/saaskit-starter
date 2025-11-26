import { createServerFn } from "@tanstack/react-start";

import { authMiddleware } from "@/features/auth/middleware.ts";
import { SessionData, useAppSession } from "@/lib/session.ts";

export const getSessionUserOrRedirect = createServerFn({ method: "GET" })
    .middleware([authMiddleware])
    .handler(async ({ context }) => {
        return { user: context.user };
    });

export const saveSessionUser = createServerFn({ method: "POST" })
    .inputValidator((data: SessionData) => data)
    .handler(async ({ data }) => {
        const session = await useAppSession();
        await session.update(data);
    });

export const removeSessionUser = createServerFn({ method: "POST" }).handler(async () => {
    const session = await useAppSession();
    await session.clear();
});
