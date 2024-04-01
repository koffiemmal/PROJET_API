const express = require("express");
const cors = require("cors");
const app = express();
const database = require("./config/mysql");
const userRoute = require("./routes/UtilisateurRoute");
const ApiRoute = require("./routes/ApiRoute");
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const verifyJwt = require("./Middleware/verifyJwt");

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "API de gestion des absences des eleves",
      version: "1.0.0",
      description: "Api pour la gestion des absences",
    },
    servers: ["http://localhost:3000"], //url vers mon api
  },
  apis: ["./routes/ApiRoute.js"],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use("/login", userRoute);

app.use("/api",verifyJwt, ApiRoute);



app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(3000);
