const express = require('express');
const router = express.Router();

const Datos = require('../models/Dato')

router.get('/', function(req,res) {
    res.render('index', { title: 'Blog'});
});

router.get('/dato', async (req, res) => {

    try{

        const arrayDatos = await Datos.find()
        console.log(arrayDatos)

        res.render("index", {
            listaDatos : arrayDatos
        });

    } catch(error){
        console.log(error)
    }

});

module.exports = router;

