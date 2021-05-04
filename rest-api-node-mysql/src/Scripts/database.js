//Objeto de conexión
const mysql = require('mysql');//Creo constate con mysql

const mysqlConecttion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Bif242019',
    database:'peluqueria'
});

mysqlConecttion.connect(function (err){
    if(err){
        console.log(err);
        return;
    }
    console.log('Db is connected');
});

module.exports = mysqlConecttion;
