const express = require("express")
const router = express.Router()

const elevesController = require("../controller/elevesController")

router.post("/ajoutEleves",elevesController.ajoutEleves)

router.get("/listesEleves",elevesController.listesEleves)


module.exports = router