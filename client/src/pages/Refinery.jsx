import Navbar from "../components/Navbar";

function Refinery() {
    return (
        <>
            <Navbar />

            <section className="refinery-page">

                <h1>OUR REFINERY</h1>

                <div className="refinery-hero">

                    <img
                        src="/images/refinery.jpg"
                        alt="Aurum Crown Refinery"
                    />

                    <div className="refinery-text">

                        <h2>
                            Advanced Precious Metals Processing
                        </h2>

                        <p>
                            AURUM CROWN REFINERY operates
                            advanced precious metals
                            processing facilities specializing
                            in gold, silver, platinum and
                            industrial smelting operations.
                        </p>

                        <p>
                            Our refinery combines modern
                            technology, internationally
                            recognized quality standards,
                            and highly experienced
                            metallurgical experts.
                        </p>

                    </div>

                </div>

                {/* PROCESS SECTION */}

                <div className="process-section">

                    <h2>OUR PROCESS</h2>

                    <div className="process-grid">

                        <div className="process-card">
                            <h3>① Collection</h3>
                            <p>
                                Secure acquisition and
                                transportation of raw materials.
                            </p>
                        </div>

                        <div className="process-card">
                            <h3>② Assaying</h3>
                            <p>
                                Laboratory testing and
                                purity analysis.
                            </p>
                        </div>

                        <div className="process-card">
                            <h3>③ Smelting</h3>
                            <p>
                                Controlled high-temperature
                                metal extraction.
                            </p>
                        </div>

                        <div className="process-card">
                            <h3>④ Refining</h3>
                            <p>
                                Advanced purification and
                                precious metal recovery.
                            </p>
                        </div>

                        <div className="process-card">
                            <h3>⑤ Export</h3>
                            <p>
                                Secure international
                                logistics and delivery.
                            </p>
                        </div>

                    </div>

                </div>

                {/* FACILITIES SECTION */}

                <div className="facility-section">

                    <h2>OUR FACILITIES</h2>

                    <div className="facility-grid">

                        <div className="facility-card">

                            <img
                                src="/facilities/gold-processing.jpg"
                                alt="Gold Processing"
                            />

                            <h3>Gold Processing</h3>

                            <p>
                                Advanced gold purification
                                and bullion production.
                            </p>

                        </div>

                        <div className="facility-card">

                            <img
                                src="/facilities/smelting-plant.jpg"
                                alt="Smelting Plant"
                            />

                            <h3>Smelting Plant</h3>

                            <p>
                                State-of-the-art industrial
                                smelting operations.
                            </p>

                        </div>

                        <div className="facility-card">

                            <img
                                src="/facilities/laboratory.jpg"
                                alt="Laboratory"
                            />

                            <h3>Assaying Laboratory</h3>

                            <p>
                                Certified precious metals
                                testing and analysis.
                            </p>

                        </div>

                        <div className="facility-card">

                            <img
                                src="/facilities/export-logistics.jpg"
                                alt="Export Logistics"
                            />

                            <h3>Export Logistics</h3>

                            <p>
                                Secure international
                                transportation services.
                            </p>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}

export default Refinery;