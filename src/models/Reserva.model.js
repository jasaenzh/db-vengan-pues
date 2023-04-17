const { Schema, model, default: mongoose } = require("mongoose");
const mongosePaginate = require("mongoose-paginate-v2");

const reservaSchema = new Schema({
    apartamento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Apartamento",
        required: true,
    },
    codigo_reserva: {
        type: String,
        trim: true,
        required: true,
    },
    fecha_inicio: {
        type: Date,
        required: true,
    },
    fecha_fin: {
        type: Date,
        required: true,
    },
    estado: {
        type: String,
        enum: ["pendiente", "confirmada", "cancelada"],
        default: "pendiente"
    }
}, {
    versionKey: false,
    timestamps: { createdAt: true, updatedAt: true },
});

reservaSchema.plugin(mongosePaginate);

reservaSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.fecha_inicio = ret.fecha_inicio.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/(\d+)\/(\d+)\/(\d+)/, "$1-$2-$3");
        ret.fecha_fin = ret.fecha_fin.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/(\d+)\/(\d+)\/(\d+)/, "$1-$2-$3");
        return ret;
    },
});

const Reserva = model("Reserva", reservaSchema);

module.exports = Reserva;
