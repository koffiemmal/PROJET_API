const express = require("express")
const router = express.Router()

const elevesController = require("../controller/elevesController")

const absenceController = require("../controller/absencesController")

const statistiquesController = require("../controller/statistiquesController")

router.post("/ajoutEleves",elevesController.ajoutEleves)

router.post("/nouvelAbsence",absenceController.nouvelAbsence)

router.post("/listesAbsencesEleves",absenceController.listesAbsencesEleves)

router.post("/statEleves",statistiquesController.statEleves)

router.post("/statClasse",statistiquesController.statClasse)

router.get("/listesAbsences",absenceController.listesAbsences)

router.put("/modifierNom",elevesController.modifierNom)

router.put("/modifierPrenom",elevesController.modifierPrenom)

router.put("/modifierClasse",elevesController.modifierClasse)

router.get("/listesEleves",elevesController.listesEleves)

router.get("/getElevesbyId",elevesController.getElevesbyId)

router.get("/getElevesbyName",elevesController.getElevesbyName)

router.get("/getElevesbySurname",elevesController.getElevesbySurname)




module.exports = router