CREATE TABLE patients(
    id SERIAL PRIMARY KEY,
    username VARCHAR(64) NOT NULL UNIQUE,
    "firstName" VARCHAR(32) NOT NULL,
    "lastName" VARCHAR(32) NOT NULL,
    age INTEGER NOT NULL ,
    "dateOfBirth" TIMESTAMP,
    "registeredDate" TIMESTAMP  DEFAULT CURRENT_TIMESTAMP ,
    gender VARCHAR(6) NOT NULL,
    "homeAddress" VARCHAR(255) NOT NULL ,
    CHECK (gender IN ('Male', 'Female', 'Others'))
)