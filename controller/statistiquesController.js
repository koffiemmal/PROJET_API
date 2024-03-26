const database = require("../config/mysql")

exports.statEleves=(req,res)=>{

    let sql = "SELECT count(*) as nbr_Absence from absences where id_eleves = ?;"

    database.query(sql,[req.body.id_eleves],(error,result)=>{
        if (error){
            res.status(500).json({erreur:"le nombre d'absence de l'eleve n'a pas été trouvé"})
        }
        else{
            res.status(200).json({result:result})
        }
    })

}
exports.statClasse=(req,res)=>{

    let sql = "SELECT COUNT(*) as nbr_absence_classe from absences JOIN eleves ON eleves.id_eleves = absences.id_eleves where eleves.classe_eleves=?;"

    database.query(sql,[req.body.classe_eleves],(error,result)=>{
        if (error){
            res.status(500).json({erreur:"le nombre d'absence de la classe n'a pas été trouvé"})
        }
        else{
            res.status(200).json({result:result})
        }
    })

}
