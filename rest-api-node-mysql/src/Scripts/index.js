const express = require('express'); //Importo Express
const app = express();//Express es una función por lo que la ejecuto y guardo el resultado en una constante app para la aplicación
const cors = require('cors');
const mysqlConecttion = require('./database');
//Funciones ejecutadas antes de que se llege a las rutas
app.use(express.json()); //Es para que si recive un json sea capaz de entenderlo
//Opciones
/*
Creo una variable port, dentro de la app y pregunta si una el servicio en al nube me está dando un puerto y
si no es el caso lo guarda como 3000
*/
app.set('port',process.env.PORT || 3001); 
//Rutas
app.use(cors());
//app.use(require('./staff.js'));//Crea la ruta a Staff
//Iniciar server
app.listen(app.get('port'), () => {
    //Concateno una función anonima dentro de la función listen para que al momento de iniciar la aplicaión mande el mensaje inmediatamente
    console.log("Server on port ", app.get('port'));
});
app.get('/',(req,res)=>{
    mysqlConecttion.query('SELECT * FROM staff', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        } else{
            console.log(err);
        }
    });
});

app.get('/:id',(req,res)=>{
    const {id} = req.params;
    mysqlConecttion.query('SELECT * FROM staff WHERE id = ?',[id], (err, rows, fields)=>{
        if(!err){
            res.json(rows[0]);
        } else{
            console.log(err);
        }
    });
    
});

app.post('/login',(req,res)=>{
    const {usuario, contraseña} = req.body;
    mysqlConecttion.query('Select * from staff where nombre_usuario=? and contraseña=?',[usuario,contraseña],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});

//Obtengo la variable port de la app y le pido que se ejecute a través de ese puerto


