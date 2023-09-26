import { Link } from "react-router-dom"
import { AppRoute } from "../AppRoutes"
import { ReactNode } from "react"

interface SectionI {
    title: string,
    to: string,
    children: ReactNode
}

const Section = ({ title, to, children }: SectionI) => {

    return (
        <section className="bg-gray p-3 rounded-md flex flex-col gap-2">
            <h2 className="font-monsterrat text-lg sm:text-xl font-bold">{title}</h2>
            <article>
                {children}
                <div className="underline mt-2">
                    <Link className="text-accent-primary hover:text-accent-secondary" to={to}>Check Task</Link>
                </div>
            </article>
        </section>
    )
}

const Home = () => {
    return (
        <div className="flex flex-col gap-3">
            <h1 className="font-monsterrat text-xl text-3xl">Institchu Code Test</h1>
            <Section title="Task 1" to={AppRoute.TASK_1}>
                <div className="text-base sm:text-lg">Photo album</div>
                <p className="text-sm sm:text-base">Find out how https://jsonplaceholder.typicode.com/ REST API works and make a web page to display all photos in album id:1.</p>
            </Section>
            <Section title="Task 2 & 3" to={AppRoute.TASK_2}>
                <div className="text-base sm:text-lg">New User Form</div>
                <ol className="text-sm sm:text-base">
                    <li>Create a page with a form to submit new user to https://jsonplaceholder.typicode.com/.</li>
                    <li>Write an unit test for task 2 to confirm the response from server when submit.</li>
                </ol>
            </Section>
        </div>
    )
}

export default Home