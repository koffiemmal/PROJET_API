
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
            res.status(400)
        }
        else{
            res.status(200).json(result)
    }})

}

exports.RechercheEleveNom =(req,res)=>{

    let infoseleves = "SELECT * FROM eleves WHERE nom_eleves=?;"

    database.query(infoseleves,[req.body.nom_eleves],(error,results)=> {
        if(error){
            res.status(400)
        }
        else{
            res.status(200).json(results)
    }

    })

}
exports.RechercheElevePrenom =(req,res)=>{

    let infoseleves = "SELECT * FROM eleves WHERE prenom_eleves=?;"

    database.query(infoseleves,[req.body.prenom_eleves],(error,results)=> {
        if(error){
            res.status(400)
        }
        else{
            res.status(200).json(results)
    }

    })

}
exports.RechercheEleveId =(req,res)=>{

    let infoseleves = "SELECT * FROM eleves WHERE id_eleves=?;"

    database.query(infoseleves,[req.body.id_eleves],(error,results)=> {
        if(error){
            res.status(400)
        }
        else{
            res.status(200).json(results)
    }

    })

}

exports.modifierNom = (req,res)=>{

    /* const { nom_eleves, id_eleves } = req.body; */

    let modificationNom = "UPDATE eleves SET nom_eleves = ? WHERE id_eleves = ?;"

    database.query(modificationNom,[req.body.nom_eleves,req.body.id_eleves],(error,result)=>{
        if(error){
            return res.status(500).json({ error: 'Erreur lors de la modification du nom de l\'élève.' });
        }
        else{
            res.status(200).json(result)
    }

    })
}
exports.modifierPrenom = (req,res)=>{

    let modificationPrenom = "UPDATE eleves SET prenom_eleves = ? WHERE id_eleves = ?;"

    database.query(modificationPrenom,[req.body.prenom_eleves,req.body.id_eleves],(error,result)=>{
        if(error){
            return res.status(500).json({ error: 'Erreur lors de la modification du prenom de l\'élève.' });
        }
        else{
            res.status(200).json(result)
    }

    })
}
exports.modifierClasse = (req,res)=>{

    let modificationClasse = "UPDATE eleves SET classe_eleves = ? WHERE id_eleves = ?;"

    database.query(modificationClasse,[req.body.classe_eleves,req.body.id_eleves],(error,result)=>{
        if(error){
            return res.status(500).json({ error: 'Erreur lors de la modification de la classe de l\'élève.' });
        }
        else{
            res.status(200).json(result)
    }

    })
}

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

exports.statEleves = (req, res) => {
    let sql = "SELECT count(*) as nbr_Absence from absences where id_eleves = ?;";
  
    database.query(sql, [req.body.id_eleves], (error, result) => {
      if (error) {
        res
          .status(500)
          .json({ erreur: "le nombre d'absence de l'eleve n'a pas été trouvé" });
      } else {
        res.status(200).json({ result: result });
      }
    });
  };
  exports.statClasse = (req, res) => {
    let sql =
      "SELECT COUNT(*) as nbr_absence_classe from absences JOIN eleves ON eleves.id_eleves = absences.id_eleves where eleves.classe_eleves=?;";
  
    database.query(sql, [req.body.classe_eleves], (error, result) => {
      if (error) {
        res
          .status(500)
          .json({
            erreur: "le nombre d'absence de la classe n'a pas été trouvé",
          });
      } else {
        res.status(200).json({ result: result });
      }
    });
  };
  

