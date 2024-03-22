const express = require("express")

const cors = require("cors")

const app = express()

const elevesRoute = require("./routes/elevesRoute")

app.use(express.json())

app.use(cors())

/* app.use('/api/test',(req,res)=>{
    res.status(200).json({message:"mon serveur est operationnel"})
}) */

app.use("/eleves",elevesRoute)

console.log("mon serveur est operationnel")


app.listen(process.env.PORT || 3000)