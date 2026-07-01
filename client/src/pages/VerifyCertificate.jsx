import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function VerifyCertificate() {

    const [certificate, setCertificate] = useState("");
    const [result, setResult] = useState(null);

    const certificates = [
        {
            id: "REF-2026-000001",
            metal: "Gold",
            purity: "99.99%",
            status: "VERIFIED",
            date: "29 June 2026"
        },
        {
            id: "REF-2026-000002",
            metal: "Silver",
            purity: "99.95%",
            status: "VERIFIED",
            date: "29 June 2026"
        }
    ];

    const verifyCertificate = () => {

        const found = certificates.find(
            cert =>
                cert.id.toUpperCase() ===
                certificate.toUpperCase()
        );

        setResult(found || false);
    };

    return (
        <>
            <Navbar />

            <section className="verify-page">

                <h1>
                    CERTIFICATE VERIFICATION
                </h1>

                <p>
                    Verify refinery certificates,
                    assay reports and export documents.
                </p>

                <div className="verify-box">

                    <input
                        type="text"
                        placeholder="Enter Certificate Number"
                        value={certificate}
                        onChange={(e) =>
                            setCertificate(e.target.value)
                        }
                    />

                    <button
                        onClick={verifyCertificate}
                    >
                        Verify Certificate
                    </button>

                    {result && (

                        <div className="verify-result">

                            <h2>
                                {result.status}
                            </h2>

                            <p>
                                Certificate:
                                {result.id}
                            </p>

                            <p>
                                Metal:
                                {result.metal}
                            </p>

                            <p>
                                Purity:
                                {result.purity}
                            </p>

                            <p>
                                Date Issued:
                                {result.date}
                            </p>

                        </div>

                    )}

                    {result === false && (

                        <div className="verify-error">

                            Certificate Not Found.

                        </div>

                    )}

                </div>

            </section>

            <Footer />
        </>
    );
}

export default VerifyCertificate;