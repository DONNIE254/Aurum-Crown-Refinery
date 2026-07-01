import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AdminDashboard() {

    return (
        <>
            <Navbar />

            <section className="admin-dashboard">

                <h1>
                    ADMIN DASHBOARD
                </h1>

                <div className="dashboard-grid">

                    <div className="dashboard-card">
                        <h2>Customers</h2>
                        <h1>245</h1>
                    </div>

                    <div className="dashboard-card">
                        <h2>Certificates</h2>
                        <h1>1,254</h1>
                    </div>

                    <div className="dashboard-card">
                        <h2>Smelting Jobs</h2>
                        <h1>87</h1>
                    </div>

                    <div className="dashboard-card">
                        <h2>Exports</h2>
                        <h1>42</h1>
                    </div>

                    <div className="dashboard-card">
                        <h2>Revenue</h2>
                        <h1>$12.8M</h1>
                    </div>

                    <div className="dashboard-card">
                        <h2>Shipments</h2>
                        <h1>96</h1>
                    </div>

                </div>

            </section>

            <Footer />
        </>
    );
}

export default AdminDashboard;