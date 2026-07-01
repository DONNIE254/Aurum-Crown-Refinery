import Navbar from "../components/Navbar";

function Services() {
    return (
        <>
            <Navbar />

            <section className="services-page">
                <h1>OUR REFINING SERVICES</h1>

                <div className="services-grid">

                    <div className="service-card">
                        <h2>🥇 Gold Refining</h2>
                        <p>
                            Professional gold purification,
                            smelting and bullion production.
                        </p>
                    </div>

                    <div className="service-card">
                        <h2>🥈 Silver Refining</h2>
                        <p>
                            High-quality silver recovery
                            and purification services.
                        </p>
                    </div>

                    <div className="service-card">
                        <h2>💎 Platinum Refining</h2>
                        <p>
                            Precious metal refining
                            and recovery solutions.
                        </p>
                    </div>

                    <div className="service-card">
                        <h2>🔥 Smelting Services</h2>
                        <p>
                            Industrial smelting and
                            metal extraction services.
                        </p>
                    </div>

                    <div className="service-card">
                        <h2>🔬 Assaying Laboratory</h2>
                        <p>
                            Certified testing and
                            precious metal analysis.
                        </p>
                    </div>

                    <div className="service-card">
                        <h2>🚚 Export Logistics</h2>
                        <p>
                            International precious
                            metals transportation.
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Services;