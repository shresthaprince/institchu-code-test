import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import "yup-phone-lite";
import TextField from "../../components/Form/TextField"
import { toast } from 'react-toastify';
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'

import 'react-phone-number-input/style.css'
import { useMutation } from "@tanstack/react-query";
import { addUser } from "../../services/api";

export type AddUserFormData = {
    name: string;
    username: string
    email: string
    phone: string
}

const schema = yup
    .object({
        name: yup.string().required("Please enter a name."),
        username: yup.string().required("Please enter a username."),
        email: yup.string().email("Please enter a valid email.").required("Please enter a valid email."),
        phone: yup.string().phone("AU", "Please enter a valid phone number.").required("Please enter a valid phone number.")
    })
    .required()


const AddUserForm = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm<AddUserFormData>({
        resolver: yupResolver(schema),
    })

    const { mutate, isLoading } = useMutation({
        mutationFn: addUser,
        onSuccess: (data) => {
            toast.success(`User ${data.name} added!`)
            reset()
        },
        onError: (error) => {
            // Log error, in this case in the console
            console.error(error)
            toast.error('Something went wrong!')
        }
    })

    const onSubmit = handleSubmit(async (data) => mutate(data))
    
    return (
        <form className="bg-gray rounded-lg p-5 flex flex-col gap-3" id="add-user-form" onSubmit={onSubmit}>
            <TextField
                label="Name"
                id="name"
                error={errors.name}
                required
                {...register("name")}
            />
            <TextField
                label="Username"
                id="username"
                error={errors.username}
                required
                {...register("username")}
            />
            <TextField
                label="Email"
                id="email"
                error={errors.email}
                required
                {...register("email")}
            />
            <div className="flex flex-col gap-1">
                <label htmlFor='phone' className={`text-xs ${errors.phone ? 'text-error' : ''}`}>Phone<span aria-label="required"> *</span></label>
                <PhoneInputWithCountry
                    id="phone"
                    numberInputProps={{ className: "font-monsterrat text-lg h-10 px-3" }}
                    smartCaret={true}
                    international={false}
                    countries={['AU']}
                    defaultCountry="AU"
                    control={control}
                    name="phone"
                    placeholder="0410 800 200"
                />
                {!!errors.phone && (<p className="text-xs text-error italic">{errors.phone.message}</p>)}
            </div>
            <div>
                <button disabled={isLoading} className="bg-accent-primary hover:bg-accent-secondary rounded-md px-4 py-2" type="submit">{isLoading ? 'Submitting' : 'Submit'}</button>
            </div>
        </form>
    )
}

export default AddUserForm