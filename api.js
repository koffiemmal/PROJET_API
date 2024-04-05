const express = require("express");
const cors = require("cors");
const app = express();
const database = require("./config/mysql");
const userRoute = require("./routes/UtilisateurRoute");
const ElevesRoute = require("./routes/ElevesRoute");
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "API de gestion des absences des eleves",
      version: "1.0.0",
      description: "API pour la gestion des absences",
    },
    securityDefinitions: {
      BearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
        description: 'Utilisez un jeton Bearer pour accéder à l\'API.'
      }
    },
    schemes: ["http"],
    servers: ["http://localhost:5000"],
  },
  apis: ["./routes/ElevesRoute.js", "./routes/UtilisateurRoute.js"],
  // Apply security globally
  security: [
    { BearerAuth: [] }
  ],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use(userRoute);

app.use(ElevesRoute);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen( process.env.PORT || 5000);
