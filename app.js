// Imports
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv')
const path = require('path');
dotenv.config()

const app = express();
const { sequelize } = require('./db/config');

// Middlewares
// TODO: Implementar middlewares

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

sequelize.authenticate()
  .then(() => { 
    console.log('Conexión a base de datos exitosa');
    sequelize.sync();
 })
  .catch((error) => console.log('Error al conectar a base de datos', error));

// Routes
app.use('/api', require('./routes/reserva.routes.js'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
app.listen(process.env.PORT, () => console.log('Server on port', process.env.PORT));