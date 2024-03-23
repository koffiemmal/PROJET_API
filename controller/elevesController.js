
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

exports.getElevesbyName =(req,res)=>{

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
exports.getElevesbySurname =(req,res)=>{

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
exports.getElevesbyId =(req,res)=>{

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