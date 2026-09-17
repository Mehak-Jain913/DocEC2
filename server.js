import express from "express";

const app = express();

const PORT = 5500;

app.get("/", (req, res) => {
    res.send("Hello from Express + Docker + AWS EC2!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "Running",
        message: "Server is running",
        time: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});