--Crea la base de datos--

CREATE DATABASE SCNDB;

USE SCNDB;

CREATE TABLE Producto(

    idProducto int(11) NOT NULL AUTO_INCREMENT primary key,
    CONSTRAINT FK_ProdCat FOREIGN KEY (Cat)
    REFERENCES Categoria(idCategoria)
    Nombre VARCHAR(180),
    Descripcion VARCHAR(255),
    Imagen VARCHAR(200),
    Marca VARCHAR(50),
    DtPublicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    Estado BOOLEAN NOT NULL, 
    Oferta BOOLEAN NOT NULL,
    Precio FLOAT NOT NULL
)

DESCRIBE Producto;