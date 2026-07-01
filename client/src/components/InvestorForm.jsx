import { useState } from "react";
import axios from "axios";

function InvestorForm() {

    const [investor, setInvestor] = useState({
        company_name: "",
        contact_name: "",
        email: "",
        investment_interest: ""
    });

    const submitInvestor = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:5000/api/investors",
                investor
            );

            alert(
                `Investor inquiry submitted successfully

Investor ID: ${response.data.id}`
            );

            setInvestor({
                company_name: "",
                contact_name: "",
                email: "",
                investment_interest: ""
            });

        } catch (error) {

            console.error(error);

            alert(
                "Failed to submit investor inquiry"
            );
        }
    };

    return (

        <section className="investor-form">

            <h2>
                INVESTOR INQUIRY
            </h2>

            <form onSubmit={submitInvestor}>

                <input
                    type="text"
                    placeholder="Full Name"
                    value={investor.contact_name}
                    onChange={(e) =>
                        setInvestor({
                            ...investor,
                            contact_name: e.target.value
                        })
                    }
                />

                <input
                    type="email"
                    placeholder="Email Address"
                    value={investor.email}
                    onChange={(e) =>
                        setInvestor({
                            ...investor,
                            email: e.target.value
                        })
                    }
                />

                <input
                    type="text"
                    placeholder="Company Name"
                    value={investor.company_name}
                    onChange={(e) =>
                        setInvestor({
                            ...investor,
                            company_name: e.target.value
                        })
                    }
                />

                <select
                    value={investor.investment_interest}
                    onChange={(e) =>
                        setInvestor({
                            ...investor,
                            investment_interest: e.target.value
                        })
                    }
                >

                    <option value="">
                        Investment Interest
                    </option>

                    <option>
                        Gold Refining
                    </option>

                    <option>
                        Mining Partnership
                    </option>

                    <option>
                        Export Partnership
                    </option>

                    <option>
                        Strategic Investment
                    </option>

                </select>

                <textarea
                    rows="5"
                    placeholder="Tell us about your proposal..."
                    value={investor.investment_interest}
                    onChange={(e) =>
                        setInvestor({
                            ...investor,
                            investment_interest: e.target.value
                        })
                    }
                />

                <button type="submit">

                    Submit Inquiry

                </button>

            </form>

        </section>
    );
}

export default InvestorForm;