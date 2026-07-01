const express = require("express");
const router = express.Router();

const pool = require("../config/database");


// =============================
// GET ALL CERTIFICATES
// =============================
router.get("/", async (req, res) => {

    try {

        const result = await pool.query(
            `
            SELECT *
            FROM certificates
            ORDER BY id DESC
            `
        );

        res.json(result.rows);

    } catch (err) {

        console.log(
            "GET CERTIFICATES ERROR:"
        );

        console.log(err);

        res.status(500).json({
            success: false,
            error: err.message
        });
    }
});


// =============================
// CREATE CERTIFICATE
// =============================
router.post("/", async (req, res) => {

    try {

        console.log(
            "Incoming certificate:"
        );

        console.log(req.body);

        const {
            certificate_number,
            client_name,
            metal,
            purity,
            weight
        } = req.body;

        const result = await pool.query(
            `
            INSERT INTO certificates
            (
                certificate_number,
                client_name,
                metal,
                purity,
                weight,
                issued_date
            )
            VALUES
            (
                $1,
                $2,
                $3,
                $4,
                $5,
                NOW()
            )
            RETURNING *
            `,
            [
                certificate_number,
                client_name,
                metal,
                purity,
                weight
            ]
        );

        console.log(
            "Certificate saved:"
        );

        console.log(
            result.rows[0]
        );

        res.status(201).json(
            result.rows[0]
        );

    } catch (err) {

        console.log(
            "CREATE CERTIFICATE ERROR:"
        );

        console.log(err);

        res.status(500).json({
            success: false,
            error: err.message
        });
    }
});


module.exports = router;