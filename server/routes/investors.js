const express = require("express");
const router = express.Router();

const pool = require("../config/database");


// GET all investors
router.get("/", async (req, res) => {

    try {

        const result = await pool.query(
            `
            SELECT *
            FROM investors
            ORDER BY id DESC
            `
        );

        res.json(result.rows);

    } catch (err) {

        console.log(
            "GET INVESTORS ERROR:"
        );

        console.log(err);

        res.status(500).json({
            success: false,
            error: err.message
        });
    }
});


// CREATE investor
router.post("/", async (req, res) => {

    try {

        const {
            company_name,
            contact_name,
            email,
            investment_interest
        } = req.body;

        const result = await pool.query(
            `
            INSERT INTO investors
            (
                company_name,
                contact_name,
                email,
                investment_interest,
                created_at
            )
            VALUES
            (
                $1,
                $2,
                $3,
                $4,
                NOW()
            )
            RETURNING *
            `,
            [
                company_name,
                contact_name,
                email,
                investment_interest
            ]
        );

        res.status(201).json(
            result.rows[0]
        );

    } catch (err) {

        console.log(
            "CREATE INVESTOR ERROR:"
        );

        console.log(err);

        res.status(500).json({
            success: false,
            error: err.message
        });
    }
});

module.exports = router;