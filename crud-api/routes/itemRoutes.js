const express = require('express');
const router = express();
const Item = require('../models/Item');

// create
router.post("/", async (req, res) => {
    try{
        const newItem = new Item(req.body);
        const savedItem = await newItem.save();
        res.status(200).json(savedItem);
    }
    catch(err)
    {
        res.status(401).json(err);
    }
});

// retrieve - get
router.get("/", async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

// update 
router.put("/:id", async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(200).json(updatedItem);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

// delete 
router.delete("/:id", async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.status(200).send();
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

module.exports = router;