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
=======


const tomb = [];

>>>>>>> ffadf92d104e947c8d49384bb44b79c93daaabfd
router.post('/jatek', (request, response)=>{
    try{
        response.status(200).json({
            message: "Működik",    
            szo : tomb[Math.floor(Math.random() * (tomb.length - 0 + 1) ) + 0]
        })
    }catch(error){
        response.status(500).json({
            message : "Nem működik"
        })
    }

})
<<<<<<< HEAD

const tomb = [];
=======
>>>>>>> ffadf92d104e947c8d49384bb44b79c93daaabfd

router.post('/akasztofa/szokezelo', (request, response) => {
    try{
        let szo = request.body.value;
        tomb.push({
            szó: szo
        });
        response.status(200).json({
            message: 'Ez a végpont működik!',
            lista: tomb
        });
    }catch(error){
        response.status(500).json({
            message: 'Nem működik'
        })
    }
    
});

router.get('/akasztofa/szokezelo', (request, response) => {
    response.status(200).json({
        message: 'Ez a végpont működik!'
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
