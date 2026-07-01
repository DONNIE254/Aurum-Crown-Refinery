require("dotenv").config();
const certificateRoutes =
    require("./routes/certificates");
    const investorRoutes =
    require("./routes/investors");
    const smeltingRoutes =
    require("./routes/smelting");
    const customerRoutes =
    require("./routes/customers");
    const authRoutes =
    require("./routes/auth");

const express = require("express");
const cors = require("cors");

const pool = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());
app.use(
    "/api/certificates",
    certificateRoutes
);

app.use(
    "/api/investors",
    investorRoutes
);

app.use(
    "/api/smelting",
    smeltingRoutes
);
app.use(
    "/api/customers",
    customerRoutes
);
app.use(
    "/api/auth",
    authRoutes
);

app.get("/", (req, res) => {

    res.send(
        "Aurum Crown Backend Running"
    );

});

app.get("/test-db", async (req, res) => {

    try {

        const result =
            await pool.query(
                "SELECT NOW()"
            );

        res.json({
            success: true,
            database: result.rows[0]
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

});

app.listen(
    process.env.PORT,
    () => {

        console.log(
            `Server running on port ${process.env.PORT}`
        );

    }
);