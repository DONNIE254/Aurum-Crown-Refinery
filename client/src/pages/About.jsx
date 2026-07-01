import Navbar from "../components/Navbar";

function About() {
    return (
        <>
            <Navbar />

            <section className="about-page">

                <h1>ABOUT AURUM CROWN</h1>

                <div className="about-container">

                    <div className="about-image">

    <img
        src="/images/refinery.jpg"
        alt="Aurum Crown Refinery"
    />

</div>

                    <div className="about-content">

    <p>
        <span className="gold">
            AURUM CROWN REFINERY
        </span>
        {" "}is a leading precious metals refinery
        specializing in gold, silver, platinum and
        industrial smelting services across Africa.
    </p>

    <p>
        We are committed to delivering the
        highest purity, exceptional quality and
        trusted services to our global partners.
    </p>

    <h2>Our Expertise</h2>

    <ul>
        <li>✓ Gold Refining</li>
        <li>✓ Silver Refining</li>
        <li>✓ Platinum Recovery</li>
        <li>✓ Precious Metals Assaying</li>
        <li>✓ Export Logistics</li>
    </ul>

</div>

                </div>

                <div className="values">

                    <h2>OUR CORE VALUES</h2>

                    <div className="values-grid">

                        <div className="value-card">
                            🏆 Excellence
                        </div>

                        <div className="value-card">
                            🔒 Integrity
                        </div>

                        <div className="value-card">
                            ⚡ Innovation
                        </div>

                        <div className="value-card">
                            🌍 Sustainability
                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}

export default About;