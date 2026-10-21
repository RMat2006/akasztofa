const express = require('express');
const router = express.Router();
const database = require('../sql/database.js');
const fs = require('fs/promises');

//!Multer
const multer = require('multer'); //?npm install multer
const path = require('path');
const { request } = require('http');

const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, path.join(__dirname, '../uploads'));
    },
    filename: (request, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname); //?egyedi név: dátum - file eredeti neve
    }
});

const upload = multer({ storage });

//!Endpoints:
//?GET /api/test
router.get('/test', (request, response) => {
    response.status(200).json({
        message: 'Ez a végpont működik.'
    });
});

<<<<<<< HEAD
router.post('/jatek', (request, response)=>{
    response.status(200).json({
        
    })
})
=======
const tomb = [];

router.post('/akasztofa/szokezelo', (request, response) => {
    
    response.status(200).json({
        message: 'Ez a végpont működik.'
    });
});

router.get('/akasztofa/szokezelo', (request, response) => {
    response.status(200).json({
        message: 'Ez a végpont működik.'
    });
});


>>>>>>> f8e8cc1ad7bafbe847b341d5e534660f5c046e0e

//?GET /api/testsql
router.get('/testsql', async (request, response) => {
    try {
        const selectall = await database.selectall();
        response.status(200).json({
            message: 'Ez a végpont működik.',
            results: selectall
        });
    } catch (error) {
        response.status(500).json({
            message: 'Ez a végpont nem működik.'
        });
    }
});

module.exports = router;
