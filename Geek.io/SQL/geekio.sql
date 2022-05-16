CREATE DATABASE 'geekio' DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
    USE 'geekio';

CREATE TABLE Usuarios (
    id   int AUTO_INCREMENT NOT NULL,
    nome varchar(15) NOT NULL,
    usuario varchar(20) NOT NULL,
    email varchar(25) NOT NULL,
    senha varchar(10) NOT NULL
)