const database = require("../config/mysql")

exports.nouvelAbsence = (req,res)=>{
    
    let sql = "insert INTO absences(id_eleves,raison,justificatif) VALUES(?,?,?)"

    database.query(sql,[req.body.id_eleves,req.body.raison,req.body.justificatif],(error,result)=>{
        if(error){
            res.status(400).json({erreur:"l'absence n'as pas eté enregistrer "})
        }
        else{
            res.status(201).json(result)
        }
       })

}

exports.listesAbsences = (req,res)=>{

let sql = "SELECT eleves.nom_eleves,eleves.prenom_eleves,eleves.classe_eleves,raison,justificatif,DATE_FORMAT(date_absences, '%Y-%m-%d %H:%i:%s') AS date_absences FROM absences INNER JOIN eleves ON  absences.id_eleves = eleves.id_eleves;"

database.query(sql,(error,result)=>{
    if(error){
        res.status(400)
    }
    else{
        res.status(200).json(result)
    }
})

}

exports.listesAbsencesEleves = (req,res)=>{

    let sql = "SELECT eleves.nom_eleves,eleves.prenom_eleves,eleves.classe_eleves,raison,justificatif, DATE_FORMAT(date_absences, '%Y-%m-%d %H:%i:%s') AS date_absences FROM absences INNER JOIN eleves ON  absences.id_eleves = eleves.id_eleves where absences.id_eleves=?;"

    database.query(sql,[req.body.id_eleves],(error,result)=>{
        if(error){
            res.status(400)
        }
        else{
            res.status(200).json(result)
        }
    })
   
}

