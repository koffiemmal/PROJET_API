const express = require("express")

const cors = require("cors")

const app = express()

const ApiRoute = require("./routes/ApiRoute")

app.use(express.json())

app.use(cors())

app.use("/api",ApiRoute)

console.log("mon serveur est operationnel")


app.listen(process.env.PORT || 3000)