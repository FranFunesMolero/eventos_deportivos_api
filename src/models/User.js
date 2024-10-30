const db = require('../config/db');

const User = {
    create: (username, password, callback) => {
        const query = 'INSERT INTO usuarios (username, password) VALUES (?, ?)';
        db.query(query, [username, password], callback);
    },
    findByUsername: (username, callback) => {
        const query = 'SELECT * FROM usuarios WHERE username = ?';
        db.query(query, [username], callback);
    }
};

module.exports = User;
