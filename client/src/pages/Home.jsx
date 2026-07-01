import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import MarketWidget from "../components/MarketWidget";

function Home() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <section className="home-page">

                <div className="hero-section">

                    <div className="hero-overlay">

                        <h1>
                            AURUM CROWN
                            <span className="gold">
                                {" "}REFINERY
                            </span>
                        </h1>

                        <p>
                            International Precious Metals
                            Refining, Smelting, Assaying
                            and Global Export Solutions
                        </p>

                        <div className="hero-buttons">

                            <button
                                onClick={() => navigate("/book-smelting")}
                            >
                                Book Smelting
                            </button>

                            <button
    onClick={() => navigate("/services")}
>
    Our Services
</button>

                        </div>

                    </div>

                </div>

                <div className="stats-section">

                    <div className="stat-card">
                        <h2>99.99%</h2>
                        <p>Purity Standard</p>
                    </div>

                    <div className="stat-card">
                        <h2>20+</h2>
                        <p>Countries Served</p>
                    </div>

                    <div className="stat-card">
                        <h2>500+</h2>
                        <p>Global Clients</p>
                    </div>

                    <div className="stat-card">
                        <h2>24/7</h2>
                        <p>Operations</p>
                    </div>

                </div>

                <div className="welcome-section">

                    <h2>
                        WELCOME TO
                        <span className="gold">
                            {" "}AURUM CROWN
                        </span>
                    </h2>

                    <p>
                        We provide world-class precious
                        metals refining, smelting,
                        assaying and international
                        logistics services with the
                        highest standards of security,
                        purity and professionalism.
                    </p>

                </div>

            </section>
            <MarketWidget />

            <Footer />
        </>
    );
}

export default Home;