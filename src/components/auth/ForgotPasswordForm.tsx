import { revalidateLogic, useForm } from "@tanstack/react-form";
import { Link } from "@tanstack/react-router";
import { ArrowLeftIcon, LoaderCircleIcon, LogInIcon, MailIcon } from "lucide-react";
import { FormEvent, useTransition } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { FormInput } from "@/components/forms/FormInput.tsx";
import { Links } from "@/lib/links.ts";

const schema = z.object({
    email: z.email("Enter your email address or valid email"),
});

type Schema = z.infer<typeof schema>;

export const ForgotPasswordForm = () => {
    const [loading, startTransition] = useTransition();

    const form = useForm({
        defaultValues: {
            email: "",
        } as Schema,
        validationLogic: revalidateLogic(),
        validators: {
            onDynamic: schema,
        },
        onSubmit: () => {
            startTransition(async () => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                toast.error("Mail module is not setup");
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

            <div className="mt-6 flex flex-col items-center justify-center gap-4">
                <button type="submit" className="btn btn-primary gap-2">
                    {loading ? <LoaderCircleIcon className="size-4 animate-spin" /> : <LogInIcon className="size-4" />}
                    Send Reset Link
                </button>
                <Link
                    to={Links.signIn}
                    className="not-hover:text-base-content/60 flex items-center gap-1.5 text-sm transition-all">
                    <ArrowLeftIcon className="size-4" />
                    Back to Login
                </Link>
            </div>
        </form>
    );
};
