const Apartamento = require("../models/Apartamento.model")

// Obtener Apartamentos
const getApartamentos = async (req, res) => {
    try {
        const obtenerApartamentos = await Apartamento.find();
        res.status(200).json(obtenerApartamentos)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Crear Apartamento
const createApartamento = async (req, res) => {

    console.log(req.body)

    const {
        numeroApartamento,
        ubicacion,
        areaMts,
        precio,
        duplex,
        habitaciones,
        camasDobles,
        camasSencillas,
        camaNido,
        banos,
        aguaCaliente,
        secadorCabello,
        salaEstar,
        comedor,
        sofaCama,
        televisor,
        internet,
        cocina,
        nevera,
        lavadora,
        microondas,
        cafetera,
        licuadora,
        tostadoraPan,
        ollaPresion,
        ollaArrocera,
        sanduchera,
        camaraSeguridad,
        terrazaVista
    } = req.body;

    if (!numeroApartamento) {
        return res.status(500).json({ message: "El campo Numero de Apartamento" })
    }

    if (typeof areaMts === 'boolean') {
        return res.status(500).json({ message: "El campo area mts no acepta datos booleanos" })
    }

    if (typeof precio === 'boolean') {
        return res.status(500).json({ message: "El campo precio no acepta datos booleanos" })
    }

    if (typeof habitaciones === 'boolean') {
        return res.status(500).json({ message: "El campo habitaciones no acepta datos booleanos" })
    }

    if (typeof camasDobles === 'boolean') {
        return res.status(500).json({ message: "El campo camas dobles no acepta datos booleanos" })
    }

    if (typeof camasSencillas === 'boolean') {
        return res.status(500).json({ message: "El campo camas sencillas no acepta datos booleanos" })
    }

    if (typeof camaNido === 'boolean') {
        return res.status(500).json({ message: "El campo camas nido no acepta datos booleanos" })
    }

    if (typeof banos === 'boolean') {
        return res.status(500).json({ message: "El campo baños no acepta datos booleanos" })
    }

    if (typeof secadorCabello === 'boolean') {
        return res.status(500).json({ message: "El campo secador de cabello no acepta datos booleanos" })
    }

    if (typeof comedor === 'boolean') {
        return res.status(500).json({ message: "El campo comedor no acepta datos booleanos" })
    }

    if (typeof sofaCama === 'boolean') {
        return res.status(500).json({ message: "El campo sofa cama no acepta datos booleanos" })
    }

    if (typeof televisor === 'boolean') {
        return res.status(500).json({ message: "El campo televisor no acepta datos booleanos" })
    }



    try {

        const newApartamento = new Apartamento({
            numeroApartamento: numeroApartamento,
            ubicacion: ubicacion,
            areaMts: areaMts,
            precio: precio,
            duplex: duplex,
            habitaciones: habitaciones,
            camasDobles: camasDobles,
            camasSencillas: camasSencillas,
            camaNido: camaNido,
            banos: banos,
            aguaCaliente: aguaCaliente,
            secadorCabello: secadorCabello,
            salaEstar: salaEstar,
            comedor: comedor,
            sofaCama: sofaCama,
            televisor: televisor,
            internet: internet,
            cocina: cocina,
            nevera: nevera,
            lavadora: lavadora,
            microondas: microondas,
            cafetera: cafetera,
            licuadora: licuadora,
            tostadoraPan: tostadoraPan,
            ollaPresion: ollaPresion,
            ollaArrocera: ollaArrocera,
            sanduchera: sanduchera,
            camaraSeguridad: camaraSeguridad,
            terrazaVista: terrazaVista,
        })

        const nuevoApartamento = await newApartamento.save();

        res.status(200).json({ message: "Apartamento Creado", nuevoApartamento })

    } catch (error) {
        res.status(500).json({
            message: error.message || "Algo salio mal mientras se creaba la tarea"
        })
    }
}


module.exports = {
    getApartamentos,
    createApartamento
}