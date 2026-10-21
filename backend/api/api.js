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

router.get('/jatek', (request, response)=>{
    try{
        response.status(200).json({
            message: "Működik",    
            szo : tomb[Math.floor(Math.random() * (tomb.length - 0 + 1) ) + 0]
            
        })
    }catch(error){
=======
router.post('/jatek', (request, response) => {
    try {
        response.status(200).json({
            message: 'Működik',
            szo: tomb[Math.floor(Math.random() * (tomb.length - 0 + 1)) + 0]
        });
    } catch (error) {
>>>>>>> 0baa27382dbbc1c34e661e887d30158cf61d2500
        response.status(500).json({
            message: 'Nem működik'
        });
    }
});

const tomb = [];

router.post('/akasztofa/szokezelo', (request, response) => {
    try {
        let szo = request.body.value;
        tomb.push({
            szó: szo
        });
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

router.get('/akasztofa/szokezelo', (request, response) => {
    response.status(200).json({
<<<<<<< HEAD
        message: 'Ez a végpont működik!',
=======
        message: 'Ez a végpont működik!'
>>>>>>> 0baa27382dbbc1c34e661e887d30158cf61d2500
        
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
