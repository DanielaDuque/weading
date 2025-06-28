// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AppTheme from './Theme';
import './styles/main.scss';
import Home from "./pages/Home.tsx";

function App() {
    return (
        <AppTheme>
            <Router basename={'wedding'}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/*<Route path="/about" element={<AboutPage />} />*/}
                    {/*<Route path="/contact" element={<ContactPage />} />*/}
                    {/*<Route path="/ceremony" element={<CeremonyPage />} />*/}
                </Routes>
            </Router>
        </AppTheme>
    );
}

export default App;