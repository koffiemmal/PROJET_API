const express = require("express")
const router = express.Router()

const elevesController = require("../controller/elevesController")


const verifyJwt = require("../Middleware/verifyJwt")



/**
 * @swagger
 * /ajoutEleves:
 *   post:
 *     description: Ajoute un nouvel élève
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Données de l'élève à ajouter
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             nom_eleves:
 *               type: string
 *             prenom_eleves:
 *               type: string
 *             classe_eleves:
 *               type: string
 *     responses:
 *       201:
 *         description: Élève ajouté avec succès
 */

router.post("/ajoutEleves",verifyJwt,elevesController.ajoutEleves)
/**
 * @swagger
 * /nouvelAbsence:
 *   post:
 *     description: Enregistre une nouvelle absence
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Données de l'absence à enregistrer
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id_eleves:
 *               type: integer
 *             raison:
 *               type: string
 *             justificatif:
 *               type: string
 *     responses:
 *       201:
 *         description: Absence enregistrée avec succès
 */


router.post("/nouvelAbsence",verifyJwt,elevesController.nouvelAbsence)

/**
 * @swagger
 * /listesAbsencesEleves:
 *   post:
 *     description: Liste les absences d'un élève
 *     parameters:
 *       - name: body
 *         in: body
 *         description: ID de l'élève
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id_eleves:
 *               type: integer
 *     responses:
 *       200:
 *         description: Liste des absences récupérée avec succès
 */

router.post("/listesAbsencesEleves",verifyJwt,elevesController.listesAbsencesEleves)

/**
 * @swagger
 * /statEleves:
 *   post:
 *     description: Statistiques d'absences d'un élève
 *     parameters:
 *       - name: body
 *         in: body
 *         description: ID de l'élève
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id_eleves:
 *               type: integer
 *     responses:
 *       200:
 *         description: Statistiques récupérées avec succès
 */


router.post("/statEleves",verifyJwt,elevesController.statEleves)

/**
 * @swagger
 * /statClasse:
 *   post:
 *     description: Fournit des statistiques sur la classe
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Classe pour laquelle obtenir les statistiques
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             classe_eleves:
 *               type: string
 *     responses:
 *       200:
 *         description: Statistiques de la classe récupérées avec succès
 */

router.post('/statClasse', verifyJwt,elevesController.statClasse);

/**
 * @swagger
 * /modifierNom:
 *   put:
 *     description: Modifie le nom d'un élève
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Nouveau nom de l'élève et son ID
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             nom_eleves:
 *               type: string
 *             id_eleves:
 *               type: integer
 *     responses:
 *       200:
 *         description: Nom de l'élève modifié avec succès
 */

router.put('/modifierNom', verifyJwt,elevesController.modifierNom);

/**
 * @swagger
 * /modifierPrenom:
 *   put:
 *     description: Modifie le prénom d'un élève
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Nouveau prénom de l'élève et son ID
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             prenom_eleves:
 *               type: string
 *             id_eleves:
 *               type: integer
 *     responses:
 *       200:
 *         description: Prénom de l'élève modifié avec succès
 */

router.put('/modifierPrenom', verifyJwt,elevesController.modifierPrenom);

/**
 * @swagger
 * /modifierClasse:
 *   put:
 *     description: Modifie la classe d'un élève
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Nouvelle classe de l'élève et son ID
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             classe_eleves:
 *               type: string
 *             id_eleves:
 *               type: integer
 *     responses:
 *       200:
 *         description: Classe de l'élève modifiée avec succès
 */

router.put('/modifierClasse', verifyJwt,elevesController.modifierClasse);

/**
 * @swagger
 * /listesAbsences:
 *   get:
 *     description: Liste toutes les absences
 *     responses:
 *       200:
 *         description: Liste de toutes les absences récupérée avec succès
 */

router.get('/listesAbsences', verifyJwt,elevesController.listesAbsences);

/**
 * @swagger
 * /listesEleves:
 *   get:
 *     description: Liste tous les élèves
 *     responses:
 *       200:
 *         description: Liste de tous les élèves récupérée avec succès
 */

router.get('/listesEleves',verifyJwt, elevesController.listesEleves);
/** 
 * @swagger
 * /RechercheEleveId:
 *   post:
 *     description: Récupère un élève par son ID
 *     parameters:
 *       - name: body
 *         in: body
 *         description: ID de l'élève à rechercher
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id_eleves:
 *               type: integer
 *     responses:
 *       200:
 *          description: Élève récupéré avec succès
 */

router.post('/RechercheEleveId',verifyJwt, elevesController.RechercheEleveId);

/** 
 * @swagger
 * /RechercheEleveNom:
 *   post:
 *     description: Récupère un élève par son Nom
 *     parameters:
 *       - name: body
 *         in: body
 *         description: nom de l'élève à rechercher
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             nom_eleves:
 *               type: integer
 *     responses:
 *       200:
 *          description: Élève récupéré avec succès
 */


router.post('/RechercheEleveNom', verifyJwt,elevesController.RechercheEleveNom);

/** 
 * @swagger
 * /RechercheElevePrenom:
 *   post:
 *     description: Récupère un élève par son prenom
 *     parameters:
 *       - name: body
 *         in: body
 *         description: prenom de l'élève à rechercher
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id_eleves:
 *               type: integer
 *     responses:
 *       200:
 *          description: Élève récupéré avec succès
 */


router.get('/RechercheElevePrenom',verifyJwt, elevesController.RechercheElevePrenom);



module.exports = router