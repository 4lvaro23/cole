CREATE DATABASE IF NOT EXISTS colegio_db;

USE colegio_db;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    rol ENUM('administrador', 'docente', 'tecnico', 'usuario') DEFAULT 'usuario',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (nombre, email, contraseña, rol)
VALUES ('Administrador', 'luisernestopinto1954@gmail.com', 'LEPS', 'administrador');

CREATE TABLE comunicados (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha_publicacion DATE NOT NULL,
    imagen_url VARCHAR(255),
    creado_por INT REFERENCES usuarios(id),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE eventos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha_evento DATE NOT NULL,
    imagen_url VARCHAR(255),
    creado_por INT REFERENCES usuarios(id),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE mensajes_contacto (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    dni VARCHAR(20),
    telefono VARCHAR(20),
    mensaje TEXT NOT NULL,
    fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ubicacion (
    id SERIAL PRIMARY KEY,
    direccion VARCHAR(255) NOT NULL,
    latitud DECIMAL(10, 8) NOT NULL,
    longitud DECIMAL(11, 8) NOT NULL
);

CREATE TABLE perfil (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    bio TEXT,
    telefono VARCHAR(20),
    direccion VARCHAR(255),
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE estudiantes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    curso VARCHAR(50),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE asistencia (
    id SERIAL PRIMARY KEY,
    estudiante_id INT REFERENCES estudiantes(id),
    docente_id INT REFERENCES usuarios(id),
    fecha DATE NOT NULL,
    estado ENUM('presente', 'ausente', 'tarde') NOT NULL,
    observaciones TEXT
);

CREATE TABLE solicitudes (
    id SERIAL PRIMARY KEY,
    docente_id INT REFERENCES usuarios(id),
    tecnico_id INT REFERENCES usuarios(id),
    descripcion TEXT NOT NULL,
    fecha_solicitud TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado ENUM('pendiente', 'en progreso', 'completada') DEFAULT 'pendiente'
);

CREATE TABLE programacion_mantenimientos (
    id SERIAL PRIMARY KEY,
    tecnico_id INT REFERENCES usuarios(id),
    fecha DATE NOT NULL,
    descripcion TEXT NOT NULL,
    recordatorio BOOLEAN DEFAULT FALSE
);

CREATE TABLE reportes (
    id SERIAL PRIMARY KEY,
    tecnico_id INT REFERENCES usuarios(id),
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE visitas (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    contador INT DEFAULT 0
);

INSERT INTO ubicacion (direccion, latitud, longitud)
VALUES ('Av. Central 123, Ciudad', -12.043180, -77.028240);