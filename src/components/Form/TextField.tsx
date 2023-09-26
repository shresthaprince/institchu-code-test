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
        <div className="flex flex-col gap-1">
            <label htmlFor={id} className={`text-xs ${error ? 'text-error': ''}`}>{label}{required && <span aria-label="required"> *</span>}</label>
            <input className="font-monsterrat text-lg h-10 px-3" ref={ref} id={id} aria-invalid={error ? "true" : "false"} {...inputProps} />
            {!!error && (<p className="text-xs text-error italic">{error.message}</p>)}
        </div>
    )
})

export default TextField