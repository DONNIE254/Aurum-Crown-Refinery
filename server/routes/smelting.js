const express = require("express");
const router = express.Router();

const pool = require("../config/database");


// GET all smelting jobs
router.get("/", async (req, res) => {

    try {

        const result = await pool.query(
            `
            SELECT *
            FROM smelting_jobs
            ORDER BY id DESC
            `
        );

        res.json(result.rows);

    } catch (err) {

        console.log(
            "GET SMELTING ERROR:"
        );

        console.log(err);

        res.status(500).json({
            success: false,
            error: err.message
        });
    }
});


// CREATE smelting job
router.post("/", async (req, res) => {

    try {

        const {
            job_number,
            client_name,
            metal,
            weight,
            status
        } = req.body;

        const result = await pool.query(
            `
            INSERT INTO smelting_jobs
            (
                job_number,
                client_name,
                metal,
                weight,
                status,
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
                job_number,
                client_name,
                metal,
                weight,
                status
            ]
        );

        res.status(201).json(
            result.rows[0]
        );

    } catch (err) {

        console.log(
            "CREATE SMELTING ERROR:"
        );

        console.log(err);

        res.status(500).json({
            success: false,
            error: err.message
        });
    }
});

module.exports = router;