const mysql = require('mysql2')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ajay'
})
connection.connect((err)=>{
    if(err){
        console.log("Error at connecting db: "+JSON.stringify(err,undefined,2))
    } else {
        console.log("Connection Established")
    }
})

module.exports = connection