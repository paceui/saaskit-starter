import { revalidateLogic, useForm } from "@tanstack/react-form";
import { Link, useNavigate } from "@tanstack/react-router";
import { LoaderCircleIcon, MailIcon, UserIcon, UserPlusIcon } from "lucide-react";
import { FormEvent, useTransition } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { FormInput, FormPasswordInput } from "@/components/forms";
import { authClient } from "@/features/auth/client.ts";
import { Links } from "@/lib/links.ts";

const schema = z.object({
    name: z.string("Please enter your name.").trim().min(4, "Name must be at least 4 characters long."),
    email: z.email("Please enter a valid email address."),
    password: z.string("Please create a password.").trim().min(8, "Password must be at least 8 characters long."),
});

type Schema = z.infer<typeof schema>;

export const SignUpForm = () => {
    const navigate = useNavigate();
    const [loading, startTransition] = useTransition();

    const form = useForm({
        defaultValues: {
            name: "User 1",
            email: "test@user.com",
            password: "password",
        } as Schema,
        validationLogic: revalidateLogic(),
        validators: {
            onDynamic: schema,
        },
        onSubmit: ({ value }) => {
            startTransition(async () => {
                const { data, error } = await authClient.signUp.email(value);
                if (data) {
                    toast.success("You're all set! Please log in to get started.");

                    await navigate({ to: Links.signIn });
                } else if (error) {
                    console.info(error);
                    if (error.code === "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL") {
                        form.setErrorMap({
                            onDynamic: {
                                fields: {
                                    email: error.message,
                                },
                            },
                        });
                    } else {
                        toast.error(error.message ?? error.statusText);
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
            <label className="label text-sm" htmlFor="name">
                Full Name
            </label>
            <FormInput
                form={form}
                name="name"
                className="mt-1"
                placeholder="Full Name"
                prefix={<UserIcon className="text-base-content/80 size-5" />}
            />

            <label className="label mt-4 text-sm" htmlFor="email">
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

            <div className="mt-6 flex flex-col items-center justify-center gap-4">
                <button type="submit" className="btn btn-primary gap-2">
                    {loading ? (
                        <LoaderCircleIcon className="size-4 animate-spin" />
                    ) : (
                        <UserPlusIcon className="size-4" />
                    )}
                    Create an Account
                </button>
                <div className="flex justify-end">
                    <Link to="/sign-in" className="not-hover:text-base-content/60 text-sm transition-all">
                        Already have an account? Sign In
                    </Link>
                </div>
            </div>
        </form>
    );
};
