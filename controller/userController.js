/* 
const database = require("../config/mysql")

const session = require("express-session")

const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken") 

const app = require("../api")

 exports.creation =(req,res)=>{

    let sql = "insert into utilisateur (nom,password_user) VALUES(?,?);"

    bcrypt.hash(req.body.password_user,5)
    
        .then((hash)=>{
            database.query(sql,[req.body.nom,hash],(error,result)=>{
                if (error){
                    res.status(500).json({error:"erreur lors de la creation de l'utilisateur"})
                }
                else{
                    res.status(201).json(result)
                }
            })
        })
        .catch((error)=>{
            res.status(501)
        })
}

exports.connexion = (req, res) => {

    let rechercheNom = "select * from utilisateur where nom = ?";
  
    database.query(rechercheNom, [req.body.nom], (error, result) => {
      if (error) {
        res.status(400).json({ error: "aucun utilisateur trouvé" });
        return;
      }
  
      if (result.length > 0) {
        const comparePassword = (password) => {
          bcrypt.compare(password, result[0].password_user)
            .then((valid) => {
              if (valid) {
                let accessToken = jwt.sign(
                  { id_user: result[0].id_user },
                  "12345678910",
                  { expiresIn: "168h" }
                );
  
                req.session.accessToken = accessToken; // Stocker l'accessToken dans la session
                res.status(200).json({ success: true });
          

              } else {
                res.status(200).json({ error: "Mot de passe ou nom incorrect" });
              }
            })
            .catch((error) => {
              res.status(500)
            });
        };
  
        comparePassword(req.body.password_user);
      } else {
        res.status(404).json({ error: "pas d'utilisateur trouvé" });
      }
    });
  };
   */