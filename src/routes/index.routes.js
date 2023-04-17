const { Router } = require("express")
const routerApartamentos = require("./apartamentos.routes")
const routerReservas = require("./reservas.routes")

const router = Router();

// Rutas
router.get("/", (req, res) => {
    res.send("Bienvenidos a Vengan Pues...")
})

router.use("/api/apartamentos", routerApartamentos)
router.use("/api/reservas", routerReservas)

module.exports = router;