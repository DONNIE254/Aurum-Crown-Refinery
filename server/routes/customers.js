const express = require("express");
const router = express.Router();

const pool = require("../config/database");


// GET all customers
router.get("/", async (req, res) => {

    try {

        const result = await pool.query(
            `
            SELECT *
            FROM customers
            ORDER BY id DESC
            `
        );

        res.json(result.rows);

    } catch (err) {

        console.log(
            "GET CUSTOMERS ERROR:"
        );

        console.log(err);

        res.status(500).json({
            success: false,
            error: err.message
        });
    }
});


// CREATE customer
router.post("/", async (req, res) => {

    try {

        const {
            company_name,
            contact_person,
            email,
            phone,
            country
        } = req.body;

        const result = await pool.query(
            `
            INSERT INTO customers
            (
                company_name,
                contact_person,
                email,
                phone,
                country,
                created_at
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
                company_name,
                contact_person,
                email,
                phone,
                country
            ]
        );

        res.status(201).json(
            result.rows[0]
        );

    } catch (err) {

        console.log(
            "CREATE CUSTOMER ERROR:"
        );

        console.log(err);

        res.status(500).json({
            success: false,
            error: err.message
        });
    }
});

module.exports = router;