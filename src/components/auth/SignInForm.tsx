import { revalidateLogic, useForm } from "@tanstack/react-form";
import { Link, useNavigate } from "@tanstack/react-router";
import { LoaderCircleIcon, LogInIcon, MailIcon } from "lucide-react";
import { FormEvent, useTransition } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { FormInput } from "@/components/forms/FormInput.tsx";
import { FormPasswordInput } from "@/components/forms/FormPasswordInput.tsx";
import { authClient } from "@/features/auth/client.ts";
import { saveSessionUser } from "@/features/auth/server.ts";
import { Links } from "@/lib/links.ts";

const schema = z.object({
    email: z.email("Please enter a valid email address."),
    password: z.string("Please create a password.").min(8, "Password must be at least 8 characters long."),
});

type Schema = z.infer<typeof schema>;

export const SignInForm = () => {
    const navigate = useNavigate();
    const [loading, startTransition] = useTransition();

    const form = useForm({
        defaultValues: {
            email: "test@user.com",
            password: "password",
        } as Schema,
        validationLogic: revalidateLogic(),
        validators: {
            onDynamic: schema,
        },
        onSubmit: ({ value }) => {
            startTransition(async () => {
                const { data, error } = await authClient.signIn.email(value);
                if (data) {
                    await saveSessionUser({
                        data: {
                            user: data.user,
                            token: data.token,
                        },
                    });
                    await navigate({ to: Links.home });
                } else if (error) {
                    if (error.code === "INVALID_EMAIL") {
                        form.setErrorMap({
                            onDynamic: {
                                fields: {
                                    email: error.message,
                                },
                            },
                        });
                    } else {
                        toast.error(error.message);
                    }
                }
            });
        },
    });

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        form.handleSubmit();
    };

    return (
        <form onSubmit={onSubmit}>
            <label className="label text-sm" htmlFor="email">
                Email Address
            </label>
            <FormInput
                form={form}
                name="email"
                className="mt-1"
                placeholder="Enter Email"
                prefix={<MailIcon className="text-base-content/80 size-5" />}
            />

            <label className="label mt-3 text-sm">Password</label>
            <FormPasswordInput form={form} name="password" className="mt-1" placeholder="Password" />

            <div className="mt-2 flex justify-end">
                <Link to="/forgot-password" className="not-hover:text-base-content/60 text-sm transition-all">
                    Forgot password?
                </Link>
            </div>
            <div className="mt-6 flex flex-col items-center justify-center gap-4">
                <button type="submit" className="btn btn-primary gap-2">
                    {loading ? <LoaderCircleIcon className="size-4 animate-spin" /> : <LogInIcon className="size-4" />}
                    Sign In
                </button>
                <div className="flex justify-end">
                    <Link to="/sign-up" className="not-hover:text-base-content/60 text-sm transition-all">
                        New here? Create an Account
                    </Link>
                </div>
            </div>
        </form>
    );
};
