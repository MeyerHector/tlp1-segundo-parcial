// TODO: Crear modelo de datos de Reserva
const { sequelize, DataTypes, Model } = require('../db/config.js');

const Reserva = sequelize.define('Reserva', {
    id_reserva: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        required: true
    },
    apellido: {
        type: DataTypes.STRING(100),
        required: true
    },
    fecha: {
        type: DataTypes.DATEONLY,
        required: true
    }
}, {
    tableName:'reservas'
})

Reserva.sync({ force: true })

