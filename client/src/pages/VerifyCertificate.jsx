import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function VerifyCertificate() {

    const [certificate, setCertificate] = useState("");
    const [result, setResult] = useState(null);

    const verifyCertificate = async () => {

        try {

            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/certificates`
            );

            const found = response.data.find(
                cert =>
                    cert.certificate_number.toUpperCase() ===
                    certificate.toUpperCase()
            );

            if (found) {

                setResult({
                    id: found.certificate_number,
                    metal: found.metal,
                    purity: found.purity,
                    status: "VERIFIED",
                    date: new Date(
                        found.issued_date
                    ).toLocaleDateString()
                });

            } else {

                setResult(false);

            }

        } catch (error) {

            console.error(error);
            setResult(false);

        }
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

                    {result && result !== false && (

                        <div className="verify-result">

                            <h2>
                                {result.status}
                            </h2>

                            <p>
                                Certificate:
                                {" "}{result.id}
                            </p>

                            <p>
                                Metal:
                                {" "}{result.metal}
                            </p>

                            <p>
                                Purity:
                                {" "}{result.purity}
                            </p>

                            <p>
                                Date Issued:
                                {" "}{result.date}
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