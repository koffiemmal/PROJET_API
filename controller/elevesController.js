
const database = require("../config/mysql")

exports.ajoutEleves=(req,res)=>{

    let insertEleves =  "insert into eleves (nom_eleves,prenom_eleves,classe_eleves) VALUES(?,?,?);"

    database.query(insertEleves,[req.body.nom_eleves,req.body.prenom_eleves,req.body.classe_eleves],(error,result)=>{
        if(error){
            res.status(400)
        }
        else{
            res.status(201).json(result)
        }
    })
}

exports.listesEleves=(req,res)=>{

    let listesshow = "select * FROM eleves;"

    database.query(listesshow,(error,result)=>{
        if(error){
            res.satus(400)
        }
        else{
            res.status(200).json(result)
    }})

}