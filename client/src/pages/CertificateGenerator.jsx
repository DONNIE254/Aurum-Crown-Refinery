import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import jsPDF from "jspdf";
import axios from "axios";

function CertificateGenerator() {

    const [certificate, setCertificate] = useState({
        number: `REF-2026-${Date.now().toString().slice(-6)}`,
        client: "",
        metal: "Gold",
        purity: "99.99%",
        weight: ""
    });

    const generateCertificate = async () => {

        try {

            const response = await axios.post(
                "http://localhost:5000/api/certificates",
                {
                    certificate_number: certificate.number,
                    client_name: certificate.client,
                    metal: certificate.metal,
                    purity: certificate.purity,
                    weight: certificate.weight
                }
            );

            alert(
                `Certificate saved successfully

Database ID: ${response.data.id}`
            );

        } catch (error) {

            console.error(error);

            alert("Failed to save certificate");
        }
    };

    const exportPDF = () => {

        const doc = new jsPDF();

        doc.setFontSize(22);
        doc.text(
            "AURUM CROWN REFINERY",
            20,
            20
        );

        doc.setFontSize(16);
        doc.text(
            "OFFICIAL REFINERY CERTIFICATE",
            20,
            40
        );

        doc.setFontSize(12);

        doc.text(
            `Certificate No: ${certificate.number}`,
            20,
            70
        );

        doc.text(
            `Client: ${certificate.client}`,
            20,
            85
        );

        doc.text(
            `Metal: ${certificate.metal}`,
            20,
            100
        );

        doc.text(
            `Purity: ${certificate.purity}`,
            20,
            115
        );

        doc.text(
            `Weight: ${certificate.weight}`,
            20,
            130
        );

        doc.text(
            "Certified by Aurum Crown Refinery",
            20,
            170
        );

        doc.save(
            `${certificate.number}.pdf`
        );
    };

    return (
        <>
            <Navbar />

            <section className="certificate-page">

                <h1>
                    CERTIFICATE GENERATOR
                </h1>

                <div className="certificate-form">

                    <input
                        type="text"
                        placeholder="Certificate Number"
                        value={certificate.number}
                        onChange={(e) =>
                            setCertificate({
                                ...certificate,
                                number: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Client Name"
                        value={certificate.client}
                        onChange={(e) =>
                            setCertificate({
                                ...certificate,
                                client: e.target.value
                            })
                        }
                    />

                    <select
                        value={certificate.metal}
                        onChange={(e) =>
                            setCertificate({
                                ...certificate,
                                metal: e.target.value
                            })
                        }
                    >
                        <option>Gold</option>
                        <option>Silver</option>
                        <option>Platinum</option>
                        <option>Palladium</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Purity"
                        value={certificate.purity}
                        onChange={(e) =>
                            setCertificate({
                                ...certificate,
                                purity: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Weight (Kg)"
                        value={certificate.weight}
                        onChange={(e) =>
                            setCertificate({
                                ...certificate,
                                weight: e.target.value
                            })
                        }
                    />

                    <button
                        onClick={generateCertificate}
                    >
                        Generate Certificate
                    </button>

                    <button
                        onClick={exportPDF}
                    >
                        Download PDF Certificate
                    </button>

                </div>

            </section>

            <Footer />
        </>
    );
}

export default CertificateGenerator;