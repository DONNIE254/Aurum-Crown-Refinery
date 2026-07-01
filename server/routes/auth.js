const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const pool = require("../config/database");

router.post("/login", async (req, res) => {

    try {

        const {
            username,
            password
        } = req.body;

        const result =
            await pool.query(
                `
                SELECT *
                FROM admins
                WHERE username=$1
                `,
                [username]
            );

        if (
            result.rows.length === 0
        ) {

            return res
                .status(401)
                .json({
                    success: false,
                    message:
                        "Invalid username"
                });
        }

        const admin =
            result.rows[0];

        const valid =
            await bcrypt.compare(
                password,
                admin.password_hash
            );

        if (!valid) {

            return res
                .status(401)
                .json({
                    success: false,
                    message:
                        "Invalid password"
                });
        }

        const token =
            jwt.sign(
                {
                    id: admin.id,
                    username:
                        admin.username,
                    role:
                        admin.role
                },
                "aurum-secret-key",
                {
                    expiresIn:
                        "24h"
                }
            );

        res.json({
            success: true,
            token,
            user: {
                id:
                    admin.id,
                username:
                    admin.username,
                role:
                    admin.role
            }
        });

    } catch (err) {

        console.log(
            "LOGIN ERROR:"
        );

        console.log(err);

        res.status(500).json({
            success: false,
            error:
                err.message
        });
    }
});

module.exports = router;