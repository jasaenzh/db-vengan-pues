const Reserva = require("../models/Reserva.model");
const { getPagination } = require("../libs/getPagination");
const shortid = require('shortid');

// Obtener Reservaras
const getReservas = async (req, res) => {

    const { size, page, codigo_reserva } = req.query;

    try {
        const condicion = codigo_reserva
            ? {
                codigo_reserva: { $regex: new RegExp(codigo_reserva), $options: "i" }
            } : {}

        const { limit, offset } = getPagination(page, size)

        const obtenerReservas = await Reserva.paginate(condicion, { offset: offset, limit: limit });

        res.status(200).json(obtenerReservas);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

};

// Crear Reserva
const createReserva = async (req, res) => {

    const { apartamento, fecha_inicio, fecha_fin } = req.body;

    if (!apartamento) {
        return res.status(500).json({ message: "Falta el campo apartamento" });
    }

    try {
        // Creo el codigo de reserva aleatorio con nanoid
        const codigo_reserva = shortid.generate();
        const newReserva = new Reserva({
            apartamento: apartamento,
            codigo_reserva: codigo_reserva,
            fecha_inicio: fecha_inicio,
            fecha_fin: fecha_fin
        });

        const nuevaReserva = await newReserva.save();


        res.status(200).json({ message: "Reserva creada con exito", nuevaReserva });

    } catch (error) {
        res.status(500).json({
            message: error.message || `Algo salio mal mientras se creaba la reserva`
        });
    }

};

// Obtener reserva por Id
const getReservaById = async (req, res) => {
    const { codigo_reserva } = req.params;

    console.log(codigo_reserva)

    try {
        const reserva = await Reserva.findOne({ codigo_reserva: codigo_reserva });
        if (!reserva) {
            return res.status(404).json({ message: "Reserva no encontrada" })
        }
        res.status(200).json(reserva)
    } catch (error) {
        res.status(500).json({
            message: `La reserva con codigo ${codigo_reserva} no pudo ser encontrada` || error.message
        })
    }
}

// Cancelar una reserva
const cancelReservaByCodigoReserva = async (req, res) => {
    const { codigo_reserva } = req.params;
    try {
        const reserva = await Reserva.findOne({ codigo_reserva });
        if (!reserva) {
            return res.status(404).json({ message: "Reserva no encontrada" });
        }
        reserva.estado = "cancelada";
        await reserva.save();
        res.status(200).json({
            message: "Reserva cancelada exitosamente",
            reserva: reserva.toJSON()
        });
    } catch (error) {
        res.status(500).json({
            message: `La reserva con código ${codigo_reserva} no pudo ser cancelada: ${error.message}`
        });
    }
};

// Confirmar una reserva
const confirmReservaByCodigoReserva = async (req, res) => {
    const { codigo_reserva } = req.params;
    try {
        const reserva = await Reserva.findOne({ codigo_reserva });
        if (!reserva) {
            return res.status(404).json({ message: "Reserva no encontrada" });
        }
        reserva.estado = "confirmada";
        await reserva.save();
        res.status(200).json({ message: "Reserva confirmada exitosamente", reserva });
    } catch (error) {
        res.status(500).json({
            message: `La reserva con código ${codigo_reserva} no pudo ser cancelada: ${error.message}`
        });
    }

}

// Obtener todas las reservas de un departamento
const getReservasByApartamento = async (req, res) => {
    const { apartamentoId } = req.params;
    const { size, page } = req.query;

    try {
        const { limit, offset } = getPagination(page, size);

        const condicion = {
            apartamento: apartamentoId
        };

        const reservas = await Reserva.paginate(condicion, { offset, limit });

        res.status(200).json(reservas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getReservas,
    createReserva,
    getReservaById,
    cancelReservaByCodigoReserva,
    confirmReservaByCodigoReserva,
    getReservasByApartamento
};
