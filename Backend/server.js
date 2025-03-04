import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";  // ✅ Import routes *after* defining app
import pool from "./db.js";  // ✅ Import database connection

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Define Routes *after* initializing app
app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// ✅ Check Database Connection
pool.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.error("❌ Database Connection Error:", err);
    } else {
        console.log("✅ Database Connected:", res.rows);
    }
});

const PORT = process.env.PORT || 5000;

app._router.stack.forEach((middleware) => {
    if (middleware.route) { 
        console.log(`✅ ${Object.keys(middleware.route.methods)[0].toUpperCase()} ${middleware.route.path}`);
    } else if (middleware.name === "router") { 
        middleware.handle.stack.forEach((handler) => {
            if (handler.route) {
                console.log(`✅ ${Object.keys(handler.route.methods)[0].toUpperCase()} ${handler.route.path}`);
            }
        });
    }
});
console.log("✅ Registered Routes:");
app._router.stack.forEach((middleware) => {
    if (middleware.route) {
        console.log(`✅ ${Object.keys(middleware.route.methods)[0].toUpperCase()} ${middleware.route.path}`);
    }
});


app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
