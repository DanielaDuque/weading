import App from "./App.tsx";
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./styles/main.scss";
import i18n from './i18n'; // Import your i18n configuration
import {I18nextProvider} from "react-i18next";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <I18nextProvider i18n={i18n}>
            <App/>
        </I18nextProvider>
    </StrictMode>
)
