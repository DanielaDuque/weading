import App from "./App.tsx";
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./styles/main.scss";
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>
)
