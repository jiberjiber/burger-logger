// Add Dependencies
const express = require('express');
const burger = require('../models/burger.js');

// Configure Express
const router = express.Router();

// Create routes
router.get('/', (req, res) => {
    burger.all(data => {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create(req.body, result => {
        console.log(result);
    });
});

router.put('/api/burgers/:id', (req, res) => {
    console.log(`Put received, update should be called here.`);
});

router.delete('/api/burgers/:id', (req, res) => {
    const target = req.params.id;

    burger.delete(target, result => {
        if(result.affectedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;