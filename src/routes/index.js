const express = require("express");
const router = express.Router();

const { findnip } = require("../controllers/persona.js");

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.get("/findnip/:nip", findnip);

router.get("*", (req, res) => {
    res.send("404");
});

module.exports = router;