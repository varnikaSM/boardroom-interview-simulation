import express from "express";
import bcrypt from "bcrypt";
import pool from "../db.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";  // ✅ Add this line!

dotenv.config();
const router = express.Router();

// ✅ Signup Route
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await pool.query(
            "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role",
            [name, email, hashedPassword, role]
        );

        res.status(201).json({ message: "User registered successfully", user: newUser.rows[0] });
    } catch (err) {
        res.status(500).json({ message: "Error signing up", error: err.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // ✅ Check if the user exists
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // ✅ Compare hashed passwords
        const isMatch = await bcrypt.compare(password, user.rows[0].password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // ✅ Generate JWT Token
        const token = jwt.sign(
            { id: user.rows[0].id, email: user.rows[0].email, role: user.rows[0].role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({ message: "Login successful", token, user: { id: user.rows[0].id, email: user.rows[0].email, role: user.rows[0].role } });
    } catch (err) {
        console.error("❌ Login Error:", err.message);
        res.status(500).json({ message: "Error logging in", error: err.message });
    }
});

export default router;
