import { Link, Outlet } from "react-router-dom";

export default function App() {
    return (
        <>
            [FIXED_CONTENT]

            <nav>
                <Link to="/vite-react-router/">Home</Link>
            </nav>

            <Outlet />

            [FIXED_CONTENT]
        </>
    );
}