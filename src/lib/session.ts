import { useSession } from "@tanstack/react-start/server";

export interface SessionData {}

export const useAppSession = () => {
    return useSession<SessionData>({
        name: "app-session",
        password: process.env.SESSION_SECRET ?? "",
        cookie: {
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            httpOnly: true,
        },
    });
};
