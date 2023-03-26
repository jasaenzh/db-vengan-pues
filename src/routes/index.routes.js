const { Router } = require("express")
const routerApartamentos = require("./apartamentos.routes")

const router = Router();

// Rutas
router.get("/", (req, res) => {
    res.send("Bienvenidos a mi aplicacion Vengan Pues...")
})

router.use("/api/apartamentos", routerApartamentos)

module.exports = router;