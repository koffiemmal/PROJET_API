const express = require("express")
const router = express.Router()

const elevesController = require("../controller/elevesController")

router.post("/ajoutEleves",elevesController.ajoutEleves)

router.put("/modifierNom",elevesController.modifierNom)

router.put("/modifierPrenom",elevesController.modifierPrenom)

router.put("/modifierClasse",elevesController.modifierClasse)

router.get("/listesEleves",elevesController.listesEleves)

router.get("/getElevesbyId",elevesController.getElevesbyId)

router.get("/getElevesbyName",elevesController.getElevesbyName)

router.get("/getElevesbySurname",elevesController.getElevesbySurname)


module.exports = router