import { createFileRoute } from "@tanstack/react-router";

import { SignUpForm } from "@/components/auth/SignUpForm";

export const Route = createFileRoute("/_auth/sign-up")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="card border-base-300 bg-base-100 border">
            <div className="card-body p-6">
                <p className="text-center text-xl/none font-medium">Create Your Account</p>
                <p className="text-base-content/80 mt-1 text-center text-sm">
                    Sign up in seconds with Better Auth. Simple, secure, and fast onboarding
                </p>
                <div className="mt-6">
                    <SignUpForm />
                </div>
            </div>
        </div>
    );
}
