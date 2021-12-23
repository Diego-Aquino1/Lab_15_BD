const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const datoSchema = new Schema({
  nombre: String,
  descripcion: String
});

// Crear el modelo
const Datos = mongoose.model('Datos', datoSchema);

module.exports = Datos;

