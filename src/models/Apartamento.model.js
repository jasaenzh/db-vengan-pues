const { Schema, model } = require("mongoose");
const mongosePaginate = require("mongoose-paginate-v2");

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
        validate: {
            validator: function (value) {
                return value > 0;
            },
            message: "El valor de mts debe ser mayor que cero"
        }
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
        validate: {
            validator: function (value) {
                return value > 0;
            },
            message: "El valor del numero de habitaciones, debe ser mayor que cero"
        }
    },
    camasDobles: {
        type: Number,
        require: true,
        validate: {
            validator: function (value) {
                return value >= 0;
            },
            message: "El valor de camas dobles debe ser mayor que cero"
        }
    },
    camasSencillas: {
        type: Number,
        require: true,
        validate: {
            validator: function (value) {
                return value >= 0;
            },
            message: "El valor de camas sencillas debe ser mayor que cero"
        }
    },
    camaNido: {
        type: Number,
        require: true,
        validate: {
            validator: function (value) {
                return value >= 0;
            },
            message: "El valor de cama Nido debe ser mayor que cero"
        }
    },
    banos: {
        type: Number,
        require: true,
        validate: {
            validator: function (value) {
                return value > 0;
            },
            message: "El valor de baños debe ser mayor que cero"
        }
    },
    aguaCaliente: {
        type: Boolean,
        default: false
    },
    secadorCabello: {
        type: Number,
        require: true,
        validate: {
            validator: function (value) {
                return value >= 0;
            },
            message: "El valor de numero de secadores, debe ser mayor que cero"
        }
    },
    salaEstar: {
        type: Boolean,
        default: false
    },
    comedor: {
        type: Number,
        require: true,
        validate: {
            validator: function (value) {
                return value > 0;
            },
            message: "El valor de comedor, debe ser mayor que cero"
        }
    },
    sofaCama: {
        type: Number,
        require: true,
        validate: {
            validator: function (value) {
                return value > 0;
            },
            message: "El valor de sofa cama, debe ser mayor que cero"
        }
    },
    televisor: {
        type: Number,
        require: true,
        validate: {
            validator: function (value) {
                return value > 0;
            },
            message: "El valor de televisor, debe ser mayor que cero"
        }
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

apartamentoSchema.plugin(mongosePaginate);

const Apartamento = model("Apartamento", apartamentoSchema);

module.exports = Apartamento;