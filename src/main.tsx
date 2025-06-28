import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

const router = createBrowserRouter([
    {
        path: "/vite-react-router/",
        element: <App />,
        children: [
            {
                path: "/vite-react-router/",
                element: <Home />,
            }
        ],
    },
]);
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
