import Navbar from "../components/Navbar";

function GlobalOperations() {
    return (
        <>
            <Navbar />

            <section className="global-page">

                <h1>GLOBAL OPERATIONS</h1>

                <div className="global-hero">

                    <img
                        src="/images/world-map.jpg"
                        alt="Global Operations"
                    />

                    <div className="global-text">

                        <h2>
                            International Precious Metals Network
                        </h2>

                        <p>
                            Aurum Crown Refinery serves
                            customers across Africa,
                            Europe, Asia and the Middle East,
                            delivering world-class precious
                            metals refining solutions.
                        </p>

                    </div>

                </div>

                <div className="countries-section">

                    <h2>OPERATING REGIONS</h2>

                    <div className="countries-grid">

                        <div className="country-card">
    <h3>🇰🇪 Kenya</h3>

    <p>
        Regional Headquarters and
        Precious Metals Operations
    </p>
</div>

                        <div className="country-card">
    <h3>🇦🇪 UAE</h3>

    <p>
        International Trading and
        Export Operations
    </p>
</div>

                        <div className="country-card">
    <h3>🇨🇭 Switzerland</h3>

    <p>
        Bullion Markets and
        Precious Metals Trading
    </p>
</div>

                        <div className="country-card">
    <h3>🇿🇦 South Africa</h3>

    <p>
        Mining Partnerships and
        Resource Acquisition
    </p>
</div>

                        <div className="country-card">
    <h3>🇨🇳 China</h3>

    <p>
        Industrial Manufacturing
        and Equipment Supply
    </p>
</div>

                        <div className="country-card">
    <h3>🇬🇧 United Kingdom</h3>

    <p>
        International Finance and
        Commercial Partnerships
    </p>
</div>

                    </div>

                </div>

                <div className="certification-section">

                    <h2>CERTIFICATIONS</h2>

                    <div className="cert-grid">

                        <div className="cert-card">
                            ✓ LBMA Standards
                        </div>

                        <div className="cert-card">
                            ✓ ISO Certified
                        </div>

                        <div className="cert-card">
                            ✓ Export Compliance
                        </div>

                        <div className="cert-card">
                            ✓ International Logistics
                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}

export default GlobalOperations;