import { betterAuth } from "better-auth";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import Database from "better-sqlite3";

export const auth = betterAuth({
    database: new Database("./sqlite.db"),
    baseURL: process.env.BASE_URL,
    logger: {
        log: console.log,
    },
    emailAndPassword: {
        enabled: true,
    },
    plugins: [tanstackStartCookies()],
});
