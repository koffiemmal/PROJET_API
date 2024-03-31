const express = require("express")
const router = express.Router()



/* const userController = require("../controller/userController") */

const elevesController = require("../controller/elevesController")

const absenceController = require("../controller/absencesController")

const statistiquesController = require("../controller/statistiquesController")

/* 
router.post("/creation",userController.creation)

router.post("/connexion",userController.connexion)

 */
/**
 * @swagger
 * /ajoutEleves:
 *   post:
 *     description: Ajoute un nouvel élève
 */

router.post("/ajoutEleves",elevesController.ajoutEleves)
/**
 * @swagger
 * /nouvelAbsence:
 *   post:
 *     description: Enregistre une nouvelle absence
 *     responses:
 *       200:
 *         description: Absence enregistrée avec succès
 */

router.post("/nouvelAbsence",absenceController.nouvelAbsence)

router.post("/listesAbsencesEleves",absenceController.listesAbsencesEleves)

router.post("/statEleves",statistiquesController.statEleves)

/**
 * @swagger
 * /statClasse:
 *   post:
 *     description: Fournit des statistiques sur la classe
 *     responses:
 *       200:
 *         description: Statistiques de la classe récupérées avec succès
 */
router.post('/statClasse', statistiquesController.statClasse);

/**
 * @swagger
 * /modifierNom:
 *   put:
 *     description: Modifie le nom d'un élève
 *     responses:
 *       200:
 *         description: Nom de l'élève modifié avec succès
 */
router.put('/modifierNom', elevesController.modifierNom);

/**
 * @swagger
 * /modifierPrenom:
 *   put:
 *     description: Modifie le prénom d'un élève
 *     responses:
 *       200:
 *         description: Prénom de l'élève modifié avec succès
 */
router.put('/modifierPrenom', elevesController.modifierPrenom);

/**
 * @swagger
 * /modifierClasse:
 *   put:
 *     description: Modifie la classe d'un élève
 *     responses:
 *       200:
 *         description: Classe de l'élève modifiée avec succès
 */
router.put('/modifierClasse', elevesController.modifierClasse);

/**
 * @swagger
 * /listesAbsences:
 *   get:
 *     description: Liste toutes les absences
 *     responses:
 *       200:
 *         description: Liste de toutes les absences récupérée avec succès
 */
router.get('/listesAbsences', absenceController.listesAbsences);

/**
 * @swagger
 * /listesEleves:
 *   get:
 *     description: Liste tous les élèves
 *     responses:
 *       200:
 *         description: Liste de tous les élèves récupérée avec succès
 */
router.get('/listesEleves', elevesController.listesEleves);

/**
 * @swagger
 * /getElevesbyId:
 *   get:
 *     description: Récupère un élève par son ID
 *     responses:
 *       200:
 *         description: Élève récupéré avec succès
 */
router.get('/getElevesbyId', elevesController.getElevesbyId);

/**
 * @swagger
 * /getElevesbyName:
 *   get:
 *     description: Récupère un élève par son nom
 *     responses:
 *       200:
 *         description: Élève récupéré avec succès
 */
router.get('/getElevesbyName', elevesController.getElevesbyName);

/**
 * @swagger
 * /getElevesbySurname:
 *   get:
 *     description: Récupère un élève par son prénom
 *     responses:
 *       200:
 *         description: Élève récupéré avec succès
 */
router.get('/getElevesbySurname', elevesController.getElevesbySurname);



module.exports = router