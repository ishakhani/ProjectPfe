require("dotenv").config();
const http = require("http");
const dbConnect = require("./config/dbConnect");
const app = require("./app/app");
const PORT = process.env.PORT || 5000;

// Connexion à la base de données
dbConnect();

//server
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
