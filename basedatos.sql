CREATE DATABASE eventos_db;
USE eventos_db;
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);
CREATE TABLE eventos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  fecha DATE,
  ubicacion VARCHAR(255),
  tipoDeporte VARCHAR(100),
  organizador_id INT,
  FOREIGN KEY (organizador_id) REFERENCES usuarios(id) ON DELETE
  SET NULL
);