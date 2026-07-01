import { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import HeadquartersMap from "../components/HeadquartersMap";

function Contact() {

    const [customer, setCustomer] = useState({
        company_name: "",
        contact_person: "",
        email: "",
        phone: "",
        country: "Kenya"
    });

    const [message, setMessage] = useState("");

    const submitCustomer = async () => {

        try {

            const response = await axios.post(
                "http://localhost:5000/api/customers",
                customer
            );

            setMessage(
                `Customer registered successfully!

Customer ID: ${response.data.id}`
            );

            setCustomer({
                company_name: "",
                contact_person: "",
                email: "",
                phone: "",
                country: "Kenya"
            });

        } catch (error) {

            console.error(error);

            setMessage(
                "Failed to register customer."
            );
        }
    };

    return (
        <>
            <Navbar />

            <section className="contact-page">

                <h1>CONTACT US</h1>

                <div className="contact-container">

                    <div className="contact-info">

                        <div className="contact-card">
                            <h2>📍 Office Location</h2>
                            <p>
                                Ngong Rd Nairobi, Kenya
                            </p>
                        </div>

                        <div className="contact-card">
                            <h2>📞 Phone</h2>
                            <p>
                                +254 710354594
                            </p>
                            <p>
                                +254 759095878
                            </p>
                        </div>

                        <div className="contact-card">
                            <h2>✉️ Email</h2>
                            <p>
                                info@aurumcrown.com
                            </p>
                        </div>

                    </div>

                    <div className="contact-form">

                        <h2>
                            Send Us A Message
                        </h2>

                        <input
                            type="text"
                            placeholder="Contact Person"
                            value={customer.contact_person}
                            onChange={(e) =>
                                setCustomer({
                                    ...customer,
                                    contact_person:
                                        e.target.value
                                })
                            }
                        />

                        <input
                            type="text"
                            placeholder="Company Name"
                            value={customer.company_name}
                            onChange={(e) =>
                                setCustomer({
                                    ...customer,
                                    company_name:
                                        e.target.value
                                })
                            }
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            value={customer.email}
                            onChange={(e) =>
                                setCustomer({
                                    ...customer,
                                    email:
                                        e.target.value
                                })
                            }
                        />

                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={customer.phone}
                            onChange={(e) =>
                                setCustomer({
                                    ...customer,
                                    phone:
                                        e.target.value
                                })
                            }
                        />

                        <input
                            type="text"
                            placeholder="Country"
                            value={customer.country}
                            onChange={(e) =>
                                setCustomer({
                                    ...customer,
                                    country:
                                        e.target.value
                                })
                            }
                        />

                        <button
                            onClick={
                                submitCustomer
                            }
                        >
                            SEND MESSAGE
                        </button>

                        {message && (
                            <h3>
                                {message}
                            </h3>
                        )}

                    </div>

                </div>

                <HeadquartersMap />

            </section>
        </>
    );
}

export default Contact;