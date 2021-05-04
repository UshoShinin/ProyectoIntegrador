CREATE DATABASE if not exists peluqueria;

USE peluqueria;

CREATE TABLE staff(
	id int(11) not null auto_increment,
    nombre varchar(20) not null,
    nombre_usuario varchar(20) not null,
    contraseña varchar(20) not null,
    primary key(id)
);

Select * from staff;

DESCRIBE staff;

INSERT INTO staff values
	(1,'Bruno','brunete1990','bruno1990'),
    (2,'Fede','ElPoderosoFede','BNHFan'),
    (3,'Iván','Iván','SoyUnaContraseña');