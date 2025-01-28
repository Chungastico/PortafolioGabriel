import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutUs from '../pages/AboutUs';

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <main className="min-h-screen p-4">
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default AppRouter;
