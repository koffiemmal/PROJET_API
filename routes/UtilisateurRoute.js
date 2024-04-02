const express = require("express")
const router = express.Router()

const userController = require("../controller/UtilisateurController")

/**
 * @swagger
 * /creation:
 *   post:
 *     description: Création de compte
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Création d'un compte utilisateur
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             nom:
 *               type: string
 *             password_user:
 *               type: string
 *               pattern: "^[a-zA-Z0-9]+$"  # Autorise uniquement des caractères alphanumériques
 *     responses:
 *       201:
 *         description: Compte utilisateur créé avec succès
 */
router.post("/creation",userController.creation)

/**
 * @swagger
 * /connexion:
 *   post:
 *     description: Connexion au compte
 *     parameters:
 *       - name: body
 *         in: body
 *         description: connexion au compte 
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             nom:
 *               type: string
 *             password_user:
 *               type: string
 *               pattern: "^[a-zA-Z0-9]+$"  # Autorise uniquement des caractères alphanumériques
 *     responses:
 *       201:
 *         description: connexion au compte
 */
router.post("/connexion",userController.connexion)

module.exports = router