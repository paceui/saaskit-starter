import { createFileRoute } from "@tanstack/react-router";

import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm.tsx";

export const Route = createFileRoute("/_auth/forgot-password")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="card border-base-300 bg-base-100 border">
            <div className="card-body p-6">
                <p className="text-center text-xl/none font-medium">Forgot Password</p>
                <p className="text-base-content/80 mt-1 text-center text-sm">
                    Enter your email below to reset your password securely.
                </p>
                <div className="mt-6">
                    <ForgotPasswordForm />
                </div>
            </div>
        </div>
    );
}
