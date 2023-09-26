import { Link, Outlet } from "react-router-dom"
import { AppRoute } from "../AppRoutes"

interface LinkItemI {
    to: string,
    children: string
}

const LinkItem = ({ to, children }: LinkItemI) => {

    return (
        <li className="float-left p-3 font-roboto nav-link">
            <Link to={to}>{children}</Link>
        </li>
    )
}

const AppHeader = () => {
    return (
        <header className="bg-primary px-5 py-4 flex flex-row items-center justify-between">
            <div>
                <Link to={AppRoute.HOME} className="font-monsterrat text-white font-bold text-2xl">Code Test</Link>
            </div>
            <nav>
                <ul className="list-none">
                    <LinkItem to={AppRoute.TASK_1}>Task 1</LinkItem>
                    <LinkItem to={AppRoute.TASK_2}>Task 2 & 3</LinkItem>
                </ul>
            </nav>
        </header>
    )
}

const AppFooter = () => {
    return (
        <footer className="bg-gray px-5 py-4 flex flex-row justify-end">
            <div>
                <span className="font-roboto text-xs text-[#555]">By Prince Shrestha</span>
            </div>
        </footer>
    )
}

const Root = () => {
    return (
        <>
            <AppHeader />
            <main className="px-4 py-5">
                <Outlet />
            </main>
            <AppFooter />
        </>
    )
}

export default Root