import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BookSmelting() {

    const [message, setMessage] = useState("");

    const [job, setJob] = useState({
        job_number:
            `SM-${Date.now().toString().slice(-6)}`,
        client_name: "",
        metal: "Gold",
        weight: "",
        status: "Pending"
    });

    const submitJob = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/smelting`,
                job
            );

            setMessage(
                `Smelting appointment booked successfully!

Job Number: ${response.data.job_number}`
            );

            setJob({
                job_number:
                    `SM-${Date.now().toString().slice(-6)}`,
                client_name: "",
                metal: "Gold",
                weight: "",
                status: "Pending"
            });

        } catch (error) {

            console.error(error);

            setMessage(
                "Failed to book smelting appointment."
            );
        }
    };

    return (
        <>
            <Navbar />

            <div className="booking-container">

                <div className="booking-left">

                    <div className="premium-badge">
                        ★ PREMIUM REFINERY SERVICE
                    </div>

                    <h1>
                        BOOK SMELTING SERVICE
                    </h1>

                    <p>
                        Schedule your precious metals smelting appointment with confidence.
                    </p>

                    <div className="feature-boxes">

                        <div className="feature">
                            Trusted
                        </div>

                        <div className="feature">
                            High Quality
                        </div>

                        <div className="feature">
                            Secure
                        </div>

                        <div className="feature">
                            Timely Service
                        </div>

                    </div>

                    <div className="metal-cards">

                        <div className="metal-card">
                            <h3>GOLD</h3>
                            <p>999.9 Fine Gold Refining</p>
                        </div>

                        <div className="certification">

                            <h3>
                                ISO CERTIFIED REFINERY
                            </h3>

                            <p>
                                International Standards • Secure Processing • Quality Assured
                            </p>

                        </div>

                        <div className="metal-card">
                            <h3>SILVER</h3>
                            <p>High Purity Silver Processing</p>
                        </div>

                        <div className="metal-card">
                            <h3>PLATINUM</h3>
                            <p>Premium Platinum Assaying</p>
                        </div>

                    </div>

                </div>

                <div className="booking-right">

                    <h2>
                        SMELTING APPOINTMENT FORM
                    </h2>

                    <form
                        className="booking-form"
                        onSubmit={submitJob}
                    >

                        <input
                            type="text"
                            placeholder="Full Name"
                            value={job.client_name}
                            onChange={(e) =>
                                setJob({
                                    ...job,
                                    client_name:
                                        e.target.value
                                })
                            }
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                        />

                        <select
                            value={job.metal}
                            onChange={(e) =>
                                setJob({
                                    ...job,
                                    metal:
                                        e.target.value
                                })
                            }
                        >
                            <option>
                                Gold
                            </option>

                            <option>
                                Silver
                            </option>

                            <option>
                                Platinum
                            </option>
                        </select>

                        <input
                            type="number"
                            placeholder="Weight (grams)"
                            value={job.weight}
                            onChange={(e) =>
                                setJob({
                                    ...job,
                                    weight:
                                        e.target.value
                                })
                            }
                        />

                        <input type="date" />

                        <textarea
                            rows="5"
                            placeholder="Additional Information"
                        />

                        <button type="submit">
                            BOOK APPOINTMENT
                        </button>

                    </form>

                    {message && (
                        <h3 className="success-message">
                            {message}
                        </h3>
                    )}

                </div>

            </div>

            <Footer />
        </>
    );
}

export default BookSmelting;