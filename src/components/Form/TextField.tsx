import { InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface TextFieldI {
    id: string;
    label: string;
    error?: FieldError;
    required: boolean;
}

const TextField = forwardRef<HTMLInputElement, TextFieldI & InputHTMLAttributes<HTMLInputElement>>(({ id, label, error, required, ...inputProps }, ref) => {

    return (
        <div>
            <label htmlFor={id}>{label}{required && <span aria-label="required"> *</span>}</label>
            <input ref={ref} id={id} aria-invalid={error ? "true" : "false"} {...inputProps} />
            {!!error && (<p>{error.message}</p>)}
        </div>
    )
})

export default TextField