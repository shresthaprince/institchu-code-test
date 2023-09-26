import { Link } from "react-router-dom"
import { AppHeader } from "../components/common/AppText"
import { AppRoute } from "../AppRoutes"

const ErrorBoundary = () => {

    return (
        <section className="flex flex-auto flex-col items-center justify-center gap-3">
            <AppHeader>Oops something went wrong...</AppHeader>
            <Link className="font-bold underline" to={AppRoute.HOME}>Go back home</Link>
        </section>
    )
}

export default ErrorBoundary