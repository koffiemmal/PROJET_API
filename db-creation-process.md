-- Active: 1711144120392@@127.0.0.1@3306@gestionAbsence
CREATE table eleves(
    id_eleves int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nom_eleves VARCHAR(255) NOT NULL,
    prenom_eleves VARCHAR(255) not NULL,
    classe_eleves VARCHAR(255) NOT NULL
)
ENGINE=InnoDB;

CREATE Table absences(
    id_absences INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_eleves int UNSIGNED not NULL,
    motif_absences VARCHAR(255) NOT NULL,
    justificatif_absences TEXT,
    date_absences TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    constraint fk_id_eleves FOREIGN KEY (id_eleves) REFERENCES eleves(id_eleves) 
)
ENGINE=InnoDB;