const { Schema, model } = require("mongoose");

const apartamentoSchema = new Schema({
    numeroApartamento: {
        type: String,
        require: true,
        trim: true
    },
    ubicacion: {
        type: String,
        require: true,
        trim: true
    },
    areaMts: {
        type: Number,
        require: true,
    },
    precio: {
        type: Number,
        require: true,
        validate: {
            validator: function (value) {
                return value > 0;
            },
            message: "El precio debe ser mayor que cero"
        }
    },
    duplex: {
        type: Boolean,
        default: false
    },
    habitaciones: {
        type: Number,
        require: true,
    },
    camasDobles: {
        type: Number,
        require: true,
    },
    camasSencillas: {
        type: Number,
        require: true,
    },
    camaNido: {
        type: Number,
        require: true,
    },
    banos: {
        type: Number,
        require: true,
    },
    aguaCaliente: {
        type: Boolean,
        default: false
    },
    secadorCabello: {
        type: Number,
        require: true,
    },
    salaEstar: {
        type: Boolean,
        default: false
    },
    comedor: {
        type: Number,
        require: true,
    },
    sofaCama: {
        type: Number,
        require: true,
    },
    televisor: {
        type: Number,
        require: true,
    },
    internet: {
        type: Boolean,
        default: false
    },
    cocina: {
        type: Boolean,
        default: false
    },
    nevera: {
        type: Boolean,
        default: false
    },
    lavadora: {
        type: Boolean,
        default: false
    },
    microondas: {
        type: Boolean,
        default: false
    },
    cafetera: {
        type: Boolean,
        default: false
    },
    licuadora: {
        type: Boolean,
        default: false
    },
    tostadoraPan: {
        type: Boolean,
        default: false
    },
    ollaPresion: {
        type: Boolean,
        default: false
    },
    ollaArrocera: {
        type: Boolean,
        default: false
    },
    sanduchera: {
        type: Boolean,
        default: false
    },
    camaraSeguridad: {
        type: Boolean,
        default: false
    },
    terrazaVista: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true,
})

const Apartamento = model("Apartamento", apartamentoSchema);

module.exports = Apartamento;