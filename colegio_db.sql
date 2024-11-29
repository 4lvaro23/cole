CREATE DATABASE IF NOT EXISTS colegio_db;

USE colegio_db;

CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    tipo_usuario ENUM('administrador', 'visitante') NOT NULL,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS eventos (
    id_evento INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha DATE NOT NULL,
    archivo VARCHAR(255),
    id_usuario INT,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS comunicados (
    id_comunicado INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha DATE NOT NULL,
    archivo VARCHAR(255),
    id_usuario INT,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE SET NULL
);

INSERT INTO usuarios (nombre, email, contrasena, tipo_usuario) 
SELECT 'Administrador', 'luisernestopinto1954@gmail.com', MD5('LEPS_2024_1954'), 'administrador'
WHERE NOT EXISTS (SELECT 1 FROM usuarios WHERE email = 'admin@colegio.com');