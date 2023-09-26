import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import TextField from "../../components/Form/TextField"

type FormData = {
    name: string;
    username: string
    email: string
}

const schema = yup
    .object({
        name: yup.string().required("Please enter a name."),
        username: yup.string().required("Please enter a username."),
        email: yup.string().email("Please enter a valid email.").required("Please enter a valid email."),
    })
    .required()


const AddUserForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    })
    const onSubmit = handleSubmit((data) => console.log(data))
    return (
        <form id="add-user-form" onSubmit={onSubmit}>
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
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddUserForm