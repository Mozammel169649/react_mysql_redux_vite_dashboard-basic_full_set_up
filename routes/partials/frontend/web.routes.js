const express = require('express');
const router = express.Router();

router
    .get("/", (req, res) => {
        return res.render("frontend/home")
    })
    .get("/dashboard", (req, res) => {
        return res.render("backend/dashboard")
    })

module.exports = () => router;