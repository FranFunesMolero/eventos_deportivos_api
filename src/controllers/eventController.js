const Event = require('../models/Event');
const db = require('../config/db'); 

//Crea un evento
exports.createEvent = (req, res) => {
    const { nombre, descripcion, fecha, ubicacion, tipoDeporte } = req.body;
    const organizador_id = req.user.id; // Obtiene el ID del organizador desde el token JWT
    const eventData = { nombre, descripcion, fecha, ubicacion, tipoDeporte, organizador_id };
    
    Event.create(eventData, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: 'Evento creado', eventId: results.insertId });
    });
};

//Obtiene todos los eventos
exports.getAllEvents = (req, res) => {
    Event.getAll((err, events) => {
        if (err) return res.status(500).json({ error: err });
        res.json(events);
    });
};

// Obtener un evento por ID
exports.getEventById = (req, res) => {
    const { eventId } = req.params;
    Event.getById(eventId, (err, event) => {
        if (err) return res.status(500).json({ error: 'Error al obtener el evento' });
        if (!event) return res.status(404).json({ error: 'Evento no encontrado' });
        res.json(event);
    });
};

//Actualiza un evento
exports.updateEvent = (req, res) => {
    const { eventId } = req.params;
    const updatedData = req.body;
    Event.update(eventId, updatedData, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Evento actualizado' });
    });
};

//Elimina un evento
exports.deleteEvent = (req, res) => {
    const { eventId } = req.params;
    Event.delete(eventId, (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Evento eliminado' });
    });
};

// Obtener próximos eventos
exports.getUpcomingEvents = (req, res) => {
    const query = 'SELECT * FROM eventos WHERE fecha > NOW() ORDER BY fecha ASC';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener próximos eventos' });
        }
        res.json(results);
    });
};

// Filtrar eventos por tipo de deporte
exports.getEventsByType = (req, res) => {
    const { type } = req.query;
    if (!type) {
        return res.status(400).json({ error: 'Se requiere el parámetro "type"' });
    }
    const query = 'SELECT * FROM eventos WHERE tipoDeporte = ?';
    db.query(query, [type], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener eventos por tipo de deporte' });
        }
        res.json(results);
    });
};

// Obtener eventos por rango de fechas
// Obtener eventos por rango de fechas
exports.getEventsByDateRange = (req, res) => {
    const { from, to } = req.query;
    if (!from || !to) {
        return res.status(400).json({ error: 'Se requieren las fechas "from" y "to"' });
    }
    Event.getByDateRange(from, to, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener eventos por rango de fechas' });
        }
        res.json(results);
    });
};


