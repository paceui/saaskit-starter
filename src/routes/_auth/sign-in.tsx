import { createFileRoute } from "@tanstack/react-router";

import { SignInForm } from "@/components/auth/SignInForm.tsx";

export const Route = createFileRoute("/_auth/sign-in")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="card border-base-300 bg-base-100 border">
            <div className="card-body p-6">
                <p className="text-center text-xl/none font-medium">Welcome Back</p>
                <p className="text-base-content/80 mt-1 text-center text-sm">
                    Authenticate safely in seconds using Better Auth. Fast login, enhanced security
                </p>
                <div className="mt-6">
                    <SignInForm />
                </div>
            </div>
        </div>
    );
}
