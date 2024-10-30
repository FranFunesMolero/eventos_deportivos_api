const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middlewares/authMiddleware');

// Crear un evento
router.post('/', authMiddleware, eventController.createEvent);

// Obtener próximos eventos
router.get('/upcoming', authMiddleware, eventController.getUpcomingEvents);

// Filtrar eventos por tipo de deporte
router.get('/filter', authMiddleware, eventController.getEventsByType);

// Obtener eventos por rango de fechas
router.get('/date', authMiddleware, eventController.getEventsByDateRange);

// Obtener un evento por ID
router.get('/:eventId', authMiddleware, eventController.getEventById);

// Actualizar evento
router.put('/:eventId', authMiddleware, eventController.updateEvent);

// Eliminar evento
router.delete('/:eventId', authMiddleware, eventController.deleteEvent);

// Obtener todos los eventos
router.get('/', authMiddleware, eventController.getAllEvents);

module.exports = router;
