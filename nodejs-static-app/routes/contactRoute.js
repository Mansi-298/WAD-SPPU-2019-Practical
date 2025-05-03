const express = require('express');
const router = express();
const Contact = require("../models/db");

router.post("/submit-form", async (req, res) => {
    try{
        const newData = new Contact(req.body);
        newData.save().then(() => {
            res.send('<h2>Thank you! Your message has been received.</h2>');
          })
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});

module.exports = router;