import { AnyFormApi } from "@tanstack/react-form";
import { EyeIcon, EyeOffIcon, LockIcon } from "lucide-react";
import { useState } from "react";

import { FormInput, FormInputProps } from "./FormInput";

type FormPasswordInputProps<TForm extends AnyFormApi> = FormInputProps<TForm> & {};

export const FormPasswordInput = <TForm extends AnyFormApi>({
    prefix,
    suffix,
    type,
    ...rest
}: FormPasswordInputProps<TForm>) => {
    const [show, setShow] = useState(false);

    return (
        <FormInput
            {...rest}
            type={show ? "text" : "password"}
            prefix={prefix ?? <LockIcon className="text-base-content/80 size-5" />}
            suffix={
                suffix ?? (
                    <button className="btn btn-xs btn-circle btn-ghost" type="button" onClick={() => setShow(!show)}>
                        {show ? (
                            <EyeIcon className="text-base-content/80 size-4.5" />
                        ) : (
                            <EyeOffIcon className="text-base-content/80 size-4.5" />
                        )}
                    </button>
                )
            }
        />
    );
};
