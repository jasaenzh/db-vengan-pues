const { Router } = require("express");
const { getApartamentos, createApartamento, getApartamentoById, deleteApartamento, updateApartamento } = require("../controllers/apartamentos.controllers")

const routerApartament = Router();

// Obtener todos los Apartamentos
routerApartament.get("/", getApartamentos)

// Crear Apartamento
routerApartament.post("/", createApartamento)

// Obetener Apartamento por Id
routerApartament.get("/:id", getApartamentoById)

// Eliminar apartamento
routerApartament.delete("/:id", deleteApartamento)

// Actualizar apartamento
routerApartament.put("/:id", updateApartamento)

module.exports = routerApartament;