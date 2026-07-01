import Navbar from "../components/Navbar";
import Counter from "../components/Counter";
import InvestorForm from "../components/InvestorForm";
import CorporateBrochure from "../components/CorporateBrochure";

function Investors() {
    return (
        <>
            <Navbar />

            <section className="investors-page">

                <h1>INVESTORS & PARTNERS</h1>

                <div className="investor-hero">

                    <div className="investor-text">

                        <h2>
                            Building Global Precious Metals Partnerships
                        </h2>

                        <p>
                            Aurum Crown Refinery collaborates
                            with strategic investors,
                            international trading companies,
                            mining corporations and logistics
                            partners across the globe.
                        </p>

                    </div>

                </div>

                {/* STRATEGIC PARTNERS */}

                <div className="partners-section">

                    <h2>STRATEGIC PARTNERS</h2>

                    <div className="partners-grid">

                        <div className="partner-card">
                            <h3>🏦 Investment Groups</h3>
                            <p>
                                International financial
                                institutions and investors.
                            </p>
                        </div>

                        <div className="partner-card">
                            <h3>⛏ Mining Companies</h3>
                            <p>
                                Precious metals mining
                                partnerships worldwide.
                            </p>
                        </div>

                        <div className="partner-card">
                            <h3>🚢 Logistics Partners</h3>
                            <p>
                                Global transportation
                                and export services.
                            </p>
                        </div>

                        <div className="partner-card">
                            <h3>🏭 Industrial Partners</h3>
                            <p>
                                Manufacturing and
                                industrial processing.
                            </p>
                        </div>

                    </div>

                </div>

                {/* GLOBAL REACH */}

                <div className="growth-section">

                    <h2>GLOBAL REACH</h2>

                    <div className="growth-grid">

                        <div className="growth-card">
                            <h3>
    <Counter end={20} suffix="+" />
</h3>
                            <p>Countries Served</p>
                        </div>

                        <div className="growth-card">
                            <h3>
    <Counter end={100} suffix="+" />
</h3>
                            <p>Strategic Partners</p>
                        </div>

                        <div className="growth-card">
                            <h3>
    <Counter end={500} suffix="+" />
</h3>
                            <p>International Clients</p>
                        </div>

                        <div className="growth-card">
                            <h3>
    <Counter end={99} suffix="%" />
</h3>
                            <p>Precious Metal Purity</p>
                        </div>

                        <div className="growth-card">
                            <h3>24/7</h3>
                            <p>Global Operations</p>
                        </div>

                        <div className="growth-card">
                            <h3>ISO</h3>
                            <p>International Standards</p>
                        </div>

                        <div className="growth-card">
                            <h3>LBMA</h3>
                            <p>Compliance Framework</p>
                        </div>

                        <div className="growth-card">
                            <h3>100%</h3>
                            <p>Secure Logistics</p>
                        </div>

                    </div>

                </div>
                
                <InvestorForm />
                
                <CorporateBrochure />

            </section>
        </>
    );
}

export default Investors;