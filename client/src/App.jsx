import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import LoadingScreen from "./components/LoadingScreen";

import Home from "./pages/Home";
import BookSmelting from "./pages/BookSmelting";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Refinery from "./pages/Refinery";
import GlobalOperations from "./pages/GlobalOperations";
import Investors from "./pages/Investors";

import VerifyCertificate from "./pages/VerifyCertificate";
import CertificateGenerator from "./pages/CertificateGenerator";

import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";

function App() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);

    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    return (

        <Routes>

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/services"
                element={<Services />}
            />

            <Route
                path="/book-smelting"
                element={<BookSmelting />}
            />

            <Route
                path="/about"
                element={<About />}
            />

            <Route
                path="/contact"
                element={<Contact />}
            />

            <Route
                path="/refinery"
                element={<Refinery />}
            />

            <Route
                path="/global"
                element={<GlobalOperations />}
            />

            <Route
                path="/investors"
                element={<Investors />}
            />

            <Route
                path="/verify"
                element={<VerifyCertificate />}
            />

            <Route
                path="/certificate"
                element={<CertificateGenerator />}
            />

            <Route
                path="/admin-login"
                element={<AdminLogin />}
            />

            <Route
                path="/admin"
                element={<AdminDashboard />}
            />

        </Routes>

    );
}

export default App;