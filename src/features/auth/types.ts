export type IUser = {
    id: string;
    email: string;
    name: string;
    image?: string | null | undefined;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
};

declare module "@/lib/session" {
    interface SessionData {
        user?: IUser;
        token?: string;
    }
}
