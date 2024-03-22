const mysql = require("mysql2")

const database = mysql.createConnection({
    user:"root",
    host:"localhost",
    database:"gestionAbsence",
    password:""
})

database.connect((error)=>{
    if (error) throw error
    console.log("base de données connecter")
})

module.exports = database;