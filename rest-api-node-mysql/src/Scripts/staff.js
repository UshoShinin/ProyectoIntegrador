const { Router } = require('express');
const express = require('express');//Importo Express
const router = express.Router(); //Obtengo el Router dentro y lo guardo en una variable

const mysqlConecttion = require('./database');

router.get('/',(req,res)=>{
    mysqlConecttion.query('SELECT * FROM staff', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        } else{
            console.log(err);
        }
    });
});

router.get('/:id',(req,res)=>{
    const {id} = req.params;
    mysqlConecttion.query('SELECT * FROM staff WHERE id = ?',[id], (err, rows, fields)=>{
        if(!err){
            res.json(rows[0]);
        } else{
            console.log(err);
        }
    });
    
});

router.get('/rou',(req,res)=>{
    mysqlConecttion.query('SELECT * FROM staff', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        } else{
            console.log(err);
        }
    });
});

router.post('/',(req,res)=>{
    const {id,nombre,nombre_usuario,contraseña} = req.body;
    const query = `
        CALL staffAddOrEdit(?,?,?,?);
        `;
    mysqlConecttion.query(query,[id,nombre,nombre_usuario,contraseña],(err,rows,fields)=>{
        if(!err){
            res.json({Status:'Empleado guardado'});
        } else{
            console.log(err);
        }
    });
})

router.post('/:id',(req,res)=>{
    const {nombre,nombre_usuario,contraseña} = req.body;
    const {id} = req.params;
    const query = `
        CALL staffAddOrEdit(?,?,?,?);
        `;
    mysqlConecttion.query(query,[id,nombre,nombre_usuario,contraseña],(err,rows,fields)=>{
        if(!err){
            res.json({Status:'Empleado guardado'});
        } else{
            console.log(err);
        }
    });
})

module.exports = router; // Exporta la constante router

