require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./src/config/db');

app.use(cors());
app.use(express.json());

// Importar y usar rutas
const userRoutes = require('./src/routes/users');
const eventRoutes = require('./src/routes/events');

app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
