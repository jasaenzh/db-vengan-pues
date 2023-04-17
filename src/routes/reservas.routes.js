const { Router } = require("express");
const { getReservas, createReserva, getReservaById, cancelReservaByCodigoReserva, confirmReservaByCodigoReserva, getReservasByApartamento } = require("../controllers/reservas.controllers")

const routerReservas = Router();

// Obtener todos las reservas
routerReservas.get("/", getReservas)

// Crear reserva
routerReservas.post("/", createReserva)

// Obtener reserva por Id
routerReservas.get("/:codigo_reserva", getReservaById)

// Cancelar una reserva
routerReservas.put("/:codigo_reserva/cancelar", cancelReservaByCodigoReserva)

// Confirmar una reserva
routerReservas.put("/:codigo_reserva/confirmar", confirmReservaByCodigoReserva)

// Obtener reservas por apartamento
routerReservas.get("/apartamento/:apartamentoId", getReservasByApartamento)


module.exports = routerReservas;