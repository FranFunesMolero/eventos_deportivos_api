const db = require('../config/db');

const Event = {
        // Crear evento
    create: (data, callback) => {
        const query = 'INSERT INTO eventos (nombre, descripcion, fecha, ubicacion, tipoDeporte, organizador_id) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(query, Object.values(data), callback);
    },
    // Obtener todos los eventos
    getAll: (callback) => {
        const query = 'SELECT * FROM eventos';
        db.query(query, callback);
    },

    // Obtener un evento por ID
    getById: (id, callback) => {
        const query = 'SELECT * FROM eventos WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    },

    // Actualizar evento
    update: (id, data, callback) => {
        const query = 'UPDATE eventos SET nombre = ?, descripcion = ?, fecha = ?, ubicacion = ?, tipoDeporte = ? WHERE id = ?';
        const values = [...Object.values(data), id];
        db.query(query, values, callback);
    },
    // Eliminar evento
    delete: (id, callback) => {
        const query = 'DELETE FROM eventos WHERE id = ?';
        db.query(query, [id], callback);
    },
    
    // Obtener eventos por rango de fechas
    getByDateRange: (from, to, callback) => {
        const query = 'SELECT * FROM eventos WHERE fecha BETWEEN ? AND ? ORDER BY fecha ASC';
        db.query(query, [from, to], callback);
    }
};

module.exports = Event;
