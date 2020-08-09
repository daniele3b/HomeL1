const express = require("express");
const router = express.Router();

router.get("/getStatusServer", (req, res) => {
    console.log("server attivo")
    
    res.status(200).send("Service is active!")
});

module.exports = router;