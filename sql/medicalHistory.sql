CREATE TABLE medical_history(
    id SERIAL PRIMARY KEY,
    "patient_id" INT NOT NULL ,   
    allergies VARCHAR(64), 
    illnesses VARCHAR(64),
     surgeries VARCHAR(128),
    FOREIGN KEY ("patient_id") REFERENCES patients(id) 
);