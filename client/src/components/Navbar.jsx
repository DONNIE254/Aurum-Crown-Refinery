import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    return (
        <nav className="navbar">

            <div
                className="logo"
                onClick={() => navigate("/")}
            >

                <img
                    src="/logos/aurum-logo.png"
                    alt="Aurum Crown"
                />

                <div className="logo-text">

                    <h2>
                        AURUM CROWN
                    </h2>

                    <span>
                        Purity • Integrity • Global Trust
                    </span>

                </div>

            </div>

            <ul className="nav-links">

                <li onClick={() => navigate("/")}>
                    Home
                </li>

                <li onClick={() => navigate("/services")}>
                    Services
                </li>

                <li onClick={() => navigate("/refinery")}>
                    Refinery
                </li>

                <li onClick={() => navigate("/global")}>
                    Global
                </li>

                <li onClick={() => navigate("/investors")}>
                    Investors
                </li>

                <li onClick={() => navigate("/book-smelting")}>
                    Book Smelting
                </li>

                <li onClick={() => navigate("/about")}>
                    About
                </li>
                <li onClick={() => navigate("/verify")}>
    Verify
</li>
<li onClick={() => navigate("/certificate")}>
    Certificates
</li>
<li onClick={() => navigate("/admin")}>
    Admin
</li>

                <li onClick={() => navigate("/contact")}>
                    Contact
                </li>

            </ul>

        </nav>
    );
}

export default Navbar;