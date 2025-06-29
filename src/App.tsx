// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AppTheme from './Theme';
import './styles/main.scss';
import HomePage from "./pages/home/HomePage.tsx";
import NotFoundPage from "./pages/NotFoudPage.tsx";
import AboutPage from "./pages/about/AboutPage.tsx";
import CeremonyPage from './pages/ceremony/CeremonyPage.tsx';
import ContactPage from './pages/contact/ContactPage.tsx';
import PartyPage from "./pages/party/PartyPage.tsx";


function App() {
    return (
        <AppTheme>
            <Router basename={'wedding'}>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/ceremony" element={<CeremonyPage />} />
                    <Route path="/party" element={<PartyPage />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </AppTheme>
    );
}

export default App;