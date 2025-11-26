import { AnyFormApi, type DeepKeys, FormApi, useField } from "@tanstack/react-form";
import type { InputHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type GetFormData<TForm> =
    TForm extends FormApi<infer TData, any, any, any, any, any, any, any, any, any, any, any> ? TData : never;

export type FormInputProps<TForm extends AnyFormApi> = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "name" | "form" | "prefix"
> & {
    form: TForm;
    name: DeepKeys<GetFormData<TForm>>;
    prefix?: ReactNode;
    suffix?: ReactNode;
};

export const FormInput = <TForm extends AnyFormApi>({
    form,
    name,
    className,
    prefix,
    suffix,
    ...rest
}: FormInputProps<TForm>) => {
    const field = useField({
        form,
        name,
    });

    const errors = field.state.meta.errors[0];

    const error = typeof errors === "object" ? errors.message : errors;
    const inputValue = String(field.state.value ?? "");
    console.info();

    return (
        <>
            <label
                className={cn(
                    "input w-full",
                    {
                        "input-error": error,
                    },
                    className,
                )}>
                {prefix}
                <input
                    id={field.name}
                    name={field.name}
                    value={inputValue}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    {...rest}
                />
                {suffix}
            </label>
            {error && <p className="text-error mt-0.5 text-sm">{error}</p>}
        </>
    );
};
