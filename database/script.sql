CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE Rooms (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    capacidade INT NOT NULL,
    localizacao VARCHAR(255)
);

CREATE TYPE reservation_status AS ENUM ('ativo', 'cancelado');

CREATE TABLE Reservations (
    id SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_sala INT NOT NULL,
    data_hora_inicio TIMESTAMP NOT NULL,
    data_hora_fim TIMESTAMP NOT NULL,
    status reservation_status NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES Users(id),
    FOREIGN KEY (id_sala) REFERENCES Rooms(id)
);

CREATE TABLE Session (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

INSERT INTO Rooms (nome, capacidade, localizacao) VALUES
  ('Sala 101', 10, 'Andar 1, Ala A'),
  ('Sala 102', 8, 'Andar 1, Ala B'),
  ('Sala 201', 12, 'Andar 2, Ala A'),
  ('Sala 202', 6, 'Andar 2, Ala B');