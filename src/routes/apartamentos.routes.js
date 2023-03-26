const { Router } = require("express");
const { getApartamentos, createApartamento } = require("../controllers/apartamentos.controllers")

const routerApartament = Router();

// Obtener todos los Apartamentos
routerApartament.get("/", getApartamentos)

// Crear Apartamento
routerApartament.post("/", createApartamento)

module.exports = routerApartament;