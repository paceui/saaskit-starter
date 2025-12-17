import { createServerFn } from "@tanstack/react-start";
import { isAuthenticated } from "@/features/auth/authenticated.ts";


export const getSessionUserOrRedirect = createServerFn({ method: "GET" })
    .middleware([isAuthenticated])
    .handler(async ({ context }) => {
        return { user: context.user };
    });
