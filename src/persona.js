const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.json({
        nombre: "Pedro",
        apellido: "Perez",
        edad: 30
    });
})

module.exports = router;