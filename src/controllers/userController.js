const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ error: err });
        User.create(username, hashedPassword, (error) => {
            if (error) return res.status(500).json({ error });
            res.status(201).json({ message: 'Usuario registrado' });
        });
    });
};

exports.login = (req, res) => {
    const { username, password } = req.body;
    User.findByUsername(username, (err, users) => {
        if (err || users.length === 0) return res.status(400).json({ error: 'Usuario no encontrado' });
        bcrypt.compare(password, users[0].password, (error, isMatch) => {
            if (error || !isMatch) return res.status(401).json({ error: 'Contraseña incorrecta' });
            const token = jwt.sign({ id: users[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        });
    });
};
