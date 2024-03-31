const express = require("express")

const cors = require("cors")

const app = express()

const database = require("./config/mysql")

const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")

const ApiRoute = require("./routes/ApiRoute")

const bodyParser = require('body-parser');

const swaggerJsdoc = require("swagger-jsdoc")

const swaggerUi = require("swagger-ui-express")


  app.use(bodyParser.json());
    
    app.use(express.json())
    
    app.use(cors())

    // ajoyter la clé que la connexion vous renvoie (accesstoken)

    // remplacer "" par votre accessToken

    let cleApi = "" // clé genere par l'accessToken
    
    const swaggerOptions = {
        swaggerDefinition:{
            info:{
                title:'API de gestion des absences des eleves',
                version:"1.0.0",
                description:"Api pour la gestion des absences",
              },
              servers:['http://localhost:3000'],//url vers mon api
          },
          apis:['./routes/ApiRoute.js']
      }
    
      const swaggerDocs = 
      swaggerJsdoc(swaggerOptions);
    app.post("/login",(req,res,next)=>{

        let sql = "insert into utilisateur (nom,password_user) VALUES(?,?);"
    
        bcrypt.hash(req.body.password_user,5)
        
        .then((hash)=>{
                database.query(sql,[req.body.nom,hash],(error,result)=>{
                    if (error){
                        res.status(500).json({error:"erreur lors de la creation de l'utilisateur"})
                        
                    }
                    else{
                        res.status(201).json(result)
                        next()
                    }
                })
            })
            .catch((error)=>{
                res.status(501)
            })
           
            
        })

    app.post("/sign",(req,res)=> {
        
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
                     
                      res.status(200).json({ success: true,accessToken:accessToken });
                   
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
    })

    app.use("/api",ApiRoute, (req, res, next) => {
        
        const accessToken = cleApi
        
        if (!accessToken) {
            return res.status(401).json({ error: "Unauthorized" });
        }
      
        try {
          const decoded = jwt.verify(accessToken, "12345678910");
          req.id_user = decoded.id_user; // Attacher l'id_user à la requête
          next();
        } catch (error) {
            res.status(401).json({ error: "Invalid token" });
        }
    }); 
    



app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs))



    app.listen(3000)