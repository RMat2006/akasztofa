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





router.get('/jatek', (request, response) => {
    try {
        response.status(200).json({
            message: 'Működik',
            szo: tomb[Math.floor(Math.random() * (tomb.length - 0 )) + 0]
        });
    } catch (error) {

        response.status(500).json({
            message: 'Nem működik'
        });
    }
});

const tomb = ["asd", "asd2"];

router.post('/akasztofa/szokezelo/szohozzaad', (request, response) => {
    try {
        let szo = request.body.szo;
        tomb.push(szo);
        response.status(200).json({
            message: 'Ez a végpont működik!',
            lista: tomb
        });
    } catch (error) {
        response.status(500).json({
            message: 'Nem működik'
        });
    }
});

router.post('/akasztofa/szokezelo/szotorol', (request, response) => {
    try {
        let torolSzo = request.body.szo;
        console.log(torolSzo);
        let index = tomb.indexOf(torolSzo);

        if (index != -1) {
            tomb.splice(index,1)
            response.status(200).json({
                message: 'Ez a végpont működik!',
                lista: tomb
            });
        }
        else {
            response.status(404).json({
                message: 'A szó nem található!'
            });
        }
        
        
    } catch (error) {
        response.status(500).json({
            message: 'Nem működik'
        });
    }
});

router.get('/akasztofa/szokezelo', (request, response) => {
    response.status(200).json({

        message: 'Ez a végpont működik!',
        lista: tomb        
    });
});

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
