import { AppHeader } from "../../components/common/AppText"
import AddUserForm from "./AddUserForm"

const AddUser = () => {

    return (
        <div className="flex flex-auto flex-col gap-4">
            <AppHeader>Add User</AppHeader>
            <section>
                <AddUserForm />
            </section>
        </div>
    )
}

export default AddUser