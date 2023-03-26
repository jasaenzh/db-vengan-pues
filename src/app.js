const express = require("express");
const mainRouter = require("./routes/index.routes")

const app = express();

app.set('port', process.env.PORT || 3001)

// Middeleware para transformar los datos que vengan como json en un objeto de JavaScript
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// Ruta principal
app.use(mainRouter)

module.exports = app;

