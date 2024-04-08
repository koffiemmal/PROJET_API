# guide d'utilisation

#  Installer node sur votre machine

#  Installer xampp et creer votre base de données avec les tables:

   # database: gestionAbsence

 # les tables a creer se trouve dans le fichier  # db-creation-process.md

# Installer les packages :

# npm i (commandes qui installe tous les packages a utiliser )

# OUvrer le terminal dans votre IDE et executer la commande 

 # assurer vous d'etre dans le reperetoire server  (/server/)

 # /server/

 # nodemon api.js

  # Creer un compte sur la route /creation

  # Connecter vous sur la route /connexion

  # l'accessToken genere par la connexion sera votre cléApi 

  # pour aller sur les prochaine route vous devrier passer lors de vos test sur les routes la cleApi dans la requete 

  # les routes /creation et /connexion ne sont pas privées 

  # pour tester les routes acceder a votre POSTMAN mettez l'URL de la requete et ensuite dans Authorization choisissez Bearer Token au niveau du token ajouter votre token sans les ("")


 # pour avoir acces a la documentation dans votre navigateur http://localhost:5000/api-docs/#/