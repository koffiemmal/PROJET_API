const express = require("express")
const router = express.Router()

const userController = require("../controller/userController")

router.post("/creation",userController.creation)

router.post("/connexion",userController.connexion)

module.exports = router